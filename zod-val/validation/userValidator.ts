import { ValidationError } from "./Errors/ValidationError";
import { User, UserValidationSchema } from "./schemas/user.schema";
import * as z from 'zod'

export function userValidator(data: User) {
    let errors = new Map<string, string>()

    try {
        const player = UserValidationSchema.parse(data)

        return player
    } catch(err) {
        if (err instanceof z.ZodError) {
            err.issues.forEach((e) => {
                errors.set(e.path.join(), e.message)
            })

            throw new ValidationError(Object.fromEntries(errors))
        }

        throw err
    }
}