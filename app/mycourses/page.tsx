import DownloadButton from "@/components/download-button";
import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

const MyCourses = async () => {
  const { userId } = auth();
  if (!userId) {
    return <div>Please Sign in</div>;
  }

  const user = await currentUser();

  const data = await prismadb.orders.findMany({
    where: {
      authId: userId,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="w-full min-h-screen bg-white flex justify-cente items-center flex-col mt-3">
      <div className="w-full md:w-1/2">
        <div className="h-full w-full pl-5 mt-4 md: pb-3">
          <div>
            <div className="flex pb-1">
              <h1 className="text-3xl text-slate-900 font-semibold">Hello</h1>
              <h1 className="text-3xl text-blue-500 pl-2 font-semibold">
                {user?.firstName}
              </h1>
            </div>
            {data.length == 0 ? (
              <h1 className="text-3xl text-gray-700 font-extralight">
                You have not purchased any courses yet, please visit our store to
                get started.
              </h1>
            ) : (
              <h1 className="text-3xl text-gray-700 font-extralight">
                Here are your courses ready for download
              </h1>
            )}
          </div>
        </div>
        <div className="w-full h-full flex-col justify-center items-center grid md:grid-cols-2">
          {data.map((item: any) => (
            <div key={item.id}>
              <div
                //   onClick = {() => handleClick(item?.id)}
                className="p-1"
              >
                <div className="h-full w-full justify-center flex items-center flex-col mb-3 shadow-lg">
                  <div className="md:h-64 w-full h-52 relative">
                    <Image
                      src={item.image}
                      fill={true}
                      alt="course"
                      loading="lazy"
                      className="rounded"
                    />
                  </div>
                  <div className="text-start bg-white rounded-xl">
                    <div className="w-auto p-3">
                      <p className="font-semibold text-slate-900 text-lg line-clamp-1">
                        {item.title}
                      </p>
                      <p className="font-semibold text-slate-700 line-clamp-2">
                        {item.description}
                      </p>
                      <p className="font-semibold text-blue-500 text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0 mb-4">
                    <DownloadButton link={item.link} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
