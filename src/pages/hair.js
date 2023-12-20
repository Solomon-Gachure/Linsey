import React from 'react'

const Hair = () => {
  return (
   <div className='pt-16 h-full text-white font-bold bg-red-300'>
        {/**collage for nails */}
       <div className='flex justify-center items-center'>
        <h1 className='text-3xl md:text-4xl'>HairWork Collage</h1>
       </div>
       {/** divs for the different collage for nails: eye and nail as well*/}
       <div>
        <div>
          <h1 className=' flex justify-center md:text-3xl text-pink-500 font-bold items-center'>Hairwork GlowUp</h1>
          <div className='grid  md:grid-cols-3 row-span-2 bg-red-300  p-2 gap-2'>
            <div className='h-[300px] border '>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/free-photo/woman-with-pink-dress-gold-necklace_1340-27999.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  border'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/afro-hair-braided-cornrow-hairstyle-using-synthetic-hair-extensions-ai-generated_201606-8041.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='md:h-full h-[200px]  border  md:row-span-2'>
            <img 
            className='h-full w-full object-cover' 
          src="https://img.freepik.com/premium-photo/photo-cornrows_889056-2449.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          <div className='h-[300px]  w-[300px] md:w-full border md:col-span-2'>
            <img 
            className='h-full w-full object-cover ' 
          src="https://img.freepik.com/premium-photo/black-woman-confidence-shines-brightly-rooted-her-heritage-beauty-concept_975188-10417.jpg?ga=GA1.2.134876288.1693412887&semt=ais_ai_generated"
           alt="eye makeups" />
          </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hair