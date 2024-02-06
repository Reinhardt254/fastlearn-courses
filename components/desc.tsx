import Image from 'next/image'
import Link from 'next/link'

const Desc = () => {
  return (
    <div className='pt-10 bg-white mt-2 border-t-2 pb-10 md:pt-16 md:pb-20'>
      <div className='w-full flex-col md:mx-10 md:flex-row flex'>
         <div className='bg-blue-500 md:w-1/2 flex h-full justify-center items-center rounded-tl-full rounded-br-full w-full max-sm:hidden max-md:hidden'>
            <Image 
              src="/logoimage.png"
              height={400}
              width={400}
              alt="image"
              className='rounded-full'
            />
         </div>
         <div className='md:w-1/2 w-full'>
            <div className='flex justify-center items-center w-full h-full md:pl-16'>
             <div className='flex justify-cente items-cente h-full w-full flex-col'>
             <div className='bg-white rounded-lg p-5 space-y-2'>
               <h1 className='text-black font-semibold text-5xl'>How it works</h1> 
               <p className='text-slate-900 text-2xl'>Select Course</p>
               <p className='text-slate-900 text-2xl'>Add to cart or buy now</p>
               <p className='text-slate-900 text-2xl'>Proceed to Checkout</p>
               <p className='text-slate-900 text-2xl'>Pay with Paypal or credit Card</p>
               <p className='text-slate-900 text-2xl'>Download your course and start studying</p>
             </div>
             <Link
             href="/products" 
             className='h-16 bg-blue-600 rounded flex justify-center items-center mt-3 w-48 ml-5'>
                <h1 className='text-white text-xl font-medium'>Our Courses</h1>
             </Link>
             <div className='w-full flex justify-start items-start'>
             </div>
             </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Desc