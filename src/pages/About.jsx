import React from 'react'
import TeamRow from '../components/team/TeamRow'
import Carouser from '../components/carouser/Carouser';

function About() {
  const sliderData = [
    {
      id:1,
      img:"/images/18.jpg",
    },
    {
      id:2,
      img:"/images/19.jpg",
    },
    {
      id:3,
      img:"/images/20.jpg",
    },
    {
      id:4,
      img:"/images/21.jpg",
    },
    {
      id:5,
      img:"/images/22.jpg",
    },
    {
      id:1,
      img:"/images/23.jpg",
    },
  ];

  return (
    <>
      <Carouser 
      title="EDUCATION TEAM"
      sliderData={sliderData}
      desc="“Education is the most powerful weapon which you can use to change the world.” "
      />
       <TeamRow />
    </>
  )
}

export default About