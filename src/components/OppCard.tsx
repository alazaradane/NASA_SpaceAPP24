import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface OppCard {
  title: string;
  description: string;
  img: string;
  link: string;

}

const OppCard = ({title,description,img,link}:OppCard) => {
  return (
    <div className=' flex w-full h-fit py-[1rem] border-[1px] border-slate-400 px-[3rem] rounded-md itesm-center text-primary gap-6'>
      <div className='w-[50%] flex flex-col gap-5 '>
        <p className='text-4xl font-bold'>{title}</p>
        <p>
          {description}
        </p>
        <Link href={link}>
          <Button className='bg-purple text-primary'>Learn More</Button>
        </Link>
      </div>
      <div className='w-[50%] my-auto'>
        <Image
          src={img}
          alt='exo'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default OppCard