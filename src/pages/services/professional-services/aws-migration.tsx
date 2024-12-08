import React from "react";

import ReusableComponent from "@/components/control-features";
import DynamicProgramList from "@/components/migration-tools";
import Resources from "@/components/resources";
import BenefitsSection from "@/components/shared/cloud-card";
import FAQ from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import PartnersCard from "@/components/shared/partners-card";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

const AWSIM = () => {
  interface ReusableComponentProps {
    image: string;
    title: string;
    altDescription: string;
    description: string;
    buttonText?: string;
    showButton?: boolean;
    reverse?: boolean;
    starsAnimation?: boolean;
    additionalImage?: string;
    additionalImagePosition?: {
      bottom: number;
      left: number;
      top: number;
      right: number;
    };
  }

  const sections: ReusableComponentProps[] = [
    {
      image: "/assets/score.webp",
      additionalImage:
        "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Stars.svg",
      additionalImagePosition: { bottom: -20, left: -50, top: 0, right: 0 },
      title: "Phase 1",
      altDescription: "Assess",
      description:
        "Share your goals as we assess your infrastructure and data architecture to find the best path forward for cloud migration. We’ll gain a comprehensive understanding of your migration readiness with the help of tools such as the Cloud Adoption Framework, the Migration Readiness Assessment, and deep-dive discovery sessions with your key stakeholders. ",
      buttonText: "Learn More",
      showButton: false,
      reverse: true,
      starsAnimation: false,
    },
    {
      image: "/assets/recommendation.webp",
      additionalImage:
        "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Tablet.svg", // Different animated image
      additionalImagePosition: { bottom: -20, left: 400, top: 30, right: 0 }, // Custom position
      title: "Phase 2",
      altDescription: "Mobilize",
      description:
        "Teverse and AWS will address the gaps in your organization’s readiness that were uncovered during the assessment. We’ll prepare your environment with a Landing Zone from which we can launch your workloads while ensuring networking, security, and account structure accords with your business objectives. As pilot workloads go live, we’ll help you reach operational readiness by developing any cloud skills required in their administration.",
      buttonText: "Discover Now",
      showButton: false,
      reverse: false,
      starsAnimation: false,
    },
    {
      image: "/assets/resources.webp",
      additionalImage:
        "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Portfolio.svg", // Another custom animated image
      additionalImagePosition: { bottom: -20, left: -50, top: 0, right: 0 },
      title: "phase 3",
      altDescription: "Migrate and Modernize",
      description:
        "The final design of your architecture is carried out, with each workload migrated and validated for performance and cost objectives we established at the outset. Using AWS Migration Hub, you’ll see progress updates across all elements of your cloud migration and easily identify and troubleshoot issues. As a final step, we’ll conduct a knowledge transfer, providing you with any required documentation, templates for configurations, and teaching the operating principles you’ll need for your environment going forward.",
      buttonText: "Discover Now",
      showButton: false,
      reverse: true,
      starsAnimation: false,
    },
  ];

  // Data for BenefitsSection
  const benefitsData = {
    tag: true,
    title: "Benefits of Migrating with Teverse",
    description: "",
    benefits: [
      {
        icon: "/assets/heart-rate.png",
        heading: "Minimize Downtime",
        text: "Get a migration plan designed and implemented by our team of AWS-certified architects and engineers. Identify blockers, accelerate your adoption timeline, and avoid delays and downtime.",
      },
      {
        icon: "/assets/efficiency.png",
        heading: "Accurately Forecast Cost",
        text: "We assess the current state of your infrastructure to prevent overprovisioning and keep your project on budget. You get accurate financial planning so you will always have a clear idea of you future AWS spend.",
      },
      {
        icon: "/assets/champion.png",
        heading: "Migrate Efficiently",
        text: "We are used to tight deadlines and complex implementations. We'll create an accurate timeline and let you monitor your progress through Teverse Control.",
      },
    ],
  };

  const FeatureList: React.FC<{ sections: ReusableComponentProps[] }> = ({
    sections,
  }) => (
    <div>
      {sections.map((section, index) => (
        <ReusableComponent key={index} {...section} />
      ))}
    </div>
  );

  // Return statement
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/checkers.png"
        title="AWS Cloud Migration Services"
        description="Recognized by AWS for getting customers migrated on time and on budget"
        buttonText="Get Started"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        tagText="OVERVIEW"
        title="Migrate With Confidence"
        mainDescription="For the second year running, AWS has recognized us for our outstanding work in its Migrations Acceleration Program—for our accuracy in budgeting and our speed in moving customer workloads."
        additionalDescription="When you partner with Teverse for your AWS cloud migration, you’ll receive the hands-on care of experienced professionals who’ve helped hundreds of customers migrate to AWS. We’ve moved customers from on-premises data centers, non-AWS cloud platforms, and PaaS providers like Heroku and Rackspace. We offer a wide range of cloud migration services and can perform full infrastructure refactors or specialty cloud migrations, like Microsoft workloads and database migrations."
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />
      <section className="mx-auto max-w-6xl space-y-6 py-7 sm:w-full sm:px-5">
        <h6 className="text-lg font-bold">Steps</h6>
        <h3 className="text-3xl sm:text-xl">
          Leverage Our{" "}
          <span className="rounded-lg border border-black p-1">3-Phase </span>{" "}
          Migration Process
        </h3>
        <p className="text-2xl font-normal sm:text-justify sm:text-lg">
          Ensure a successful cloud migration by fully understanding your
          current environment and how to best migrate and modernize your
          infrastructure. Your objectives, requirements, and challenges are our
          focus as we build an AWS environment that aligns with your business.
        </p>
      </section>

      <FeatureList sections={sections} />

      <section className="mx-auto max-w-6xl space-y-7 py-10 sm:w-full sm:px-5">
        <h2 className="text-3xl sm:text-xl">Migrate With Proven AWS Tools</h2>
        <p className="text-2xl sm:text-justify sm:text-lg">
          When you partner with Teverse for your AWS migration and utilize our
          cloud migration services, you’ll receive the hands-on care of
          experienced professionals. We move customers from on-premises data
          centers, non-AWS cloud platforms, and PaaS providers like Heroku and
          Rackspace. We can perform full infrastructure refactors or specialty
          cloud migrations, like Microsoft workloads and database migrations.
        </p>
      </section>

      <DynamicProgramList />
      <PartnersCard
        iconSrc="/assets/smittys-logo.webp"
        buttonText="Read Full Story"
        buttonLink="#"
        quote="“Teverse's close working relationship and continuous engagement model ensured that our migration to AWS was a clear success, and that their ongoing cloud management continues to be advantageous and cost-efficient.”"
        authorName="Clay Kibbons"
        authorRole="IT Department Manager at Smitty’s Supply, Inc."
      />
      <FAQ />
      <Resources />
      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText="Custom Alt Text"
        title="Start Your AWS Cloud Migration Journey Today"
        description="Schedule a call with a Teverse Cloud Advisor to learn about our cloud migration services and to help you prepare for and migrate to the cloud with confidence."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Get Started"
        href={"/contact"}
      />
    </div>
  );
};

export default AWSIM;
