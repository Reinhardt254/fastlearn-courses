"use client"

import useCart from '@/hooks/use-cart'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import { AlignCenter, BarChart3, CarTaxiFrontIcon, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Navbar = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)

  const pathname = usePathname();

  const data = useCart();
  const itemsInCart = data.items.length

  const routes = [
    {
      href:"/",
      label:"Home",
      active: pathname === "/",
    },
    {
      href:"/products",
      label:"Store",
      active: pathname === "/products",
    },
    {
      href:"/about",
      label:"About Us",
      active: pathname === "/about",
    },
    {
      href:"/contact",
      label:"Contact Us",
      active: pathname === "/contact",
    },
    {
      href:"/dashboard",
      label:"My Courses",
      active: pathname === "/mycourses",
    },
  ]

  return (
    <div className='flex flex-row pt-5 pb-2  px-2 bg-white justify-between  items-center w-screen shadow-sm'>
      <div className='pl-3 flex space-x-0 font-bold flex-row  items-center justify-center'>
       <Link 
          href="/"
       >
       <Image 
        src="/logoimage.png"
        alt="profile"
        width={40}
        height={40}
        className='rounded-full shadow-2xl shadow-blue-300'
       />
       </Link>
      </div>

      <div className='flex'>
        <h1 className='text-slate-900 font-semibold text-3xl'>Fast</h1>
        <h1 className='text-blue-600 font-semibold text-3xl'>Learn</h1>
      </div>


    <div className='flex'>
      <Link 
        href="/cart"
        className='relative pr-5'
       >
          <div className='relative flex'>
          <ShoppingCart color='black' height={25} width={25} />
          <div className='h-5 w-5 rounded-full bg-orange-600 flex justify-center items-center absolute bottom-3 left-3'>
              <h1 className='font-semibold text-white'>
               {itemsInCart}
              </h1>
          </div>
          </div>
        </Link>
    
      <div className='max-sm:hidden'>
        <div className='flex space-x-5 mr-8'>
          {routes.map((route: any)=>(
           <div key={route.label}> 
            <Link
            href={route.href}
            className={cn(route.active? "text-blue-500" : "text-slate-900", "font-bold text-lg")}
             >
             <p className="hover:text-blue-500">{route.label}</p>
             </Link>
           </div>
          ))}
        </div>
      </div>
      <div className='mr-7 max-sm:hidden'>
          <UserButton afterSignOutUrl="/"/>
      </div>
    </div>

        <div className='sm:hidden mr-8'>
        <div onClick={()=>setToggleDropDown(true)}>
          <AlignCenter size={24} color="blue"/>
        </div>
        </div>
{/* =======================Small devices=========================== */}
       {toggleDropDown && (
       <div className='z-50 h-screen w-screen absolute inset-0'>
          <div className='h-full w-full flex'>
            <div 
               className='w-1/3 bg-black opacity-70'
               onClick={()=>setToggleDropDown(false)}
              >
            </div>
            <div className='bg-white w-2/3'>
              <div 
                 onClick={()=>setToggleDropDown(false)}
                 className=''
                 >
                <X size={24} color="white"
                   className='top-4 right-10 absolute '
                />
               </div>
               <div className=' absolute top-4 pl-2'>
                 <UserButton afterSignOutUrl="/"/>
               </div>
                <div className='flex flex-col items-center justify-center h-4/5 space-y-5'>
                  {routes.map((route: any)=>(
                  <div key={route.label}> 
                    <Link
                      href={route.href}
                      onClick={()=>setToggleDropDown(false)}
                      className={cn(route.active? "text-blue-500" : "text-slate-900", "font-bold")}
                    >
                      <p className="text-xl">{route.label}</p>
                    </Link>
                  </div>
                  ))} 
                </div>
                <div>
              </div>
            </div>
          </div>
       </div>
       )}

{/* ==================================Large devices=============================== */}
    </div>
  )
}

export default Navbar
