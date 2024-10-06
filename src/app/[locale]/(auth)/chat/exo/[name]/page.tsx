"use client"
import Chat from '@/components/chat'
import { pacifico } from '@/components/Home/Land'
import { usePathname } from 'next/navigation'


import React from 'react'

const page = () => {

  const pathname = usePathname()
  const user = 'alazar'

  const planetName = pathname.split('/').pop();
  return (
    <section className=' text-primary bg-black flex flex-col pt-[5rem]'>
      <div className='my-[2rem] pl-[4rem]'>
        <p className={` ${pacifico.className} text-3xl font-bold`}>Hello <span className='purple-gradient'>{user}</span>  I'm <span>{planetName}. Let's talk!</span></p>
      </div>
      <div className='w-[100%]'>
        <Chat/>
      </div>
    </section>
  )
}

export default page