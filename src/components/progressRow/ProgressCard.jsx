import React from 'react'
import Title from "../common/Title"
import ProgressBar from './ProgressBar'

function ProgressCard() {
    const progress= [
        {
            department:"Full Stack", traffic:85 ,   
        },
        {
            department:"Flutter", traffic:35 , 
        },
        {
            department:"Web Development", traffic:78,    
        },
        {
            department:"Mobile Application", traffic:49,   
        }
    ];
  return (
    <>
    <Title 
    title1="Students Coures "
    title2="Traffic"
    desc=" Anyone can change careers.“Where there is data smoke, there is business fire.”"/>
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 px-16 py-8 gap-8'>
            <div className='grow-1'>
                <img src="/images/13.jpg" alt="" className='object-cover w-full h-full rounded-xl '/>
            </div>

            <div className='grow-1 flex flex-col gap-3 p-8 bg-neutral-100 rounded-xl'>
                
                <h2 className='font-[italic] text-2xl text-teal-900 font-semibold '> “Social media is about sociology and psychology more than technology.” </h2>
                <p className='font-serif text-[17px] text-zinc-700'>Computing facilities for the students include well equipped labs. High-speed servers running on a variety of platforms to suit all kinds of requirements to support the entire network. </p>

                <div className='flex flex-col gap-4 w-[200px] md:w-[370px] justify-center ml-0  md:ml-16'>
                    {progress.map((value) => {
                        return <ProgressBar 
                        department={value.department} 
                        traffic={value.traffic}
                        />
                    })}
                    
                </div>
            </div>
        </div>
                    {/* <ProgressBar department="Full Stack" traffic="85"/>
                    <ProgressBar department="Flutter" traffic="35"/>
                    <ProgressBar department="Web Development" traffic="78"/>
                    <ProgressBar department="Mobile Application" traffic="49"/> */}
    </div>
   </> 
  )
}

export default ProgressCard