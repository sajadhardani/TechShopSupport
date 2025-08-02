import React from 'react'
import { FaInstagram, FaLocationArrow, FaMobile } from 'react-icons/fa6'
import Footerlogo from '../../assets/pic/a4.png'

export default function Footer() {
  return (
    
    <div className='bg-gray-100'>
      <section className='max-2-[1200px] mx-auto'>
      <div className='grid md:grid-cols-3 py-5'>

        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

        <div className="">

        <div className='py-8 px-4'> 
          <h1 className='sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3'>
            لینک های مفید
          </h1>
          <ul className={`flex flex-col gap-3`}>
            <li className='cursor-pointer'> خانه </li>
            <li className='cursor-pointer'> درباره </li>
            <li className='cursor-pointer'> خدمات </li>
            <li className='cursor-pointer'> ورود </li>
          </ul>


        </div>
        </div>
        {/* again */}
         <div className="">

        <div className='py-8 px-4'> 
          <h1 className='sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3'>
            لینک های مفید
          </h1>
          <ul className={`flex flex-col gap-3`}>
            <li className='cursor-pointer'> خانه </li>
            <li className='cursor-pointer'> درباره </li>
            <li className='cursor-pointer'> خدمات </li>
            <li className='cursor-pointer'> ورود </li>
          </ul>


        </div>
        </div>
        {/* again 2 */}
        <div className="">

        <div className='py-8 px-4'> 
          <h1 className='sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3'>
            لینک های مفید
          </h1>
          <ul className={`flex flex-col gap-3`}>
            <li className='cursor-pointer'> خانه </li>
            <li className='cursor-pointer'> درباره </li>
            <li className='cursor-pointer'> خدمات </li>
            <li className='cursor-pointer'> ورود </li>
          </ul>


        </div>
        </div>

        </div>

        <div className='py-8 px-4'>
          <h1 className='sm:text-3xl text-xl font-bold sm:text-left mb-3 flex items-center'>
            <img src={Footerlogo} alt='logo' className='max-w-[50px] ' />
            سجاد
          </h1>
          <p className='text-right'>
            از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی م
          </p>
          <br />
          <div className='flex items-center gap-3'>
            <FaLocationArrow />
              <p> تهران </p>
          </div>
          <div className='flex items-center gap-3 mt-3'>
          <FaMobile />
          <p>+98 0916 000 000</p>
          </div>
          {/* social handle */}
          <div className='flex items-center gap-2 mt-6'>
            <a href="#">
              <FaInstagram className='text-3xl'/>
            </a>
            <a href="#">
              <FaInstagram className='text-3xl'/>
            </a>
            <a href="#">
              <FaInstagram className='text-3xl'/>
            </a>
          </div>

        </div>

      </div>

      </section>
    </div>




  )
}

