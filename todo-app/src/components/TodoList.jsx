import { Box, Stack, HStack, Input, Button, Grid, Select, Portal, Popover, createListCollection } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import Item from "./ListItem/Item"
import { add } from "@/store/slices/todo"
import { useEffect, useState } from "react"

function TodoList() {
    const [input, setInput] = useState("")
    const [inputPriority, setInputPriority] = useState("default")
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.list)

    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(todos))
      setInputPriority("default")
    }, [todos])

    const handleAdd = () => {
        dispatch(add({
          text: input,
          priority: inputPriority
        }))
        setInput("")
        setSelectValue([])
      }

    const switchInputPriority = () => {
      switch(inputPriority) {
        case "default":
          setInputPriority("high")
          break
        case "high":
          setInputPriority("default")
          break
      }
    } 

    return (
        <Box width="full" minHeight="vh" paddingTop="32">
          <Stack width="400px" padding="30px" margin="auto" borderRadius="15px">
            <HStack>
              <Input value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Write a todo"></Input>
              <Button className="btn" onClick={handleAdd}>Add</Button>
              <Button width="80px" onClick={switchInputPriority}>{inputPriority == "default" ? "Priority" : inputPriority}</Button>
            </HStack>
            <Grid templateColumns="1fr" gap="4">
              {todos.map((todo) => <Item todo={todo} key={todo.id}/>)}
            </Grid>
          </Stack>
        </Box>
      )
}

export default TodoList