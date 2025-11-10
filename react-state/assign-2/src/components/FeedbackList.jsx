import { Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react"

function FeedbackList({members, showLogin, resetFeedbacks}) {
    return (
        <VStack>
            <Heading size="4xl">Feedback List</Heading>
            <Stack width="full">
                {members.map(member => {
                    return <Flex justifyContent="space-between" key={member.id}>
                        <Text>{member.name}</Text><Text>Feedback Count: {member.count}</Text><Button onClick={() => {showLogin(member.id)}}>Login</Button>
                    </Flex>
                })}
            </Stack>
            <Button onClick={resetFeedbacks}>Reset</Button>
        </VStack>
    )
}

export default FeedbackList