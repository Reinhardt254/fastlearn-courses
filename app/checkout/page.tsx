// "use client";

// import Currency from "@/components/currency";
// import useCart from "@/hooks/use-cart";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import toast, { Toaster } from "react-hot-toast";
// import { z } from "zod";

// const CheckOut = () => {

//   const router = useRouter()

//   const[ firstuserName, setFirstUserName ]= useState("")
//   const[ seconduserName, setSeconduserName] = useState("")
//   const[ userEmail, setUserEmail] = useState("")

//   // const { 
//   //   handleSubmit,
//   //   register,
//   //   control,
//   //   watch,
//   //   formState: { errors },
//   //   reset,
//   // } = useForm();

//   const paypalCreateOrder = async (totalPrice: number) => {
//     try {
//       let response = await axios.post("/api/paypal/create-order", {
//         // user_id: store.getState().auth.user._id,
//         order_price: totalPrice,
//       });
//       return response.data.result.id;
//     } catch (err) {
//       return null;
//     }
//   };

  
//   const cart = useCart();
  
//   const items = useCart((state) => state.items);
  
//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price)
//   }, 0)   
  
//   const paypalCaptureOrder = async (orderID: string) => {
//     try {
//       let response = await axios.post("/api/paypal/capture-order", {
//         orderID,
//         items,
//       });

//       if (response.data.result.status == 'COMPLETED') {
//         toast.success('Payment Successful')
//         router.push("/mycourses")
//         return response;
//       }
//     } catch (error) {
//       toast.error('Some Error Occured')
//       return null;
//     }
//   };


//   return (
//     <div className=" w-full flex justify-center items-center">
//       <div className="md:w-1/2 w-full flex justify-center items-center bg-blue-100 pt-8 flex-col">
//         <h1>Please choose your payment option </h1>
//         {cart.items.map((item)=>(
//         <div 
//           key={item.id}
//         >
//           <Toaster />
//            <div>
//            <div>
//              <h1>Items</h1>
//              <h1>{item.title}</h1>
//            </div>
//            </div>
//         </div>
//         ))}
//            <div className="flex">
//             <h1>Amount: </h1>
//              <Currency value={totalPrice} />
//            </div>

//          {/* <div
//             className='flex space-y-4 h-full flex-col justify-center items-center pt-7 pb-7'
//           >
//             <input 
//               type="text"
//               placeholder='First name'
//               required
//               onChange={(e)=>setFirstUserName(e.target.value)}
//               className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
//             />

//            <input 
//               type="text"
//               placeholder='Second Name'
//               required
//               onChange={(e)=>setSeconduserName(e.target.value)}
//               className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
//             />

//              <input 
//               type="text"
//               required
//               placeholder='Email'
//               onChange={(e)=>setUserEmail(e.target.value)}
//               className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
//             />
//           </div> */}


//         <PayPalScriptProvider
//           options={{
//             clientId:
//               process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ||
//               "ELNrPBlhOjUTpbRp7euLAFS2oq6Lci9xqfG-94pOsEgDH2NPIKeJT9npK9Znah1jTldnQDgikioEJty6",
//             currency: "USD",
//             intent: "capture",
//           }}
//         >
//           <PayPalButtons
//             style={{
//               color: "gold",
//               shape: "rect",
//               label: "pay",
//               height: 50,
//             }}
//             createOrder={async (data, actions) => {
//               let order_id = await paypalCreateOrder(totalPrice);
//               return order_id + "";
//             }}
//             onApprove={async (data, actions) => {
//               let response = await paypalCaptureOrder(data.orderID);
//                  response ? true : false
//             }}
//           />
//         </PayPalScriptProvider>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;
