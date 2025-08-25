import {
  pgTable,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

import {recruiter, candidate} from '@/db/schema';
import { relations } from "drizzle-orm";

const comments = pgTable("comments", {
  id: varchar("id", { length: 36 }).primaryKey(),
  candidate_id: varchar("candidate_id", { length: 36 }).references(() => candidate.id),
  recruiter_id: varchar("recruiter_id", { length: 36 }).references(() => recruiter.id),
  recruiter_comment: varchar("recruiter_comment", { length: 1024 }),
  created_at: timestamp("created_at", { mode: "string" }),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  candidate: one(candidate, {
    fields: [comments.candidate_id],
    references: [candidate.id],
  }),
  recruiter: one(recruiter, {
    fields: [comments.recruiter_id],
    references: [recruiter.id],
  }),
}));

export default comments;
