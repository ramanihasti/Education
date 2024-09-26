import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FaqsSingleItem(props) {
  return (

    <div className="bg-fuchsia-50 border border-neutral-200 p-4 rounded-md flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
            <p className='flex item-top gap-2 font-[cursive] font-semibold text-teal-900 hover:text-teal-800 text-[14.5px]'>
                <span>{props.faq.id}.</span>
                <span>{props.faq.que}</span>
            </p>
            
            <button onClick={() => {
                props.showFaqsAns(props.faq.id)
            }}>
                
                {props.isVisibleId === props.faq.id 
                ?
                <FontAwesomeIcon icon={faChevronUp} className="text-teal-950 hover:bg-teal-900 
                hover:text-neutral-200 border border-neutral-600 rounded-full p-0.5 text-sm"/>
                :
                <FontAwesomeIcon icon={faChevronDown} className="text-teal-950 hover:bg-teal-900 
                hover:text-neutral-200 border border-neutral-600 rounded-full p-0.5 text-sm"/>
            }
            </button>
        </div>
        {props.isVisibleId === props.faq.id && <p className="text-neutral-800 font-serif text-[15.5px]">{props.faq.ans}</p>}
    </div>
  )
}

export default FaqsSingleItem