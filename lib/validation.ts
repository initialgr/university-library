import z from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("University ID Card is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
});
