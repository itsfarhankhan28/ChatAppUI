/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <div>
          <img src={'./IMG/MOkx logo 1.png'}/>
        </div>
        <div className='fixed bottom-[10%] md:w-[12%] xxsm:w-[46%] text-center flex justify-center items-center'>
          <h1 className='font-semibold text-typo-color'>
            Back to Vedas 🕉️
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}
