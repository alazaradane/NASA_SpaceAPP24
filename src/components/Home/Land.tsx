import React from 'react'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
import { TextGenerateEffect } from '../ui/text-generate-effect';
import HeroVideoDialog from '../ui/hero-video-dialog';
import {Pacifico} from 'next/font/google'
import { TimelineDemo } from './TimelineDemo';
import RocketMotion from '../Rocket';
import Earth from './Earth';
import Footer from '../Footer';
import Newsletter from '../Newsletter';


export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin']
})


const Land = () => {

  const words = `Discover Exoplanets: Explore New Worlds`

  return (
    <div className=' z-30 '>
    <BackgroundBeamsWithCollision className='mt-[5rem] z-30 w-[100%]'>
      <h2 className="text-2xl w-[60%] relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight">
      <TextGenerateEffect words={words} className=' text-primary text-7xl' />
        <div className="relative flex items-center justify-center  [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] ">
          <div className=" bg-clip-text bg-no-repeat text-transparent text-center bg-gradient-to-r py-4 from-purple via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className={`${pacifico.className} text-5xl`}>Ultimatum 369 .</span>
          </div>
          
        </div>
      </h2>
      <div className='w-[40%]'>
        <Earth/>
      </div>
        {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js" className='mt-[5rem]'></script>
        <spline-viewer url="https://prod.spline.design/IvbddlZp3U2VWfN1/scene.splinecode" className='mt-[15rem]'></spline-viewer> */}
    </BackgroundBeamsWithCollision>
    <div className=' flex flex-col pt-[5rem]'>
      <div className='py-4 flex flex-col items-center justify-center gap-3'>
       <p className=' text-6xl font-bold'> <span className={`${pacifico.className} bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]`}>Exoplanets</span>: Beyond Our <span className='text-yellow-400'>Solar</span> System</p>
       <p className=' font-semibold text-2xl'>Join us on a visual journey to explore distant planets.</p>
      </div>
      <div className="relative p-5">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/0ZOhJe_7GrE?si=Lcw7PjF9H0mm70JD"
          thumbnailSrc="https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/0ZOhJe_7GrE?si=Lcw7PjF9H0mm70JD"
          thumbnailSrc="https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
    <div className='bg-black'>
      <TimelineDemo/>
    </div>
    <div className='flex gap-5 w-full'>
      <div className='w-[65%]'>
       <RocketMotion/>
      </div>
      <div className=' w-[35%]'>
        <p className=' text-4xl font-bold'>Get involve in Exoplanet Projects</p>
      </div>
    </div>
    <div>
      <Newsletter/>
    </div>
    <div className=' px-4'>
      <Footer/>
    </div>
    </div>
  )
}

export default Land