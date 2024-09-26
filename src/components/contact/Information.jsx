import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Information(props) {

  return (
    <div className= "flex flex-col md:flex-row items-center gap-4 shadow-sm bg-[#396d66b9] shadow-[#2a2828c7] px-4 py-3">
        <div>
            <FontAwesomeIcon icon={props.info.icon} className='h-[20px] w-[20px] rounded-full  p-2  bg-[#2a524db9] hover:bg-neutral-100 hover:text-teal-800 cursor-pointer'/>
        </div>
        
        <div className='sm:text-center md:text-start'>
            <h2 className="font-[cursive] text-[16px]">{props.info.name}</h2>
            <p className="font-[italic]  max-w-[130px] md:max-w-none">{props.info.desc}</p>
        </div>
    </div>  
  )
}

export default Information

//<div className='flex items-center gap-4 shadow-sm bg-[#2d5852b9] shadow-[#2a2828c7] px-4 py-3' onClick={showDiv} className={`${isVisible ? 'h-[20px] w-[20px] p-2  bg-[#33625cb9] hover:bg-neutral-100 hover:text-teal-800 rounded-full' : ""}`}>