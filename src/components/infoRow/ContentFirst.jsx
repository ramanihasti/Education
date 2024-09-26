import React from 'react'
import Title from '../common/Title'

function ContentFirst(props) {
  return (
    <>
    <Title 
    title1="Marketing "
    title2="Info"
    desc="“Ignoring online marketing is like opening a business but not telling anyone.”  "/>

    <div className='grid grid-cols-1 md:grid-cols-2 p-8 gap-8'>

         <div className='grow-1 p-4 font-serif text-[17px] flex flex-col  gap-2 text-neutral-900'>
             <p>{props.desc1}</p>
             <p>✯ {props.desc2}</p>
             <p>✯ {props.desc3}</p>
             <p>✯ {props.desc4}</p>
             <button className='bg-neutral-800 py-1 rounded-lg text-neutral-400 w-28 hover:bg-neutral-900'>Learn More</button>
         </div>

         <div className='grow-1 h-[400px]'>
             <img src={props.image} alt="" className='w-full h-full rounded-md' />
         </div>

    </div>
 </>
  )
}

export default ContentFirst