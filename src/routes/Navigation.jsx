import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Page from '../pages/CrearProducto'
import WithNavbar from './layout/WithNavbar'

const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<WithNavbar/>}>
                <Route index element={<Home/>}  />
                <Route path="/productos" element={<Productos/>} />
                <Route path="/page" element={<Page/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default Navigation