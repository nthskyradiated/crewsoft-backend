import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

const country = pgTable(
  "country",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
  }
);

export default country;
