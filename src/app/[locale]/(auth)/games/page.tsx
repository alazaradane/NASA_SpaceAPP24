import { ExpandableCardDemo } from '@/components/GameCard'
import { pacifico } from '@/components/Home/Land'
import React from 'react'

const page = () => (
  <section className='bg-black text-primary h-screen pt-[3rem]'>
    <div>
     <ExpandableCardDemo />
    </div>
    <div className=' mt-[3rem] text-center'>
      <p className={`${pacifico.className} text-4xl font-bold`}> Want to refersh your exoplanet knowledge: 👉<a href={'https://youtu.be/Y1cm08eGW1s?si=u98ChbDBd1OY-Stt'}><span className='purple-gradient'>Dagi Video</span></a></p>
    </div>
  </section>
)

export default page