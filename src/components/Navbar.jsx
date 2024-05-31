import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end gap-12 text-sm font-semibold pt-8'>
        <button className='border-2 border-darkblue p-2 px-8 rounded-full text-black hover:scale-105 duration-200'>Sign up</button>
        <button className='p-2 px-8 rounded-full bg-darkblue text-white hover:scale-105 duration-200'>Sign in</button>
    </div>
  )
}

export default Navbar