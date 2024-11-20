import NewHero from "@/components/shared/new-hero";
import WhatIsTeverse from "@/components/What-is-teverse";
import AwsBuild from "@/components/aws-build";
import React from "react";
import FAQ from "@/components/shared/FAQ";
import Resources from "@/components/resources";
import ServicesCard from "@/components/shared/services-card";

import clock from "/public/svg/awsBuild.svg";
import padlock from "/public/assets/padlock.png";
import cloudstrikes from "/public/assets/cloudstrikes.png";
import circles from "/public/assets/circles.png";
import Image from "next/image";
import Preverity from "@/components/preverity";


const CloudScore = () => {

  const tools = [
    {
      title: "CrowdStrike",
      description:
        "CrowdStrike gives you a single unified view of your security in the Threat Graph, which combines sensor telemetry across all your monitored resources. We configure and tune its alerting, help you understand why an alert was generated, and can even help you remediate resources.",
    },
    {
      title: "Mission Control",
      subtitle: "The Cloud Services Platform That’s Purpose Built for AWS",
      description:
        "Mission Cloud Secure includes Mission Control, our cloud services platform for visibility, guidance, and support for your cloud. Mission Control visualizes your infrastructural health using the Well-Architected Framework, opens and tracks tickets with your CloudOps support team, gives resource visibility across your whole environment, and supports your ad-hoc engineering needs with Engineer Assist.",
      image: "/assets/mission-control-placeholder.png", // Replace with your actual image path
    },
  ];

  const cardData = [
    {
      title: "Around-the-Clock Protection",
      description:
        "Never worry about when or how a security incident occurs. With 24/7 monitoring and response from our dedicated security team, threats are detected and contained before they can impact your business.",
      icon: clock,
    },
    {
      title: "Cloud-Native Security",
      description:
        "Distributed workforces need unified protection. From AWS infrastructure to employee endpoints, we secure every access point with tools purpose-built for modern cloud environments",
      icon: padlock,
    },
    {
      title: "Proactive Threat Defense",
      description:
        "Stay ahead of emerging threats with continuous threat hunting in partnership with CrowdStrike, law enforcement, and global intelligence communities. Transform your security from reactive to proactive.",
      icon: cloudstrikes,
    },
    {
      title: "Compliance Confidence",
      description:
        "Meet your regulatory obligations with comprehensive security controls and unified reporting. Support for major compliance frameworks including PCI, HIPAA, and SOC2 ensures you're always audit-ready.",
      icon: cloudstrikes,
    },
  ];
  
  const cardDataTwo = [
    {
      title: "24/7 Managed Detection & Response",
      description:
        "Our Security Operations Center (SOC) provides around-the-clock monitoring and incident response. When threats emerge, our experts contain them quickly and safely while maintaining your uptime.",
      icon: clock,
    },
    {
      title: "CrowdStrike Falcon Complete",
      description:
        "Get the most comprehensive offering from the leader in cloud security. Advanced endpoint protection, threat intelligence, and automated response capabilities protect you from modern cyber threats.",
      icon: circles,
    },
    {
      title: "AWS Security Expertise ",
      description:
        "Leverage Mission's award-winning AWS security experience. We help configure and tune alerts, develop incident response runbooks, and implement AWS security best practices.",
      icon: cloudstrikes,
    },
    {
      title: "Compliance Confidence",
      description:
        "Meet your regulatory obligations with comprehensive security controls and unified reporting. Support for major compliance frameworks including PCI, HIPAA, and SOC2 ensures you're always audit-ready.",
      icon: clock,
    },
  ];
  
  // Return statement
  return (
    <div >
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/cloud-secure.png"
        tag
        title="Mission Cloud Secure"
        description="Fully managed security, detection, and response"
        buttonText="Get Started"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        title="Comprehensive Protection for Your AWS Environment"
        mainDescription="Mission Cloud Secure is a SaaS application that delivers 24/7 security monitoring and incident response through a powerful combination of CrowdStrike's world-class security platform and Mission's AWS expertise. Protect your cloud resources, endpoints, and credentials while maintaining compliance and operational excellence."
        additionalDescription=""
      />


      <AwsBuild
        cards={cardData}
        tag="BENEFITS"
        title="Security without Compromise"
        subtitle="In today's landscape of sophisticated cyber threats, comprehensive security requires constant vigilance, specialized expertise, and the right tooling. Mission Cloud Secure provides the following: "
      />

      <AwsBuild
        cards={cardDataTwo}
        tag="FEATURES"
        title="Enterprise-Grade Securityfor AWS Environments"
        subtitle="Protect your business with comprehensive security coverage backed by industry leaders in cloud and security."
      />
      <FAQ />
      <Resources />

      <section className="py-8 px-4 bg-white max-w-6xl mx-auto font-sora">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center">Industry Leading Tools</h2>
        <div className="flex flex-col gap-14 items-center">
          <div className="flex sm:flex-col justify-between">
            <div className="w-1/2 sm:w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">CrowdStrike</h2>
              <p>CrowdStrike gives you a single unified view of your security in the Threat Graph, which combines sensor telemetry across all your monitored resources. We configure and tune its alerting, help you understand why an alert was generated, and can even help you remediate resources.</p>
            </div>
            <div className="sm:mx-auto sm:mt-4">
              <Image src="/assets/checkers.png"  width={300} height={300} alt="checkers" />
            </div>
          </div>
          <div className="flex sm:flex-col justify-between">
            <div className="w-1/2 sm:w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Mission Control</h2>
              <p>The Cloud Services Platform That&apos;s <span className="block sm:inline"> Purpose Built for AWS</span></p>
            </div>
            <div className="w-1/2 sm:w-full flex flex-col justify-center">
              <p>Mission Cloud Secure includes Mission Control, our cloud services platform for visibility, guidance, and support for your cloud. Mission Control visualizes your infrastructural health using the Well-Architected Framework, opens and tracks tickets with your CloudOps support team, gives resource visibility across your whole environment, and supports your ad-hoc engineering needs with Engineer Assist.</p>
            </div>
          </div>
        </div>
      </section>

      <Preverity />

      <ServicesCard
          imgSrc="/assets/checkers.png"
          altText="Custom Alt Text"
          title="Strengthen Your Security Posture"
          description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
          showTag={true}
          tagText="GET IN TOUCH"
          index={1}
          showButton={true}
          buttonText="Schedule a call"
      
      />
    </div>
  );
};

export default CloudScore;
