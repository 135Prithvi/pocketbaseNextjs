import Link from "next/link";

export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import Button from "./Button";
import Image from "next/image";
import { initPocketBase } from "../utils/init";
import Login from "../auth/login/page";
export const fetchCache = "force-no-store";
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const pb = await initPocketBase();
  if (!pb) {
    return <Login/>;
  }
  const d = JSON.parse(cookieStore.get("user")?.value as string);
  console.log(d);

  const address = await pb
    .collection("address")
    .getOne(searchParams.address as unknown as string);
  const product = await pb
    .collection("products")
    .getOne(searchParams.productID as unknown as string);

  return (
    <div className="bg-white text-black ">
      <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 w-full justify-center items-center grow p-4">
        <div className="max-w-xs sm:max-w-md rounded overflow-hidden shaow-lg sm:mx-auto lg:mx-0">
        <Image
            // shadow="lg"
            // radius="xl"
            width={600}
            height={800}
            alt={product.name}
          
            className="w-full  max-w-full max-h-full  m-auto  objec object-center  rounded-lg  backdrop-opacity-40 bg-white"
            src={`https://pocketbase-docker-production-acb9.up.railway.app/api/files/tfrg0e05t01tseb/${product.id}/${product.image}`}
          />
          <div className="py-2">
            <div className="font-bold text-xl mb-2 text-black">
              {product.name}
            </div>
            <p className="text-gray-700 text-base truncate">
              {product.description}
            </p>
          </div>
          <div className=" pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ₹{product.price}
            </span>
            <span className="inline-block bg-rose-200 rounded-full px-4 py-2 text-base font-semibold text-rose-600 mr-2 mb-2">
              Expect Our delivery within 7 days after confirmation of order
            </span>
          </div>
          
        </div>
        
        <div className="flex flex-col gap-4">
          <div>
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
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.city}, {address.state} {address.pincode} <br />
            Phone: +{address.phone}
          </p></div>
          <div className="flex gap-2 h-full">
            <button className="text-xl bg-red-600 hover:bg-red-500 hover:text-white h-10 w-full rounded text-white font-mono font-semibold">
              <Link href={`/prducts/${searchParams.productID}`}>Cancel</Link>
            </button>
            <Button
              address={searchParams.address}
              productID={searchParams.productID}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
