import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function AccordianItem(props) {
    const [isVisible , setIsVisible] = useState(false);

    function handleShow(){
        setIsVisible(!isVisible)
    }

  return (
    <>
    <div className="bg-neutral-100 py-2 px-6 border border-slate-200 rounded-md">
        <div className="flex items-center justify-between "> 
            <p className="flex items-top gap-2 font-[cursive]  text-teal-900 hover:text-teal-800 font-semibold">
                <span>{props.faq.id}.</span>
                <span>{props.faq.que}</span>
            </p>
            
            <button onClick={handleShow}>
                {isVisible ? 
                <FontAwesomeIcon icon={faChevronDown}  className="text-teal-950 hover:bg-teal-900 
                hover:text-neutral-200 border border-neutral-600 rounded-full p-0.5 text-sm"/>
                
                  :
                
                <FontAwesomeIcon icon={faChevronUp} className="text-teal-950 hover:bg-teal-900 
                hover:text-neutral-200 border border-neutral-600 rounded-full p-0.5 text-sm"/>
                }
            </button>
        </div>
       {isVisible && <p className="font-serif text-[15.5px] text-neutral-800">{props.faq.ans}</p>}
    </div>
    </>
  )
}

export default AccordianItem