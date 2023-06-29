"use server"
import { initPocketBase } from "@/app/utils/init";
export async function procced(productId: string) {
    ("use server");
    const pb = await initPocketBase();
  if (!pb) {
    return null;
  }
    const existingData = await pb.collection('cart').getFullList(1, {
       expand:"cartItems",
       filter:`user = '${pb.authStore.model?.id}'`,
    });
 
    const data = {
      cartItems: [existingData[0]?.cartItems , productId],
      user: pb.authStore.model?.id,
    };
 
    const d = await pb.collection("cart").update(existingData[0].id, data);
    return "ok"
  }