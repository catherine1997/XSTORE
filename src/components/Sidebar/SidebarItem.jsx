import React, { useState} from 'react'
import {IoIosArrowForward} from 'react-icons/io'
// import { SidebarData } from '../../data/SidebarData';
// import {IoIosArrowUp} from 'react-icons/io'
import './SidebarItem.css'


function SidebarItem({item}) {

    const[open, setOpen] = useState(false);
    
if(item.children){
      return (

    <div className={ open ? "sidebar-item open" : "sidebar-item" }>
    <div className='sidebar-title'>
        <span>
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
       <i className="toggle-btn " onClick={()=> setOpen(!open)}><IoIosArrowForward /></i> 
    </div>
    <div className='sidebar-content ' >
        {item.children.map((child, index) => <SidebarItem key={index} item={child}/>)}
    </div> 
</div>
  )
}else {
  return (

    <a href={item.path || "#"} className='sidebar-item'>
   
        <span>
        {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
      
</a>
  )
}
}



export default SidebarItem