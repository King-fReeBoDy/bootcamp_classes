import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NavigationContext from "./context/NavigationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(PBLC) | Home",
  description: "Pre-SHS Vacation School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/IMG_1924.PNG" />
      </head>
      <NavigationContext>
        <body className="text-gray-500">
          <header className="">
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </NavigationContext>
    </html>
  );
}
