import dbConnect from "@/lib/connectDB";
import { Person } from "@/mongodb/models/Person";

export async function GET(req: Request) {
    await dbConnect()

    const persons = await Person.find({})

    return new Response(JSON.stringify(persons), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function POST(req: Request) {
    await dbConnect()

    const { name } = await req.json()

    const newPerson = new Person({ name })
    await newPerson.save()

    return new Response(JSON.stringify({
        message: 'Person created successfully',
        person: newPerson,
        location: `/api/persons/${newPerson._id}`
    }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}