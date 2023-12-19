import React from 'react'

const Payment = () => {
  return (
    <div className='text-white pt-16 flex justify-center items-center'>
        {/**payment section */}
        <div className='flex justify-center w-full h-full p-2    items-center'>
<div className=' bg-stone-900 w-full  h-full  p-2 md:text-2xl'>
<p className='font-bold text-amber-500 text-center text-2xl'>Send your payment</p>
<p className='font-bold text-center text-xl'>We offer a wide variety of payment options:</p>
{/**payments methods */}
<div className='flex flex-col justify-center items-center'>
    <div className='flex flex-col justify-center items-center p-4 gap-2'>
        {/**cards & mpesa option section */}
        
            <label className='flex items-center bg-white text-stone-900 w-[300px] cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th?id=OIP.vWUe9BHUIzND8k96VxT1KwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
         alt="mpesa icon" /> M-Pesa</label>
       
       <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th?id=OIP.fgkwCuz-ovfAcVMJP5srtwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
         alt="mpesa icon" /> MasterCard</label>

         <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" /> <img className='h-[30px] md:h-[50px]  '
             src="https://th.bing.com/th?id=OIP.BtEwiQZJFBoclrcb68v5pAHaFG&w=301&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
         alt="mpesa icon" /> PayPal</label>

         <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th/id/OIP.5IpS0TTiG7gV2JA2jDyyGgAAAA?w=147&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         alt="mpesa icon" /> TrustWallet</label>

         
        
        <button className='bg-green-500 p-2 text-white font-bold w-[200px] rounded-lg hover:scale-105 duration-300'>Pay</button>
    </div>
</div>

</div>
        </div>
    </div>
  )
}

export default Payment