"use client"

import { Product } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductListProps {
   data: Product[];
 }

const Courses: React.FC<ProductListProps> = ({ data }) => {
   const router = useRouter()

   const handleClick = (id: string) => {
      router.push(`/course/${id}`);
   }
   
  return (
    <div className='w-full min-h-svh flex justify-center '>
      <div 
        className='grid-cols-2 grid h-ful m-1 md:grid-cols-3 md:w-2/3 w-full'
        >
        {/* {data.length == 0 ? <div className='font-semibold text-black'>No courses available</div> : <div></div>} */}
        {data.map((item: any)=>( 
         <div key={item.id} >
         <div
           onClick = {() => handleClick(item?.id)}
           className='p-1'
          >
            <div className='md:h-48 w-full h-28'>
               <div className='h-full w-full relative'>
               <Image 
                src={item.image}
                fill={true}
                alt="course" 
                loading="lazy"
                className='rounded min-w-full'
               />
               </div>
               <div className='text-start bg-white rounded-b-md relative shadow-sm'>
                  <div className='w-auto p-3'>
                   <p className='font-semibold text-slate-900 text-lg'>{item.title}</p>
                   <p className='font-semibold text-slate-700 line-clamp-2'>{item.description}</p>
                  <p className='font-semibold text-blue-500 text-lg'>${item.price}</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
      ))}
      </div>
    </div>
  )
}

export default Courses