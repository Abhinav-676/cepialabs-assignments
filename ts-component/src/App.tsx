import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className='counter-container'>
      <Counter initial={0} />
    </div>
  )
}

export default App
