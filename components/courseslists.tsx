import React from 'react'
import Courses from './courses'
import { getCourses } from '@/actions/postCourses'

const Courseslists = async  () => {

  const data = await getCourses()

  return (
    <div>
      <div>
         <Courses data={data}/>
      </div>
    </div>
  )
}

export default Courseslists