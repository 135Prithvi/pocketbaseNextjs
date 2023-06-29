"use client"
import {toast} from "react-hot-toast"

import Link from "next/link";



export default function Button({children,linkChild,message, type ,classN}:any){

  
   async function actionComplete(){

    
    
   if (type== "success"){
    toast.success(message )
   }
   if (type== "error"){
    toast.error(message)
   }}
    return (
        <button onClick={actionComplete} className={classN}>
        <Link
          href={linkChild}
        >
         {children}
        </Link>
      </button>
    )
}