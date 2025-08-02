import React, { useState } from 'react'
import Image_1 from '../../assets/pic/a1.png'
import Image_2 from '../../assets/pic/a2.png'
import Image_3 from '../../assets/pic/a3.png'
import '../../index.css';

const ImageList=[
    {
        id:1,
        img:Image_1,
    },  {
        id:2,
        img:Image_2,
    },  {
        id:3,
        img:Image_3,
    },
]


function Hero() {

const [imageId , setImageId] = useState(Image_1)

  return (
   
    <div className='bgImage min-h-[550px] sm:min-h-[600] bg-gray-100
    flex justify-center items-center duration-200 '>
       
        


        <div className='container pb-8 sm:pb-0'>
            
        
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center '>
            <h1 className='text-5xl sm:text-6x1 lg:text-7x1 font-bold  text-white'> 
                به فروشگاه من {""}
                <span className='text-blue-500'> خوش آمدید</span>
            </h1>
            <p className='text-sm text-white'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت </p>
            <div> 
             <button className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 duration-300  text-white  rounded-full py-2 px-4'> ثبت سفارش</button>

            </div>
            </div>

  <div className='min-h-[450px] sm:min-h-[550px] flex justify-center items-center
         relative order-1 sm:order-2 '>
            <div className='h-[300px] sm:h-[450px] overflow-hidden  flex justify-center items-center'>
            <img 
            src={imageId}
            className='w-[300px] sm:w-[450px] sm:scale-124 mx-auto spin '
            
            />
            </div>
            <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/35 rounded-full '>
            {
                ImageList.map((item)=> (
                    <img 
                    className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 '
                    src={item.img}
                    onClick={()=>{
                        setImageId(
                            item.id===1
                            ? Image_1
                            : item.id===2
                            ? Image_2
                            : Image_3
                        )
                    }}
                    />
                ) )
            }
            </div>
            
        </div >


           
            {/* image section */}
    
      

         </div>
        </div>

</div>
       


  )
}

export default Hero