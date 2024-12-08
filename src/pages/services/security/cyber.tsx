import React from "react";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lock,
  Server,
  Shield,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated/animated-section";
import { Button } from "@/components/ui/button";

import { Container } from "@/components/shared/container";
import NewHero from "@/components/shared/new-hero";

const services = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Threat Protection",
    description:
      "Advanced threat detection and prevention systems to safeguard your infrastructure.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Incident Response",
    description:
      "24/7 monitoring and rapid response to security incidents and breaches.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Security Assessment",
    description: "Comprehensive security audits and vulnerability assessments.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Security Monitoring",
    description:
      "Real-time monitoring and analytics of security events and threats.",
  },
];

const features = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure Security",
    points: [
      "Network security monitoring",
      "Firewall management",
      "Endpoint protection",
      "Cloud security",
    ],
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Application Security",
    points: [
      "Web application firewall",
      "API security",
      "Secure development practices",
      "Vulnerability scanning",
    ],
  },
];

export default function CyberSecurityPage() {
  return (
    <div>
      <NewHero
        showHighlighted={false}
        ImgSrc="/assets/cloud-secure.png"
        title="Cyber Security Solutions"
        description="Protect your digital assets with our comprehensive cybersecurity services"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Container className="mb-10">
        <AnimatedSection className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-orange-600">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Comprehensive Security Features
              </h2>
              <div className="grid grid-cols-2 gap-12 md:grid-cols-1">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center" delay={0.4}>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Protect Your Business?
            </h2>
            <p className="mb-8 text-gray-600">
              Don&lsquo;t wait for a security breach to happen. Take proactive
              steps to protect your business with our comprehensive
              cybersecurity solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group bg-orange-650">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
