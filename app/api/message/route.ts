import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server";

export async function POST (req: Request){

   const body = await req.json();

     const {
        name,
        email,
        message
      } = body;

      if(!name || !name || ! message){
         return NextResponse.json("required value are null")
      }

   try{
      const post = await prismadb.message.create({
         data: {
          name,
          email,
          message,
         }
      });

     return NextResponse.json(post)

   }catch(error){
      console.log(error)
      return new NextResponse("Internal error occured", {status: 500})
   }

}
