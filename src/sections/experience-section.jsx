import React from 'react'
import { counterItems } from '../constants'

function ExperienceSection() {
  return (
    <div id='experience' className='padding-x-lg xl:mt-0 mt-32 border-t border-[#25213b]'>
        <img src="/section.svg" alt="background" height={795} width={1572} />
        <div className='flex justify-center my-5 lg:-py-8'>
<div className='flex items-center'>

    <span className='w-24 h-[2px] bg-[#1a1443]'></span>
    <span className='w-fit text-white p-2 text-2xl'>-Experiences</span>
</div>

        </div>
    </div>
  )
}

export default ExperienceSection