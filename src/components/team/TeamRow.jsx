import React from 'react'
import Title from '../common/Title'
import TeamCard from './TeamCard'

function TeamRow() {

  const team = [
    {
      image:"/images/09.jpg",
      title:"Viyan Sheladiya",
      platfrom:"Chief Executive Officer",
      desc:"The CEO is responsible for making major corporate decisions,supervising other executives." ,  
    },
    {
      image:"/images/10.jpg",
      title:"Dency Khunt",
      platfrom:"CTO",
      desc:"The CTO is often in charge of research and development, product engineering, and formulating.",
    },
    {
      image:"/images/11.jpg",
      title:"Naina Ribadiya",
      platfrom:"Product manager",
      desc:"A product manager is the person who identifies the customer need customer requirements.", 
    },
    {
      image:"/images/12.jpg",
      title:"Aarush Vora",
      platfrom:"Accountant",
      desc:"Accountants ensure all financial records and statements are in line with laws, regulations.", 
    }
  ];
  return (
    <>
       <Title 
       title1="Team "
       title2="Section"
       desc=" “Telent wins games, but teamwork and intelligence win championships.” "/>

       <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-x-12 gap-y-8'>
           {
            team.map((value) => {
              return <TeamCard 
              image={value.image}
              title={value.title}
              platfrom={value.platfrom}
              desc={value.desc}/>
            })
           }
       </div>
       
           {/* <TeamCard 
           image="/images/09.jpg"
           title="Viyan Sheladiya"
           platfrom="Chief Executive Officer"
           desc="The CEO is responsible for making major corporate decisions,supervising other executives."
           />
           
           <TeamCard 
           image="/images/10.jpg"
           title="Dency Khunt"
           platfrom="CTO"
           desc="The CTO is often in charge of research and development, product engineering, and formulating."
           />
           
           <TeamCard 
           image="/images/11.jpg"
           title="Naina Ribadiya"
           platfrom="Product manager"
           desc="A product manager is the person who identifies the customer need customer requirements."
           />

           <TeamCard 
           image="/images/12.jpg"
           title="Aarush Vora"
           platfrom="Accountant"
           desc="Accountants ensure all financial records and statements are in line with laws, regulations."
           /> */}
    </>
  )
}

export default TeamRow