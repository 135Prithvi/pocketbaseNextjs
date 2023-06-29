import { pb } from "./utils/pocketbase";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const runtime = 'edge'
import Client from "./Client";

export default async function home() {
  const products = await pb.collection("products").getFullList(20, {
    sort: "-price",
  });
  //  console.log(await products.json())
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

  return (
    <div>
      
      <div className="text-center">
        <h1 className="text-5xl font-bold ">
          {" "}
          Next.js + TailwindCSS
        </h1>
      </div>
      <h1 className="text-5xl font-bold text-black ">{}</h1>{" "}
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-4 p-8 w-full">
        {products.map((product) => (
          <Client product={convertToPOJO(product)} key={product.id} />
        ))}
      </div>
     
    </div>
  );
}
