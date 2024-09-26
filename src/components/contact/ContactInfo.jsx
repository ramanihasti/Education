import React from 'react'
import Information from './Information';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const contactData = [
    {
        id:1,
        icon: faLocation,
        name:"Address",
        desc:"A-108, AR Mall, Mota varachha, Surat.",
    },
    {
        id:2,
        icon: faPhone,
        name:"Call Us",
        desc:"+91 99784 56732",
    },
    {
        id:3,
        icon: faEnvelope,
        name:"Email Us",
        desc:"silverhub@gmail.com",
    },
    {
        id:4,
        icon: faClock,
        name:"Open Hour",
        desc:"Mon-Sat 8AM-6PM",
    },
];

function ContactInfo() {
  return (
    <>
       <div className="bg-[#224944] text-neutral-100 p-8 flex flex-col gap-8">
          {contactData.map((info) => {
            return <Information key={info.id} info={info}/>
          })}
       </div>
    </>
    
  )
}

export default ContactInfo