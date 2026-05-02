import React from 'react'
import Video from '../Componets/Section1/Video'
import Hero from '../Componets/Section1/Hero'
import HeroTextBottom from '../Componets/Section1/HeroTextBottom'
const Home = () => {
  return (
    <div className='h-screen w-screen'>
       <div className='h-screen w-screen fixed '>
      <Video/>
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between' >
         <Hero/>
         <HeroTextBottom/>
    </div>
    </div>
    
  )
}

export default Home