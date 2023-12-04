import React from 'react'

const Home = () => {
  return (
    <div className='text-white h-screen top-2 max-w-[1400px] pt-16'>
        <div className='h-screen flex flex-col'>
          {/**home section */}
          <div className=' bg-stone-900 w-full h-screen '>
            {/**hero section */}
            
              <img 
            className='  w-full h-full object-contain top-0 left-0 '
            src="https://img.freepik.com/premium-photo/african-woman-afro-woman-beauty-concept-created-with-generative-ai-technology_185193-108150.jpg?size=626&ext=jpg&uid=R114683630&ga=GA1.1.134876288.1693412887&semt=ais"
             alt="hero" />
            
             <div className='  flex flex-col h-screen  items-center justify-center'>
<h1>Welcome to Dee Makeup</h1>
<p>We  welcome you to the best makeup artists in town</p>
<p>We offer a variety of makeup services from our experienced staff.</p>
             </div>
          </div>

        </div>
        <div className='h-screen  bg-stone-900'>
  <h1>Services we offer:</h1>
  <div>
    <h1>Eye Services</h1>
    <p>
      Transform your gaze with our expert eye-lashing makeup services. Our skilled professionals meticulously enhance your lashes, providing volume, length, and a captivating allure. Whether you desire a natural look or glamorous drama, our makeup artists tailor each application to accentuate your eyes, leaving you with a stunning and confidence-boosting result.
    </p>
  </div>
</div>
    </div>
  )
}

export default Home