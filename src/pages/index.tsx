import Hero from "@/components/hero";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <WhyChooseUs />
    </main>
  );
}
