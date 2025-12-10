import mongoose, { Document, Schema } from "mongoose";

export interface IPerson extends Document {
    name: string
}

const personSchema = new Schema({
    name: {type: String, required: true}
})

export const Person = (
    mongoose.models.Person || 
    mongoose.model<IPerson>("Person", personSchema)
)

