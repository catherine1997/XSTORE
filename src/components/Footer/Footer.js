import React from 'react'
import {MdChevronRight, MdKeyboardArrowDown} from 'react-icons/md'
import {VscGlobe} from 'react-icons/vsc'
import {BiBitcoin} from 'react-icons/bi'
import {FcGlobe} from 'react-icons/fc'
import logo from '../../assets/svg/xstore-logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#EDEDED]'>
    <div className='flex flex-wrap w-full h-[300px] gap-96 p-10 font-sans leading-loose'>
      <div>
       <p className='font-bold text-2xl leading-loose'>Get to know</p> 
         <p>Blog</p>
         <p> Career</p>
         <p> About Xstore</p>
         <p> Xstore Devices</p>
         <p>Xstore Services</p>
        </div> 
      <div>
       <p className='font-bold text-2xl  leading-loose'>Make Money With Us</p> 
       <p>Sell Products on Xstore</p>
       <p>Sell Services on Xstore</p>
       <p>Sell Apps on Xstore</p>
       <p>Advertise Your Products</p>
       <p>Advertise Your Services</p>
       <div className='flex'> 
       <p>See More</p>
       <MdChevronRight className='m-2 cursor-pointer'/>
        </div>
       </div>
       
      <div>
       <p className='font-bold text-2xl  leading-loose'>Let Us Help you</p> 
       <p> Your Account</p>
       <p>Your Orders</p>
       <p>Shipments Rates & Policies</p>
       <p>Returns and Replacement</p>
       <p>help</p>
        </div>
    </div>

    <div className='flex gap-20 m-10'>
      <div className=''>
        <img src={logo} alt='' className='w-44 h-12'/>
      </div>
      <div className='border-4 bg-[#FFFFFF] rounded-xl ' >
        <button className='w-72 h-12 flex items-center'> <VscGlobe className='m-2'/>English 
        <MdKeyboardArrowDown className='ml-36'/>
        </button>
      </div>
      <div className='border-4 bg-[#FFFFFF] rounded-xl '> 
        <button className=' w-72 h-12 flex items-center'><BiBitcoin className='m-2'/>Bitcoin
        <MdKeyboardArrowDown className='ml-36'/>
        </button>
        </div>
      <div className='border-4 bg-[#FFFFFF]  rounded-xl '> 
        <button className='w-72 h-12 flex items-center'><FcGlobe className='m-2'/>Nigeria
        <MdKeyboardArrowDown className='ml-36'/>
        </button>
        </div>
    </div>


    <div className=' bg-[#4B4B4B] text-white h-[128px] rounded-b-3xl text-center '>
     <div className='flex gap-24 p-10 w'>
      <p>Condition of Use</p>
      <p>Privacy Notice</p>
      <p>Interest Based App</p>
      <p className='ml-auto'>2022, Xstore.com</p>
     </div>
     
    </div>
  
    
    </div>
  )
}

export default Footer
