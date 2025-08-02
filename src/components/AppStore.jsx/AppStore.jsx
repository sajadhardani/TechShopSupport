import React from 'react'
import banner1 from "../../assets/pic/s2.png"
import playstore from "../../assets/pic/s1.png"
// import Gif from "../../assets/b2.jpg"

export default function AppStore() {
  return (

    <div className='bg-gray-100 py-14'>
        <div className='container'>

            <div
            data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
            className='grid sm:grid-cols-2 grid-cols-1 items-center gap-4'>


                <div className='space-y-6 max-w-xl mx-auto'>

                <h1 className='text-2xl text-center sm:text-4xl'>
                   android و ios  اپلیکیشن ما برای 
                </h1>
                <div className='flex flex-wrap justify-center sm:justify-start items-center  '>
                <img 
                className='max-w-[150px] sm:max-w-[120px] md:max-2-[200px]   '
                src={banner1}
                />
                <img 
                className='max-w-[150px] sm:max-w-[120px] md:max-2-[200px]  '
                src={playstore}
                />
                </div>

                </div>

                <div className='bg-white'>
                        <img src='' className='w-full sm:max-w-[60%] block rounded-md mx-auto
                        mix-blend-multiply '/>
                </div>

            </div>

        </div>
        
        </div>

  )
}
