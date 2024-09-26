import React from 'react'
import emailjs from '@emailjs/browser';

function ContactForm() {
    function handleSubmit(e) {
      e.preventDefault();

      emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(() => {
          alert('SUCCESS!');
          e.target.reset();
        })
        .catch((error) => {
          alert('FAILED...', error.text);
        },
      );
    }

  return (
    <form  className= "flex flex-col gap-4 shadow-sm bg-[#396d66b9] shadow-[#2a2828c7] px-12 py-8 " onSubmit={handleSubmit}>

      <div className="text-[15.5px] font-[italic] text-teal-950 flex flex-col gap-3">

        <div className='flex flex-col gap-2'>
          <label >Student Name :</label>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
        
            <input 
            id="name"
            type="text"
            name="fname"
            required
            placeholder="First Name"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[13.5px]"
            />
            <input 
            id="name"
            type="text"
            name="lname"
            required
            placeholder="Middle Name"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[13.5px]"
            />
            <input 
            id="name"
            type="text"
            name="fullname"
            required
            placeholder="Last Name"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[13.5px]"
            />
        </div>

      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
         <div className="flex flex-col grow-1">
          <label>Birth Date:</label>
            <input 
            id="bod"
            type="date"
            name="bod"
            required
            placeholder="BOD"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[14.5px]"
            />
          </div>
          <div className="flex flex-col grow-1">
            <label> Gender :</label>
            <select 
             id="gender"
             type="text"
             name="gender"
             required
             placeholder="select A Gender"
             className="h-8  border border-teal-900 rounded-md  placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[14.5px]" >

            <option value="">Select a Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">N/A</option>
          </select>
          </div>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
         <div className="flex flex-col grow-1">
          <label>Student Email:</label>
            <input 
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email Id"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[14.5px]"
            />
          </div>

          <div className="flex flex-col grow-1">
          <label>Mo no. :</label>
          <input 
          type="tel" 
          id="phone" 
          name="phone" 
          required
          placeholder="123-456-7890" 
          className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[14.5px]"/>
          </div>
      </div>  

      <div className="flex flex-col">
          <label>Address:</label>
            <input 
            id="address"
            type="text"
            name="address"
            required
            placeholder="Current Address"
            className="h-8 border border-teal-900 rounded-md p-4 placeholder:text-[#5c7676e1] placeholder:font-[cursive] placeholder:text-[14.5px]"
            />
      </div>

      <div>
        <label>Additional Comments :</label>
        <textarea 
        type="text"
        name="comments" 
        id="comments"
        required
        cols={78} 
        rows={3}  
        className='border border-teal-900 rounded-md sm:max-w-[150px] md:max-w-[540px] lg:max-w-none'   
        />
      </div>

      <div className="flex items-center justify-center">
        <button
        type='submit'
        className='bg-teal-800 text-neutral-200 p-2 w-[100px] rounded-md hover:bg-teal-900 shadow-md shadow-[#1a1919]'
        >Submit
        </button>
      </div>
  </div>    
    </form>
  )
}

export default ContactForm