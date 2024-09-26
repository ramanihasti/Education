import React from 'react'
import Title from '../common/Title'
import PricingRowCard from './PricingRowCard'

function PricingRow() {
  const row = [
    {
      title:"Fundamentals of Computer",
      fees:23,
      feature:
      {
        one:true,
        two:true,
        three:true,
        four:false,
      }, 
    },
    {
      title:" Bachelor of Science (B.Sc.) ",
      fees:45,
      feature:
      {
        one:true,
        two:true,
        three:true,
        four:false,
      },
      activeCard:true,
      button:true, 
    },
    {
      title:"Bachelor of Theology(B.Th.)",
      fees:48,
      feature:
      {
        one:true,
        two:true,
        three:false,
        four:false,
      }, 
    }
  ];
  return (
   <>
      <Title 
      title1="Different Type "
      title2="Course"
      desc=" “Education is the most powerfull weapon which you can use to change the world !” "/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-24 gap-8'>
        {row.map((value) => {
          return (<PricingRowCard 
            title={value.title} 
            fees={value.fees} 
            feature={value.feature} 
            activeCard={value.activeCard} 
            button={value.button}
            />);
        })}
      </div>

        {/* <PricingRowCard 
        title="Fundamentals of Computer"
        fees={23}
        one
        two
        three
        four/>

        <PricingRowCard 
        title=" Bachelor of Science (B.Sc.) "
        fees={45}
        one
        two
        three
        button
        activeCard
        />

        <PricingRowCard 
        title="Bachelor of Theology(B.Th.)"
        fees={48}
        one
        two
        /> */}
   </>
)
}

export default PricingRow