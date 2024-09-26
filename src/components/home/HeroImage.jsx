import React from 'react'

function HeroImage(props) {
  return (
    <div style={{ position: "relative"}}>
        <video src={props.video}
        autoPlay
        loop
        muted
        type="video/mp4"
        className="h-[80vh] lg:h-[90vh] w-full object-cover"
        />
    </div>
  )
}

export default HeroImage