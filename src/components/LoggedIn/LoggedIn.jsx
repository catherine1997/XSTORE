import React,{useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Computers from '../../pages/Computers/Computers'
import Electronics from '../../pages/Electronics/Electronics'
import PhoneTablets from '../../pages/Phone and Tablets/PhoneTablets'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Cart from '../Cart/Cart'
import Homepage from '../Homepage/Homepage'



const LoggedIn = () => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  
  const addToCart = (data) => {
      
      setCart([...cart, { ...data, quantity : 1 }])
  
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <>
    <div className='flex w-screen overflow-x-hidden'>
      <Sidebar />
      <div className='w-full max-w-[calc(100vw-20px)] '>
      <Header count={cart.length} handleShow={handleShow} />
     
      <div>
        <Routes>
          <Route path='/' element={<Electronics/>} />
          <Route path='/computers' element={<Computers />} />
          <Route path='/PhoneTablets' element={<PhoneTablets />}/>
        </Routes>
      </div>
      </div>
    </div>

    {
      showCart ?  <Cart  cart={cart}/>:
      <Homepage  addToCart={addToCart}/>
    }
   
  
    </>
  )
}

export default LoggedIn
