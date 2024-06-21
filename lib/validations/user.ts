import { z } from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty("Profile photo is required"),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  bio: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  dob: z
    .number()
    .min(8, { message: "Minimum 8 characters." })
    .max(8, { message: "Maximum 8 caracters." }),
  sex: z
    .string()
    .min(4, { message: "Minimum 4 characters." })
    .max(20, { message: "Maximum 20 caracters." }),
  bloodGroup: z
    .string()
    .min(2, { message: "Minimum 2 characters." })
    .max(5, { message: "Maximum 5 caracters." }),
  lastPassIns: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  currentStatus: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  experties: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  memories: z.string().url().nonempty("Photos are required"),
  userMail: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
  phoneNo: z
    .number()
    .min(10, { message: "Minimum 10 characters." })
    .max(12, { message: "Maximum 12 caracters." }),
  futureScope: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
});

export type UserValidationType = z.infer<typeof UserValidation>;
