import { Box, Center, Float, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [weather, setWeather] = useState({
    temp: 0,
    descp: "",
    city: "",
    icon: ""
  })
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getWeatherData = async () => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=f5b9550945dcb5c77dc2c565a93355f3')
    if (res.status != 200) {
      setError(true)
      return null
    }

    const {weather: [{description, icon}], main: {temp}} = res.data
    const floatTemp = parseFloat(temp)
    return {
      temp: floatTemp,
      descp: description,
      city: 'Ranchi',
      icon: `${icon}`
    }
  }

  const getAndSetWeather = async () => {
    setLoading(true)
    const data = await getWeatherData()
    setWeather(data)
    setError(false)
    setLoading(false)
  }

  useEffect(() => {
    getAndSetWeather()

    const intervalId = setInterval(() => {
      getAndSetWeather()
    },5 * 60 * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])



  return (
    <>
      <Center height="vh">
        <Box position='relative' shadow="md" borderRadius='lg' padding="5" minW="215.66px" minH="170px">
          {error &&
            <Center>
              <Heading size='3xl'>Something went wrong</Heading>
            </Center>
          }
          {isLoading  &&
            <Center height="full">
              <Image src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTV5d2pqaXFoZjJkYTR3MXRuMzBuYnMxa2EyeWdrazdtZGp5a3hnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sSgvbe1m3n93G/giphy.gif' height="50px" width="50px" alt='Loading...' />
            </Center>
          }
          {!isLoading &&
          <>
            <Box position='absolute' top='0' right='0'>
              <Image src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt='Icon'/>
            </Box>
            <Stack>
              <Heading size="4xl">Ranchi</Heading>
              <Heading size="3xl">Temp: {weather.temp}</Heading>
              <Heading size="2xl">{weather.descp}</Heading>
            </Stack>
          </>
          }
        </Box>
      </Center>
    </>
  )
}

export default App
