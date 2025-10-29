import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Box, Button, Center, Container, createListCollection, Flex, Heading, HStack, Input, Portal, Select, SimpleGrid } from '@chakra-ui/react'
import ProductCard from './components/ProductCard'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [categoryCollection, setcategoryCollection] = useState(createListCollection({items: []}))
  const [input, setInput] = useState("")
  const [selectVal, setSelectVal] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [totalProducts, setTotalProducts] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()
  const limit = searchParams.get('limit') || '16'
  const skip = searchParams.get('skip') || '0'

  const getProducts = async (l = limit, s = skip, category = "") => {
    let response = null
    if (category.length !== 0) {
      response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=${l}&skip=${s}`)
    } else {
      response = await axios.get(`https://dummyjson.com/products?limit=${l}&skip=${s}`)
    }

    return{products: response.data.products, total: response.data.total}
  }

  const getCategories = async () => {
    const response = await axios.get(`https://dummyjson.com/products/categories`)
    const categories = response.data.map(item => {
      return item.slug
    })

    return categories
  }

  const fetch = async () => {
      setLoading(true)
      const {products, total} = await getProducts(limit, skip, selectVal || "")
      const categories = await getCategories()
      setCategories(categories)
      setProducts(products)
      setTotalProducts(total)
      setLoading(false)
    }

  const handleSearch = async () => {
    setLoading(true)
    const {products} = await getProducts()
    const filteredList = products.filter(item => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        return true
      }

      return false
    })

    setProducts(filteredList)
    setLoading(false)
  }
  const reload = async () => {
    fetch()
    setSelectVal([])
  }

  const handleNext = () => {
    const curLimit = parseInt(limit, 10) || 16
    const curSkip = parseInt(skip, 10) || 0
    const newSkip = curSkip + curLimit

    setSearchParams({ limit: String(curLimit), skip: String(newSkip) })
  }

  const handlePrev = () => {
    const curLimit = parseInt(limit, 10) || 16
    const curSkip = parseInt(skip, 10) || 0
    const newSkip = Math.max(0, curSkip - curLimit)

    setSearchParams({ limit: String(curLimit), skip: String(newSkip) })
  }

  useEffect(() => {
    fetch()
  }, [limit, skip, selectVal])

  useEffect(() => {
    const collection = {
      items: []
    }

    categories.forEach(item => {
      collection.items.push({value: item, label: item})
    })

    setcategoryCollection(createListCollection(collection))
  }, [categories])

  return (
    <Container paddingTop="100px">
      <Flex direction="column" alignItems="center">  
        <Box>
          <HStack>
            <Input value={input} onChange={(e) => {setInput(e.target.value)}} />
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={reload}>Reload</Button>
            <Select.Root collection={categoryCollection} size="sm" width="320px" value={selectVal} onValueChange={(e) => setSelectVal(e.value)}>
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select Category" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {categoryCollection.items.map((framework) => (
                      <Select.Item item={framework} key={framework.value}>
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
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
        <Box margin="30px">
          <HStack gap="4">
            <Button onClick={handlePrev} disabled={isLoading || (parseInt(skip) <= 0)}>prev</Button>
            <Button
              onClick={handleNext}
              disabled={isLoading || (parseInt(skip) + parseInt(limit, 10)  >= totalProducts)}
            >
              next
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Container>
  )
}

export default Home
