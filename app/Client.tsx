
"use client";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NextImage from "next/image";
export default function Client({ product }: { product: any }) {
  const router = useRouter();
  router.prefetch(`/products/${product.id}`);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
 

  return (
    <Card
      isPressable
      onPress={(e) => {
        setTimeout(() => {
          router.push(`/products/${product.id}`);
        }, 200);
      }}
      as={"div"}
    >
      <div className="transition-opacity relative sm:flex-col flex  items-center ">
        <CardBody className="overflow-visible pt-[100%] relative bg-white">
          <NextImage
            width={600}
            height={800}
            alt={product.name}
            className="w-full absolute max-w-full max-h-full top-0  left-0 right-0  bottom-0 m-auto  objec object-center p-3 rounded-lg  backdrop-opacity-40 bg-white"
            src={`https://pocketbase-docker-production-acb9.up.railway.app/api/files/tfrg0e05t01tseb/${product.id}/${product.image}`}
          />
        </CardBody>
        <CardFooter className="h-full text-xs sm:text-base justify-start flex-col items-start ">
          <h1>{product.name}</h1>
          <p className="text-blue-500">{formatter.format(product.price)}</p>
          <p className="text-default-500 sm:truncate w-full">
            {product.description}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
