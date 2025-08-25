import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import {recruiter, candidate} from "@/db/schema";

const applicationStatusAssignment = pgTable("application_status_assignment", {
  id: serial("id").primaryKey(),
  candidate_id: varchar("candidate_id", { length: 36 }).notNull().references(() => candidate.id),
  recruiter_id: varchar("recruiter_id", { length: 36 }).notNull().references(() => recruiter.id),
  status: varchar("status", { length: 16 }), // Should match Application_Status enum
  assigned_at: timestamp("assigned_at", { mode: "string" }),
});

export const applicationStatusAssignmentRelations = relations(applicationStatusAssignment, ({ one }) => ({
  candidate: one(candidate, {
    fields: [applicationStatusAssignment.candidate_id],
    references: [candidate.id],
  }),
  recruiter: one(recruiter, {
    fields: [applicationStatusAssignment.recruiter_id],
    references: [recruiter.id],
  }),
}));

export default applicationStatusAssignment;
