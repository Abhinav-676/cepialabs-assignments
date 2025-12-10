import dbConnect from "@/lib/connectDB";
import { Person } from "@/mongodb/models/Person";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    await dbConnect()
    const {id} = await params

    const person = await Person.findById(id)

    if (!person) {
        return new Response(JSON.stringify({ message: 'Person not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return new Response(JSON.stringify(person), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await dbConnect()

    const {id} = await params

    const deletedPerson = await Person.findByIdAndDelete(id)

    if (!deletedPerson) {
        return new Response(JSON.stringify({ message: 'Person not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return new Response(JSON.stringify({ message: 'Person deleted successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function PATCH(req: Request, {params}: {params: {id: string}}) {
    await dbConnect()

    params = await params

    const { name } = await req.json()

    const updatedPerson = await Person.findByIdAndUpdate(
        params.id,
        { name: name },
        { new: true }
    )

    if (!updatedPerson) {
        return new Response(JSON.stringify({ message: 'Person not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return new Response(JSON.stringify({
        message: 'Person updated successfully',
        person: updatedPerson
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}