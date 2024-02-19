"use client"

import Courses from '@/components/courses'
import Courseslists from '@/components/courseslists';
import Currency from '@/components/currency';
import useCart from '@/hooks/use-cart';
import Image from 'next/image'
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import CheckOut from '@/components/checkout';
import { useState } from 'react';
import { cn } from '@/lib/utils';


const Cart = () => {

  const [blackbg, setblackBg] = useState (false);

  const cart = useCart();

  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
 }, 0)

  const onRemove = (id: string) => {
     cart.removeItem(id)
  }

  const onRemoveAll = () => {
     cart.removeAll()
  }

  return (
    <div className={cn(blackbg ? 'w-full h-full justify-center items-center flex flex-col ' : 'w-full h-full justify-center items-center flex flex-col bg-white')}>
       {/* <div 
        onClick={()=>setblackBg(false)}
       className={cn(blackbg? 'z-40 w-full min-h-svh bg-black opacity-70 absolute' : '')}>
       </div> */}
      <div className='flex justify-center items-center w-full'>
      <div className='w-full md:w-1/2 h-full'>
        <h1 className='font-semibold text-xl mt-3 ml-2'>Cart Summary</h1>
        {/* <div onClick={onRemoveAll}>
          <h1 className='text-red-600 text-sm'>Remove All</h1>
        </div> */}
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
           src={item.image}
           height={200}
           width={400}
           alt="item picture"
           className='rounded'
          />
        </div>
        <div className='pl-2 flex flex-col justify-center items-center'>
          <div className=''>
          <h1 className='text-slate-900 font-semibold text-lg'>{item.title}</h1>
          <h1 className='text-gray-700 text-sm'>{item.description}</h1>
          <div className='flex pt-1'>
          <h1 className='text-black pr-1 text-sm'>Price:</h1>
          <h1 className='text-blue-500 text-sm font-semibold'>
            ${item.price}
          </h1>
          </div>
          <div 
            onClick={()=>onRemove(item.id)}
            className='mt-1'
          >
            <h1 className='text-red-500 text-sm font-semibold cursor-pointer'>Remove</h1>
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
      {/* <Popover>
        <PopoverTrigger   onClick={()=>setblackBg(true)}>
      <div>
        <div>
          <div
          className='bg-blue-500 h-14 flex items-center justify-center w-44 mt-5 rounded'>
            <h1 className='text-white'>Checkout <Currency value={totalPrice} /></h1>
          </div>
        </div>
      </div>
        </PopoverTrigger>
          <PopoverContent
             className="w-full h-full"
           >
          <CheckOut />
          </PopoverContent>
       </Popover> */}
         <Dialog>
         <DialogTrigger>
         <div
          className='bg-blue-500 h-14 flex items-center justify-center w-44 mt-5 rounded'>
            <h1 className='text-white'>Checkout <Currency value={totalPrice} /></h1>
          </div>
         </DialogTrigger>
         <DialogContent>
          <DialogHeader>
          <DialogTitle className='pb-2'>Checkout with PayPal</DialogTitle>
         <DialogDescription>
            Fast, Secure and easy
         </DialogDescription>
         <DialogDescription>Thank you for choosing to shop with us</DialogDescription>
         <DialogDescription>Please choose your payment option</DialogDescription>
         <div>
           <CheckOut />
         </div>
         </DialogHeader>
        </DialogContent>
        </Dialog>


      </div>

      </div>
{/* 
      <div className='w-full justify-center flex items-center'>
        <div className='w-2/3 h-full flex justify-start'>
         <h1 className='text-slate-900 text-3xl font-semibold ml-2'>More Courses</h1>
        </div>
      </div>

      <div>
        <div>
          <Courseslists />
        </div>
      </div> */}
      </div>
    </div>

  )
}

export default Cart