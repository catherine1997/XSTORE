import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/svg/xstore-logo.svg'
import { SidebarData } from '../../data/SidebarData'
import SidebarItem from './SidebarItem'


const Sidebar = () => {
  return (
    <div className='min-w-[250px] h-[100%] bg-slate-300 shadow-xl'> 
      <div className='flex items-center justify-center h-[130px] bg-[#F3F3F3]'>
        <img src={logo} alt="" />
      </div>
      <div className='text-black' >
        { SidebarData.map((item, index) => <SidebarItem key={index} item={item}/>)}

      </div>
    </div> 
  )
}

export default Sidebar
