import { z } from "zod";

export const ChallengerSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(["audio", "video", "text"]),
  xp: z.string(),
});

export type ChallengerData = z.infer<typeof ChallengerSchema>;
