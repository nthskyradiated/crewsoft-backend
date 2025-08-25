import {
  pgTable,
  varchar,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import {batch} from "@/db/schema";

const user = pgTable("user", {
  id: varchar("id", { length: 36 }).primaryKey(),
  email_address: varchar("email_address", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  email_verified: boolean("email_verified"),
  designation: varchar("designation", { length: 16 }).notNull(), // Should match User_Type enum
  batch_id: integer("batch_id").references(() => batch.id),
  created_at: timestamp("created_at", { mode: "string" }),
});

export default user;
