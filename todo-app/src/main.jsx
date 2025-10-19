import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Provider as ChakraUIProvider } from './components/ui/provider'
import { store } from './store/index.js'
import { Theme } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraUIProvider>
        <Theme appearance='dark'>
          <App />
        </Theme>
      </ChakraUIProvider>
    </Provider>
  </StrictMode>
)
