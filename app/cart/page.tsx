"use client"

import Courses from '@/components/courses'
import Currency from '@/components/currency';
import useCart from '@/hooks/use-cart';
import Image from 'next/image'
import React from 'react'

const Cart = () => {
  const cart = useCart();

  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.payment)
 }, 0)

  const onRemove = (id: number) => {
     cart.removeItem(id)
  }

  const onRemoveAll = () => {
     cart.removeAll()
  }

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center items-center w-full h-full'>
      <div className='w-full md:w-1/2 h-full'>
        <h1 className='font-semibold text-xl mt-3 ml-2'>Cart Summary</h1>
        <div onClick={onRemoveAll}>
          <h1 className='text-red-600 text-sm'>Remove All</h1>
        </div>
      </div>
      </div>
      <div className='w-full h-full flex items-center justify-center flex-col'>
      {cart.items.map((item)=>
      <div 
       key={item.id}
       className='w-full md:w-1/2 h-full flex justify-center items-center bg-white shadow-sm m-2 p-2'
       >
       <div className='flex'>
        <div>
          <Image 
           src="/dev.png"
           height={150}
           width={300}
           alt="item picture"
          />
        </div>
        <div className='pl-2 flex flex-col justify-center items-center'>
          <div className=''>
          <h1 className='text-slate-900 font-semibold'>{item.title}</h1>
          <h1 className='text-slate-900 font-semibold'>{item.description}</h1>
          <div className='flex pt-1'>
          <h1 className='text-slate-900 pr-1'>Price:</h1>
          <h1 className='text-blue-500'>
            {item.payment}
          </h1>
          </div>
          <div 
            onClick={()=>onRemove(item.id)}
            className='mt-1'
          >
            <h1 className='text-red-600 text-sm'>Remove</h1>
          </div>
          </div>

        </div>
       </div>
      </div>
      )}
      
      <div className='shadow-sm m-2 rounded h-full w-full flex flex-col justify-center items-center p-2 md:mb-10 md:pb-10 pb-5'>
      <div>
        <div className='flex mt-3'>
          <h1 className='text-slate-800 font-semibold'>Your subtotal: </h1>
          <div className='text-blue-500 font-semibold pl-2'><Currency value={totalPrice}/></div>
        </div>
      </div>

      <div>
        <div>
          <div className='bg-blue-500 h-14 flex items-center justify-center w-44 mt-5 rounded'>
            <h1 className='text-white'>Checkout <Currency value={totalPrice} /></h1>
          </div>
        </div>
      </div>
      </div>

      <div className='w-full justify-center flex items-center'>
        <div className='w-2/3 h-full flex justify-start'>
         <h1 className='text-slate-900 text-3xl font-semibold ml-2'>More Courses</h1>
        </div>
      </div>

      <div>
        <div>
          <Courses />
        </div>
      </div>
      </div>
    </div>

  )
}

export default Cart