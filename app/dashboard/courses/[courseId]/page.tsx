import { getCoursesById } from '@/actions/postCourses';
import CourseItem from '@/components/courseitem'
import React from 'react'

interface ProductPageProps {
   params: {
      courseId: string;
   },
}

const Page = async ({ params }: ProductPageProps) => {
   const courseId = params.courseId

   const data = await getCoursesById(courseId)

  return (
   <div>
      <div>
         <CourseItem data={data}/>
      </div>
   </div>
  )
}

export default Page