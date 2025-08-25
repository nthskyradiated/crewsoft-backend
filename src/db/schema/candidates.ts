import {
  pgTable,
  varchar,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

import {user, nationality, country} from "@/db/schema";
import { relations } from "drizzle-orm";

const candidate = pgTable("candidate", {
  id: varchar("id", { length: 36 }).primaryKey().references(() => user.id),
  last_name: varchar("last_name", { length: 255 }),
  given_name: varchar("given_name", { length: 255 }),
  honorifics: varchar("honorifics", { length: 32 }),
  gender: varchar("gender", { length: 16 }), // Should match Gender enum
  date_of_birth: timestamp("date_of_birth", { mode: "string" }),
  age: integer("age"),
  country_id: integer("country_id").references(() => country.id),
  nationality_id: integer("nationality_id").references(() => nationality.id),
  passport_no: varchar("passport_no", { length: 64 }).notNull(),
  contact_number: varchar("contact_number", { length: 32 }).notNull(),
  emergency_contact_number: varchar("emergency_contact_number", { length: 32 }).notNull(),
  height: integer("height"),
  is_currently_employed: boolean("is_currently_employed"),
  employment_restriction: boolean("employment_restriction"),
  distinguishing_features: varchar("distinguishing_features", { length: 255 }),
  has_tattoos: boolean("has_tattoos"),
  application_stage: varchar("application_stage", { length: 16 }), // Should match Application_Stage enum
  application_date: timestamp("application_date", { mode: "string" }),
  current_status: varchar("current_status", { length: 16 }), // Should match Application_Status enum
});

export const candidateRelations = relations(candidate, ({ one }) => ({
  user: one(user, {
    fields: [candidate.id],
    references: [user.id],
  }),
  country: one(country, {
    fields: [candidate.country_id],
    references: [country.id],
  }),
  nationality: one(nationality, {
    fields: [candidate.nationality_id],
    references: [nationality.id],
  }),
}));

export default candidate;
