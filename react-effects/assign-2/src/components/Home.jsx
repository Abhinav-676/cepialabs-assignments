import { Box, Button, Center, Container, Flex, Heading, HStack, Input, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"

function Home({showDetails}) {
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = res.data.map((user) => {
            return {
            id: user.id,
            name: user.name,
            email: user.email,
            }
        })

        return users
        } catch (err) {
        console.error("Failed to fetch users:", err)
        return null 
        }
    }

    const initialise = async () => {
        setLoading(true)
        const users = await fetchUsers()
        if (!users) {
        setError(true)
        setLoading(false)
        return
        }

        setUsers(users)
        setLoading(false)
        setError(false)
    }

    useEffect(() => {
        initialise()
    }, []) 

    let filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(input.toLowerCase())
    )

    return (
        <Box width='full' padding="5" shadow="lg">
            {error && (
                <Center padding="10">
                <Heading size="md" color="red.500">
                    Failed to load users. Please try again later.
                </Heading>
                </Center>
            )}
            {isLoading && (
                <Center padding="10">
                <Heading size="md">Loading Users...</Heading>
                </Center>
            )}
            {users.length !==0  &&
                <>
                    <Flex justifyContent="right">
                        <HStack>
                        <Input placeholder="Search a User"
                            value={input}
                            onChange={(e) => {setInput(e.target.value)}}
                        />
                        </HStack>
                    </Flex>
                    <Table.Root>
                        <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Name</Table.ColumnHeader>
                            <Table.ColumnHeader>Email</Table.ColumnHeader>
                            <Table.ColumnHeader></Table.ColumnHeader>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {filteredUsers.map((user => {
                            return <Table.Row key={user.id}>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => {showDetails(user.id)}}>Select</Button>
                            </Table.Cell>
                            </Table.Row>
                        }))}
                        </Table.Body>
                    </Table.Root>
                </>
            }
        </Box>
    )
}

export default Home