import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { ColorModeProvider } from './components/ui/color-mode'
import { Theme } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <Provider>
    <Theme appearance='light'>
      <StrictMode>
        <App />
      </StrictMode>,
    </Theme>
  </Provider>
)
