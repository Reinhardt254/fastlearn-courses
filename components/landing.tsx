import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="h-full pb-10">
      <div className=" h-full flex justify-center items-center mt-10">
        <div className="p-4 md:w-1/3">
          <p className="text-6xl text-slate-900 font-medium">Learn without</p>
          <p className="text-6xl text-slate-900 font-medium">Limits</p>
          <p className="text-2xl mt-5 text-slate-600 font-medium">
            Start, switch or advance your career with well designed crafted
            courses and get Professional Certificates, and degrees from
            world-class universities and companies.
          </p>
          <div>
            <Link
              href="/products"
              className="h-16 bg-blue-600 rounded flex justify-center items-center mt-6 w-48"
            >
              <h1 className="text-white text-xl font-medium">Our Courses</h1>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center h-full max-sm:hidden max-md:hidden">
          <div>
            <Image
              className="rounded-full"
              src="/landing.jpg"
              width={416}
              height={416}
              alt="profile"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
