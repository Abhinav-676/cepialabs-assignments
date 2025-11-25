import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";


function Navbar({ logoText }) {
    const links = {
        home: '/',
        students: '/students',
        favorites: '/favorites',
        about: '/about'
    }

    const location = useLocation()

    return (
        <header>
            <Box bgGradient="linear(to-r, gray.50, gray.100)" boxShadow="sm" borderBottom="1px" borderColor="gray.200">
                <Container maxW='breakpoint-xl' height='64px' py='4'>
                    <Flex justifyContent='space-between' alignItems='center' height='full'>
                        <Heading size='2xl' letterSpacing='tight' color='blue.600' fontWeight='extrabold' textShadow='0 1px 0 #fff'>{logoText}</Heading>
                        <Box>
                            <nav>
                                <HStack gap='4'>
                                    <Link
                                        variant={location.pathname === links.home ? 'underline' : 'plain'}
                                        asChild
                                        fontWeight={location.pathname === links.home ? 'bold' : 'medium'}
                                        color={location.pathname === links.home ? 'blue.600' : 'gray.700'}
                                        _hover={{ color: 'blue.500', textDecoration: 'underline', bg: 'gray.100', borderRadius: 'md', transition: 'all 0.2s' }}
                                        _active={{ color: 'blue.700', bg: 'gray.200' }}
                                        px='3' py='2'
                                        borderRadius='md'
                                    >
                                        <NavLink to={links.home}>Home</NavLink>
                                    </Link>
                                    <Link
                                        variant={location.pathname === links.students ? 'underline' : 'plain'}
                                        asChild
                                        fontWeight={location.pathname === links.students ? 'bold' : 'medium'}
                                        color={location.pathname === links.students ? 'blue.600' : 'gray.700'}
                                        _hover={{ color: 'blue.500', textDecoration: 'underline', bg: 'gray.100', borderRadius: 'md', transition: 'all 0.2s' }}
                                        _active={{ color: 'blue.700', bg: 'gray.200' }}
                                        px='3' py='2'
                                        borderRadius='md'
                                    >
                                        <NavLink to={links.students}>Students</NavLink>
                                    </Link>
                                    <Link
                                        variant={location.pathname === links.favorites ? 'underline' : 'plain'}
                                        asChild
                                        fontWeight={location.pathname === links.favorites ? 'bold' : 'medium'}
                                        color={location.pathname === links.favorites ? 'blue.600' : 'gray.700'}
                                        _hover={{ color: 'blue.500', textDecoration: 'underline', bg: 'gray.100', borderRadius: 'md', transition: 'all 0.2s' }}
                                        _active={{ color: 'blue.700', bg: 'gray.200' }}
                                        px='3' py='2'
                                        borderRadius='md'
                                    >
                                        <NavLink to={links.favorites}>Favorites</NavLink>
                                    </Link>
                                    <Link
                                        variant={location.pathname === links.about ? 'underline' : 'plain'}
                                        asChild
                                        fontWeight={location.pathname === links.about ? 'bold' : 'medium'}
                                        color={location.pathname === links.about ? 'blue.600' : 'gray.700'}
                                        _hover={{ color: 'blue.500', textDecoration: 'underline', bg: 'gray.100', borderRadius: 'md', transition: 'all 0.2s' }}
                                        _active={{ color: 'blue.700', bg: 'gray.200' }}
                                        px='3' py='2'
                                        borderRadius='md'
                                    >
                                        <NavLink to={links.about}>About</NavLink>
                                    </Link>
                                </HStack>
                            </nav>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </header>
    )
}

export default Navbar;