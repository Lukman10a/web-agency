import React from "react";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profile-two";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";

// const companyData = {
//   content:
//     "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
//   imageSrc: "/svg/goodfood.svg",
//   author: "Peter Philips | CTO, Recognize",
// };

// const companyDataTwo = {
//   content:
//     "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
//   imageSrc: "/svg/carehubs.svg",
//   author: "Peter Philips | CTO, Recognize",
//   buttonText: "Read More",
//   showButton: true,
// };

// const detailsData = [
//   {
//     title: "Healthcare payers",
//     description:
//       "You handle the intricate balance of optimizing claim management, member retention, and health outcomes amidst a rapidly evolving industry. We help you build accessible member experiences that serve them and help you better understand their needs.",
//   },
//   {
//     title: "Healthcare providers",
//     description:
//       "ou need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
//   },
//   {
//     title: "Healthcare providers",
//     description:
//       "ou need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
//   },
//   {
//     title: "Healthcare providers",
//     description:
//       "ou need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
//   },
// ];

// const ourCapabilitiesData = [
//   {
//     title: "HIPAA compliance",
//     description:
//       "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//     icon: "/svg/hipaa.svg",
//   },
//   {
//     title: "HIPAA compliance",
//     description:
//       "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//     icon: "/svg/hipaa.svg",
//   },
//   {
//     title: "Health research",
//     description:
//       "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
//     icon: "/svg/health.svg",
//   },
//   {
//     title: "HIPAA compliance",
//     description:
//       "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//     icon: "/svg/hipaa.svg",
//   },
//   {
//     title: "HIPAA compliance",
//     description:
//       "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//     icon: "/svg/hipaa.svg",
//   },
//   {
//     title: "Health research",
//     description:
//       "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
//     icon: "/svg/health.svg",
//   },
// ];

const retailData = {
  heroSection: {
    title: "Retail on AWS",
    description:
      "Cloud-native and AI solutions that scale with consumer demand",
    showButton: false,
    imgSrc: "/",
  },
  companyProfiles: {
    companyOne: {
      content:
        "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/goodfood.svg",
      author: "Peter Philips | CTO, Recognize",
    },
    companyTwo: {
      content:
        "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/carehubs.svg",
      author: "Peter Philips | CTO, Recognize",
      buttonText: "Read More",
      showButton: true,
    },
  },
  companyDetails: [
    {
      title: "Healthcare payers",
      description:
        "You handle the intricate balance of optimizing claim management, member retention, and health outcomes amidst a rapidly evolving industry. We help you build accessible member experiences that serve them and help you better understand their needs.",
    },
    {
      title: "Healthcare providers",
      description:
        "You need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
    },
    {
      title: "Healthcare providers",
      description:
        "You need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
    },
    {
      title: "Healthcare providers",
      description:
        "You need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
    },
  ],
  capabilities: [
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
  ],
  servicesCards: [
    {
      imgSrc: "/public/assets/contact.png",
      altText: "Image",
      title: "Our media vision",
      description:
        "A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Build with us",
      href: "/contact",
    },
    {
      imgSrc: "/assets/contact.png",
      altText: "Image",
      title: "Strengthen Your Security Posture",
      description:
        "Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment.",
      showTag: true,
      tagText: "GET IN TOUCH",
      index: 2,
      showButton: true,
      buttonText: "Schedule a call",
      href: "/contact",
    },
  ],
  resources: {
    show: true,
  },
};

const Retail = () => {
  return (
    <section>
      <NewHero
        title={retailData.heroSection.title}
        description={retailData.heroSection.description}
        showButton={retailData.heroSection.showButton}
        ImgSrc={retailData.heroSection.imgSrc}
      />

      <CompaniesProfile
        cards={retailData.companyProfiles.companyOne}
        heading="A best-in-class brand requires best-in-class digital experiences."
        paragraph="Shopping is now digital-first and led by consumers who want sustainable, responsible products and omnichannel experiences. We equip you to meet these challenges head-on, streamlining supply chains and inventory management, personalizing customer experiences with AI, and giving you granular, actionable analytics."
      />

      <p className="mx-auto w-[90%] max-w-[1200px] text-2xl text-[#808080] md:-mt-12 md:text-lg">
        From e-commerce giants and global airlines to family-owned and operated
        boutiques we&apos;ve helped retail businesses of all sizes serve their
        customers.
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={retailData.companyDetails} />

      <OurCapabilities detailsData={retailData.capabilities} />

      {retailData.servicesCards.map((card, index) => (
        <ServicesCard
          key={index}
          imgSrc={card.imgSrc}
          altText={card.altText}
          title={card.title}
          description={card.description}
          showTag={card.showTag}
          tagText={card.tagText}
          index={card.index}
          showButton={card.showButton}
          buttonText={card.buttonText}
          href={card.href}
        />
      ))}

      <CompaniesProfileTwo cards={retailData.companyProfiles.companyTwo} />

      {retailData.resources.show && <Resources />}
    </section>
  );
};

export default Retail;
