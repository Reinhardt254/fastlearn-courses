import client from '@/utils/paypal'
import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body)
  const { order_price } = body

  try{
    const PaypalClient = client()
    //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request = new paypal.orders.OrdersCreateRequest()
    // request.headers['Prefer'] = 'return=representation'
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: order_price+"",
          },
        },
      ],
    })
    
    const response = await PaypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("RES: ", response)
      return NextResponse.json("Some error occured in the backend", {status: 500})
    }
    return NextResponse.json(response)
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
   return NextResponse.json("Could not find user", {status:404})
  }
}
