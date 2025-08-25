import {
  pgTable,
  serial,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

const batch = pgTable("batch", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  start_date: timestamp("start_date", { mode: "string" }),
  end_date: timestamp("end_date", { mode: "string" }),
});


export default batch;