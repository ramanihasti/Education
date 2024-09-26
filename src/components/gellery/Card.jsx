import React from 'react'

function Card(props) {
  return (
    <div className="h-[270px] w-full ">
        <img src={props.image.img} alt="" className="object-cover w-full h-full hover:shadow-md hover:shadow-[#000000c1]"/>
    </div>
  )
}

export default Card