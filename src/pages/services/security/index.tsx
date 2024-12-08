import React from "react";

import { Key, Shield } from "lucide-react";

import { SecurityCard } from "@/components/security-card";
import { Container } from "@/components/shared/container";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import SoftwareFAQ from "@/components/software-faq";

const securityServices = [
  {
    title: "IDAM Security",
    description:
      "Custom security solutions for identity management. Implement robust authentication and authorization systems to protect your valuable resources.",
    href: "/services/security/idam",
    icon: <Key className="h-6 w-6" />,
  },
  {
    title: "Cyber Security",
    description:
      "Comprehensive cybersecurity solutions to protect your business from evolving threats. Including threat detection, incident response, and security assessments.",
    href: "/services/security/cyber",
    icon: <Shield className="h-6 w-6" />,
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NewHero
        showHighlighted={false}
        ImgSrc="/assets/cloud-secure.png"
        title="Security Services"
        description="Protect your business with advanced security services tailored to your needs"
        buttonText="Get Started"
      />

      <Container className="pb-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
          {securityServices.map((service) => (
            <SecurityCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-blue-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Why Choose Our Security Services?
          </h2>
          <div className="grid grid-cols-3 gap-6 md:grid-cols-1">
            <div className="rounded-xl bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold">Expert Team</h3>
              <p className="text-gray-600">
                Certified security professionals with years of industry
                experience
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Continuous security monitoring and threat detection
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold">Compliance Focus</h3>
              <p className="text-gray-600">
                Meet industry standards and regulatory requirements
              </p>
            </div>
          </div>
        </div>
      </Container>

      <SoftwareFAQ />

      <ServicesCard
        altText={""}
        tagText="GET IN TOUCH"
        title={"Strengthen Your Security Posture"}
        description={
          "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment."
        }
        imgSrc={""}
        index={0}
        href={"/contact"}
        buttonText="Schedule a call"
        showButton
      />
    </div>
  );
}
