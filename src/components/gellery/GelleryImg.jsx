import React, { useState } from 'react'
import { images } from './data'
import Card from './Card'
import GelleryModal from './GelleryModal';

function GelleryImg(props) {
const [isOpen , setIsOpen] = useState(false);
const [activeIndex , setActiveIndex] = useState(0);

function toogalOpen() {
  setIsOpen(!isOpen);
}

function handleImgClick(index) {
  setActiveIndex(index);
  toogalOpen();
}

function nextImage() {
  if(activeIndex < images[props.activeCard].length - 1){
    setActiveIndex(activeIndex + 1);
    // console.log("activeIndex",activeIndex)
  }
  else{
    setActiveIndex(0);
  }
}

function previousImage() {
  if(activeIndex < images[props.activeCard].length + 1){
    setActiveIndex(activeIndex - 1 );
    console.log(activeIndex);
  }else{
    setActiveIndex(0);
  }

}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">

        {images[props.activeCard].map((image , index) => {
            return  (
            <div 
            onClick={() => {
              handleImgClick(index)
            }}>
            <Card key={image.id} image={image}/>
          </div>
            );
        })}
      
      {isOpen && (
        <GelleryModal 
        toogalOpen={toogalOpen}
        images={images[props.activeCard]}
        activeIndex={activeIndex}
        nextImage={nextImage} 
        previousImage={previousImage}/>
      )}
    </div>
  )
}

export default GelleryImg