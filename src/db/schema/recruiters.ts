import {
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";

import user from "./user";
import { relations } from "drizzle-orm";

const recruiter = pgTable(
  "recruiter",
  {
    id: varchar("id", { length: 36 }).primaryKey().references(() => user.id),
    last_name: varchar("last_name", { length: 255 }),
    given_name: varchar("given_name", { length: 255 }),
    employee_number: varchar("employee_number", { length: 64 }),
    role: varchar("role", { length: 128 }),
  }
);

export const recruiterRelations = relations(recruiter, ({ one }) => ({
  user: one(user, {
    fields: [recruiter.id],
    references: [user.id],
  }),
}));

export default recruiter;