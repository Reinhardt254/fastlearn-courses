import prismadb from "@/lib/prismadb";
import TableSales from "../(admin-components)/table-sales"
import { title } from "process";


interface  productColumn {
   id          : string 
   title       : string
   price       : string
   firstname   : string
   surname     : string
   email       : string
   address     : string
}

const Sales = async () => {

   const data = await prismadb.orders.findMany({
     include: {
       user: true,
     },
     orderBy: {
       createdAt: "desc",
     },
   });

   const modifiedData: productColumn[] = data.map((item) =>({
      id: item.id,
      title: item.title,
      price: item.price,
      firstname: item.user.firstname,
      surname: item.user.surname,
      email: item.user.email,
      address: item.user.address
     }));

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-2/3'>
         <div className="mt-5">
            {/* <h1 className='text-4xl  text-slate-900 font-extralight'>Hello Admin</h1> */}
            <p className='text-5xl font-extralight text-black'>Total sales invoice</p>
         </div>
              <div className="mt-5">
               <TableSales data={modifiedData}/>
             </div>
      </div>
    </div>
  )
}

export default Sales
