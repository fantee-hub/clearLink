import ClearlinkAdvantage from "@/src/Components/ClearlinkAdvantage";
import Faqs from "@/src/Components/Faqs";
import FreeTrial from "@/src/Components/FreeTrial";
import Hero from "@/src/Components/Hero";
import Sponsors from "@/src/Components/Sponsors";
import Testimonies from "@/src/Components/Testimonies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <ClearlinkAdvantage />
      <Testimonies />
      <Faqs />
      <FreeTrial />
    </main>
  );
}
