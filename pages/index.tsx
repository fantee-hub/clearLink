import ClearlinkAdvantage from "@/src/Components/ClearlinkAdvantage";
import Hero from "@/src/Components/Hero";
import Sponsors from "@/src/Components/Sponsors";
import Testimonies from "@/src/Components/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <ClearlinkAdvantage />
      <Testimonies />
    </main>
  );
}
