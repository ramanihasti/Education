import React from 'react'

function Footer() {
  return (
    <div className='bg-stone-800 text-stone-300'>
        <div className='flex items-center justify-between p-8'>
            <p className='font-serif'>& copy@ right all institute name. All right reserved.</p>

            <ul className='flex flex-1 flex-row justify-end gap-6 font-mono'>
                <li>Contributer</li>
                <li>Terms of Services</li>
                <li>Subscribe</li>
                <li>Contact Us</li>
                <li>Software</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer