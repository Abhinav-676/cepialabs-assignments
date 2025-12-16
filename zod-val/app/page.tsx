'use client'
import { FormEvent, useEffect, useState } from "react"

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")

  const [isSuccess, setSuccess] = useState(false)

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [ageError, setAgeError] = useState("")

  const onRegister = async (e: FormEvent) => {
    e.preventDefault()

    setNameError("")
    setEmailError("")
    setPasswordError("")
    setAgeError("")

    const url = "http://localhost:3000/api/register"

    const reqBody = {
      name: name,
      email: email,
      password: password,
      age: age
    }

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(reqBody)
    })

    const res = await fetch(req)
    if (!res.ok) {
      const errors = await res.json()
      
      for (const [key, value] of Object.entries(errors)) {
        switch (key) {
          case 'name':
            setNameError(value as string)
            break
          case 'email':
            setEmailError(value as string)
            break
          case 'password':
            setPasswordError(value as string)
            break
          case 'age':
            setAgeError(value as string)
            break
        }
      }

      return
    }

    setName("")
    setPassword("")
    setEmail("")
    setAge("")

    setSuccess(true)
  }

  useEffect(() => {
    const tm = setTimeout(() => {
      setSuccess(false)
    }, 3000)

    return () => {
      clearTimeout(tm)
    }
  }, [isSuccess])

  return (
    <main>
      <div className="text-center mt-20"><h1 className="text-6xl">Register a new User.</h1></div>
      <div className="mt-10 flex justify-center">
        <div className="px-10 py-5 shadow-indigo-500/50 shadow-md">
          <form>
            {isSuccess && 
              <div className="py-4 bg-green-100 text-center">
                <h6 className="text-2xl text-green-700">User Registered</h6>
              </div>
            }
            <div className="grid grid-cols-1 gap-3">
              <div>
                <div><label>Name</label></div>
                <div className="mt-1"><input 
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border-gray-300 border rounded-full"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                /></div>
                <div className="text-center"><p className="text-sm text-red-500">{nameError}</p></div>
              </div>
              <div>
                <div><label>Email</label></div>
                <div className="mt-1"><input 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border-gray-300 border rounded-full"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                /></div>
                <div className="text-center"><p className="text-sm text-red-500">{emailError}</p></div>
              </div>
              <div>
                <div><label>Password</label></div>
                <div className="mt-1"><input 
                  placeholder="Set up a password"
                  className="w-full px-4 py-2 border-gray-300 border rounded-full" 
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                /></div>
                <div className="text-center"><p className="text-sm text-red-500">{passwordError}</p></div>
              </div>
              <div>
                <div><label>Age</label></div>
                <div className="mt-1"><input 
                  className="w-full px-4 py-2 border-gray-300 border rounded-full"
                  type="number" 
                  min="1" max="100" 
                  value={age}
                  onChange={(e) => {setAge(e.target.value)}}
                /></div>
                <div className="text-center"><p className="text-sm text-red-500">{ageError}</p></div>
              </div>
            </div>
            <div>
              <button onClick={(e) => {onRegister(e)}} className="mt-8 px-4 py-2 bg-indigo-500 cursor-pointer rounded-lg">Register</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}