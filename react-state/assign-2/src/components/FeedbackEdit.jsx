import { Button, Heading, HStack, VStack } from "@chakra-ui/react"

function FeedbackEdit({memberName, memberFeedbackCount, memberId, incrementCount, decrementCount, goBack}) {
    return (
        <VStack>
            <Heading size="4xl">Hello {memberName}!</Heading>
            <Heading size="3xl">Feedbacks: {memberFeedbackCount}</Heading>
            <HStack>
                <Button onClick={() => {incrementCount(memberId)}}>+</Button>
                <Button onClick={() => {decrementCount(memberId)}}>-</Button>
            </HStack>
            <Button onClick={goBack}>Go Back</Button>
        </VStack>
    )
}

export default FeedbackEdit