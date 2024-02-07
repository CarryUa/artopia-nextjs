import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artopia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const hiden = false;
  return (
    <html lang="en">
      <body className={clsx(`${inter.className} bg-black`, hiden && "hidden")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
