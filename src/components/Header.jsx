import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='flex flex-wrap bg-transparent gap-3 justify-center shadow-lg text-white  rounded-3xl bg-  font-serif px-3 py-2'>
        <ul className='flex'>
            <Link className='mx-4' to="/">Home</Link>
            <Link className='mx-4' to="/about">About</Link>
            <Link className='mx-4' to="/contact">Contact</Link>
        </ul>
    </div>
  )
}

export default Header