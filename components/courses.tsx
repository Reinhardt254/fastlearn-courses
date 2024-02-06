"use client"

import { data } from '@/db'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Courses = () => {
   const router = useRouter()

   const handleClick = (id: number) => {
      router.push(`/course/${id}`)
   }

   // const [isMounted, setIsMounted] = useState(false);

   // useEffect(() => {
   //    setIsMounted(true)
   // }, [])

   // if(isMounted){
   //    return null;
   // }
   
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div 
        className='grid-cols-2 grid h-full m-2 md:grid-cols-3 md:w-2/3 w-full'
        >
        {data.map((item)=>( 
         <div key={item.id} >
         <div
           onClick = {() => handleClick(item?.id)}
           className='p-1'
          >
            <div className=''>
               <div className=' w-auto'>
               <Image 
                src="/dev.png"
                height={150}
                width={300}
                alt="course" 
                className='rounded-t-md min-w-full'
               />
               </div>
               <div className='text-start bg-white rounded-b-md'>
                  <div className='w-auto p-3'>
                   <p className='font-semibold text-slate-900 text-lg'>{item.title}</p>
                   <p className='font-semibold text-slate-700'>{item.description}</p>
                  <p className='font-semibold text-blue-500 text-lg'>{item.payment}</p>
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