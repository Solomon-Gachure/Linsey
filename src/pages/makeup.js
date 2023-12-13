import React from 'react'

const Makeup = () => {
  return (
    <div className='pt-16 h-full text-white font-bold bg-red-300'>
        {/**collage for makeup */}
       <div className='flex justify-center items-center'>
        <h1 className='text-3xl md:text-4xl'>Makeup Collage</h1>
       </div>
       
       {/** divs for the different collage for makeups: eye and nail as well*/}
       <div>
        <div>
          <h1 className=' flex justify-center md:text-3xl text-pink-500 font-bold items-center'>Eye Makeup</h1>
          <div className='grid  md:grid-cols-3 row-span-2 bg-red-300  p-2 gap-2'>
            <div className='h-[300px] border '>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/close-up-beautiful-woman-with-red-manicure-nail-polis_1001743-7393.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  border'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/woman-with-long-black-hair-red-background_908846-4111.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='md:h-full h-[200px]  border  md:row-span-2'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/woman-with-bright-pink-eye-shadow-bright-pink-eye-shadow_759095-29677.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  w-[300px] md:w-full border md:col-span-2'>
            <img 
            className='h-full w-full object-cover ' 
          src="https://img.freepik.com/premium-photo/fashion-woman-portrait-with-bright-make-up-generative-ai_90153-4469.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          </div>
        </div>
       </div>
       
    </div>
  )
}

export default Makeup