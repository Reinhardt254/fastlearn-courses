"use client"

import { Product } from '@/types'
import axios from 'axios';
import { PenBoxIcon, Trash, Trash2, TrashIcon } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
 } from "@/components/ui/alert-dialog"
 
 

interface ProductListProps {
   data: Product[];
 }

const AdminCourses: React.FC<ProductListProps> = ({ data }) => {
   const router = useRouter()

   const handleClick = (id: string) => {
      router.push(`/dashboard/${id}`)
   }

   const handleDelete = async (id: string) => {
      try {
        await axios.delete(`/api/courses/${id}`);
        toast.success("deleted successfully")
      } catch(error){
         console.log(error)
         toast.error("error deleting")
      }
   }
   
  return (
    <div className='w-full  flex justify-center items-cente min-h-screen'>
      <div 
        className='grid-cols-2 grid h-full m-2 md:grid-cols-3 md:w-2/3 w-full'
        >
         <Toaster />
        {/* {data.length == 0 ? <div className='font-semibold text-black'>No courses available</div> : <div></div>} */}
        {data.map((item)=>( 
         <div key={item.id} >
         <div
           className='p-1'
          >
            <div className=''>
               <div className='md:h-48 w-full h-28 relative'>
               <div className='h-full w-full relative'>
               <Image 
                src={item.image}
                fill={true}
                alt="course" 
                loading="lazy"
                className='rounded min-w-full'
               />
               </div>
               <DropdownMenu>
                 <DropdownMenuTrigger className='absolute top-1 right-1 bg-white w-14 rounded border-2 border-blac flex justify-center place-items-center'>
                   <h1 className='font-bol'>menu</h1>
                  </DropdownMenuTrigger>
                 <DropdownMenuContent>
                   <DropdownMenuItem   
                    onClick = {() => handleClick(item.id)}>Update
                    </DropdownMenuItem>
                   <DropdownMenuItem  onClick = {() => handleDelete(item.id)}>Delete</DropdownMenuItem>
                 </DropdownMenuContent>
               </DropdownMenu>
               </div>
               <div className='text-start bg-white rounded-b-md'>
                  <div className='w-auto p-3'>
                   <p className='font-semibold text-slate-900 text-lg line-clamp-2'>{item.title}</p>
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

export default AdminCourses