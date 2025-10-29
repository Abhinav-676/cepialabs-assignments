import { Center, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import ProductCard from "./components/ProductCard"

function Favorites() {
    const favorites = useSelector((state) => state.products.favorites)

   return (
    <Container paddingTop="10">
        <Center>
            <Heading size="5xl">Favorites</Heading>
        </Center>
        <SimpleGrid columns={4} gap="50px" paddingTop="10">
            {favorites.map(item => {
                return <ProductCard id={item.id} heading={item.title} imgsrc={item.thumbnail} price={`${item.price}$`} rating={`${item.rating}/5`} key={item.id} />
            })}
        </SimpleGrid>
    </Container>
   )
}

export default Favorites