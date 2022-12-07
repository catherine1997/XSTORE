

// export default Electronics
import React from 'react'
import Shoe from "../../assets/images/shoes.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Electronic.css"




const Electronics = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 7000,
  } 
  return (
    <>
    <div className='max-w-[80%] overflow-hidden m-5 ' >
    <Slider {...settings}>
      <div className=' m-5 bg-[#EDEDED] h-[608px] max-w-screen-xlg'>
  
      <div className=' flex leading-12 font-sans text-5xl font-medium text-[#171717] pt-20 '>
        <div className='p-18 ml-20 mt-10 leading-snug' >
        <h3 >Celebrate your Fest </h3>
         <h3>with <b>Nike</b> Shoes</h3>
         <p className='text-sm text-[#4B4B4B]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum voluptate adipisci modi aut, praesentium in, eius voluptates facere cum blanditiis error amet. Iusto suscipit ad voluptate nam veritatis ipsam ipsum.</p>
            <br/>
         <button className=' w-[231px] h-[60px] bg-[#2159E4] rounded-xl text-[#FFFFFF]' ><p className='text-xl'>Shop Now</p></button>
        </div>
         <img src={Shoe} alt="" className='image w-[623px] h-[468px] mb-20 mr-5'/>
      </div>
      </div>

      <div className='m-5 bg-[#EDEDED] h-[608px] max-w-screen-xlg'>
  
  <div className=' flex leading-12 font-sans text-5xl font-medium text-[#171717] pt-20 '>
    <div className='p-18 ml-20 mt-10 leading-snug' >
    <h3 >Celebrate your Fest </h3>
     <h3>with <b>Nike</b> Shoes</h3>
     <p className='text-sm text-[#4B4B4B]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum voluptate adipisci modi aut, praesentium in, eius voluptates facere cum blanditiis error amet. Iusto suscipit ad voluptate nam veritatis ipsam ipsum.</p>
        <br/>
     <button className='w-[231px] h-[60px] bg-[#2159E4] rounded-xl text-[#FFFFFF]' ><p className='text-xl'>Shop Now</p></button>
    </div>
     <img src={Shoe} alt="" className='w-[623px] h-[468px] mb-20 mr-5'/>
  </div>
  </div>
      </Slider>
    </div>

    </>
  )
}

export default Electronics
