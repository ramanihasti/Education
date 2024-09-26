import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function GelleryModal(props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.80)] p-8 flex flex-col gap-4 items-center justify-center z-[2000]">
        <button onClick={props.toogalOpen}
        className='text-white bg-[#453c2c] py-1 px-2 rounded-md text-center text-[17.5px] font-serif  absolute right-[32px] top-[32px]'>
            close
        </button>

        <button
        className="bg-[#547170] text-neutral-100 font-[cursive] p-2 rounded absolute right-[32px] top-[50%]"
        onClick={props.nextImage}
        > 
            <FontAwesomeIcon icon={faChevronRight}/>
        </button>

        <button
        onClick={props.previousImage}
        className="bg-[#547170] text-neutral-100 font-[cursive] p-2 rounded absolute left-[32px] top-[50%]">
            
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>

        <div className="h-[100vh-80px] w-full overflow-hidden">
            <img src={props.images[props.activeIndex].img} alt="" 
            className="h-full w-auto m-auto rounded-md"/>
        </div>
    </div>
  )
}

export default GelleryModal