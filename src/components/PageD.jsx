import React from 'react'
import image1 from '../assets/A4 - 2.png'
import image3 from '../assets/A4 - 3.png'
import image2 from '../assets/Resume_Sample1.png'


const PageD = () => {
  return (
    <div className='p-16 bg-grey flex'>
        
        <div className='w-1/2 flex flex-col gap-6'>
            <h1 className='text-5xl font-bold text-medblue'>You can always pick any template you like</h1>
            <h2 className='text-xl text-redish font-semibold capitalize'>our services</h2>
            <p className='text-sm w-3/5 mt-8'>Choose from one of our expertly prepared resume types below, by using pre-established parts that have been endorsed by recruiters internationally, you can begin creating your resume in under 5 seconds, additionally, you can edit to fit your preferences and personality before clicking "Download". Even if you have never created a resume before, it is that SIMPLE to use!</p>
        </div>
        <div className=' flex items-center gap-3 mt-7'>
            <img src={image1} alt="" className=' h-56' />
            <img src={image2} alt="" className=' hover:scale-110 duration-300'/>
            <img src={image3} alt="" className=' h-56' />
        </div>
    </div>
  )
}

export default PageD