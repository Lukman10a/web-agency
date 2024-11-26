import React from "react";

import Image from "next/image";

import circles from "/public/assets/circles.png";
import cloudstrikes from "/public/assets/cloudstrikes.png";
import padlock from "/public/assets/padlock.png";
import clock from "/public/svg/awsBuild.svg";
import capabilities from "/public/svg/capabilitiescircle.svg";
import { motion } from "framer-motion";

import { HighlightedText } from "@/components/ui/animated/highlight-text";

import AwsBuild from "@/components/aws-build";
import MissionSection from "@/components/mission";
import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

const CloudScore = () => {
  // const tools = [
  //   {
  //     title: "CrowdStrike",
  //     description:
  //       "CrowdStrike gives you a single unified view of your security in the Threat Graph, which combines sensor telemetry across all your monitored resources. We configure and tune its alerting, help you understand why an alert was generated, and can even help you remediate resources.",
  //   },
  //   {
  //     title: "Mission Control",
  //     subtitle: "The Cloud Services Platform That’s Purpose Built for AWS",
  //     description:
  //       "Mission Cloud Secure includes Mission Control, our cloud services platform for visibility, guidance, and support for your cloud. Mission Control visualizes your infrastructural health using the Well-Architected Framework, opens and tracks tickets with your CloudOps support team, gives resource visibility across your whole environment, and supports your ad-hoc engineering needs with Engineer Assist.",
  //     image: "/assets/mission-control-placeholder.png", // Replace with your actual image path
  //   },
  // ];

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

  const sectionData = {
    title: "/assets/mission.webp",
    subTitle: "/assets/securecrowdstrike.webp",
    description:
      "Mission Cloud’s team of CloudOps Engineers works directly with the CrowdStrike SOC to give you 24/7 managed detection and response. We alert you to incidents and help the SOC to respond with the runbooks we’ve co-developed.",
    additionalInfo:
      "CrowdStrike’s analysts also operate a continuous threat detection engine and partner with other security experts from the public and private sector to proactively protect your environment and manage threats.",
    imageSrc: capabilities,
  };

  // Return statement
  return (
    <div className="bg-main-gradient">
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/cloud-secure.png"
        title="Mission Cloud Secure"
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

      <MissionSection {...sectionData} />

      <AwsBuild
        cards={cardData}
        tag="BENEFITS"
        title="Security without Compromise"
        subtitle="In today's landscape of sophisticated cyber threats, comprehensive security requires constant vigilance, specialized expertise, and the right tooling. Mission Cloud Secure provides the following: "
      />

      <section className="mx-auto mb-10 max-w-6xl space-y-4 rounded-2xl border-2 border-black p-14">
        <div className="flex justify-between sm:flex-col sm:justify-start">
          <p className="text-3xl font-semibold sm:mb-2 sm:text-center">Ebook</p>
          <button className="rounded-3xl bg-black px-4 py-2 text-2xl text-white sm:text-lg">
            Download
          </button>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-4xl font-medium text-[#262626] sm:text-2xl"
        >
          <HighlightedText
            highlightColor="#f4934b"
            highlightHeight="100%"
            className="p-2"
            highlightClassName="z-[-1] rounded-lg"
            delay={1.5}
          >
            {" "}
            Safeguarding the Future
          </HighlightedText>{" "}
          with Generative AI Security
        </motion.h2>
        <p className="text-2xl sm:text-lg">
          Explore our strategic blueprint for securing generative AI&apos;s
          potential. Navigate risks, integrate, and craft policies for a secure
          future.
        </p>
      </section>

      <AwsBuild
        cards={cardDataTwo}
        tag="FEATURES"
        title="Enterprise-Grade Security"
        subtitle="Protect your business with comprehensive security coverage backed by industry leaders in cloud and security."
      />
      {/* <FAQ /> */}
      <Resources />

      <section className="mx-auto max-w-6xl px-4 py-8 font-sora">
        <h2 className="mb-6 text-center text-4xl font-semibold text-gray-800">
          Industry Leading Tools
        </h2>
        <div className="flex flex-col items-center gap-14">
          <div className="flex justify-between sm:flex-col">
            <div className="flex w-1/2 flex-col justify-center sm:w-full">
              <h2 className="mb-2 text-2xl font-semibold">CrowdStrike</h2>
              <p>
                CrowdStrike gives you a single unified view of your security in
                the Threat Graph, which combines sensor telemetry across all
                your monitored resources. We configure and tune its alerting,
                help you understand why an alert was generated, and can even
                help you remediate resources.
              </p>
            </div>
            <div className="sm:mx-auto sm:mt-4">
              <Image
                src="/assets/checkers.png"
                width={300}
                height={300}
                alt="checkers"
              />
            </div>
          </div>
          <div className="flex justify-between sm:flex-col">
            <div className="flex w-1/2 flex-col justify-center sm:w-full">
              <h2 className="mb-2 text-2xl font-semibold">Mission Control</h2>
              <p>
                The Cloud Services Platform That&apos;s{" "}
                <span className="block sm:inline"> Purpose Built for AWS</span>
              </p>
            </div>
            <div className="flex w-1/2 flex-col justify-center sm:w-full">
              <p>
                Mission Cloud Secure includes Mission Control, our cloud
                services platform for visibility, guidance, and support for your
                cloud. Mission Control visualizes your infrastructural health
                using the Well-Architected Framework, opens and tracks tickets
                with your CloudOps support team, gives resource visibility
                across your whole environment, and supports your ad-hoc
                engineering needs with Engineer Assist.
              </p>
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
