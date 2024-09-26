import React from 'react'

function Title(props) {
  return (
    <div className='text-center p-6'>

        <h2 className="relative font-serif font-semibold text-2xl text-neutral-600 mb-[22px]
        
        after:content-[''] 
        after:absolute after:block after:w-[60px] after:h-[3px] after:bg-cyan-950 after:left-0 after:right-0 after:m-auto
        
        before:content-[''] 
        before:absolute before:block before:w-[200px] before:h-[1px] after:bottom-[-16px] before:bottom-[-15px] before:bg-neutral-300 before:left-0 before:right-0 before:m-auto
        ">{props.title1}
        <span className='text-teal-700'>{props.title2}</span>
        </h2>
        
        <p className='font-thin text-base text-gray-800'>{props.desc}</p>

    </div>
  )
}

export default Title