import React from "react";

import icon from "/public/assets/newheroicon.png";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profiletwo";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";
import StatsCard from "@/components/shared/stats-card";


const companyData = {
  content:
    "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/carehubs.svg",
  author: "Peter Philips | CTO, Recognize",
};

const companyDataTwo = {
  content:
    "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/carehubs.svg",
  author: "Peter Philips | CTO, Recognize",
  buttonText: "Read More",
  showButton: true,
};

const detailsData = [
  {
    title: "Healthcare payers",
    description:
      "You handle the intricate balance of optimizing claim management, member retention, and health outcomes amidst a rapidly evolving industry. We help you build accessible member experiences that serve them and help you better understand their needs.",
  },
  {
    title: "Healthcare providers",
    description:
      "ou need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
  },
];

const ourCapabilitiesData = [
  {
    title: "HIPAA compliance",
    description:
      "Our modernization roadmap ensures your operations and data practices are secure and resilient",
    icon: "/svg/hipaa.svg",
  },
  {
    title: "HIPAA compliance",
    description:
      "Our modernization roadmap ensures your operations and data practices are secure and resilient",
    icon: "/svg/hipaa.svg",
  },
  {
    title: "Health research",
    description:
      "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
    icon: "/svg/health.svg",
  },
  {
    title: "HIPAA compliance",
    description:
      "Our modernization roadmap ensures your operations and data practices are secure and resilient",
    icon: "/svg/hipaa.svg",
  },
  {
    title: "HIPAA compliance",
    description:
      "Our modernization roadmap ensures your operations and data practices are secure and resilient",
    icon: "/svg/hipaa.svg",
  },
  {
    title: "Health research",
    description:
      "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
    icon: "/svg/health.svg",
  },
];

const Healtcare = () => {
  return (
    <section>
      <NewHero
        title="Healthcare on AWS"
        description="AI solutions and cloud-native technologies for every patient."
        showButton={false}
        icon={true}
        iconLink={icon}
        ImgSrc="/"
      />

      <CompaniesProfile
        cards={companyData}
        heading="Now more than ever patients need state of the art technology and systems"
        paragraph="You’ve got personnel shortages, compliance obligations, and regulatory pressures to contend with—but the industry isn’t standing still. We help you leverage cloud-native technologies and AI to ensure every patient gets optimal experiences and equitable outcomes while keeping their data private and secure."
      />

      <StatsCard
        stats="100+"
        description="Healthcare & Life Sciences firms we’ve helped build on AWS"
        details="From neighborhood clinics to international nonprofits to some of the largest life sciences firms in the world—we’ve helped companies of all sizes and stages serve their patients."
      />

      <div className="my-7 max-w-7xl overflow-hidden mx-auto">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />
 
      
         <CompaniesWeServe detailsData={detailsData} />
    

      <OurCapabilities detailsData={ourCapabilitiesData} />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="Our healthcare vision"
        description="A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together."
        showTag={true}
        tagText="AWS PREMIER CONSULTING PARTNER"
        index={1}
        showButton={true}
        buttonText="Build with us"
      />

      <CompaniesProfileTwo cards={companyDataTwo} />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="Strengthen Your Security Posture"
        description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
        showTag={true}
        tagText="GET IN TOUCH"
        index={2}
        showButton={true}
        buttonText="Schedule a call"
      />

      <Resources />
    </section>
  );
};

export default Healtcare;
