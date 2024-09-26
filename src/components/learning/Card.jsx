import React from 'react'

function Card(props) {
  return (
    <div className="bg-neutral-100 border border-neutral-400 rounded-lg overflow-hidden p-8 text-center flex flex-col items-center justify-center gap-6">
        <div className="bg-[#754e38] hover:bg-[#583b2a] w-[45px] h-[45px] flex items-center justify-center rounded-md hover:shadow-md hover:shadow-[#7d715f]">
            <p className="text-neutral-200">{props.symbol}</p>
        </div>

        <div className="flex flex-col gap-2">
            <h2 className="font-serif font-semibold text-xl text-teal-900">{props.title}</h2>
            <p className="font-[cursive] text-[#544a3f]">{props.desc}</p>
        </div>
    </div>
  )
}

export default Card