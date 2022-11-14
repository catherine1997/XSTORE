import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Computers from '../../pages/Computers/Computers'
import Electronics from '../../pages/Electronics/Electronics'
import PhoneTablets from '../../pages/Phone and Tablets/PhoneTablets'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Cart from '../Cart/cart'
import Homepage from '../Homepage/Homepage'

const LoggedIn = () => {
  return (
    <div className='flex w-screen overflow-x-hidden'>
      <Sidebar />
      <div className='w-full max-w-[calc(100vw-20px)] '>
      <Header placeholder="Search for products, brands and categories....."/>
      
      <div>
        <Routes>
          <Route path='/' element={<Electronics/>} />
          <Route path='/computers' element={<Computers />} />
          <Route path='/PhoneTablets' element={<PhoneTablets />}/>
        </Routes>
      </div>
   
      
     
  
      </div>
    </div>
  )
}

export default LoggedIn
