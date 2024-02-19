"use client"

import Link from "next/link"

interface buttonProps {
   link: string
}

const DownloadButton: React.FC<buttonProps> = ({ link }) => {

  return (
    <div>
      <Link
      href={link} 
      className='bg-blue-500 h-12 w-28 rounded justify-center items-center flex  hover:bg-gray-400 cursor-pointer'
      >
         <h1 className='text-white font-semibold hover:text-slate-700'>Download</h1>
      </Link>
    </div>
  )
}

export default DownloadButton

