import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { Provider as ReduxProvider } from 'react-redux'
import { Theme } from '@chakra-ui/react'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <Theme appearance='light'>
          <App />
        </Theme>
      </Provider>
    </ReduxProvider>
  </StrictMode>,
)
