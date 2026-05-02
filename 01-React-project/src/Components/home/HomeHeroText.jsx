import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center text-white'>

      {/* First Line */}
      <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>
        L'étincelle
      </div>

      {/* Second Line */}
      <div className='text-[9.5vw] flex justify-center items-baseline uppercase leading-[8vw] gap-3'>
        <span>qui</span>

        <div className='h-[6vw] w-[14vw] rounded-full overflow-hidden'>
          <Video />
        </div>

        <span>génère</span>
      </div>

      {/* Third Line */}
      <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>
        la créativité
      </div>

    </div>
  )
}

export default HomeHeroText