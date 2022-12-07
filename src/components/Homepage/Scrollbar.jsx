import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import {MdChevronRight, MdChevronLeft} from 'react-icons/md'




function Scrollbar({addToCart}) {
    const [data, setdata] = useState([])
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setdata(response.data)
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    },[] )

    // const slideLeft =() => {
    //     var slider = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft -500
    // }

    // const slideRight =() => {
    //     var slider = document.getElementById('slider');
    //     slider.scrollLeft = slider.scrollLeft + 500
    // }



  return (
    <div className='m-32 '>
       <h3 className='text-center text-5xl font-bold font-sans text-[#171717] ml-20 '>Popular Products in Cars and Automobile</h3>

         {/* <MdChevronLeft onClick= {slideLeft} size={40} />  */}
    <div id='slider' className='w-[100%] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth '>
   
    <div className='flex items-center m-10 gap-10 rounded-3xl rounded-t-3xl w-[100%]' > 
   
    {data.map((item, index )=> {
        
        return (
            <div className=' bg-[#FFFFFF] shadow hover:scale-105 cursor-pointer ease-in-out duration-300 max-h-[546px] max-w-[253px] p-5 border-slate-50 rounded-3xl shadow-[#FFFFFF] hover:w-[548px]' key={index}>
                <img src={item.image} alt="" className='w-[165px] h-[244px] '/>
                {/* <p className='font-serif p-2 text-sm'>{item.title}</p> */}
                <h3 className='font-serif p-2 text-sm'>$. {item.price}</h3>
                <button className='bg-[#2159E4] text-white m-0 h-10 w-40 rounded-lg text-sm' onClick={() => addToCart(item)} >add to cart</button>
            </div>
        )
    })} 
</div>
</div>
{/* <MdChevronRight onClick={slideRight} size={40} /> */}
</div>
  )
}

export default Scrollbar