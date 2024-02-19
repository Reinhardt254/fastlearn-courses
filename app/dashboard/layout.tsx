import { auth } from "@clerk/nextjs";
import Sidebar from "./(admin-components)/sidebar";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 const id = "user_2cX2XwJLchsoaUsHA54k04i4dmx"

  const { userId } = auth()
  console.log(userId)

  if(!userId){
     redirect("/sign-in")
  }

  const uuid = userId.toString()
  

  if(uuid !== id){
    redirect("/mycourses")
  }


  return (
    <>
  <div className="-z-20">
    <div className=" flex">
      <div className="bg-blue-100">
        <Sidebar />
      </div>
          {children}
     </div>
    </div>
    </>
  );
}
