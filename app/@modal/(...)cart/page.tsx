// import { pb } from "@/app/utils/pocketbase";
import Modal from "./Modal";
import Link from "next/link";
import { cookies } from "next/headers";
import { initPocketBase } from "@/app/utils/init";
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from "react";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function PhotoModal() {
  // const cookieStore = cookies();
  // pb.authStore.loadFromCookie(
  //   `pb_auth=${cookieStore.get("pb_auth")?.value as any}`
  // );
  const pb = await initPocketBase();
  if (!pb) {
    return null;
  }
  const products = await pb.collection("cart").getFullList(20, {
    expand: "cartItems",
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <Modal>
      <h1 className="text-5xl font-bold text-white">
        <Link href="/"> Cart Items</Link>
      </h1>

      <div className="overscroll-y-auto overflow-y-auto">
        {" "}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 max-h-[22rem] ">
          {products[0].expand.cartItems.map((product: any) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 h-40">
                <img
                   src={`https://pocketbase-docker-production-acb9.up.railway.app/api/files/tfrg0e05t01tseb/${product.id}/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-contain lg:object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-300">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="text-sm font-medium text-white">
                {formatter.format(product.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
