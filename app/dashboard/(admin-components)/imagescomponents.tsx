import Image from 'next/image'
import React from 'react'

interface ImageProps{
   myImage: string
}

const Imagescomponents: React.FC<ImageProps> = ({myImage}) => {
  return (
    <div>
     <Image 
       src={myImage} 
       alt="Preview" 
       height={200}
       width={400}
       className="rounded" />
    </div>
  )
}

export default Imagescomponents

