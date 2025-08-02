import React from 'react'
 import  img from "../../assets/pic/a1.png"
 import banner from "../../assets/pic/b4.jpg"
import { FaBagShopping } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { SiFsecure } from "react-icons/si";


export default function Banner() {
  return (
    <div className='min-h-[550px] '>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 '>

        <div className='container'>
          <div
          data-aos="fade-up" data-aos-anchor-placement="top-center"
          className='grid grid-cols-1 sm:grid-cols-2 gap-6'>


          <div >
            <img src={img}
            className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] '
                />

          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            
            <h1 className='font-bold text-4xl text-center'> چرا فروشگاه ما؟ </h1>
            <p>
              از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزاره
            </p>
            <div className='flex justify-center gap-6 '>
              <div>
                <SiFsecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-yellow-500'/>
              </div>
                <div>
                  <GrSecure  className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500'/>
                </div>
                <div className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-red-500'>             
              <FaBagShopping />
                </div>    
             
            </div>

     <div className='flex justify-center'>
              <button className='bg-gradient-to-r from-yellow-300 to-yellow-700
          text-white py-1 px-4 rounded-full flex items-center gap-3'> 
          ثبت سفارش </button>
            </div>
           
            

          </div>

          </div>

        </div>

        </div>

    </div>
  )
}
