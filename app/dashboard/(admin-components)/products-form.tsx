"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import {  useEffect, useState } from 'react';
import {  Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod';
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"
import Imagescomponents from './imagescomponents';
import Image from 'next/image';

const messageSchema = z.object({
  title: z.string().min(1, "This field is required"),
  description: z.string().min(1, "This field is required"),
  price: z.string().min(1, "This field is required"),
  creator: z.string().min(1, "This field is required"),
  image: z.string().min(1, "This field is required"),
  requirements: z.string().min(1, "This field is required"),
  text: z.string().min(1, "This field is required"),
  link: z.string().min(1, "This field is required"),
})

type TmessageSchema = z.infer<typeof messageSchema>


const ProductsForm = () => {

  const [disabled, setIsDisabled] = useState(false)
  const [postImage, setPostImage] = useState('')
  const [isActive, setIsActive] = useState(false)

  const { 
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema)
  });

  const onSubmit: SubmitHandler<FieldValues> = async ( data ) => {
    setIsDisabled(true)
    try{
      await axios.post("/api/courses", data)
      setIsActive(false)
      toast.success("successfully sent")
    }catch(error){
      toast.error("an error occured")
      console.log(error) 
    }finally{
      setIsDisabled(false)
      reset()
    }  
  }

  // function checkImage(url: string) {
  //   return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url)
  // }

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(false)
    const inputUrl = e.target.value;
    const validate= true
  if(validate){
      setIsActive(true);
      setPostImage(inputUrl);
    }else{
      toast.error("invalid image")
    }
   }

  return (
    <div className='h-full bg-white w-screen pb-20 flex justify-center'>
      <div className='w-full h-full flex justify-center'>
      <div className='md:w-1/2 w-full '>
      <div className='h-full  w-full px-8'>
        <Toaster />
        <div className=''>
          <form onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className='flex space-y-4 h-full flex-col justify-center items-center pt-7'
          >
          <div className='pt-1 flex justify-start items-center'>
            <h1 className='text-blue-500 text-xl md:text-xl text-start font-semibold pl-8 pr-'>Post a course</h1>
          </div>
            <input 
              {...register("title")}
              type="text"
              placeholder='title'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.title && (
              <p className='text-red-500'>{errors.title.message}</p>
            )}

           <textarea
              {...register("description")}
              placeholder='description'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full h-20'
            />
            {errors.description && (
              <p className='text-red-500'>{errors.description.message}</p>
            )}

            <input 
              {...register("price")}
              type="text"
              placeholder='price'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.price && (
              <p className='text-red-500'>{errors.price.message}</p>
            )}

            <input 
              {...register("requirements")}
              type="text"
              placeholder='requirements'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.requirements && (
              <p className='text-red-500'>{errors.requirements.message}</p>
            )}

           <input 
              {...register("creator")}
              type="text"
              placeholder='creator'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.creator && (
              <p className='text-red-500'>{errors.creator.message}</p>
            )}

            <input 
              {...register("link")}
              type="text"
              placeholder='link'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.link && (
              <p className='text-red-500'>{errors.link.message}</p>
            )}

            <textarea 
              {...register("text")}
              placeholder='text'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full h-44'
            />
            {errors.text && (
              <p className='text-red-500'>{errors.text.message}</p>
            )}
            
           <div     
            className=''>
            {isActive && ( 
            <div className='pb-2'>
              <Imagescomponents
                myImage = {postImage}
              />
                {/* <Image 
                 src={postImage || ""} 
                 alt="Preview" 
                 height={200}
                 width={400}
                 className="rounded" /> */}
              </div> 
              )} 
            <input 
              {...register("image")}
              type="text"
              placeholder='link'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
              onChange={handleClick}
            />
            {errors.image && (
              <p className='text-red-500'>{errors.image.message}</p>
            )}
            </div>

            {/* <Controller
               name="image"
               control={control}
               render={({ field: { ref, name, onBlur, onChange } }) => (
                  <input
                   type="file"
                   ref={ref}
                   name={name}
                   onBlur={onBlur}
                   onChange={(e) => onChange(e.target.files?.[0])}
                  />
              )}
            /> */}


             
            <button 
              disabled={disabled}
              type="submit"
              className='bg-blue-700 disabled:bg-gray-500 py-2 px-5 rounded h-14 w-36'
              >
               <p className=' text-white font-semibold'>Submit</p>
            </button>
              <div>
             <div>
             </div>
             </div>
          </form>
        </div>
      </div>
      </div>
      <div className='w-1/2 max-sm:hidden max-md:hidden'>
      <div className=' flex justify-center items-cente   w-full max-sm:hidden max-md:hidden'>
            <Image
              src="/logoimage.png"
              height={400}
              width={400}
              alt="image"
              className='rounded-full mt-32'
            />
         </div>
      </div>
     </div>
   </div>
  )
}

export default ProductsForm
