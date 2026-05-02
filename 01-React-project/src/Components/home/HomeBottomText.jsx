import React from 'react'
import {Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
   
     <div className=' flex flex-centre justify-center  '>
      <p className='absolute  w-74 right-0 bottom-40 font-[font2] lg text-sm lg:leading-relaxed leading-tight text-white font-extrabold'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='font-[font2] text-white  mb-5 select-none '>
      <Link className='text-[6.5vw] uppercase border-3 border-white rounded-full  px-8 pt-1  justify-between leading-20 hover:text-[#D3FD50] hover:border-[#D3FD50]  mr-3 ' to='/projects'>Projets</Link>
      <Link  className='text-[6.5vw] uppercase border-3 border-white rounded-full px-8 pt-1  justify-between leading-20 hover:text-[#D3FD50] hover:border-[#D3FD50] '  to='/agence'>Agence</Link>
    </div>
     </div> 
  )
}

export default HomeBottomText
