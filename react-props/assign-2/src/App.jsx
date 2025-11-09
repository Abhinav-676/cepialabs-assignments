import { Box, Button, Center, Field, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    conf: ""
  })

  const [errors, setErrors] = useState({})

  const [isSuccess, setSuccess] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
  }, [isSuccess])

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const {name, email, pass, conf} = formData

    let newErrors = {}

    if (name.length <= 2) {
      newErrors = {...newErrors, name: "Atleast 2 characters are required"}
    }
    
    if (!email.includes("@") && email.length <= 4) {
      newErrors = {...newErrors, email: "Invalid email"}
    }
    
    if (pass.length < 8) {
      newErrors = {...newErrors, pass: "Atleast 8 characters"}
    }
    
    if (pass != conf) {
      newErrors = {...newErrors, pass: "Do not match"}
    }

    if (Object.keys(newErrors).length != 0) {
      setErrors(newErrors)
      return
    }
    
    setFormData({
      name: "",
      email: "",
      pass: "",
      conf: ""
    })
    setErrors({})
    setSuccess(true)
  }

  const setName = (val) => {
    setFormData(prev => ({...prev, name: val}))
  }
  const setEmail = (val) => {
    setFormData(prev => ({...prev, email: val}))
  }
  const setPass = (val) => {
    setFormData(prev => ({...prev, pass: val}))
  }
  const setConf = (val) => {
    setFormData(prev => ({...prev, conf: val}))
  }

  return (
    <Center height="vh">
      <Box>
        {isSuccess &&
          <Center bgColor="green.300"><Heading size="3xl">Success</Heading></Center>
        }
        <form onSubmit={handleSubmit}>
          <Stack gap="3">
            <Field.Root>
              <Field.Label>
                Name <Field.RequiredIndicator />
              </Field.Label>
              <Input required value={formData.name} onChange={(e) => {setName(e.target.value)}} placeholder='Enter your name' />
              {errors.name && <Text color="red" fontSize="sm">{errors.name}</Text>}
            </Field.Root>
            <Field.Root>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input required value={formData.email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email' />
              {errors.email && <Text color="red" fontSize="sm">{errors.email}</Text>}
            </Field.Root>
            <Field.Root>
              <Field.Label>
                Password <Field.RequiredIndicator />
              </Field.Label>
              <Input required value={formData.pass} onChange={(e) => {setPass(e.target.value)}} placeholder='Enter password' />
              {errors.pass && <Text color="red" fontSize="sm">{errors.pass}</Text>}
            </Field.Root>
            <Field.Root>
              <Field.Label>
                Confirm Password <Field.RequiredIndicator />
              </Field.Label>
              <Input required value={formData.conf} onChange={(e) => {setConf(e.target.value)}} placeholder='Confirm password' />
              {errors.conf && <Text color="red" fontSize="sm">{errors.conf}</Text>}
            </Field.Root>
            <Button type='submit'>Submit</Button>
          </Stack>
        </form>
      </Box>
    </Center>
  )
}

export default App
