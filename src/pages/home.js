import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/makeup"
const Home = () => {
  return (
    <div className='max-w-[1400px] h-full bg-stone-900 text-white p-2  font-bold pt-16'>
      <div className='relative h-full w-full  flex bg-stone-900   '>
        <div className='relative h-[500px] w-full flex   '>
          
        <img 
        className='object-cover w-full h-full' 
        src="https://img.freepik.com/premium-photo/afro-model-face-full-makeup-art-trendy-makeup-fashion-hot-attractive-face-dark-skin_893847-9132.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
         alt="hero" />
         <div className='bg-black/30 top-0 left-0 h-full w-full absolute z-10'/>
         <div className='absolute flex flex-col justify-center items-center inset-0 z-10'>
          
          <h1 className='text-3xl md:text-6xl text-amber-500 font-bold z-10'>Welcome to Dee GlowUp</h1>
         <p className='text-xl md:text-4xl font-bold'>We offer great services in Make up</p>
         <p className=' md:text-2xl font-bold'>Come experience professionalism at a cheap cost!</p>
         </div>
         
      </div>
      </div>
      {/**services section */}
      <div>
        <div className='flex justify-center items-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-amber-500'>Services we offer:</h3>
        </div>
        <div className='p-2 grid md:grid-cols-3 gap-4'>
        <div className='border rounded-lg border-amber-400 flex  flex-col items-center p-2'>
          <h3 className='text-2xl border-b text-pink-500 font-bold'>Makeup</h3>
          <p className='pt-2'>
            Dee's makeup artistry is truly transformative, with a focus on enhancing eyes, refining facial features, and perfecting eyebrows.
             Her skillful touch brings out the innate beauty in each client, creating a radiant glow and leaving a lasting impression.
             Dee's commitment to excellence in makeup services is nothing short of extraordinary.
          </p>
          <div className='p-2'>
            <button className='p-2 font-bold bg-fuchsia-500 rounded-lg'><Link to="/makeup" >View More</Link></button>
          </div>
        </div>
        <div className='border rounded-lg border-amber-400 flex  flex-col items-center p-2'>
          <h3 className='text-2xl border-b text-pink-500 font-bold'>Nails</h3>
          <p className='pt-2'>
            Dee's mastery extends beyond facial beauty, captivating with impeccable nail makeup services.
             Her precision in nail polishing is an art form, elevating hands to a new level of elegance.
             Dee Glow Up's commitment to perfection in every detail makes her the epitome of excellence in the world of nail aesthetics.
          </p>
          <div className='p-2'>
            <button className='p-2 font-bold bg-fuchsia-500 rounded-lg'><Link to="/nails">View More</Link> </button>
          </div>
        </div>
        <div className='border rounded-lg border-amber-400 flex  flex-col items-center p-2'>
          <h3 className='text-2xl border-b text-pink-500 font-bold'>Hair services</h3>
          <p className='pt-2'>
            Dee Glow Up redefines hairstyling with unparalleled expertise in braiding, plaiting, and dreadlocks.
             Her creative touch transforms hair into stunning masterpieces, showcasing a blend of skill and artistry.
             Dee's commitment to excellence in hair makeup services establishes her as a trendsetter in crafting unique and captivating looks.
          </p>
          <div className='p-2'>
            <button className='p-2 font-bold bg-fuchsia-500 rounded-lg'>View More</button>
          </div>
        </div>
      </div>
      </div>
      {/**booking section */}
      <div className='flex flex-col justify-center items-center p-2 '>
        <div className='border p-2 md:w-[700px] flex  flex-col justify-center items-center rounded-lg z-50 bg-cyan-400/30 bg-opacity-80 backdrop-blur-xl backdrop-filter:blur(16px) bg-clip-padding'>
          <h3 className='md:text-2xl'>Book with us</h3>
        <form action="" className='flex flex-col p-2 gap-4' method="post">
          <label className='md:text-lg' for="">Name: <input type="text" className='text-amber-500 p-2 rounded-lg bg-transparent border outline-none' placeholder='Enter Name' required /> </label>
           
          <label className='md:text-lg' for="">Email: <input type="text" className='text-amber-500 p-2 rounded-lg bg-transparent border outline-none' placeholder='Enter Email' /></label>
          
          <label className='md:text-lg' for="">Telephone: <input type="tel" className='text-amber-500 p-2 rounded-lg bg-transparent border outline-none' placeholder='xxxx-xxx-xxx' required /></label>

          <label className='md:text-lg' for="choices">Select a Choice:       <select id="choices" className='text-amber-500 p-2 rounded-lg bg-transparent border outline-none' name="choices">
  <option value="choice" className='text-stone-400'>Choice</option>
  <option value="makeup" className='text-stone-400'>Makeup</option>
  <option value="nail" className='text-stone-400'>Nail</option>
  <option value="hair" className='text-stone-400'>Hair</option>
</select>
          </label>
<div className='flex justify-center items-center'>
  <button className='p-2 font-bold border bg-black/30 w-[200px] text-xl'>Book</button>
</div>
        </form>
      </div>
        </div>
    </div>
  )
}

export default Home