import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profiletwo";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";
import React from "react";



const companyData = {
  content:
    "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/goodfood.svg",
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
   {
    title: "Healthcare providers",
    description:
      "ou need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
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


const Retail = () => {
  return (
    <section>
  <NewHero
        title="Private Equity"
        description="Mission has extensive experience creating value for private equity firms and their portfolio companies by providing tailored services and technical expertise to help maximize cost savings, optimize infrastructure, and enable innovation. "
        showButton={false}
        ImgSrc="/"
      />

       <CompaniesProfile
        cards={companyData}
        heading="Content is king and consumer expectations have never been higher"
        paragraph="Demand for content is constantly growing but the complexity of high-fidelity workflows and global delivery isn’t going away. We empower you with cloud-native and AI solutions to streamline production, create more engaging experiences, and seamlessly deliver to all platforms."
      />

      <p className="text-2xl mx-auto w-[90%] max-w-[1200px] text-[#808080] md:text-lg md:-mt-12 ">
        From e-commerce giants and global airlines to family-owned and operated boutiques—we've helped retail businesses of all sizes serve their customers.
      </p>

<div className="my-7 max-w-7xl overflow-hidden mx-auto">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />
 
      
         <CompaniesWeServe detailsData={detailsData} />
    

      <OurCapabilities detailsData={ourCapabilitiesData} />

       <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="Our media vision"
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

export default Retail;
