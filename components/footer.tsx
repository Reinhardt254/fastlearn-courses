import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="pt-2 pb-2 bg-blue-500"> 
      <div className="flex-col justify-around pb-3 mx-10 my-3 border-b sm:flex-row md:flex">

      <div className="pt-2 flex flex-col">
          <h1 className="font-bold text-white">Useful Links</h1>
          <Link 
          href="/privacy"
          className="text-white">Privacy policy</Link>
          <Link 
          href="/security"
          className="text-white">Security Policy</Link>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-white">Contact Us</h1>
          <p className="text-white"></p>
          <p className="text-white">fastlearn@gmail.com</p>
        </div>
     
        <div className="pt-2">
          <h1 className="font-bold text-white">Socials</h1>
          <div className='flex mt-3 space-x-3'>
           <Link href="">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4 ">
        <h1 className="text-xs text-white ">Rights Reserved Fastlearn</h1>
        <h1 className="ml-5 text-xs text-white">Ⓒ2024</h1>
        {/* <h1 className="ml-5 text-xs text-white">Twitter @_chirchirkip</h1> */}
      </div>
      </div>
    </div>
  )
}

export default Footer