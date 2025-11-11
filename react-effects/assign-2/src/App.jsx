import {Center, Container} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import Home from "./components/Home"
import Details from "./components/Details"


function App() {
  const pages = {
    home: 0,
    details: 1
  }

  const [currentPage, setCurrentPage] = useState(pages.home)
  const [selectedUserId, setSelectedUserId] = useState(null)

  const showDetails = (userId) => {
    setCurrentPage(pages.details)
    setSelectedUserId(userId)
  }
  const returnHome = () => {
    setCurrentPage(pages.home)
    setSelectedUserId(null)
  }

  return (
    <>
      <Container minH='vh'>
        <Center>
          {currentPage === pages.home &&
            <Home showDetails={showDetails} />
          }
          {currentPage === pages.details &&
            <Details userId={selectedUserId}  returnHome={returnHome}/>
          }
        </Center>
      </Container>
    </>
  )
}

export default App
