import { pb } from "@/app/utils/pocketbase";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Client from "./Client";
import ClientButton from "./ClientBtn";

interface HalfFilledStarProps {
  filledColor?: string;
  emptyColor?: string;
}
export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";
const HalfFilledStar: React.FC<HalfFilledStarProps> = ({
  filledColor = "text-yellow-500",
  emptyColor = "text-gray-400",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 32 32"
    >
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stop-color="black" />
          <stop offset="50%" stop-color="gray" />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad)"
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
      l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
};
export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;
    const roundedRating = Math.round(product.avg_rating * 2) / 2; // Round the rating to the nearest 0.5
    for (let i = 1; i <= maxRating; i++) {
      if (i <= roundedRating) {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
            key={i}
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
        );
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        stars.push(
          <HalfFilledStar
            key={i}
            filledColor="text-yellow-500"
            emptyColor="text-gray-400"
          />
        );
      } else {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 opacity-30 text-yellow-400"
            key={i}
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
        );
      }
    }

    return stars;
  };
  const product = await pb.collection("products").getOne(id);
  return (
    <div className=" ">
      <main className="min-h-screen grid lg:grid-cols-2 grid-cols-1 w-full grow p-4">
        <div className="min-[1024px]:col-start-1 w-full lg:container flex items-center flex-col h-full">
          <img
            src={`${process.env.NEXT_PUBLIC_PB_URL}api/files/tfrg0e05t01tseb/${product.id}/${product.image}`}
            alt={product.name}
            className="h-full w-fit object-contain  object-center lg:h-full lg:w-full max-h-full bg-white"
          />
          <div className="mt-4">
            <h2 className="absolute w-1 h-1 p-0 -m-1 whitespace-nowrap overflow-hidden">
              Reviews
            </h2>
            <div className="flex items-center justify-center lg:justify-items-start">
              <p className="avv axo">
                {product.avg_rating}
                <span className="t"> out of 5 stars</span>
              </p>
              <div className="m-1 flex items-center text-yellow-400">
                {renderStars()}
              </div>
              <div aria-hidden="true" className="js avv axj">
                ·
              </div>
              <div className="js ls">
                <span className="avv avz ayc bla">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" min-[1024px]:col-start-2 min-[1024px]:col-end-2 mx-auto">
          <div className="mt-5">
            <h2 className="font-sans text-black font-semibold">Description</h2>
            <div className="p q lc axm mt-4 prose max-w-[65ch]  text-default-500">
              <p>{product.description}</p>
              <p>
                Looking to stock your closet? The Basic {product.name} also
                comes in a 3-pack or 5-pack at a bundle discount.
              </p>
            </div>
          </div>
        </div>
        <div className=" min-[1024px]:col-start-2 min-[1024px]:col-end-2 max-w-[65ch] mx-auto grid grid-cols-2 gap-x-2 mt-3 w-full">
          <button className="text-xl bg-blue-600 hover:bg-blue-500 hover:text-white h-10 w-full rounded text-white font-mono font-semibold">
            <Link href={`/actioncFomplete?productID=${product.id}`}>
              buy now
            </Link>
          </button>
          <ClientButton productId={product.id} />
        </div>
        <div className=" min-[1024px]:col-start-2 min-[1024px]:col-end-2 max-w-[75ch] mx-auto grid grid-cols-3 gap-2 mt-4 w-full">
          <Client/>
          <Client/>
          <Client/>
          </div>
      </main>
    </div>
  );
}
