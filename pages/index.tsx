import ClearlinkAdvantage from "@/src/Components/ClearlinkAdvantage";
import Faqs from "@/src/Components/Faqs";
import FreeTrial from "@/src/Components/FreeTrial";
import Hero from "@/src/Components/Hero";
import Sponsors from "@/src/Components/Sponsors";
import Testimonies from "@/src/Components/Testimonies";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />

        <title>ClearLink.</title>
        <meta
          name="description"
          content="Uniting the world, one video call at a time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000"></meta>
        <meta property="og:title" content="ClearLink" />
        <meta property="og:url" content="https://clear-link-bay.vercel.app" />
        <meta
          property="og:description"
          content="Uniting the world, one video call at a time"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Hero />
      <Sponsors />
      <ClearlinkAdvantage />
      <Testimonies />
      <Faqs />
      <FreeTrial />
    </main>
  );
}
