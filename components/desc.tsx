import Image from 'next/image'
import Link from 'next/link'

const Desc = () => {
  return (
    <div className='pt-10 bg-white mt-2 border-t-2 pb-10 md:pt-16 md:pb-20'>
      <div className='w-full flex-col md:mx-10 md:flex-row flex'>
         <div className='md:bg-blue-500 md:w-1/2 flex h-full justify-center items-center md:rounded-tl-full md:rounded-br-full w-full bg-white'>
            <Image 
              src="/logoimage.png"
              height={400}
              width={400}
              alt="image"
              className='rounded-full p-3 md:py-0'
            />
         </div>
         <div className='md:w-1/2 w-full'>
            <div className='flex justify-center items-center w-full h-full md:pl-16'>
             <div className='flex justify-cente items-cente h-full w-full flex-col'>
             <div className='bg-white rounded-lg p-5 space-y-2 md:border-t-0 border-t-2 border-gray-300'>
               <h1 className='text-blue-500 font- text-4xl'>How it works</h1> 
               <p className='text-gray-700 text-2xl'> &#x2022; Select Course</p>
               <p className='text-gray-700 text-2xl'> &#x2022; Add to cart or buy now</p>
               <p className='text-gray-700 text-2xl'>&#x2022; Proceed to Checkout</p>
               <p className='text-gray-700 text-2xl'>&#x2022; Pay with Paypal or credit Card</p>
               <p className='text-gray-700 text-2xl'>&#x2022; Download your course and start studying</p>
             </div>
             <Link
             href="/products" 
             className='h-16 bg-blue-600 rounded flex justify-center items-center mt-3 w-48 ml-5'>
                <h1 className='text-white text-xl font-medium'>Explore</h1>
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