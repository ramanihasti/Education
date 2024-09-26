import React from 'react'

function ProgressBar(props) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between font-[cursive] text-[14px] text-teal-800'>
        <p>{props.department}</p>
        <p>✍︎ {props.traffic}</p>
      </div>

      <div className='relative h-[15px] rounded-lg overflow-hidden bg-neutral-400'>
        <div className={`absolute top-0 bottom-0 left-0 bg-[rosybrown]`}
        style={{width : props.traffic + "%"}}/>
      </div>
    </div>
  )
}

export default ProgressBar