import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {CiLight} from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='max-w-[1400px]  bg-stone-900 h-screen'>
        <div className='p-2 w-full bg-transparent fixed flex items-center justify-between z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding'>
         <div>
{/**place logo here  */}
         </div>
         <div className='p-2'>
               <nav className=' text-black flex gap-2 text-2xl'>
        <ul className='gap-3 flex text-white font-bold'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </ul>
        <div>
            <CiLight size={30} className='text-white font-bold'/>
            
        </div>

    </nav>
         </div>
        </div>
    <main>
        <Outlet/>
    </main>
    </div>
        
   
  )
}

export default Navbar