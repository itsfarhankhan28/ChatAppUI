/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import TextField from '@mui/material/TextField';

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='p-5 flex flex-col gap-5'>
            <div className='flex flex-col gap-3 text-center'>
                <div className='text-xl font-bold text-typo-color'>Login to Mokx</div>
                <div>
                    <p className='text-typo-color'>Welcome back! Sign in using your social <br /> account or email to continue us</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div>
                        <img className='cursor-pointer' src={'../IMG/logo1.png'} alt="" />
                    </div>
                    <div>
                        <img className='cursor-pointer' src={'../IMG/logo2.png'} alt="" />
                    </div>
                    <div>
                        <img className='cursor-pointer' src={'../IMG/logo3.png'} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <div className='border border-gray w-[130px]'></div>
                <div className='text-gray-300'>OR</div>
                <div className='border border-gray w-[130px]'></div>
            </div>
            <div className='flex flex-col gap-3'>
            <TextField type='email' color="secondary" id="standard-basic" label="Your email" variant="standard" />
            <TextField type='password' color="secondary" id="standard-basic" label="Password" variant="standard" />
            </div>
            <div className='flex flex-col gap-3 mt-10 '>
                <div className='py-3 flex justify-center items-center bg-btn-color rounded-xl'>
                    <button className='font-bold text-typo-color'>Create an account</button>
                </div>
                <div className='py-3 flex justify-center items-center bg-none'>
                    <button className='font-bold text-btn-color'>Forgot Password?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
