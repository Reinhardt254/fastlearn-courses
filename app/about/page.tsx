import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='h-full bg-white w-screen pb-20 flex items-center justify-center'>
    <div className='w-full h-full flex'>
    <div className='md:w-1/2 w-full pr-2'>
      <div className='px-3 pt-3 pr-2 md:px-10'>
       <h1 className='text-3xl text-slate-900'>Our Story</h1>
       <div>
       <h1 className='text-blue-500 text-xl pt-3'>Who we are</h1>
       <p className='text-slate-900 pr-2'>
       Welcome to FastLearn, where knowledge meets innovation! At FastLearn, we are more than just an online store  we are a gateway to a world of endless learning possibilities. Our mission is to empower individuals with the skills and insights needed to thrive in the rapidly evolving landscape of technology, personal development, and professional growth.
       </p>
       </div>

       <div>
       <h1 className='text-blue-500 text-xl pt-3'>What we do</h1>
       <p className='text-slate-900 pr-2'>
       At FastLearn, we curate a diverse selection of courses that span the realms of artificial intelligence, programming languages, self-development, career advancement, and mastery skills. Our platform is designed to cater to learners of all levels, from beginners looking to embark on a new learning journey to seasoned professionals seeking to stay ahead in their fields. With a commitment to excellence, we collaborate with industry experts and thought leaders to deliver high-quality, up-to-date content that ensures our learners acquire relevant and practical 
       </p>
       </div>

       <div>
       <h1 className='text-blue-500 text-xl pt-3'>Why we do it</h1>
       <p className='text-slate-900 pr-2'>
       In a world driven by innovation and constant change, staying ahead of the curve is not just an advantage  it Is a necessity. FastLearn was founded on the belief that education should be accessible, engaging, and impactful. We understand the transformative power of learning, and we are passionate about providing a platform that empowers individuals to reach their full potential. Whether you aspire to build cutting-edge AI applications, master programming languages, enhance your personal development, or advance in your career, FastLearn is here to guide you on your learning journey. Join us, and let Us navigate the future of knowledge together. FastLearn where learning is fast, fulfilling, and future-focused.
       </p>
       </div>
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

export default About