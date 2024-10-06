import React from 'react';
import { pacifico } from './Home/Land';
import { Button } from './ui/button';
import { game1, game2, game3 } from '@/public/assets/images';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className="pb-12">
        <div
          className="h-[500px] flex justify-center items-center bg-center bg-cover relative"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/fantasy-alien-planet-mountain-river-3d-illustration_1142-40800.jpg?t=st=1728220543~exp=1728224143~hmac=48c94e5482bebcd415ac9d4411c16c8aa73e292f254130630b124c7d6a0efd14&w=996')`,
          }}
        >
          <div className="flex md:flex-row flex-col justify-around mx-12 items-center w-full h-full">
            <div className="">
              <h3 className="text-2xl font-semibold text-white">Play Our Exoplanet and</h3>
              <h3 className={`${pacifico.className} mt-2 mb-4 tracking-widest md:text-5xl text-4xl font-bold text-accent`}>
                Astronomy Games
              </h3>
              <p className="text-xl font-semibold text-white">
                  Engage with fun, interactive games that bring the wonders of astronomy and <br />
                  exoplanet exploration to life!
              </p>
              <div className="my-3">
                <Link href={'/games'} >  
                  <Button className="bg-purple duration-200 p-2 text-primary hover:border w-[10rem] ">
                    Start Playing
                  </Button>{' '}
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-6 md:my-0 md:ml-[-70px] lg:ml-5">
              <div className="z-20  rounded-3xl ml-[150px] p-3 relative bottom-4">
                <Image src={game1} alt="game1" width={300} height={300}/>
              </div>
              <div className="z-10 mt-[-70px] p-3 relative ">
                 {/* <a href="https://icons8.com/illustrations/author/Go8GMpKPAq1W">Polina M.</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
                 <Image src={game2} alt="game1" width={300} height={300} />
              </div>
              <div className="z-0 p-3 relative right-[10rem] bottom-[5rem]">
                <Image src={game3} alt="game1" width={300} height={300}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;