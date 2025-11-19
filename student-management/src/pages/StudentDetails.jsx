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
        <>
        <Container>
            <Flex justifyContent='space-between'>
                <Button onClick={() => {navigate(-1)}}>Back</Button>
                <FavoriteButton studentId={student.id} onToggle={() => {dispatch(toggleFavorite(student.id))}} />
            </Flex>
        </Container>
        <Container paddingTop='100px' paddingBottom='154px'>
            <Box>
                <VStack gap='2'>
                    <img src={student.image} alt={student.name} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                    <Text fontSize='2xl' fontWeight='bold' mt={4}>{student.name}</Text>
                    <Text>Email: {student.email}</Text>
                    <Text>Country: {student.country}</Text>
                    <Text>Phone: {student.phone}</Text>
                    <Text>Age: {student.age}</Text>
                </VStack>
            </Box>
        </Container>
        </>
    )
}

export default StudentDetails;