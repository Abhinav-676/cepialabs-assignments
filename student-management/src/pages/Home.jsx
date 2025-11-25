import { toggleTheme } from "@/store/slices/theme";
import { Button, Container, Flex, Heading, VStack, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home({ title, subtitle }) {
    const theme = useSelector((state) => state.theme.mode)
    const dispatch = useDispatch()
    const [quote, setQuote] = useState("")

    const handleThemeButtonClick = () => {
        dispatch(toggleTheme())
    }

    useEffect(() => {
        fetch("https://dummyjson.com/quotes/random")
            .then(res => res.json())
            .then(data => setQuote(data.quote))
    }, [])

    return (
        <Box bgGradient="linear(to-b, gray.50, white 60%)" minH="100vh" py={10}>
            <Container maxW="container.md">
                <Flex justifyContent='flex-end' mb={4}>
                    <Button onClick={handleThemeButtonClick} colorScheme="blue" variant="outline" borderRadius="lg" px={6} shadow="sm">{theme}</Button>
                </Flex>
                <Box bg="white" borderRadius="2xl" boxShadow="lg" py={12} px={{ base: 4, md: 10 }} mb={10} textAlign="center">
                    <VStack spacing={2}>
                        <Heading size='3xl' color="blue.700" fontWeight="extrabold">{title}</Heading>
                        <Heading size='lg' color="gray.500">{subtitle}</Heading>
                    </VStack>
                </Box>
                <Box bgGradient="linear(to-r, blue.50, purple.50)" borderRadius="xl" boxShadow="md" py={8} px={{ base: 4, md: 10 }}>
                    <VStack spacing={2}>
                        <Heading size='md' color="purple.700">Thought for the day</Heading>
                        <Text fontSize="xl" color="gray.700" fontStyle="italic">{quote}</Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}

export default Home;