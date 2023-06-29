"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import createAddress from "./action";


function CreateAdress() {
  
    const router = useRouter()
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState(""); 

  const [pincode, setPincode] = useState("");
const [city, setCity] = useState("");

  const handleSubmit = async () => {
   
await createAddress(line1, line2,  parseInt(pincode) , state, country, parseInt(phone), city)
    // Perform form validation and submission logic here
    // You can access the form values using the state variables (e.g., userName, fullName, email, password, confirmPassword)

    // Reset form fields
    setLine1("");
    setLine2("");
    setPhone("");
    setCity("");
    setPincode("");      
    setState("")   
       router.push('/')
  };


  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 text-black">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form action={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="address line 1"
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="address line 2"
            value={line2}
            onChange={(e) => setLine2(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="number"
            placeholder="Phone number India"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="number"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
         
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-red-600 hover:underline hover:underline-offset-4">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateAdress;
