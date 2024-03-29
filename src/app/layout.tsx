import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const josefinSans = Josefin_Sans({ 
  weight: ["100","200","300","400" ,"500", "600","700"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Todo-app",
  description: "Todo app list of task , create, delete y etc.",
  icons:"/img/icon-sun.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  id="body" className={josefinSans.className}>
      <main className="w-full ease-in duration-200  h-screen bg-[#f7f7f9] dark:bg-[#181824] dark:text-white relative flex justify-center">
      <Nav />
      {children}
    </main>
  
      </body>
    </html>
  );
}
