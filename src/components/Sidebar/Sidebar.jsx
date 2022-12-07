import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/svg/xstore-logo.svg'
import { SidebarData } from '../../data/SidebarData'
import SidebarItem from './SidebarItem'
import './SidebarItem.css'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


const Sidebar = () => {
    const [show, setShow] = useState(false)
  

  
  return (
    <div className=''> 
    <div className= {`min-w-[250px] h-[100%]  ${show ? 'w-72' : 'w-10'}  duration-500 bg-[#EDEDED] shadow-xl `}> 
    
      <div className='flex items-center  justify-center h-[130px] bg-[#F3F3F3] text-gray-500 ' onClick={()=> setShow(!show)}>

       <button className=''>
      { show ? <AiOutlineClose  size ={32}  className="menu-bar cursor-pointer" onClick={()=> setShow(show)}/> :
       <HiMenu size={32} className='menu-close' onClick={()=> setShow(!show)}/>} 
       
       </button>
  
        <img src={logo} alt="" className='logo' />

      </div>
      <div className=' text-black w' >
        { SidebarData.map((item, index) => <SidebarItem key={index} item={item} size={20}/> )}
      </div>
    </div> 
    </div>
  )
}

export default Sidebar
