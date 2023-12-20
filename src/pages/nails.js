import React from 'react'

const Nails = () => {
  
  return (
    <div className='pt-16 h-full text-white font-bold bg-red-300'>
        {/**collage for nails */}
       <div className='flex justify-center items-center'>
        <h1 className='text-3xl md:text-4xl'>Nailwork Collage</h1>
       </div>
       {/** divs for the different collage for nails: eye and nail as well*/}
       <div>
        <div>
          <h1 className=' flex justify-center md:text-3xl text-pink-500 font-bold items-center'>Eye Makeup</h1>
          <div className='grid  md:grid-cols-3 row-span-2 bg-red-300  p-2 gap-2'>
            <div className='h-[300px] border '>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/free-photo/delicately-colored-nails-lips_1268-27150.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  border'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/woman-with-red-nails-red-lipstick_197463-5924.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='md:h-full h-[200px]  border  md:row-span-2'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/person-with-yellow-black-nail-art-design-with-stars-it_655090-86686.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  w-[300px] md:w-full border md:col-span-2'>
            <img 
            className='h-full w-full object-cover ' 
          src="https://img.freepik.com/premium-photo/cinematic-moments-captured-by-sony-alpha-a7-iii-camera_925962-20506.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          </div>
        </div>
       </div>
    </div>
  )
}




export default Nails