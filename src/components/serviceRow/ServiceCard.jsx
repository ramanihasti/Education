import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ServiceCard(props) {
  return (
    <>
      <div className='bg-[silver] border-zinc-400 border-2 rounded-xl'>
        <div className='flex flex-col gap-2 p-3'>
           <div>
              <img src={props.image} alt="" className='rounded-2xl'/>
           </div>
           
           <div className='flex flex-row justify-between'>
            <button className='bg-neutral-700 text-gray-300 ml-2 rounded-full py-1 px-2 font-serif hover:bg-neutral-900'>{props.button}</button>
            <p className='font-thin'>$ {props.dolor}</p>
           </div>
           <h2 className='text-lg font-serif text-zinc-950'>✩ {props.title}</h2>
           <p className='text-base font-serif'> 🢡  {props.desc}</p>
           <hr />
           <div className='flex flex-row items-center gap-4'>
            <img src={props.img} alt="" className='rounded-full h-14 w-14'/>
            <p className='font-thin'>{props.name}</p>
               
               <div className='flex flex-row flex-1 items-center justify-end gap-2 font-thin '>
                <FontAwesomeIcon icon={faUser} className='hover:text-stone-800 text-blue-950'/>
                <p>{props.view}</p>
                <FontAwesomeIcon icon={faHeart} className='hover:text-stone-800 text-red-900'/>
                <p>{props.like}</p>
               </div>

           </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard