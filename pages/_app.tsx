import Footer from "@/src/Components/Footer";
import Navbar from "@/src/Components/Nav";
import SubFooter from "@/src/Components/SubFooter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <SubFooter />
    </div>
  );
}
