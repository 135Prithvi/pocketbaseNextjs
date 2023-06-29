import Client from "./Client";

import { cookies } from "next/headers";
import { initPocketBase } from "../utils/init";
import Login from "../auth/login/page";
import { Collections, OrdersResponse, ProductsResponse } from "../pocketbase-types"


export const fetchCache = 'auto'
export const revalidate = 30
type Texpand = {
  product: ProductsResponse
}

const UserOrdersPage = async() => {
  const pb = await initPocketBase();
  if (!pb) {
    return <Login/>;
  }
  const orderData = await pb.collection(Collections.Orders).getFullList<OrdersResponse<Texpand>>(10, {
    expand: "product",
    filter:`user = '${pb.authStore.model?.id}'`
    
  })
  function convertToPOJO(obj: any): any {
    if (typeof obj !== "object" || obj === null) {
      return obj; // Return non-object values as is
    }

    if (Array.isArray(obj)) {
      return obj.map(convertToPOJO); // Convert array elements to POJOs
    }

    const pojo: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        pojo[key] = convertToPOJO(obj[key]); // Convert nested objects to POJOs
      }
    }
    return pojo;
  }
  console.log(convertToPOJO(orderData));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  const orders = [
    { id: '123', title: 'Product 1', price: 19.99, quantity: 2 },
    { id: '456', title: 'Product 2', price: 9.99, quantity: 1 },
    { id: '789', title: 'Product 3', price: 14.99, quantity: 3 },
  ];

  return (
    <div className="grid min-h-screen grid-cols-1 p-3 sm:p-5 lg:p-8">
      
    
        {/* {convertToPOJO(orderData).map((order) => (
          <Client
            key={order.id}
            id={order.id}
            title={order.expand.product.name}
            price={formatter.format(order.expand.product.price)}
            quantity={order.quantity ??1}
          />
        ))} */}
        <div><Client orders={convertToPOJO(orderData)} /></div>
      
    </div>
  );
};

export default UserOrdersPage;
