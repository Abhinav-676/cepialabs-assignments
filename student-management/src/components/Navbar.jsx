import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({logoText}) {
    const links = {
        home: '/',
        students: '/students',
        favorites: '/favorites',
        about: '/about'
    }

    const location = useLocation()

    return (
        <header>
            <Container maxW='breakpoint-xl' height='60px'>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Heading size='4xl'>{logoText}</Heading>
                        <Box>
                            <nav>
                                <HStack gap='2'>
                                    <Link variant={location.pathname === links.home ? 'underline' : 'plain'} asChild><NavLink to={links.home}>Home</NavLink></Link>
                                    <Link variant={location.pathname === links.students ? 'underline' : 'plain'} asChild><NavLink to={links.students}>Students</NavLink></Link>
                                    <Link variant={location.pathname === links.favorites ? 'underline' : 'plain'} asChild><NavLink to={links.favorites}>Favorites</NavLink></Link>
                                    <Link variant={location.pathname === links.about ? 'underline' : 'plain'} asChild><NavLink to={links.about}>About</NavLink></Link> 
                                </HStack> 
                            </nav>  
                        </Box>             
                    </Flex>
            </Container>
        </header>
    )
}

export default Navbar;