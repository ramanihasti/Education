import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function TeamCard(props) {
  return (
    <div>
        <div className='bg-fuchsia-100 flex  flex-col md:flex-row items-center gap-6 p-4'>
            <div className='h-[150px] md:h-[200px] w-[150px] md:w-[280px] rounded-2xl'>
                <img src={props.image} alt="" className= 'rounded-full h-full w-full' />
            </div>

            <div className='flex flex-col gap-2'> 
                <h2 className='font-[cursive] text-xl text-teal-800'>{props.title}     <FontAwesomeIcon icon={faUserTie} className='text-[14px]'/></h2>
                <p className='font-thin text-[16px]'>{props.platfrom}</p>
                <hr />
                <p className='font-serif '>{props.desc}</p>

                <div className='flex flex-row gap-3'>
              
                <FontAwesomeIcon icon={faXTwitter} className='border-neutral-400 border-[1px] w-3 h-3 p-1 rounded-md hover:border-black'/>
                <FontAwesomeIcon icon={faFacebook} className='border-neutral-400 border-[1px] w-3 h-3 p-1 rounded-md hover:border-black'/>
                <FontAwesomeIcon icon={faInstagram} className='border-neutral-400 border-[1px] w-3 h-3 p-1 rounded-md hover:border-black'/>
                <FontAwesomeIcon icon={faLinkedin} className='border-neutral-400 border-[1px] w-3 h-3 p-1 rounded-md hover:border-black'/>
              
            </div>
        </div>
            </div>

    </div>
  )
}

export default TeamCard