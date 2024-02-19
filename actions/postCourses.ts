import prismadb from "@/lib/prismadb"

export const getCourses = async () => {
   const getAllPosts = await prismadb.courses.findMany()

   return getAllPosts;
}

export const getCoursesById = async (id: string) => {
   const getAllPosts = await prismadb.courses.findMany({
      where:{
         id
      }
   })

   return getAllPosts;
}

