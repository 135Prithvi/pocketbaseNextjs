"use client"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation";
import { pb } from "../utils/pocketbase"
import order from "./action";

export default function Button({address,productID}){
    const router = useRouter();
  
   async function procced(){

    await order(address,productID)
    
    router.push("/");
    toast.success("Order Placed Successfully", )
   }
    return (
        <button onClick={procced} className="text-xl bg-blue-500 hover:bg-blue-400 hover:text-white h-10 w-full rounded text-slate-100 font-mono font-semibold">
            
        pay
 
    </button>
    )
}