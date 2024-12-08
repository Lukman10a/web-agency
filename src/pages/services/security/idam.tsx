import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Key,
  Lock,
  Shield,
  Users,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated/animated-section";
import { Button } from "@/components/ui/button";

import { Container } from "@/components/shared/container";
import NewHero from "@/components/shared/new-hero";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Identity Management",
    description:
      "Centralized user identity and access management across all your applications and services.",
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Single Sign-On (SSO)",
    description:
      "Streamlined authentication process with secure single sign-on capabilities.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Multi-Factor Authentication",
    description:
      "Enhanced security with customizable multi-factor authentication options.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Access Control",
    description:
      "Fine-grained access control and permission management for your resources.",
  },
];

const benefits = [
  "Reduced security risks and vulnerabilities",
  "Improved user experience and productivity",
  "Compliance with industry regulations",
  "Scalable identity management infrastructure",
  "Real-time security monitoring and alerts",
  "Automated user provisioning and deprovisioning",
];

export default function IdamSecurityPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NewHero
          ImgSrc="/assets/cloud-secure.png"
          title="IDAM Security Solutions"
          description="Enterprise-grade identity and access management solutions for your business"
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </motion.div>

      <Container>
        <AnimatedSection className="grid grid-cols-4 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-24" delay={0.2}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Why Choose Our IDAM Solutions?
            </h2>
            <p className="text-gray-600">
              Our identity and access management solutions provide comprehensive
              security while maintaining seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white">
              <h3 className="mb-6 text-2xl font-semibold">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <Image
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60"
                alt="Security Illustration"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="mt-24 rounded-2xl bg-white p-8 shadow-sm"
          delay={0.4}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to secure your business?
            </h2>
            <p className="mb-8 text-gray-600">
              Get started with our IDAM security solutions and protect your
              valuable resources with enterprise-grade security measures.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group bg-orange-650">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
