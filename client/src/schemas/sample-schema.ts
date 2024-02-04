import { z } from "zod";

export const SampleSchema = z.object({
  name: z.string(),
});

export type SampleProps = z.infer<typeof SampleSchema>;
