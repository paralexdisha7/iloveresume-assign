import React from 'react'
import image from '../assets/EDITOR1.png'


const PageA = () => {
  return (
    <div className='mt-16 flex mx-auto'>
        <div className='w-1/2  flex flex-col justify-center gap-8 items-start '>
            <h1 className='font-bold text-5xl '>Optimize <span className='text-redish'>Your Resume</span> for ATS and Hiring Leads</h1>
            <p className='w-2/3'>Get instant feedback with our free AI checker, scanning 20+ crucial areas, designed and moderated by top recruiters to boost your job search effectively</p>
            <button className='p-3 px-10 rounded-2xl bg-medblue text-white font-bold hover:scale-105 duration-200 hover:bg-darkblue'>Get Your Resume Score</button>
        </div>
        <img src={image} alt="" />
        


    </div>
  )
}

export default PageA