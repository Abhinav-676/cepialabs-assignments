import { Box, Heading } from "@chakra-ui/react"

function Mood({name, mood}) {
    return (
        <Box>
            <Heading size="4xl">{name} is {mood}</Heading>
        </Box>
    )
}

export default Mood