import React from "react";

import Image from "next/image";

import Resources from "@/components/resources";
import BenefitsSection from "@/components/shared/cloud-card";
import FAQ from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import PartnersCard from "@/components/shared/partners-card";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

const GenerativeAI = () => {
  // Data for BenefitsSection
  const benefitsData = {
    tag: true,
    title: "Accelerate Your Use Case",
    description:
      "Generative AI is still in its infancy, but many use cases in business have already emerged.",
    benefits: [
      {
        icon: "/svg/customer-service.svg",
        heading: "Customer Service",
        text: "Resolve customer requests and answer common questions with AI-powered knowledge bases and chatbots, call transcription, and conversation summaries for helping to resolve cases.",
      },
      {
        icon: "/svg/doc-checkmark.svg",
        heading: "Document and Image Analysis",
        text: " Extract key takeaways or synthesize documents and images without requiring the presence of a human expert. Transform legal, financial, and medical paperwork into actionable data.",
      },
      {
        icon: "/svg/customer-service.svg",
        heading: "Media Translation",
        text: "Create automated dubbing and translation pipelines for your content generation. Cater to an international audience with fast and accurate video, audio, and text translation.",
      },
      {
        icon: "/svg/directory.svg",
        heading: "Coding Assistance",
        text: " Turn to generative AI tools such as Amazon CodeWhisperer for coding, particularly for initial prototype work, integrating an unfamiliar library, or helping with debugging.",
      },
      {
        icon: "/svg/flower.svg",
        heading: "Personalized Content Creation",
        text: "Generate original content from your data, such as product documentation or personalized marketing campaigns, with messaging tuned to fit your brand, channel, and audience.",
      },
      {
        icon: "/svg/image-gen.svg",
        heading: "Image Generation",
        text: "Leverage the creativity of large language models and tools like Stable Diffusion to generate novel images and graphics for your marketing.",
      },
    ],
  };

  const servicesLeft = [
    "Amazon Bedrock",
    "Amazon SageMaker",
    "Amazon CodeWhisperer",
    "AWS Comprehend",
    "Foundation Models, including Cohere, Anthropic Claude, LLaMa, FLAN-T5, AI21, Falcon, Amazon Titan",
  ];

  const servicesRight = [
    "Amazon Textract",
    "Amazon Transcribe",
    "Amazon Translate",
    "Amazon Lex",
    "Amazon Polly",
    "Amazon Kendra",
  ];

  // Return statement
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        imgSrc="/assets/AI-management.png"
        title="AWS Generative AI"
        description="Securely Build With Generative AI on AWS"
        buttonText="Get Started"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        tagText="OVERVIEW"
        title="Transform Your Business with Generative AI"
        mainDescription="Explore the vast potential of generative AI to generate original content and concepts for your business, revolutionize your applications, create novel customer experiences, improve productivity and transform your business operations. Amazon has launched Bedrock and Foundation Models accessible through SageMaker Jumpstart allowing you to use your internal data to train your models while keeping your data private."
        additionalDescription="Teverse can support you with in-depth experience and technical expertise whether you’re just getting started or need to scale your pre-existing model’s infrastructure."
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />

      <section className="mx-auto mb-14 max-w-6xl space-y-7 text-left sm:mb-7">
        <h1 className="text-4xl font-bold">Get Help Building and Scaling</h1>
        <p className="text-3xl">
          Whether you&apos;re scaling your model for production or starting from
          scratch, we meet you where you are on your journey and help you get
          your solution launched.
        </p>
        <h3 className="text-3xl font-bold">Our Process</h3>
        <Image
          className="mx-auto max-w-6xl"
          src="/assets/usecase.webp"
          width={800}
          height={900}
          alt="use case image"
        />
      </section>

      <section className="mb-14 py-16 sm:mb-7">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800 md:text-2xl">
            Services We Commonly Use in Production
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
            <ul className="space-y-4">
              {servicesLeft.map((service, index) => (
                <li key={index} className="text-lg text-gray-700">
                  • {service}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {servicesRight.map((service, index) => (
                <li key={index} className="text-lg text-gray-700">
                  • {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <PartnersCard
        iconSrc="/assets/magellantv.webp"
        buttonText="Read Full Story"
        buttonLink="#"
        quote="“We were immediately impressed with Teverse’s expertise both on AWS and with generative AI. Working with Teverse has not only provided much needed AWS expertise to ensure our business is secure, reliably online, and optimized, but also to build out a bleeding-edge Machine Learning pipeline on top of AWS cognitive services. Partnering with Teverse will enable us to achieve a long-held goal for MagellanTV, which is to massively expand the reach of our documentary platform and strengthen our position as a truly global company.”"
        authorName="Thomas Lucas"
        authorRole="Co-Founder and Director at MagellanTV"
      />
      <FAQ />
      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText="Custom Alt Text"
        title="Succeed With Generative AI on AWS"
        description="Work with a genAI partner who understands machine learning on AWS, your goals and the agile processes required to bring value to your business faster."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Get Started"
        href={""}
      />
      <Resources />
    </div>
  );
};

export default GenerativeAI;
