import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Box, Button, Container, Flex, HStack, Input, SimpleGrid } from '@chakra-ui/react'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState("")

  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')

    setProducts(response.data.products)
  }
  const handleSearch = () => {
    const filteredList = products.filter(item => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        return true
      }

      return false
    })

    setProducts(filteredList)
  }
  const reload = () => {
    getProducts()
  }
  useEffect(() => {
    getProducts()
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
          <SimpleGrid columns={4} gap="50px">
            {products.map((item, i) => {
              return <ProductCard heading={item.title} imgsrc={item.thumbnail} price={`${item.price}$`} rating={`${item.rating}/5`} key={item.id} />
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  )
}

export default App
