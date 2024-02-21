"use client";

import useCart from "@/hooks/use-cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Product } from "@/types";

interface ProductListProps {
  data: Product[];
}

const CourseItem: React.FC<ProductListProps> = ({ data }) => {
  const router = useRouter();

  const cart = useCart();

  const onAddToCart = (item: Product) => {
    cart.addItem(item);
  };

  const onBuyNow = (item: Product) => {
    cart.addItem(item);
    router.push("/cart");
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-2">
      {data.map((item: any) => (
        <div className="md:w-1/2" key={item.description}>
          <Toaster />
          <div className="">
            <Image
              src={item.image}
              height={150}
              width={300}
              alt="course"
              className=" min-w-full rounde p-2"
            />
          </div>
          <div className="p-2">
            <p className="text-slate-900 font-semibold text-3xl">
              {item.title}
            </p>
            <p className="text-slate-900 font-semibold text-3xl">
              {item.description}
            </p>
            <p className="text-lg font-bold text-blue-600">${item.price}</p>
            <div className="flex">
              <p className="text-black text-lg font-semibold">Creator:</p>
              <p className="text-lg font-semibold text-blue-600 pl-2">
                {item.creator}
              </p>
            </div>

            <div className="">
              <p className="text-black text-lg font-semibold">Requirements:</p>
              <p className=" font-semibol text-black">{item.requirements}</p>
            </div>
            <p className="text-black font-semibold text-lg">Description: </p>
            <p className="font-semibol text-black pt-2">{item.text}</p>

            {/* <p className='text-black font-semibold text-lg'>What you will learn: </p>
         <p className='font-semibol text-black pt-2'>
            
         </p> */}

            <div className="w-full flex justify-center items-center pt-7 pb-1">
              <div className="bg-white h-14 w-40 rounded-m flex items-center justify-center border-2 border-blue-500">
                <button onClick={() => onAddToCart(item)}>
                  <p className="text-center text-blue-600 font-semibold text-lg ">
                    Add to Cart
                  </p>
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center pt-3 pb-10">
              <div className="bg-blue-600 h-14 w-40 rounded-m flex items-center justify-center">
                <button onClick={() => onBuyNow(item)}>
                  <p className="text-center text-white font-semibold text-lg">
                    Buy now
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* <div>
            <h1>Related Courses</h1>
            <div>
            <div>
               image
            </div>
            <p>Title</p>
            <p>description</p>
            <p>money</p>
         </div>
         </div> */}
        </div>
      ))}
    </div>
  );
};

export default CourseItem;
