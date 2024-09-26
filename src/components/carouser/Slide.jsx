import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


function Slide(props) {
  return (
    
    <div className="h-[92vh] relative">
        <div className='absolute top-0 left-0 right-0 bottom-0 opacity-85 bg-neutral-800 z-[70]'/>
            <img src={props.img} alt="" className='object-cover h-full w-full'/>
            
    </div>
)
}

export default Slide