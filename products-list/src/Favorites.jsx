import { Center, Container, Heading, SimpleGrid, Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import ProductCard from "./components/ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"

function Favorites() {
    const favorites = useSelector((state) => state.products.favorites)
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            const products = []
            setLoading(true)
            for(let i = 0; i < favorites.length; i++) {
                const response = await axios.get(`https://dummyjson.com/products/${favorites[i]}`)
                products.push(response.data)
            }

            setProducts(products)
            setLoading(false)
        }

        getProducts()
        
    }, [favorites])

   return (
    <Container paddingTop="10">
        <Center>
            <Heading size="5xl">Favorites</Heading>
        </Center>
        <Box marginTop="10">
            {isLoading ? 
            <Center>
                <Heading size="3xl">Loading...</Heading>
            </Center> :
            <SimpleGrid columns={4} gap="50px">
                {products.map((item) => {
                return <ProductCard id={item.id} heading={item.title} imgsrc={item.thumbnail} price={`${item.price}$`} rating={`${item.rating}/5`} key={item.id} />
                })}
            </SimpleGrid>
            }
        </Box>
    </Container>
   )
}

export default Favorites