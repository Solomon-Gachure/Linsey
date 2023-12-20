import React, { useState } from 'react'

const Payment = () => {
    {/** create a condition to show pop up for confirmation of payment upon button click */}
const [popup, setPopup]=useState(false)
const handlePay=()=>{
    setPopup(true)
}
const closePop=()=>{
    setPopup(false)
}
{/**create a condition to show pop up in advancement of payment */}
const [amount, setAmount]=useState(false)
const handleAmount=()=>{
    setAmount(true)
}
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
            <input type="radio" name="" id="" required /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th?id=OIP.vWUe9BHUIzND8k96VxT1KwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
         alt="mpesa icon" /> M-Pesa</label>
       
       <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" required /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th?id=OIP.fgkwCuz-ovfAcVMJP5srtwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
         alt="mpesa icon" /> MasterCard</label>

         <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" required /> <img className='h-[30px] md:h-[50px]  '
             src="https://th.bing.com/th?id=OIP.BtEwiQZJFBoclrcb68v5pAHaFG&w=301&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
         alt="mpesa icon" /> PayPal</label>

         <label className='flex items-center w-[300px] bg-white text-stone-900 cursor-pointer md:h-[70px] p-2 md:w-[500px] border rounded-xl hover:border-black hover:scale-105 duration-500 ' htmlFor="">
            <input type="radio" name="" id="" required /> <img className='h-[30px] md:h-[50px] '
             src="https://th.bing.com/th/id/OIP.5IpS0TTiG7gV2JA2jDyyGgAAAA?w=147&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         alt="mpesa icon" /> TrustWallet</label>

         
        
        <button onClick={handlePay} className='bg-green-500 p-2 text-white font-bold w-[200px] rounded-lg hover:scale-105 duration-300'>Pay</button>
    </div>
</div>

</div>
{/**pop up message to confirm payment */}
{
    popup&&(
        <div className='fixed w-[350px] h-[400px] md:w-[500px] md:h-[450px]  border-black   bg-transparent z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding pt-16 flex items-center justify-center text-stone-900 font-bold border'>
            <div className='w-full h-full flex flex-col justify-center items-center gap-2  '>
                <h1 className='text-2xl font-bold'>You are about to pay</h1>
                <div className='flex items-center gap-4'>
                    <button onClick={handleAmount} className='bg-green-500 p-2 text-white font-bold w-[50px] rounded-lg hover:scale-105 duration-300'>YES</button>
                <button onClick={closePop} className='bg-red-500 p-2 text-white font-bold w-[50px] rounded-lg hover:scale-105 duration-300'>NO</button>
                </div>

            </div>
        </div>
    )
}
{/**amount to be placed pop up */}
{
    amount&&(
        <div className='fixed w-[350px] h-[400px] md:w-[500px] md:h-[450px]  border-black  bg-transparent z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding pt-16 flex items-center justify-center text-stone-900 font-bold border'>
            <div className='w-full h-full flex flex-col justify-center items-center  '>
                <form className='flex flex-col gap-2' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="post">

<input name='amount' className='p-2 bg-transparent text-white font-bold outline-none  border-2 border-stone-900/70 rounded-lg' type="text" placeholder='Enter Amount' required />

<button className='bg-green-500 p-2 text-white font-bold w-[250px] rounded-lg hover:scale-105 duration-300'>Pay</button>
                </form>
            </div>
        </div>
    )
}
        </div>
    </div>
  )
}

export default Payment