import React from 'react'
import Slider from "react-slick"

const testimontialData = [
  {
    id:1,
    name:"کوروش",
    text: "سلام من کوروش هستم این نمونه سایت هست",
    img: "https://picsum.photos/101/101",
  },
   {
    id:1,
    name:"علی",
    text: "نظرات خودتونو بهم بگین خوشحال میشم",
    img: "https://picsum.photos/102/102",
  },
   {
    id:1,
    name:"محمد",
    text: " حتما امتحان کنید! ",
    img: "https://picsum.photos/103/103",
  },
];
 
const Testimonial = () => {
var settings = {
  dots: true,
  arrow:false,
  infinite: true,
  speed: 500,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed:2000,
  cssEase:"linear",
  pauseOnHover: true,
  pauseOnFocus: true,
};

// export default function Testimonial()
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="300" className='py-10'>
      <div className='container'>
        <div className='text-center mb-20 max-w-[400px] mx-auto '>
          <h1 className='text-3xl font-bold'>  نظرات شما </h1>
        </div>
        <div 
        data-aos="zoom-in"
        data-aos-duration="300"
        className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 bg-gray-600 rounded-3xl '
        >
          <Slider {...settings} >
            {testimontialData.map((data) =>{
              return(
                <div className='my-6'> 
                <div
                key={data.id}
                className='flex flex-col justify-center items-center gap-4 text-center  '
                >
                  <img 
                  className='rounded-full block mx-auto  '
                  src={data.img}
                  alt=""
                  />
                  <p className=' text-sm text-white'>{data.text} </p>
                  <h1 className='text-xl text-black font-bold'>{data.name} </h1>
                  <p className="text-red-500 text-9xl font-serif absolute top-100 left-0">
                    ,,
                  </p>

                </div>
                </div>
              );
            })}

          </Slider>

        </div>
      </div>
    </div>
    

    </>
    
  );
};
export default Testimonial;
