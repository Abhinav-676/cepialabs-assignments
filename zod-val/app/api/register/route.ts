import { ValidationError } from "@/validation/Errors/ValidationError"
import { userValidator } from "@/validation/userValidator"


export async function POST(req: Request) {
    const {name, email, password, age} = await req.json()

    try  {
        const user = userValidator({
            name: name,
            email: email,
            password: password,
            age: Number(age)
        })

        return Response.json(user, {
            status: 201
        })
    } catch (err) {
        if (err instanceof ValidationError) {
            return Response.json(err.errors, {
                status: 400
            })
        }

        return Response.json({message: "Internal Server Error"}, {
            status: 500
        })
    }
}