import type { AppProps } from "next/app";
import Head from "next/head";

import { notoSans, notoSansMono, sora } from "@/lib/utils";

import Footer from "@/components/shared/footer";
// import Navbar from "@/components/shared/navbar";
import { MainNav } from "@/components/shared/navbar/main-nav";

// import TopBanner from "@/components/shared/top-banner";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${sora.variable} ${notoSans.variable} ${notoSansMono.variable} flex min-h-screen flex-col bg-white font-sans`}
    >
      <Head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" /> */}
        <title>Teverse</title>
      </Head>
      {/* <Navbar /> */}
      <MainNav />
      <main className="mt-16 flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
