import React, { useState } from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBook, faChess, faFilePen, faGraduationCap, faGrip, faLaptopCode, faListDots,  } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import Title from '../common/Title';

function Learning() {
const [isShow , setIsShow] = useState(false);

function handleShowList() {
    setIsShow(true)
}

function handleShowCard() {
    setIsShow(false)
}

 const data = [ 
    {
        symbol : <FontAwesomeIcon icon={faBook}/>,
        title : " Lesson Plans",
        desc : "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.",
    },
    {
        symbol : <FontAwesomeIcon icon={faFilePen}/>,
        title : "Worksheets",
        desc : "We've got a worksheet for anything your student is learning! Our printables make it easy to practice everything from handwriting to multiplication to sight words, and much more!",
    },
    {
        symbol : <FontAwesomeIcon icon={faLaptopCode}/>,
        title : "Practical Education",
        desc : "The best student laptops need to tick a lot of boxes - quality performance, good value for money, and enough battery life to get you through a full school day are three of the most vital factors.",
    },
    {
        symbol : <FontAwesomeIcon icon={faChess}/>,
        title : "Activities",
        desc : "Our curated activities bring topics to life through hands-on science experiments, creative art projects, inspirational writing prompts, and more!",
    },
    {
        symbol : <FontAwesomeIcon icon={faAward}/>,
        title : "Academic  Award",
        desc : "Academic awards is an index to articles about notable awards given for academic contributions.student other than awards to students who have made an original contribution to an fild. ",
    },
    {
        symbol : <FontAwesomeIcon icon={faGraduationCap}/>,
        title : "Graduate Degree",
        desc : "A graduate student is someone who has earned a bachelor's degree and is pursuing additional education in a specific field. ",
    },
 ];

  return (
    <>
      <Title 
      title1= "Learning "
      title2="Education"
      desc="Education is the most powerful weapon which you can use to change the world !"/>

    <div className="px-20 py-8">
         
         <div className="py-6 flex flex-row gap-4">
            <button className="bg-[#564b3a] text-neutral-200 w-[40px] h-[40px] flex items-center justify-center text-xl hover:bg-[#71614a] rounded-md border border-zinc-400" onClick={handleShowCard}>
                <FontAwesomeIcon icon={faGrip}/>
            </button>

            <button className="bg-[#564b3a] text-neutral-200 w-[40px] h-[40px] flex items-center justify-center text-xl hover:bg-[#71614a] rounded-md border border-zinc-400" onClick={handleShowList}>
                <FontAwesomeIcon icon={faListDots}/>
            </button>
         </div>
{isShow ? 

<div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {
            data.map((value , index) => {
                return <List
                key={index}
                symbol={value.symbol}
                title={value.title}
                desc={value.desc} />
            })
        }
        </div>
         
          : 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            data.map((value , index) => {
                return <Card 
                key={index}
                symbol={value.symbol}
                title={value.title}
                desc={value.desc} />
            })
        }
        </div>
}
    </div>
    </>
  )
}

export default Learning