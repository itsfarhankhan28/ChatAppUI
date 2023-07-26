/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import TextField from '@mui/material/TextField';

const page = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='px-5 py-5 h-auto w-auto flex flex-col gap-5'>
            <div className='flex flex-col text-center gap-3'>
                <div className='flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={'../IMG/MOkx logo 1.png'} alt="" />
                </div>
                <div>
                    <h1 className='text-typo-color font-bold font-rem text-2xl'>Sign up with Email</h1>
                </div>
                <div>
                    <p className='text-typo-color'>Welcome back! Sign in using your social <br /> account or email to continue us</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <TextField type='text' color="secondary" id="standard-basic" label="Your name" variant="standard" />
                <TextField type='email' color="secondary" id="standard-basic" label="Your email" variant="standard" />
                <TextField type='password' color="secondary" id="standard-basic" label="Password" variant="standard" />
                <TextField type='password' color="secondary" id="standard-basic" label="Confirm Password" variant="standard" />
            </div>
            <div className='mt-10 py-3 flex justify-center items-center bg-btn-color rounded-xl'>
                <button className='font-bold text-typo-color'>Create an account</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
