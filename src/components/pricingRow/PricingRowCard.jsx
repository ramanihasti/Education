import { faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PricingRowCard(props) {
  return (
    <>
        <div className={`flex flex-col p-8 gap-4 bg-[tan] ${props.activeCard ? "border-t-8 border-amber-950" : ""} `}>
            <h2 className='font-serif text-xl text-stone-800 font-semibold'>{props.title}</h2>
            <div>
                <p className='font-thin'>
                    <sup className='text-xl'>$</sup>
                    <span className='font-semibold text-2xl text-stone-800'>{props.fees}</span>
                    <span>/Year</span>
                </p>
            </div>

            <ul className='flex flex-col gap-4 font-[cursive] text-[14px]'>
                <li 
                className={`flex items-start gap-2 ${
                    props.feature.one ? "" : "line-through"
                }`}
                >
                    <FontAwesomeIcon  icon={props.feature.one ? faUserCheck : faUserXmark}
                    className={`${props.feature.one ? "text-green-950" : "text-red-950"}`}/>
                    <p>
                        Effect on the success of information system development projects.
                    </p>
                </li>

                <li
                className={`flex items-start gap-2 ${
                    props.feature.two ? "" : "line-through"
                }`}
                >
                    <FontAwesomeIcon  icon={props.feature.two ? faUserCheck : faUserXmark}
                    className={`${props.feature.two ? "text-green-950" : "text-red-950"}`}/>
                    <p>
                        Benchmarking the learning capability of organizations.
                    </p>
                </li>

                <li 
                className={`flex items-start gap-2 ${
                    props.feature.three ? "" : "line-through"
                }`}
                >
                    <FontAwesomeIcon  icon={props.feature.three ? faUserCheck : faUserXmark}
                    className={`${props.feature.three ? "text-green-950" : "text-red-950"}`}/>
                    <p>
                    Information systems skills requirements: a survey.
                    </p>
                </li>

                <li
                className={`flex items-start gap-2 ${
                    props.feature.four ? "" : "line-through"
                }`}
                >
                    <FontAwesomeIcon  icon={props.feature.four ? faUserCheck : faUserXmark}
                    className={`${props.feature.four ? "text-green-950" : "text-red-950"}`}/>
                    <p>
                    Seeking consonance in information systems.
                    </p>
                </li>
                <button className={`bg-orange-800 text-neutral-300 py-1 px-0 rounded-lg border-[1px] border-stone-300 ${props.button ? "bg-orange-950 hover:bg-orange-800" : ""}`}>Pay Now</button>
            </ul>
        </div>
    </>
  )
}

export default PricingRowCard