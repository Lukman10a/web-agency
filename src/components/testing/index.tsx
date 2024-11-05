import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Code2, Palette, Rocket, Shield } from "lucide-react";
import { ServiceCard } from "./card";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and performant web applications using cutting-edge technologies and best practices. We focus on creating seamless user experiences that drive engagement and results.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting beautiful and intuitive user interfaces that delight users and solve real problems. Our design process ensures your product stands out in today's competitive market.",
    icon: Palette,
  },
  {
    title: "Security Solutions",
    description:
      "Implementing robust security measures to protect your digital assets and user data. We follow industry best practices to ensure your applications are secure and compliant.",
    icon: Shield,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing your applications for maximum speed and efficiency. We use advanced techniques to ensure your software performs at its best under any conditions.",
    icon: Rocket,
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our comprehensive range of services designed to help your
            business thrive in the digital age.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative min-h-[150vh] space-y-4 pb-32"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="flex min-h-screen items-center px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our comprehensive range of services designed to help your
            business thrive in the digital age.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative space-y-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
