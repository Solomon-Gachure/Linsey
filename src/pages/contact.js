import React from 'react'
import {FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from 'react-icons/fa'
 
const Contact = () => {
  const WhatsAppLink = ({ phoneNumber, message }) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };
  const whatsappLink = WhatsAppLink({ phoneNumber: "0798605270", message: "Hello welcome to Dee makeup!" });
  return (
    <div className='max-w-[1400px] h-full bg-stone-900 text-white p-2  font-bold pt-16'>
      {/**About section */}
       
         <div className='border max-w-[1200px] rounded-lg bg-stone-900 flex flex-col justify-center items-center md:grid grid-cols-2 p-4 m-2  '>
          <div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px]  rounded-full  '>
            <img 
            className='h-full w-full object-cover rounded-full' 
          src="https://img.freepik.com/free-photo/portrait-person-daily-life-new-york-city_23-2150820014.jpg?uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais_ai_generated"
           alt="profile" />
          </div>
           <div className='flex flex-col   items-center'>
            <h1 className='font-bold text-teal-300 text-lg border-b'>Who I'm I?</h1>
           <p className=''>
            With unparalleled artistry and an exquisite eye for detail,
             Dee stands as the epitome of an experienced makeup artist. Their adept hands effortlessly transform faces into canvases of beauty, showcasing a mastery of color, contour, and technique.
              Dee's extensive knowledge of the latest trends merges seamlessly with a timeless elegance, ensuring clients radiate confidence. Beyond technical prowess, their exceptional interpersonal skills create an atmosphere of trust and collaboration, making each client feel truly seen and understood.
             Dee is not just a makeup artist; they are a creator of confidence, a painter of self-expression, and an unparalleled professional in the world of beauty.
           </p>
           </div>
        </div>
       
        {/**input section */}
        <div className='bg-stone-900 flex flex-col justify-center items-center'>
          <h1 className='text-xl text-teal-300'>Contact Me:</h1>
          <div className='h-[300px] w-[300px]'>
            <form action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method='POST' className='flex flex-col items-center h-full w-full  p-2 gap-2 text-black'>
              <input className='w-[300px] p-2 outline-none bg-transparent text-white border' required type="text" name='name' placeholder='Enter Name' />
              <input className='w-[300px] p-2 outline-none bg-transparent text-white border' required type="text" name='email' placeholder='Enter Email' />
<textarea className='w-[300px] p-2 outline-none bg-transparent text-white border' required name="message" id="" cols="25" rows="5" placeholder='Enter Message'></textarea>
<button className='text-white bg-green-500 p-2 w-[200px] font-bold rounded-lg text-xl'>Submit</button>
            </form>
          </div>
        </div>
        {/**Socials section */}
        <div className='bg-stone-900 flex flex-col justify-center items-center'>
          <h1>Find us through our socials:</h1>
          <div className='flex justify-center items-center gap-14 p-2'>
            {/**icons for the socials */}
            <FaFacebook size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            <FaInstagram size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            <FaTiktok size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className='hover:scale-105 duration-300 cursor-pointer' />
            </a>
            
          </div>
        </div>
    </div>
  )
}

export default Contact