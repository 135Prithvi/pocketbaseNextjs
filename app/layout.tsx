import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import { Provider } from "./NextUiProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ShopNow",
  description: "ShopNow is a store that sells products",
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
