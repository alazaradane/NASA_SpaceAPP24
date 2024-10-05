import React from 'react'
import Navbar from './Home/Navbar'
import Land from './Home/Land'
//()
const Home = () => {
  return (
    <section className='bg-black text-primary'>
      <section>
        <Navbar/>
        <Land/>
      </section>

    </section>
  )
}

export default Home