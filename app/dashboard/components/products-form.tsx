"use client"

import Button from '@/components/button'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod';
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"
import { ChevronDownSquare } from 'lucide-react';
import Lottie from "lottie-react"
import Image from 'next/image';

const messageSchema = z.object({
  title: z.string().min(1, "This field is required"),
  description: z.string().min(1, "This field is required"),
  price: z.string().min(1, "This field is required"),
  creator: z.string().min(1, "This field is required"),
  image: z.object({url: z.string()}),
  requirements: z.string().min(1, "This field is required"),
  text: z.string().min(1, "This field is required"),
})

type TmessageSchema = z.infer<typeof messageSchema>

const ProductsForm = () => {

  const [disabled, setIsDisabled] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { 
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema)
  });

  const onSubmit = async (data: FieldValues) => {
    setIsDisabled(true)
    try{
      await axios.post("/api/messages", data)
      toast.success("successfully sent")
    }catch(error){
      toast.error("an error occured") 
    }finally{
      setIsDisabled(false)
      reset()
    }  
  }

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Set selected image file
      setSelectedImage(file);

      // Read the image and update the preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const showFilePicker = () => {
   if (fileInputRef.current) {
     fileInputRef.current.click();
   }
 };

  return (
    <div className='h-full bg-white w-screen pb-20 flex items-center justify-center'>
      <div className='w-full h-full flex'>
      <div className='md:w-1/2 w-full '>
      <div className='h-full  w-full px-8'>
        <Toaster />
        <div className=''>
          <form onSubmit={handleSubmit(onSubmit)}
            className='flex space-y-4 h-full flex-col justify-center items-center pt-7'
          >
          <div className='pt-10 flex justify-start items-center'>
            <h1 className='text-blue-500 text-xl md:text-xl text-start font-semibold pl-8 pr-'>Post a course</h1>
          </div>
            <input 
              {...register("title")}
              type="title"
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
              type="price"
              placeholder='price'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.price && (
              <p className='text-red-500'>{errors.price.message}</p>
            )}

            <input 
              {...register("requirements")}
              type="requirements"
              placeholder='requirements'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.requirements && (
              <p className='text-red-500'>{errors.requirements.message}</p>
            )}

           <input 
              {...register("creator")}
              type="creator"
              placeholder='creator'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.creator && (
              <p className='text-red-500'>{errors.creator.message}</p>
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
            className='px-4 py-3 rounded sm:w-96 bg-white w-full'>
            {imagePreview && (
            <div className='pb-2'>
                <Image 
                 src={imagePreview.toString()} 
                 alt="Preview" 
                 height={200}
                 width={400}
                 className="" />
              </div>
             )}
            <input 
              {...register("image")}
              type="file"
              placeholder='image'
              className='hidden'
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <div 
             onClick={showFilePicker}
            className=''
            >
               <h1 className='text-blue-500 font-semibold'>Upload image</h1>
            </div>
            {errors.image && (
              <p className='text-red-500'>{errors.image.message}</p>
            )}
            </div>



       
             
            <button 
              disabled={disabled}
              type="submit"
              className='bg-blue-700 disabled:bg-gray-500 py-2 px-5 rounded h-14 w-36'
              >
               <p className='text-gray-300 text-white font-semibold'>Submit</p>
            </button>
              <div>
             <div>
              {/* <div className='flex pt-3'>
                <p className='text-gray-700 text-lg'>send an email instead</p>
                <Link href="mailto:reinhardtlagat@gmail.com">
                  <p className='text-blue-500 pl-2 hover:text-gray-400 text-lg'>email</p>
                </Link>
              </div> */}
             </div>
             </div>
          </form>
        </div>
        {/* <div className='pt-10'>
          <Button
            text="Go back home"
            link="/"
          />
        </div> */}
      </div>
      </div>
      <div className='w-1/2 max-sm:hidden max-md:hidden'>
      <div className=' flex h-full justify-center items-center rounded-tl-full  w-full max-sm:hidden max-md:hidden'>
            <Image
              src="/logoimage.png"
              height={400}
              width={400}
              alt="image"
              className='rounded-full'
            />
         </div>
      </div>
     </div>
   </div>
  )
}

export default ProductsForm
