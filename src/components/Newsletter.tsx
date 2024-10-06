'use client';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { pacifico } from './Home/Land';

const Newsletter = () => {
  useEffect(() => {
    // Dynamically load the Tally embed script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full py-16 text-white bg-[#000300] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want{' '}
            <span className={`${pacifico.className} purple-gradient`}>
              Astronomy
            </span>{' '}
            pictures of the day?
          </h1>
          <p>Sign up to our daily email and stay up to date.</p>
        </div>

        <div className='my-4 right-[10rem] relative'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-3'>
            <Input
              className='py-[1.5rem] px-[1rem] flex w-full rounded-md text-primary'
              type='email'
              placeholder='Enter Email'
            />

            <Button
              className='bg-purple text-primary py-[1.5rem]'
              data-tally-open="3j7MN9" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
            >
              Subscribe
            </Button>
          </div>
          <p>We care about the protection of your data.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
