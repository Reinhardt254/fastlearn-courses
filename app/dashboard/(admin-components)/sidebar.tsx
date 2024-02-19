"use client"

import { cn } from "@/lib/utils";
import { Book, Home, Layers, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full w-full flex justify-center items-cente mt-36">
      <div className="h-80 bg-blue-500 w-28 rounded-3xl ml-2 mt- mr-5">
        <div className="h-full w-full justify-center items-center flex flex-col space-y-7">
          <Link 
          href="/dashboard"
          className={cn(pathname == "/dashboard" ?  "bg-gray-100 rounded-full p-2": "bg-gray-800 p-2 rounded-full")} 
          >
            <Home color={cn(pathname == "/dashboard" ? "black" : "white")}/>
          </Link>
          <Link
           className={cn(pathname == "/dashboard/courses" ?  "bg-gray-100 rounded-full p-2": "bg-gray-800 p-2 rounded-full")} 
            href="/dashboard/courses
           ">
            <Layers color={cn(pathname == "/dashboard/courses" ? "black" : "white")}/>
          </Link>
          <Link
             className={cn(pathname == "/dashboard/sales" ?  "bg-gray-100 rounded-full p-2": "bg-gray-800 p-2 rounded-full")} 
            href="/dashboard/sales"
            >
            <Book color={cn(pathname == "/dashboard/sales" ? "black" : "white")}/>
          </Link>
          <Link 
             className={cn(pathname == "/dashboard/messages" ?  "bg-gray-100 rounded-full p-2": "bg-gray-800 p-2 rounded-full")} 
            href="/dashboard/messages"
          >
            <Mail color={cn(pathname == "/dashboard/messages" ? "black" : "white")}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
