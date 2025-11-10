import { Button, Center, Container, Heading, HStack, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Mood from "./components/Mood"


function App() {
  const [mood, setMood] = useState(null)
  const [name, setName] = useState("")
  const [isNameSet, setNameSet] = useState(false)
  const [isMoodSet, setMoodSet] = useState(false)

  return (
    <Center height="vh" marginTop="-100px">
      <VStack>
        {!isNameSet &&
          <>
          <Heading>Enter Your Name</Heading>
          <HStack>
            <Input value={name} onChange={(e) => {setName(e.target.value)}} />
            <Button onClick={() => {setNameSet(true)}}>Done</Button>
          </HStack>
          </>
        }
        {!isMoodSet && isNameSet &&
          <>
          <Heading>Enter Your Mood</Heading>
          <HStack>
            <Button onClick={e => {setMood("Happy 😊"); setMoodSet(true)}}>Happy</Button>
            <Button onClick={e => {setMood("Sad 😣"); setMoodSet(true)}}>Sad</Button>
          </HStack>
          </>
        }
        {
          isMoodSet && isNameSet &&
          <VStack gap="5">
            <Mood name={name} mood={mood} />
            <Button onClick={() => {
              setMoodSet(false)
              setNameSet(false)
              setName("")
              setMood(null)
            }}>Reset</Button>
          </VStack>
        }
      </VStack>
    </Center>
  )
}

export default App
