import React, { useState } from 'react'
import FaqsSingleItem from './FaqsSingleItem'
// import { data } from './Faqs';
import Title from '../common/Title';


const data = [
  {
      id:1,
      que:"Why did you decide to go into IT?",
      ans: "It is one of the most common IT interview questions that is frequently asked. The interviewer wishes to know your reason for joining the industry.",
  },
  {
      id:2,
      que:"What interests you about this position?",
      ans: "With this question, the recruiter wants to understand your ambition and expectations from the company. ",
  },
  {
      id:3,
      que:"How do you stay up to date about new technology?",
      ans: "IT is a very dynamic industry, and therefore to stay relevant in the industry, you must learn and grow all time.",
  },
  {
      id:4,
      que:"What do you do when you can’t solve an Issue?",
      ans: "The interviewer may ask similar or the same questions to gauge how you react in a difficult situation.",
  },
];


function FaqsSingleItemVisible() {
    const [isVisibleId , setIsVisibleId] = useState(1);
    // console.log(isVisibleId)

    function showFaqsAns(id) {
      setIsVisibleId(id)
    }

  return (
    <>
    <Title 
    title1="FAQs "
    title2="Department"
    desc=" The interviewer wishes to know your reason for joining the industry."/>
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 py-8 gap-8">
      <div className="flex flex-col gap-4">
        {data.map((faq) => {
            return <FaqsSingleItem 
            key={faq.id}
            faq={faq}
            isVisibleId={isVisibleId}
            showFaqsAns={showFaqsAns}
            />

        })}
      </div>
      <div>
            <img src="/images/24.jpg" alt="" />
      </div>
    </div>
    </>
  )
}

export default FaqsSingleItemVisible