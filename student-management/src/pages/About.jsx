import { Center, Container, Heading } from "@chakra-ui/react"

function About() {
    return (
        <Container minH='vh' marginTop='8'>
            <Center><Heading size='4xl'>About Page</Heading></Center>
            <Center marginTop='4'>
                <Heading size='md' maxW='600px' textAlign='center'>
                    This is a student management application built using React, Redux, and Chakra UI. 
                    It allows users to view a list of students, mark their favorite students, and toggle between light and dark themes.
                </Heading>
            </Center>
        </Container>
    )
}

export default About