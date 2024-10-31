import Footer from "@/components/footer";
import Navbar from "@/components/shared/navbar";
import TopBanner from "@/components/top-banner";
import { sora, notoSans, notoSansMono } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${sora.variable} ${notoSans.variable} ${notoSansMono.variable} flex flex-col min-h-screen bg-white font-sans`}>
      <Head>
        <title>Teverse</title>
      </Head>
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
