import React from 'react'
import ImageFirst from './ImageFirst'
import ContentFirst from './ContentFirst'

function InfoRow(props) {
  return (
    <>
      {(props.imgFirst) ? <ImageFirst image={props.image} desc1={props.desc1} desc2={props.desc2} desc3={props.desc3} desc4={props.desc4}/>
      :
      <ContentFirst image={props.image} desc1={props.desc1} desc2={props.desc2} desc3={props.desc3} desc4={props.desc4}/>
      }     
      
    </>
  )
}

export default InfoRow