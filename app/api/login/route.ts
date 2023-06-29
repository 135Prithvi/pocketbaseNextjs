
import { pb } from "@/app/utils/pocketbase";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  const { email, password } = await req.json();
  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);
    
   
  if (pb.authStore.isValid) {
    cookies().set('user' ,JSON.stringify(authData.record), {})
    cookies().set('pb_auth' ,pb.authStore.exportToCookie(), {path : "/"})
    return NextResponse.json(
      { message: `Logged in successfully` },
      {
        headers: {

          "Set-cookie": pb.authStore.exportToCookie(),
        },
      }
    );
  } else {
    return NextResponse.json(
      { message: `Unable to login` },
      {
        status: 400,
      }
    );
  }
}
