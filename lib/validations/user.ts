import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().nonempty("Profile photo is required."),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 characters." }),
  username: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 characters." }),
  bio: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 characters." }),
});

export type UserValidationType = z.infer<typeof UserValidation>;