import { z } from "zod";

export const LessonSchema = z.object({
  title: z.string(),
  nivel: z.enum(["basic", "intermediate", "advanced"]),
});

export type LessonData = z.infer<typeof LessonSchema>;
