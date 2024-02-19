import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server";

export async function PATCH (req: Request,   
     {params}: {params: { courseId: string}})
  {

   const id = params.courseId;
   console.log("called")

   const body = await req.json();

     const {
      title, 
      text, 
      description,
      price, 
      requirements, 
      creator, 
      link,
      image
      } = body;

   try{
      const post = await prismadb.courses.updateMany({
         where:{
            id
         },
         data: {
            title: title,
            text: text,
            description: description,
            price: price,
            requirements: requirements,
            creator: creator,
            link: link,
            image: image
         }
      })

     return NextResponse.json(post)

   }catch(error){
      console.log(error)
      return new NextResponse("Internal error occured", {status: 500})
   }

}


export async function DELETE( req: Request, {params}:  {params: {courseId : string}}){
   const id = params.courseId;

   try{

      const data = await prismadb.courses.deleteMany({
         where: {
            id: id
         }
      })

     return NextResponse.json(data)

   }catch(error){
      return NextResponse.json("Internal error occured", {status: 500})
   }
}

