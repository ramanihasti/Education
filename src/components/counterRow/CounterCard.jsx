import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import CountUp from 'react-countup';

function CounterCard(props) {
  return (
    <div className=' flex flex-col p-4 gap-4 text-center'>
      <div className='relative overflow-hidden opacity-80 h-[150px] '>
        <img src={props.image} alt="" className='object-cover rounded-md w-full h-full'/>
      </div>
      <div className='absolute flex flex-col justify-center text-center ml-[100px] mt-[45px] md:ml-[75px]'>
        <h2 className='font-[cursive] text-3xl font-bold  text-neutral-200'><CountUp end={props.count} /><FontAwesomeIcon icon={faGraduationCap} className='text-xl'/></h2>
        <p className='text-teal-300 text-[17px] font-serif'>{props.title}</p>
        </div>  
    </div>
  )
}

export default CounterCard