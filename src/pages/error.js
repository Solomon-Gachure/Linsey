import React from 'react'
import { Link } from 'react-router-dom'
import spmn from "../assets/spaceman.png"
const Error = () => {
  return (
    <div className='text-white h-screen bg-black top-2 max-w-[1400px] pt-16'>
        <div className='flex justify-center  h-[500px]  '>
            <img className=' h-[500px] w-[500px] outline-none bg-black '
            src={spmn}
             alt="error page" />
             
        </div>
        <div className='flex justify-center p-2 bg-black'>
                
                <p className='text-xl font-bold'>Stay connected through our homepage <br />
                    <div className='flex justify-center pt-2 pb-4'>
                        <button className='p-2 bg-transparent border rounded-xl text-emerald-400 font-bold'><Link to="/">Homepage</Link></button>
                    </div>
                </p>
             </div>
    </div>
  )
}

export default Error