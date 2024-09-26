import React from 'react'

const wokTab = [
    {id:1 , name: "All"},
    {id:2 , name: "Classes"},
    {id:3 , name: "AI"},
    {id:4 , name: "App"},
];

function WebTab(props) {
  return (
    <div>
        <ul className="flex items-center justify-center gap-4 p-8">
            {wokTab.map((tab) => {
                return <li key={tab.id} 
                className="bg-[#2d5252] hover:bg-[#223e40] text-neutral-200 px-4 py-2 rounded-lg font-serif drop-shadow-md text-[16.7px]"  
                onClick={() => {
                  props.setActiveCard(tab.id)
                }}
                >{tab.name}</li>
            })}
        </ul>
    </div>
  )
}

export default WebTab