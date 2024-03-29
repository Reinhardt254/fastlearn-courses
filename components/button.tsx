"use client"

import Link from 'next/link'
import { ArrowRight} from 'lucide-react'
import Lottie from "lottie-react"

interface componentProps{
  link: string;
  text: string
}
const Button:React.FC<componentProps> = ({link, text}) => {
  return (
    <div>
     <div className="">
            <div>
               <h1></h1>
            </div>
             <Link
               href={link}
               className='flex justify-start'
             >
             <div className='flex items-center justify-center'>
               <div>
                 <h1 className='text-xl font-semibol text-blue-500'>{text}</h1>
                </div>
                <div className='pl-0 pt-0'>
               </div>
            </div>
            </Link>
      </div>
    </div>
  )
}

export default Button
