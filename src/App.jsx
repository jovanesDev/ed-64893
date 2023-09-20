import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import Navigation from './routes/Navigation'

function App() {

  return (
    <>
    <Provider store={store}>
      <Navigation/>
    </Provider>
    </>
  )
}

export default App
