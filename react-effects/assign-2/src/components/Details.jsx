import { Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"

function Details({ userId, returnHome }) {
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    const fetchUser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setUser(res.data)
    }

    const fetchPost = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPosts(res.data) 
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            await fetchUser()
            await fetchPost()
            setLoading(false)
        }
        
        if (userId) {
            loadData()
        }
    }, [userId])

    return (
        <Box width='full' padding="5" shadow="lg">
            {isLoading && (
                <Center padding="10">
                    <Heading size="md">Loading Users...</Heading>
                </Center>
            )}
            {!isLoading && user && (
                <>
                    <Stack gap='5'>
                        <Flex justifyContent='space-between'>
                            <Heading size='4xl'>User Detail</Heading>
                            <Button onClick={returnHome}>Go Back</Button>
                        </Flex>
                        <Stack gap='2'>
                            <Heading fontSize='3xl'>User Info</Heading>
                            <Heading fontSize='2xl'>{user.username}</Heading>
                            <Text fontSize='md'>Name: {user.name}</Text>
                            <Text fontSize='md'>Email: {user.email}</Text> 
                            <Text fontSize='md'>Phone: {user.phone}</Text> 
                        </Stack>
                        
                        <Flex marginTop="6">
                            <Heading size='4xl'>Posts</Heading>
                        </Flex>
                        <Stack gap='2'>
                            {posts.map(post => (
                                <Box key={post.id} borderWidth="1px" borderRadius="lg" padding="4">
                                    <Heading size="md" marginBottom="2">{post.title}</Heading>
                                    <Text>{post.body}</Text>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                </>
            )}
        </Box>
    )
}

export default Details