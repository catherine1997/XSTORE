import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import Cart from '../Cart/Cart'
import green from '../../assets/images/green.png'
import airpod from '../../assets/images/airpod.png'
import './Homepage.css'


function Homepage({addToCart}) {
    const [data, setdata] = useState([])
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setdata(response.data)
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    },[] )
    // there is [] here
  
// function submitHandler(){
//     console.log('item added')
// }
    
 
  return (
    <>
    <div className='m-20 ml-5 '>
        
        <h3 className='title text-center text-5xl font-bold font-sans text-[#171717] ml-20 '>Top Selling Items</h3>

    <div className='flex flex-wrap m-20 gap-10  rounded-3xl rounded-t-3xl w-[100%]' >

        {data.map((item, index )=> {
            return (
                <div className=' bg-[#FFFFFF] shadow hover:scale-105 cursor-pointer ease-in-out duration-500 max-h-[546px] max-w-[253px] p-5 border-slate-50 rounded-3xl shadow-[#FFFFFF] hover:w-[548px]' key={index}>
                    <img src={item.image} alt="" className='w-[165px] h-[244px] '/>
                    {/* <p className='font-serif p-2 text-sm'>{item.title}</p> */}
                    <h3 className='font-serif p-2 text-sm'>$. {item.price}</h3>
                    <button className='btn bg-[#2159E4] text-white m-0 h-10 w-40 rounded-lg text-sm' onClick={() => addToCart(item)} >add to cart</button>
                </div>
            )
        })}
    </div>
    </div>

    <div className='m-20 ml-5 '>
        
        <h3 className='title text-center text-5xl font-bold font-sans text-[#171717] ml-20 '>Shop by Category</h3>

    <div className='flex flex-wrap m-20 gap-10  rounded-3xl rounded-t-3xl w-[100%]' >

        {data.map((item, index )=> {
            return (
                <div className='  bg-[#FFFFFF] shadow hover:scale-105 cursor-pointer ease-in-out duration-300 max-h-[546px] max-w-[253px] p-5 border-slate-50 rounded-3xl shadow-[#FFFFFF] hover:w-[548px]' key={index}>
                    <img src={item.image} alt="" className='w-[165px] h-[244px] '/>
                    {/* <p className='font-serif p-2 text-sm'>{item.title}</p> */}
                    <h3 className='font-serif p-2 text-sm'>$. {item.price}</h3>
                    <button className='btn bg-[#2159E4] text-white m-0 h-10 w-40 rounded-lg text-sm' onClick={() => addToCart(item)} >add to cart</button>
                </div>
            )
        })}
    </div>
    </div>

    <div className='m-20 ml-5 '>
        
        <h3 className='title text-center text-5xl font-bold font-sans text-[#171717] ml-20 '>Game Accessories</h3>

    <div className='flex flex-wrap m-20 gap-10  rounded-3xl rounded-t-3xl w-[100%]' >

        {data.map((item, index )=> {
            return (
                <div className='  bg-[#FFFFFF] shadow hover:scale-105 cursor-pointer ease-in-out duration-300 max-h-[546px] max-w-[253px] p-5 border-slate-50 rounded-3xl shadow-[#FFFFFF] hover:w-[548px]' key={index}>
                    <img src={item.image} alt="" className='w-[165px] h-[244px] '/>
                    {/* <p className='font-serif p-2 text-sm'>{item.title}</p> */}
                    <h3 className='font-serif p-2 text-sm'>$. {item.price}</h3>
                    <button className='btn bg-[#2159E4] text-white m-0 h-10 w-40 rounded-lg text-sm' onClick={() => addToCart(item)} >add to cart</button>
                </div>
            )
        })}
    </div>
    </div>
    
    <div className='session flex space-x-5 m-[50px]'>
        
        <div className=' box bg-[#F5F5F5]  w-[799px] h-[359px] flex overflow-hidden'>
          <div className='ml-10 pt-20 leading-loose font-mono'>
            <h3 className='deal font-extrabold text-3xl'>Deal of the Day</h3>
               <h3 className='deal text-xl leading-loose'>Oraimo Earpod</h3>

               <p className='price leading-loose'>$000000123</p>
               <button className='button bg-[#2159E4] text-white text-sm h-8 w-40 rounded-lg'>Add to Cart</button>
              </div>
                  <div className='pt-10'>
                 <div className=' w-[423px] h-[368px] ml-5 pt-10 bg-[#4A4D50] rounded-tl-full'>
             <img src={airpod} alt="" className='image w-[208px] ml-[204px]'/>
        </div>
    </div>
 </div>

 <div className='box bg-[#F5F5F5]  w-[799px] h-[359px] flex overflow-hidden'>
          <div className='ml-10 pt-20 leading-loose font-mono'>
            <h3 className='deal font-extrabold text-3xl'>Deal of the Day </h3>
               <h3 className='deal text-xl leading-loose'>Nike Sneakers</h3>

               <p className='price leading-loose'>$000000123</p>
               <button className='button bg-[#2159E4] text-white text-sm h-8 w-40 rounded-lg leading-loose'>Add to Cart</button>
              </div>
                  <div className='pt-10'>
                 <div className=' w-[423px] h-[368px] ml-5 pt-20 bg-[#6CB5AE] rounded-tl-full'>
                <img src={green} alt="" className='image w-[297px]  ml-[104px]'/>
        </div>
    </div>
 </div>
    </div>
    </>
    
  )
}

export default Homepage