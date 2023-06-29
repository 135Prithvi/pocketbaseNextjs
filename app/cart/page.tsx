// export default function UserCartPage() {
//   return (
//     <div className="bg-blue-100 min-h-screen">
//       <header className="bg-white shadow">
//         <div className="container mx-auto flex justify-between items-center px-4 py-3">
//           <h1 className="text-2xl font-bold text-blue-500">Twitter</h1>
//           <div>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md">
//               Tweet
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto py-4">
//         {/* Tweets */}
//         <div className="space-y-4">
//           <div className="bg-white shadow px-4 py-3">
//             <div className="flex items-start">
//               <img
//                 className="w-12 h-12 rounded-full"
//                 src="https://placekitten.com/200/200"
//                 alt="User Avatar"
//               />
//               <div className="ml-4">
//                 <h2 className="font-bold">John Doe</h2>
//                 <p className="text-gray-600">@johndoe</p>
//               </div> <p className="text-gray-800 mt-2">
//             This is my first tweet! #HelloWorld
//           </p>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex">
//             <button className="text-gray-500 hover:text-blue-500 mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path
//                   d="M5 12h14M12 5l7 7-7 7"
//                   stroke="currentColor"
//                 />
//               </svg>
//               <span className="ml-1">12</span>
//             </button>
//             <button className="text-gray-500 hover:text-green-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path
//                   d="M20 6L9 17l-5-5"
//                   stroke="currentColor"
//                 />
//               </svg>
//               <span className="ml-1">8</span>
//             </button>
//           </div>
//           <button className="text-gray-500 hover:text-blue-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path
//                 d="M5 12h14M12 5l7 7-7 7"
//                 stroke="currentColor"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Add more tweets here */}
//     </div>
//   </main>
// </div>
//   );
// }
import React from 'react';
import { initPocketBase } from '../utils/init';
import Link from 'next/link';

const Home = async () => {
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
    <div className="w-full max-w-xl mx-auto  min-h-screen">
     <h1 className="text-5xl font-bold text-white">
        <Link href="/"> Cart Items</Link>
      </h1>

      <div className="">
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
    </div>
  );
};

export default Home;