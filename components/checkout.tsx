"use client";

import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CheckOut = () => {

  const router = useRouter()

  const paypalCreateOrder = async (totalPrice: number) => {
    try {
      let response = await axios.post("/api/paypal/create-order", {
        // user_id: store.getState().auth.user._id,
        order_price: totalPrice,
      });
      return response.data.result.id;
    } catch (err) {
      return null;
    }
  };

  
  const cart = useCart();
  
  const items = useCart((state) => state.items);
  
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)   
  
  const paypalCaptureOrder = async (orderID: string) => {
    try {
      let response = await axios.post("/api/paypal/capture-order", {
        orderID,
        items,
      });

      if (response.data.result.status == 'COMPLETED') {
        toast.success('Payment Successful')
        router.push("/mycourses")
        return response;
      }
    } catch (error) {
      toast.error('Some Error Occured')
      return null;
    }
  };


  return (
    <div className=" w-full flex justify-cente items-cente">
      <div className=" w-full flex justify-cente items-cente  pt- flex-col">
           <div className="flex py-3">
            <h1 className=" pr-2">Amount: </h1>
            <div className="pt-">
             <Currency value={totalPrice} />
            </div>
           </div>

        <PayPalScriptProvider
          options={{
            clientId:
              process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
            currency: "USD",
            intent: "capture",
          }}
        >
          <PayPalButtons
            style={{
              color: "gold",
              shape: "rect",
              label: "pay",
              height: 50,
            }}
            createOrder={async (data, actions) => {
              let order_id = await paypalCreateOrder(totalPrice);
              return order_id + "";
            }}
            onApprove={async (data, actions) => {
              let response = await paypalCaptureOrder(data.orderID);
                 response ? true : false
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default CheckOut;
