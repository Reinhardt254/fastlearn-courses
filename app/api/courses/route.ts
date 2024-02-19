import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server";

export async function POST (req: Request){

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
      const post = await prismadb.courses.create({
         data: {
            title: title,
            text: text,
            description: description,
            price: price,
            requirements: requirements,
            creator: creator,
            link: link,
            image: image,
         }
      })

     return NextResponse.json(post)

   }catch(error){
      console.log(error)
      return new NextResponse("Internal error occured", {status: 500})
   }

}