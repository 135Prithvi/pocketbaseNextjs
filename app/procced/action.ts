"use server";
import { cookies } from "next/headers";
import { initPocketBase } from "../utils/init";

// import { store } from "../../store";
// import { setUser } from "../../store/slice";
export default async function order(address: string, productID: string) {
  const pb = await initPocketBase();
  if (!pb) {
    return null;
  }
  const data = {
    "orderStatus": "confirmed",
    "address": `${address}`,
    "product": `${productID}`,
    "user":`${pb.authStore.model?.id}`,
  };
 const d = await pb.collection("orders").create(data);

}
