import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Homepage() {
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
  
function submitHandler(){
    console.log('item added')
}

    
   
  return (
    <div className='m-20 ml-5 '>
        
        <h3 className='text-center text-5xl font-bold font-sans text-[#171717] ml-20 '>Top Selling Products</h3>

    <div className='grid grid-cols-6 m-10 gap-10 rounded-3xl rounded-t-3xl w-[100%]' >

        {data.map((item, index )=> {
            return (
                <div className=' bg-[#FFFFFF] shadow hover:shadow-xl mh-[546px] mw-[253px] p-5 border-slate-50 rounded-3xl shadow-[#FFFFFF]' key={index}>
                    <img src={item.image} alt="" className='w-[165px] h-[244px] '/>
                    <p className='font-serif p-2 text-sm'>{item.title}</p>
                    <h3 className='font-serif p-2 text-sm'>$. {item.price}</h3>
                    <button className='bg-[#2159E4] text-white m-0 h-10 w-40 rounded-lg text-sm' onClick={submitHandler} >add to cart</button>
                </div>
            )
        })}
    </div>
    </div>
    
  )
}

export default Homepage