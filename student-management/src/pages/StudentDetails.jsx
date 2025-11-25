import FavoriteButton from "@/components/FavoriteButton";
import { toggleFavorite } from "@/store/slices/favorites";
import { Button, Center, Flex, Spinner, Text, Container, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function StudentDetails() {
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch student details');
                }
                const data = await response.json();
                const formattedStudent = {
                    id: data.id,
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    country: data.address.country,
                    phone: data.phone,
                    age: data.age,
                    image: data.image
                };
                setStudent(formattedStudent);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }   
        };

        fetchStudent();
    }, [id]);

    if (loading) {
        return (
            <Center minH="60vh">
                <Spinner size="xl" thickness="4px" color="blue.400" />
            </Center>
        )
    }

    if (error) {
        return (
            <Container maxW="container.md" py={10}>
                <Box bg="red.50" borderRadius="lg" p={6} textAlign="center">
                    <Text color="red.500" fontWeight="bold">Error: {error}</Text>
                </Box>
            </Container>
        )
    }

    return (
        <Box bgGradient="linear(to-b, gray.50, white 60%)" minH="100vh" py={10}>
            <Container maxW="container.md">
                <Flex justifyContent='space-between' mb={6}>
                    <Button onClick={() => { navigate(-1) }} colorScheme="gray" variant="outline" borderRadius="md">Back</Button>
                    <FavoriteButton studentId={student.id} onToggle={() => { dispatch(toggleFavorite(student.id)) }} />
                </Flex>
                <Box bg="white" borderRadius="2xl" boxShadow="lg" py={10} px={{ base: 4, md: 10 }}>
                    <VStack gap='4'>
                        <img src={student.image} alt={student.name} style={{ borderRadius: '50%', width: '150px', height: '150px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} />
                        <Text fontSize='2xl' fontWeight='bold' mt={4} color="blue.700">{student.name}</Text>
                        <Text>Email: <b>{student.email}</b></Text>
                        <Text>Country: <b>{student.country}</b></Text>
                        <Text>Phone: <b>{student.phone}</b></Text>
                        <Text>Age: <b>{student.age}</b></Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}

export default StudentDetails;