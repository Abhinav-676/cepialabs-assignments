import * as z from 'zod'

export const UserValidationSchema = z.object({
    name: z.string().min(3, "Atleast 3 characters"),
    email: z.string().email("Please enter valid email"),
    password: z.string().min(6, "atleast 6 characters"),
    age: z.number().min(18, "User must atleast be 18 y/o")
});


export type User = z.infer<typeof UserValidationSchema>