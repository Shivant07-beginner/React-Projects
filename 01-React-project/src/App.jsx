 import React from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from './Pages/Projects';
 
 const App = () => {
   return (
     <div className='text-black' >
       



     <Routes>
       <Route path='/agence' element = {<Agence/>}/>
        <Route path='/' element = {<Home/>}/>
        <Route path='/projects' element = {<Projects/>}/>
     </Routes>

        


     </div>
   )
 }
 
 export default App