import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { store } from './app/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <h1>hola mundo</h1>
      <Counter/>
    </Provider>
    </>
  )
}

export default App
