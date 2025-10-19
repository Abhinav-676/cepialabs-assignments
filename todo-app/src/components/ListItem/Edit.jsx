import { edit } from "@/store/slices/todo"
import { Flex, Input, Button } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

function Edit({prev}) {
    const [input, setInput] = useState(prev.text)
    const inputElement = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        inputElement.current.focus()
    }, [])

    const editTodoText = () => {
        dispatch(edit({...prev, text: input}))
    }

    return (
        <Flex>
            <Input ref={inputElement} outline="none" border="none" value={input} onChange={(e) => {setInput(e.target.value)}} flexGrow="1" />
            <Button onClick={editTodoText} borderLeftRadius="none">Done</Button>
        </Flex>
    )
}

export default Edit