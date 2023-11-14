import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const dashboardUrl = absoluteUrl("/dashboard");
export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // const userSubscription = await prismadb.userSubscription.findUnique({
    //   where: {
    //     userId
    //   }
    // })

    // if (userSubscription?.stripeCustomerId) {
    //   const stripeSession = await stripe.billingPortal.sessions.create({
    //     customer: userSubscription.stripeCustomerId,
    //     return_url: dashboardUrl,
    //   })

    //   return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    // }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: dashboardUrl,
      cancel_url: dashboardUrl,
      payment_method_types: ["card"],
      customer_email: user.emailAddresses[0].emailAddress,
      mode: "subscription",
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "HunterX Pro",
              description: "Unlimited Features"
            },
            unit_amount: 1000,
            recurring: {
              interval: "month"
            }
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    })

    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log(error);
    return new NextResponse("Sơmething went wrong.", { status: 500 });
  }
};