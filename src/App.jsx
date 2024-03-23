import './App.css'
import Header from './components/Header'
import Footer1 from './components/Footer1'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
<Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer1/>
    </>
  )
}

export default App
