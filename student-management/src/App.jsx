import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider as Redux, useSelector } from 'react-redux'
import { Provider as ChakraUI } from './components/ui/provider'
import { Theme } from '@chakra-ui/react'
import Home from './pages/Home'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Layout from './Layout'

function App() {
  const theme = useSelector((state) => state.theme.mode)
  const logoText = "Assignment"
  const title = "Student Management Dashboard"
  const subtitle = "Cepialabs Assignment"

  return (
    <ChakraUI>
      <Theme appearance={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout logoText={logoText} />} >
              <Route index element={<Home title={title} subtitle={subtitle}/>} />
              <Route path='/students' element={<Students />} />
              <Route path='/students/:id' element={<StudentDetails />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/about' element={<About />} />
            </Route>
          </Routes>
        </Router>
      </Theme>
    </ChakraUI>
  )
}

export default App
