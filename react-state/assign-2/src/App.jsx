import { Box, Center, List } from "@chakra-ui/react"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Login from "./components/Login"
import FeedbackEdit from "./components/FeedbackEdit"

function App() {
  const membersData = [
    {
      id: 1,
      name: "James",
      pass: "1234",
      count: 0
    },
    {
      id: 2,
      name: "Mike",
      pass: "1234",
      count: 0
    },
    {
      id: 3,
      name: "Jessy",
      pass: "1234",
      count: 0
    },
    {
      id: 4,
      name: "Lara",
      pass: "1234",
      count: 0
    },
  ]

  const cards = {
    feedbackList: 1,
    memberLogin: 2,
    feedbackEdit: 3
  }

  const [members, setMembers] = useState(membersData)
  const [card, setCard] = useState(cards.feedbackList)
  const [currentUserId, setcurrentUserId] = useState(null)

  const showLogin = (id) => {
    setCard(cards.memberLogin)
    const user = members.find((m) => {
      if (m.id == id) {
        return true
      }

      return false
    })

    setcurrentUserId(user.id)
  }

  const authenticate = (id, pass) => {
    const user = members.find((m) => {
      if (m.id == id) {
        return true
      }

      return false
    })

    if(!authorise(id)) {
      return false
    }

    if (user && user.pass === pass) {
      setCard(cards.feedbackEdit)
      return true
    }

    return false
  }

  const authorise = (id) => {
    if (currentUserId === id) {
      return true
    }

    return false
  }

  const incrementCount = (id) => {
    if(!authorise(id)) {
      return false
    }

    const newData = members.map(member => {
      if (member.id !== id) {
        return member
      }

      const found = {...member}
      found.count += 1

      return found
    })

    setMembers(newData)
    return true
  }

  const decrementCount = (id) => {
    if(!authorise(id)) {
      return false
    }
    const newData = members.map(member => {
      if (member.id !== id) {
        return member
      }

      const found = {...member}
      found.count = found.count !== 0 ? found.count - 1 : found.count

      return found
    })

    setMembers(newData)
    return true
  }

  const returnHome = () => {
    setcurrentUserId(null)
    setCard(cards.feedbackList)
  }

  const resetFeedbacks = () => {
    const newData = members.map(member => {
      const modified = {...member}
      modified.count = 0

      return modified
    })

    setMembers(newData)
  }

  const getFromUser = (key) => {
    const found = members.find((member) => {
      if (member.id == currentUserId) {
        return true
      }

      return false
    })

    return found[key]
  }

  return (
    <Center height="vh">
      <Box width="400px" padding="5" borderRadius="lg" borderColor="black" borderWidth="4px">
        {card === cards.feedbackList &&
          <FeedbackList members={members} showLogin={showLogin} resetFeedbacks={resetFeedbacks}/>
        }
        {
          card === cards.memberLogin &&
          <Login id={currentUserId} authenticate={authenticate} goBack={returnHome}/>
        }
        {
          card === cards.feedbackEdit &&
          <FeedbackEdit memberName={getFromUser('name')} memberId={currentUserId} memberFeedbackCount={getFromUser('count')} incrementCount={incrementCount} decrementCount={decrementCount} goBack={returnHome} />
        }
      </Box>
    </Center>
  )
}

export default App
