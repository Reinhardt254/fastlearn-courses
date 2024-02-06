import Courses from '@/components/courses'
import Desc from '@/components/desc'
import Landing from '@/components/landing'
import React from 'react'

const Home = () => {
  return (
    <div>
       <div>
         <Landing />
       </div>
       <div className='bg-slate-100'>
         <Desc />
       </div>
       {/* <div className='bg-slate-100 pt-5 mt-5'>
         <Courses />
       </div> */}
    </div>
  )
}

export default Home
