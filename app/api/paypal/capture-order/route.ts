import prismadb from "@/lib/prismadb";
import client from "@/utils/paypal";
import { auth } from "@clerk/nextjs";
import paypal, { orders } from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { orderID, items } = await req.json();
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json("Unauthorized");
    }

    if (!orderID) {
      return NextResponse.json("OrderId required");
    }

    if (!items) {
      return NextResponse.json("Order Items are required");
    }

    const PaypalClient = client();
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({
      payment_source: {
         token: {   
          type: "BILLING_AGREEMENT",
          id: orderID,
         }
      },
    });

    const response = await PaypalClient.execute(request);
    if (!response) {
      console.log("Some error occured in the backend");
      return NextResponse.json("Some error occured in the backend", {
        status: 500,
      });
    }

    if (response.result.status == "COMPLETED") {
      const activeUser = await prismadb.user.findUnique({
        where: {
          authId: userId,
        },
      });

      if (!activeUser) {
        await prismadb.user.create({
          data: {
            firstname: response.result.payer.name.given_name,
            surname: response.result.payer.name.surname,
            email: response.result.payer.email_address,
            address: response.result.payer.address.country_code,
            authId: userId,
          },
        });
      }

      const UserData = await prismadb.user.findUnique({
        where: {
          authId: userId,
        },
      });

      if (!UserData) {
        return NextResponse.json("Unable to create user");
      }

      for (const item of items) {
        await prismadb.orders.create({
          data: {
            title: item.title,
            text: item.text,
            description: item.description,
            price: item.price,
            requirements: item.requirements,
            creator: item.creator,
            link: item.link,
            image: item.image,
            authId: userId,
            userId: UserData.id,
          },
        });
      }
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("Err at Create Order: ", error);
    return NextResponse.json("Could not find user", { status: 404 });
  }
}
