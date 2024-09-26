import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import Slide from './Slide';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    pauseOnHover: false,
  };

function Carouser(props) {
  return (
    <div className='relative h-[70vh] md:h-[92vh] overflow-hidden'>
        <div className="absolute text-neutral-200 top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3">
             <h2 className="text-2xl text-[#8b5c3b] font-[cursive] font-bold ">◈ {props.title}</h2>
             <p className='font-serif text-[16.5px] font-semibold text-[#a68777] max-w-[500px]'>{props.desc}</p>
        </div>
        <Slider 
        {...settings}
        >
            {props.sliderData.map((value) => {
                return <Slide img={value.img}/>
            })}
        </Slider>
    </div>
  )
}

export default Carouser