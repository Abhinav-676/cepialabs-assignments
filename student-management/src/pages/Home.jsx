import { toggleTheme } from "@/store/slices/theme";
import { Button, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home({title, subtitle}) {
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
        <>
         <Container>
            <Flex justifyContent='right'>
                <Button onClick={handleThemeButtonClick}>{theme}</Button>
            </Flex>
        </Container>
        <Container height='400px' paddingTop='20'>
            <VStack>
                <Heading size='6xl'>{title}</Heading>
                <Heading size='5xl'>{subtitle}</Heading>
            </VStack>
        </Container>
        <Container height='200px'>
            <VStack>
                <Heading size='md'>Thought for the day</Heading>
                <Heading size='sm'>{quote}</Heading>
            </VStack>
        </Container>
        </>
    )
}

export default Home;