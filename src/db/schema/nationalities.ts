import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

const nationality = pgTable(
  "nationality",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
  }
);

export default nationality;
