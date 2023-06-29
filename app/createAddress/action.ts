"use server";
import { pb } from "@/app/utils/pocketbase";
export default async function createAddress(line1: string, line2: string, pincode : number, state : string , country: string ,phone:number,city:string){
    const data = {
        "line1": line1,
        "line2": line2,
        "pincode":pincode,
        "state": state,
        "country":country,
        "phone": phone,
        "city": city
    };
    
    const record = await pb.collection('address').create(data);
}