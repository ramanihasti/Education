import React, { useState } from 'react'
import WebTab from '../components/gellery/WebTab'
import Title from "../components/common/Title"
import GelleryImg from '../components/gellery/GelleryImg';

function Gellery() {
   const [activeCard , setActiveCard] = useState(1);
  //  console.log(activeCard)

  return (
    <>
        <Title 
        title1="Gellery "
        title2="Section"
        desc="History is a gallery of pictures in which there are few originals and many copies..."/>

        <WebTab activeCard={activeCard} setActiveCard={setActiveCard}/>
        <GelleryImg activeCard={activeCard}/>
    </>
  )
}

export default Gellery