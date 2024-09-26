import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-stone-800 text-slate-300'>
        <div className='flex item-center justify-between p-8'>
            <h2 className='text-[22px] font-serif text-violet-300 hover:text-violet-400'>🎓SILVER IT HUB</h2>

        <ul className='flex gap-4  font-thin text-base'>
            <li className='hover:text-sky-200'>
              <Link to="/" >Home</Link>
            </li>

            <li className='hover:text-sky-200'>
              <Link to="/about" >About</Link>
              </li>

            <li className='hover:text-sky-200'>
              <Link to="/service">Service</Link>
            </li>

            <li className='hover:text-sky-200'>
              <Link to="/gellery">Gellery</Link>
            </li>

            <li className='hover:text-sky-200'>
               <Link to="/education" >Education</Link>
            </li>

            <li className='hover:text-sky-200'>
               <Link to="/contact" >Contact</Link>
            </li>

        </ul>
        </div>
    </nav>
  )
}

export default Navbar