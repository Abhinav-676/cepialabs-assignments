import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Box, Button, Center, Container, Flex, Heading, HStack, Input, SimpleGrid } from '@chakra-ui/react'
import ProductCard from './components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './store/slices/products'

function Home() {
  const products = useSelector(state => state.products.list)
  const [input, setInput] = useState("")
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')

    return response.data.products
  }
  const handleSearch = async () => {
    setLoading(true)
    const products = await getProducts()
    const filteredList = products.filter(item => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        return true
      }

      return false
    })

    dispatch(setProducts(filteredList))
    setLoading(false)
  }
  const reload = async () => {
    setLoading(true)
    const products = await getProducts()
    dispatch(setProducts(products))
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getProducts().then(products => {
      dispatch(setProducts(products))
      setLoading(false)
    })
  }, [])

  return (
    <Container paddingTop="100px">
      <Flex direction="column" alignItems="center">  
        <Box>
          <HStack>
            <Input value={input} onChange={(e) => {setInput(e.target.value)}} />
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={reload}>Reload</Button>
          </HStack>
        </Box>
        <Box marginTop="50px">
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
      </Flex>
    </Container>
  )
}

export default Home
