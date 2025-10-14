import { Box, Button, HStack, Input, Stack, Text, Grid, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from "./store/slices/todo"

import "./App.css"

function App() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todo.list)

  const handleAdd = () => {
    dispatch(add(input))
    setInput("")
  }

  const handleRemove = (id) => {
    dispatch(remove(id))
    setInput("")
  }

  return (
    <Box width="full" minHeight="vh" paddingTop="32">
      <Stack width="400px" padding="30px" margin="auto" borderRadius="15px" backgroundColor="#FCF9EA">
        <HStack>
          <Input value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Write a todo"></Input>
          <Button className="btn" onClick={handleAdd}>Add</Button>
        </HStack>
        <Grid templateColumns="1fr" gap="4">
          {todoList.map((item) => {
            return(
              <Flex key={item[1]}>
                <Flex padding="2.5" flexGrow="1" alignItems="center"><Text className="text">{item[0]}</Text></Flex>
                <Button className="btn" onClick={() => {handleRemove(item[1])}}>X</Button>
              </Flex>
            )
          })}
        </Grid>
      </Stack>
    </Box>
  )
}

export default App