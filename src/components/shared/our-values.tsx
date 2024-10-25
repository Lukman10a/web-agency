import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Lenis from "@studio-freight/lenis";
import PinCard from "./scroll-pin-card";

export const projects = [
  {
    title: "Tech excellence",
    description:
      "Everchanging world of cloud computing demands continuous learning. Our engineers always strive for the best solutions, new techniques and skills.",
    src: "/assets/securityImg.png",
    link: "https://ataasil.vercel.app",
    color: "#DADCE4",
  },
  {
    title: "Extra Miles",
    description:
      " In today's super-competitive world, going the extra mile brings our clients more value and lets us stand out from the crowd.",
    src: "/assets/cardimage1.png",
    link: "",
    color: "#B0F6FF",
  },
  {
    title: "Determination",
    description:
      "Everchanging world of cloud computing demands continuous learning. Our engineers always strive for the best solutions, new techniques and skills.",
    src: "/assets/cardimage2.png",
    link: "",
    color: "#FFDECB",
  },
  {
    title: "No bullshit culture",
    description:
      "No fluff, just stuff. Following the “brutal honesty” concept, we work hard to keep our direct and efficient workstyle forever.",
    src: "/assets/cardimage3.png",
    link: "",
    color: "#FFC7DC",
  },
];

export default function OurValues() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section className="grid grid-cols-1">
      <div className="text-center mt-4 space-y-4">
        <Badge variant="outline">Our Values</Badge>
        <h2 className="text-4xl font-extrabold font-sora">Our Values</h2>
        <p className="text-xl text-[#808080] w-7/12 mx-auto md:w-full md:text-base">
          Transforming businesses  to become cloud native natives and and future
          futures ready.
        </p>
      </div>
      <div ref={container} className="relative mx-3">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <PinCard
              key={`p_${i}`}
              i={i}
              {...project}
              url={project.link}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
