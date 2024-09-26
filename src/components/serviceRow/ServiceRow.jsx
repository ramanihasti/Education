import React from 'react'
import Title from '../common/Title'
import ServiceCard from './ServiceCard'

function ServiceRow() {

   const service = [
      {
         image:"/images/03.jpg",
         button:"Web Development",
         dolor:"169",
         title:"Website Design",
         desc:"Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.usually for a limited time.",
         name:"Hirvan Patel",
         view:"50",
         like:"65",
         img:"/images/06.jpg",  
      },
      {
         image:"/images/04.jpg",
         button:"Marketing",
         dolor:"250",
         title:"Search Engine Optimization",
         desc:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic. ",
         name:"Alka Shah",
         view:"45",
         like:"60",
         img:"/images/07.jpg",
      },
      {
         image:"/images/05.jpg",
         button:"Content",
         dolor:"110",
         title:"Copywriting",
         desc:"A copyright is a type of intellectual property that gives the creator of an original work, or another right holder, the exclusive and legally secured right to copy, distribute, adapt, display, and perform a creative work.",
         name:"Venza Pande",
         view:"35",
         like:"85",
         img:"/images/08.jpg",
      }
   ];

  return (
    <>
       <Title 
       title1="Popular "
       title2="Courses"
       desc=" “Set your course by the stars, not by the lights of every passing ship.” "/>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 py-8'>
         {
            service.map((value) => {
               return <ServiceCard 
               image={value.image}
               button={value.button}
               dolor={value.dolor}
               title={value.title}
               desc={value.desc}
               view={value.view}
               like={value.like}
               img={value.img}
               />
            })
         }
       </div>
          {/* <ServiceCard 
          image="/images/03.jpg"
          button="Web Development"
          dolor="169"
          title="Website Design"
          desc="Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.usually for a limited time."
          name="Hirvan Patel"
          view="50"
          like="65"
          img="/images/06.jpg"
           />

          <ServiceCard 
          image="/images/04.jpg"
          button="Marketing"
          dolor="250"
          title="Search Engine Optimization"
          desc="Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic. "
          name="Alka Shah"
          view="45"
          like="60"
          img="/images/07.jpg"
           />

          <ServiceCard 
          image="/images/05.jpg"
          button="Content"
          dolor="110"
          title="Copywriting"
          desc="A copyright is a type of intellectual property that gives the creator of an original work, or another right holder, the exclusive and legally secured right to copy, distribute, adapt, display, and perform a creative work."
          name="Venza Pande"
          view="35"
          like="85"
          img="/images/08.jpg"
           /> */}

    </>  
)

}

export default ServiceRow