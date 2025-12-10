'use client'
import { IPerson } from "@/mongodb/models/Person";
import { useEffect, useState } from "react";

const host = "localhost"
const port = ":3000"



export default function Home() {
  const [mode, setMode] = useState<'edit' | 'create'>('create')
  const [editId, setEditId] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [persons, setPersons] = useState<IPerson[]>([])

  const onCreate = async () => {
    const name = input.trim()
    const body = {
      name: name
    }

    if (!name) {
      // Exception
      return
    }

    const req = new Request(`http://${host}${port}/api/persons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsom'
      },
      body: JSON.stringify(body)
    })

    const res = await fetch(req)

    if (!res.ok) {
      // Exception
      return
    }

    const resJson = await res.json()
    const person = resJson.person as IPerson

    setPersons([...persons, person])
    setInput("")
  }

  const onDelete = async (id: string) => {
    const req = new Request(`http://${host}${port}/api/persons/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const res = await fetch(req)
    if (!res.ok) {
      // Exception
      return
    }

    setPersons(persons => {
      return persons.filter(p => {
        if (String(p._id) === id) {
          return false
        }

        return true
      })
    })
  }

  const onEdit = async () => {
    const name = input.trim()
    if (!name) {
      // Except
      return
    }

    const body = {
      name: name
    }

    const req = new Request(`http://${host}${port}/api/persons/${editId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const res = await fetch(req)
    if (!res.ok) {
      // Except
      return
    } 

    const jsonRes = await res.json()
    const uPerson = jsonRes.person

    setPersons(persons => {
      return persons.map(p => {
        if (String(p._id) == editId) {
          return uPerson
        }

        return p
      })
    })
    setInput("")
    setMode('create')
  }

  const editMode = (id: string, name: string) => {
    setInput(name)
    setEditId(id)
    setMode("edit")
  }

  useEffect(() => {
    fetch(`http://${host}${port}/api/persons`)
      .then(res => res.json())
      .then(resJson => {
        setPersons(resJson as IPerson[])
      })
  }, [])

  return (
    <main>
      <div className="flex justify-center mt-20">
          <div className="flex gap-2 bg-blue-100 px-5 py-4 rounded-full">
              <input 
                  className="py-2 px-2" 
                  placeholder="Enter Name"
                  value={input}
                  onChange={(e) => {setInput(e.target.value)}}
              />
              {mode === 'create' ?
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full cursor-pointer" onClick={onCreate}>Create</button>
                :
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full cursor-pointer" onClick={onEdit}>Edit</button>
              }
              
          </div>
      </div>
      {mode === 'create' &&
        <div className="flex justify-center">
          <div className="mt-40 flex flex-col items-center px-4 py-4 bg-blue-100 rounded-lg">
            <div className="flex justify-center">
              <h2 className="text-lg">Persons</h2>
            </div>
            <div className="mt-4 min-w-3xs">
              {persons.map(p => (
                <div className="flex items-center mt-2 justify-between" key={String(p._id)}>
                  <p>{p.name}</p>
                  <div className="flex gap-1">
                    <button 
                        className="bg-blue-600 text-white py-1 px-2 rounded-md cursor-pointer"
                        onClick={() => {editMode(String(p._id), p.name)}} 
                    >Edit</button>
                    <button 
                        className="bg-red-600 text-white py-1 px-2 rounded-md cursor-pointer"
                        onClick={() => {onDelete(String(p._id))}} 
                    >Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </main>
  );
}
