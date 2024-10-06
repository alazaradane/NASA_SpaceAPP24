import AladinLiteViewer from '@/components/aladin'
import { pacifico } from '@/components/Home/Land'
import React from 'react'

const page = () => {
  return (
    <section className=' bg-black text-primary w-full h-screen pt-[3rem]'>
      <p className={`${pacifico.className} text-5xl my-[3rem] ml-[1rem] `} >View your faviorite <span className='purple-gradient'>exoplanets</span></p>
      <AladinLiteViewer/>
    </section>
  )
}

export default page