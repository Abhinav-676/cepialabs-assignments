import FavoriteButton from "@/components/FavoriteButton";
import { toggleFavorite } from "@/store/slices/favorites";
import { Button, Container, Spinner, Table, Text, Center, Box, HStack, VStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Favorites() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [students, setStudents] = useState([])
    
    const favorites = useSelector(state => state.favorites.students)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            if (!favorites || favorites.length === 0) {
                setStudents([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const promises = favorites.map(async (id) => {
                    const response = await fetch(`https://dummyjson.com/users/${id}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch student with ID ${id}`);
                    }
                    return response.json();
                });

                const usersData = await Promise.all(promises);

                const formattedStudents = usersData.map((user) => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    country: user.address.country
                }));

                setStudents(formattedStudents);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [favorites]);

    if (loading) {
        return (
            <Center h="vh">
                <Spinner />
            </Center>
        )
    }

    if (error) {
        return (
            <Container>
                <Text color="red.500" mt={4}>Error: {error}</Text>
            </Container>
        )
    }

    return (
        <Container minH='vh'>
            <VStack gap='4'>
                <Heading size='4xl' marginBottom='4'>Favorites</Heading>
                <Box width='min-content'>
                    <Table.Root>
                        {students.length === 0 &&  <Table.Caption>No Students Found.</Table.Caption>}
                        <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Name</Table.ColumnHeader>
                            <Table.ColumnHeader>Email</Table.ColumnHeader>
                            <Table.ColumnHeader>Country</Table.ColumnHeader>
                            <Table.ColumnHeader></Table.ColumnHeader>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {students.map((s => {
                            return <Table.Row key={s.id}>
                            <Table.Cell>{s.name}</Table.Cell>
                            <Table.Cell>{s.email}</Table.Cell>
                            <Table.Cell>{s.country}</Table.Cell>
                            <Table.Cell>
                                <HStack gap='2'>
                                    <Button onClick={() => {navigate(`/students/${s.id}`)}}>Profile</Button>
                                    <FavoriteButton studentId={s.id} onToggle={() => {dispatch(toggleFavorite(s.id))}} />
                                </HStack>
                            </Table.Cell>
                            </Table.Row>
                        }))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </VStack>
        </Container>
    )
}
export default Favorites