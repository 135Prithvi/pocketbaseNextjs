import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import { Provider } from "./NextUiProvider";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
export const metadata:Metadata = {
  title: "ShopNow",
  description: "ShopNow is a store that sells products",
  icons: {
    icon: 'https%3A%2F%2Fpocketbase-docker-production-acb9.up.railway.app%2Fapi%2Ffiles%2Ftfrg0e05t01tseb%2Frf3rbtk5z0azf0b%2Fdownload_2_removebg_preview_leswqdzP8A.png&w=1200&q=75',
  },
twitter:{
  title:"ShopNow",
  description:"ShopNow is a store that sells products",
  creatorId:"@dickinsontiwari",
  card:"summary_large_image",
  images:["https://pocketbase-docker-production-acb9.up.railway.app/api/files/tfrg0e05t01tseb/rf3rbtk5z0azf0b/download_2_removebg_preview_leswqdzP8A.png"],
  site:"https://pocketbase-docker-production-acb9.up.railway.app"

}
  
  
};
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Toaster position="bottom-center" reverseOrder={false} /> <Navbar />{" "}
        <Provider>{children}</Provider>
        {modal}
      </body>
    </html>
  );
}
