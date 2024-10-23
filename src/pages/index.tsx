import BusinessOffer from "@/components/business-offer";
import Hero from "@/components/hero";
import HomeCard from "@/components/home-card";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <BusinessOffer />
    </main>
  );
}
