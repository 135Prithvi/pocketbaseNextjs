import Link from "next/link";
import Login from "../auth/login/page";
export const dynamic = "auto";
import {toast} from "react-hot-toast"
import { cookies } from "next/headers";
import Button from "./Button";
import { initPocketBase } from "../utils/init";
export const fetchCache = "force-no-store";
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pb = await initPocketBase();
  if (!pb) {
    return <Login/>;
  }
  const cookieStore = cookies();
  const d = JSON.parse(cookieStore.get("user")?.value as string);
  // console.log(d);
  
  const address = await pb.collection("address").getFullList({
    filter: `user = "${d.id}"`,
  });
  console.log(address);
  async function actionComplete(){

    
    
   
    toast.success("Procced to pay", )
   }
  async function actionCancel(){

  
    
   
    toast.success("Dismissed Order", )
   }
  return (
    <div className="p-4 bg-white rounded shadow min-h-screen flex flex-col gap-y-4">
      <div className="flex flex-col ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a1 1 0 01-1-1v-6a1 1 0 011-1V6a1 1 0 00-1.71-.71l-6 6A1 1 0 003 12v6a1 1 0 01-1 1H1a1 1 0 01-1-1v-7a1 1 0 011-1h1a1 1 0 011 1v4.59l4-4V5a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1v-7a3 3 0 013-3h14a3 3 0 013 3v7a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4.41l-4 4V17a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 011-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h1a1 1 0 011 1v1.59l4-4V5a3 3 0 013-3h2a3 3 0 013 3v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V8.41l-6 6V17a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 011-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h1a1 1 0 011 1v1.59l4-4V5a1 1 0 00-1-1H8a1 1 0 00-1 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6a1 1 0 011-1h1a1 1 0 011 1v1.59l4-4V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v6a3 3 0 01-3 3zm2-5a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm2 5a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm2 5a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-lg font-medium">Shipping Address</h2>
        <p className="text-gray-700">
        John Doe
        <br />
        {address[0].line1}
        <br />
        {address[0].line2}
        <br />
        {address[0].city}, {address[0].state} {address[0].pincode} <br />
        Phone: +{address[0].phone}
      </p>
      </div>
    
      <div className="flex gap-4 ">
      
        <Button classN="text-xl bg-red-600 hover:bg-red-500 hover:text-white h-10 w-full rounded text-white font-mono font-semibold" message={"Dismissed Order"} type={"error"} linkChild={`/products/${searchParams.productID}`} children={'Cancel'} />
       <Button classN="text-xl bg-blue-500 hover:bg-blue-400 hover:text-white h-10 w-full rounded text-slate-100 font-mono font-semibold" message={"Procced to pay"} type={"success"} linkChild={`/procced?productID=${searchParams.productID}&address=${address[0].id}`} children={'procced'} />
      </div>
    </div>
  );
}
