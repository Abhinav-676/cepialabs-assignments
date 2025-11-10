import { VStack, Heading, Field, Input, Button, Flex, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function Login({id, authenticate, goBack}) {
    const [input, setInput] = useState("")
    const [IsInvalid, setInvalid] = useState(false)

    useEffect(() => {
        if (IsInvalid) {
            setTimeout(() => {
                setInvalid(false)
            }, 3000)
        }
    }, [IsInvalid])

    return (
        <VStack>
            {IsInvalid &&
                <Flex backgroundColor="red.100">
                    <Heading size="2xl">Invalid Password</Heading>
                </Flex>
            }
            <Heading size="4xl">Enter your Details</Heading>
            <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Enter Your Password.." />
                {}
            </Field.Root>
            <HStack>
                <Button onClick={goBack}>Go Back</Button>
                <Button onClick={() => {authenticate(id, input) || setInvalid(true)}}>Login</Button>
            </HStack>
        </VStack>
    )
}

export default Login