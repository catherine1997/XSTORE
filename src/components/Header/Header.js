import React, {} from 'react'
import './Header.css'

import {CiSearch} from 'react-icons/ci'
import {BsPerson } from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {BsCart} from 'react-icons/bs'
import {FiHelpCircle} from 'react-icons/fi'

const Header = (props) => {

 

  return (
    <div className='h-[130px] w-full bg-[#EDEDED] flex'>
      <div className='search p-7 border-r-7 gap-20 '>
      <div className='search-input flex bg-white rounded-md h-[60px] w-[590px]'> 
      <div className='search-icon  '>
          <CiSearch className='m-5'/>
          </div>
        <input type="text" className='bg-[#FFFFFF] outline-none ' placeholder='Search products, categories ' />
        <div className='flex ml-96'>
        <button type='button' className=' bg-[#2159E4] text-[#FFFFFF] font-sans font-medium leading-7 h-[60px] w-[163px] rounded-md cursor-pointer'>Search</button>
        </div>
        </div>
        
      </div>

      {/* Account session */}
      <div className='pt-5 mr-20 flex space-x-2 ml-56'>
      
          <div className='flex space-x-1 items-center mr-5'>
          <BsPerson className='h-30 w-30'/>
            <p className='text-[#171717] font-500'>Account</p>
           <i className='toggle-btn'><IoIosArrowDown/></i> 
          </div>
          <div className='flex space-x-1 items-center ml-5 ' onClick={()=> props.handleShow(true)}>
           <i className=''><BsCart/></i> 
              <sup className='text-[red]'>{props.count}</sup>
           <p className='text-[#171717] font-500' onClick={()=> props.handleShow(false)}>Cart</p>
          </div>
          <div className='flex space-x-1 items-center ml-5'>
           <i className='gap-5'><FiHelpCircle/></i> 
           <p className='text-[#171717] font-500'>Help</p>
          </div>
      </div>
      
    </div>
  )
}

export default Header
