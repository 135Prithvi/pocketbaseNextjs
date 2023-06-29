"use client";
import { toast } from "react-hot-toast";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import { cookies } from "next/headers";
import { procced } from "./actions";

export default function ClientButton({ productId }:{productId:string}) {
  
  return (
    <Button
      radius="sm"
      onPress={async()=>{const g= await procced(productId);  if(g==null) { toast.error(" Login Bitch")}}}
      className="text-xl bg-blue-600 hover:bg-blue-500 hover:text-white  rounded text-white font-mono font-semibold"
    >
      {" "}
      Add to cart
    </Button>
  );
}
