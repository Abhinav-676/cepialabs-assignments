import { Flex, Text, Badge, Center, Stack } from "@chakra-ui/react"
import Edit from "./Edit"
import { useEffect, useState } from "react"
import ControlButton from "./ControlButton"
import { edit, remove } from "@/store/slices/todo"
import { useDispatch, useSelector } from "react-redux"

function Item({todo}) {
    const [controlToggle, setControlToggle] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.list)

    const {id, text, priority} = todo

    const setPriorityColor = (priority) => {
        switch(priority) {
            case "completed":
                return "green"
            case "high":
                return "yellow"
        }
    }

    const handleControlToggle = () => {
        setControlToggle(prev => !prev)
    }

    const enableEditMode = () => {
        setControlToggle(false)
        setEditMode(true)
    }

    const handleRemove = () =>  {
        dispatch(remove(id))
    }

    const handleComplete = () => {
        dispatch(edit({...todo, priority: "completed"}))
        setControlToggle(false)
    }

    useEffect(() => {
        setEditMode(false)
        setControlToggle(false)
    }, [todos])

    return (
        <Stack borderWidth="2px" rounded="lg" _hover={{cursor: "pointer"}}>
            {
                editMode ?
                <Edit prev={todo}/> :
                <Flex onClick={handleControlToggle}>
                    <Flex padding="2.5" flexGrow="1" alignItems="center"><Text className="text">{text}</Text></Flex>
                    {priority !== "default" && 
                        <Center paddingRight="2"><Badge colorPalette={setPriorityColor(priority)}>{priority}</Badge></Center>
                    }
                </Flex>
            }
            {controlToggle && 
                <Flex justify="end" gap="2" padding="4">
                    <Center onClick={enableEditMode}><ControlButton role="edit" /></Center>
                    {priority != "completed" &&
                        <Center onClick={handleComplete}><ControlButton role="complete" /></Center>
                    }
                    <Center onClick={handleRemove}><ControlButton role="delete" /></Center>
                </Flex>
            }
        </Stack>
    )
}

export default Item