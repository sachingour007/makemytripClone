import React from 'react'

const Booking = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='border border-black w-[50%] h-[40vh] m-2'>
            <h2 className='text-center font-medium m-4'>Fare Summary</h2>
            <div className='flex items-center justify-between p-2 '>
                <p>Base Fare</p>
                <p>₹ 5,257</p>
            </div>
            <hr className='border-black ml-2 mr-2'/>
            <div  className='flex items-center justify-between p-2 '>
                <p>Fee & Surcharges</p>
                <p>₹ 740</p>
            </div>
            <hr className='border-black ml-2 mr-2' />
            <div  className='flex items-center justify-between p-2 '>
                <p>Total Amount</p>
                <p>₹ 5,997</p>
            </div>
            <hr className='border-black ml-2 mr-2' />


        </div>
        <div className='border border-black w-[50%] h-[40vh] m-2'>
        <h2 className='text-center font-medium m-1'>Payment Method</h2>
        <form className='flex flex-col '>
            <input className='w-40  min-w-[90%] h-8 m-2 border border-gray-400 rounded-md' type="text" placeholder='Name on card' />
            <input className='w-40 min-w-[90%] h-8 m-2 border border-gray-400 rounded-md' type="number" placeholder='Card Number' />
            <input className='w-40 min-w-[90%] h-8 m-2 border border-gray-400 rounded-md' type="text" placeholder='Expiry Date' />
            <input className='w-40 min-w-[90%] h-8 m-2 border border-gray-400 rounded-md' type="text" placeholder='CVV' />
            <button className='border border-gray w-20 h-8 ml-2 rounded-md bg-gray-200'>Pay</button>
        </form>


        </div>
        
    </div>
  )
}

export default Booking