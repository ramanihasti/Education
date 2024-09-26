import React from 'react'
import Title from "../../src/components/common/Title"
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

function Contact() {
  return (
    <>
       <Title
       title1="Contact "
       title2="US"
       desc="We have lost contact with reality, the simplicity of life." />
    
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 px-24 py-8">
      <ContactInfo />
      <ContactForm />
    </div>
    </>
  )
}

export default Contact