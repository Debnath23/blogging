import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty("A thread is required.").min(3, { message: "Minimum 3 characters." }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty("A comment is required.").min(3, { message: "Minimum 3 characters." }),
});