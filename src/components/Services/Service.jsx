import React from 'react'
import Img from '../../assets/pic/a3.png'
import Img2 from '../../assets/pic/a2.png'
import Img3 from '../../assets/pic/a4.png'


const servicesData=[
    { 
    id:1,
    img:Img,
    name:"تعمیرات نرم افزار",
    desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
    }, 
     { 
    id:2,
     img:Img2,
    name:"تعمیر سخت افزار",
    desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
    }, 
     { 
    id:3,
     img:Img3,
    name:"پشتیبانی  ",
    desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
    },
]


export default function Service() {
  return (
    <div className='py-10'>

      <div className='container'>
        
        <div className='text-center mb-20 max-w-[400px] mx-auto  '>
<h1 className='text-3xl font-bold'> خدمات ما</h1>

        </div>
        <div 
        data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector"
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5
        place-items-center'>
          {
            servicesData.map((service)=> (
              <div className='rounded-2xl bg-white hover:bg-blue-500 hover:text-white
              relative shadow-xl duration-hight group max-w-[300px] '>
                <div className='h-[100px]  '>
                <img src={service.img} 
                className='max-w-[200px]  block max-auto transform 
                -translate-y-14 pl-9 pb-10   group-hover:scale-105 group-hover:rotate-6 duration-300'
                />
                </div>
                <div className='py-4 text-center'>

                  <div className='w-full'>
                
                  </div>

                  <div className=''>
                    <h1 className='tex-xl font-bold'>{service.name} </h1>
                    <p>{service.desc} </p>
                  </div>

                </div>

              </div>
            ))
          }

        </div>
        
        </div> 
      
      
      
      </div>
  )
}
