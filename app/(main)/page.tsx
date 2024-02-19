import { getCourses } from '@/actions/postCourses'
import Courses from '@/components/courses'
import Courseslists from '@/components/courseslists'
import Desc from '@/components/desc'
import Landing from '@/components/landing'
import React from 'react'

const Home = async () => {

  return (
    <div>
       <div>
         <Landing />
       </div>
       <div className='bg-slate-100'>
         <Desc />
       </div>
       <div className='bg-white pt-5 mt-5 border-t-2'>
         <Courseslists />
       </div>
    </div>
  )
}

export default Home
