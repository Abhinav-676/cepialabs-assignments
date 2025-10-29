import { Container, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <Container minHeight="100vh">
            <header>
                <Container paddingTop="40px">
                    <Flex justifyContent="center" gap="4">
                        <ChakraLink asChild><Link to="/">Home</Link></ChakraLink>
                        <ChakraLink asChild><Link to="/favorites">Favorites</Link></ChakraLink>
                    </Flex>
                </Container>
            </header>
            <main>
                <Outlet />
            </main>
        </Container>
    )
}

export default Layout