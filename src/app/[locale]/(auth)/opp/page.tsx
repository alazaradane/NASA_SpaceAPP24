import { pacifico } from '@/components/Home/Land'
import OppCard from '@/components/OppCard'
import { OppData } from '@/constants/opp.data'
import React from 'react'

const page = () => {
  return (
    <section className='bg-black text-primary h-fit pt-[4rem] '>
      <div className=' flex pl-[3rem] '>
        <p className={`${pacifico.className} text-4xl font-bold `}>Explore Beyond 🚀👨‍🚀: Dive into <span className='purple-gradient'>Exoplanet</span> Adventures and Citizen Science!</p>
      </div>
      <div className='mt-[5rem] px-[3rem] flex flex-col gap-[3rem]'>
        {OppData.map((data)=>(
          <OppCard 
            key={data.title}
            title={data.title}
            description={data.description}
            img={data.img}
            link={data.link}
          />

        ))}
      </div>
    </section>
  )
}

export default page