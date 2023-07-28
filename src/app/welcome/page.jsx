/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-chat-color h-screen'>
      <div className='xxsm:hidden md:visible flex justify-center items-center bg-bg-image bg-cover bg-no-repeat w-[100vw]'>
        <img className='h-[350px]' src={'../IMG/newsecondimg.png'} alt="" />
      </div>
      <div className='xxsm:visible md:hidden'>
        <img src={'./IMG/responsivesecimg.png'} alt="" />
      </div>
      <div>
        <div className='flex justify-center items-center py-5 px-5 flex-col gap-3'>
          <p className='md:gap-1.5 justify-center items-baseline font-rem'> 
            <h1 className='md:text-[30px] xxsm:text-[20px] text-white first-letter:text-[30px] leading-6'>
              Discover the timeless wisdom of <span className='md:text-[30px] xxsm:text-[20px] text-btn-color'>
              the Vedas.
            </span>
            </h1>
          </p>

      
          <p className='xxsm:flex-col gap-1.5 justify-center items-baseline font-rem md:text-xl xxsm:text-sm'>
            <h1 className='text-white'>
              Sign up and <span className='text-btn-color'>
              journey through ancient knowledge with Arya 🌟
            </span>
            </h1>
          </p>

          <div className='flex gap-3 mt-1'>
            <div>
              <img className='cursor-pointer' src={'./IMG/newlogo1.png'} alt="" />
            </div>
            <div>
              <img className='cursor-pointer' src={'./IMG/newlogo2.png'} alt="" />
            </div>
            <div>
              <img className='cursor-pointer' src={'./IMG/newlogo3.png'} alt="" />
            </div>
          </div>

          <div className='flex gap-3 justify-center items-center'>
                <div className='border border-gray-500 w-[130px]'></div>
                <div className='text-gray-500'>OR</div>
                <div className='border border-gray-500 w-[130px]'></div>
          </div>

          <div className='py-3 px-10 flex justify-center items-center bg-btn-color rounded-xl'>
                <button className='font-bold text-typo-color'>Sign up with mail</button>
          </div>

          <div className='flex gap-1 justify-center items-baseline'>
            <h1 className='text-white font-rem font-semibold'>Existing account?</h1>
            <button className='bg-none border-none text-btn-color font-semibold'>Login</button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default page
