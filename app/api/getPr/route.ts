import { initPocketBase } from "@/app/utils/init";
import { pb } from "@/app/utils/pocketbase";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'


export const fetchCache = 'force-no-store'
// you can place this helper in a separate file so that it can be reused

export async function GET(req: NextRequest, res: NextResponse,) {
  
  console.log(pb.authStore.isValid)
  const products = await pb.collection("products").getFullList(20, {
    sort: "-price",

  });
  
    return NextResponse.json(
      {  products},
      {
        status: 200,
      }
    );
  
}
