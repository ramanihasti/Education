import React from 'react'
import CounterCard from './CounterCard';
import Title from '../common/Title';

function CounterRow() {
    const counting = [
        {
            id:1,
            image: "/images/14.jpg",
            count:56,
            title:"Data Structure",
        },
        {
            id:2,
            image: "/images/15.jpg",
            count:67,
            title:"Software Design",
        },
        {
            id:3,
            image: "/images/16.jpg",
            count:43,
            title:"Web Developing",
        },
        {
            id:4,
            image: "/images/17.jpg",
            count:92,
            title:"Machine Learning",
        }
    ];
  return (
    <>
    <Title 
    title1="Success is "
    title2="Future"
    desc="Everything's always ending. But everything's always beginning, too."/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 px-8 gap-6 '>
        {counting.map((value) => {
            return <CounterCard key={value.id} count={value.count} title={value.title} image={value.image}/>
        })}
    </div>
    </>
  )
}

export default CounterRow