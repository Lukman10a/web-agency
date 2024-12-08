import React from "react";

import DynamicSection from "@/components/profesional-services";
import Resources from "@/components/resources";
import BenefitsSection from "@/components/shared/cloud-card";
import FAQ from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

const benefitsData = {
  tag: true,
  title: "Make the Most of Your Data With Teverse",
  description: "",
  benefits: [
    {
      icon: "/assets/heart-rate.png",
      heading: "Gain More Insight From Your Data",
      text: "Design custom algorithms to gain greater insight into the needs of your organization or customer base.",
    },
    {
      icon: "/assets/efficiency.png",
      heading: "Run Your Data Models Efficiently",
      text: "Develop a pipeline for your models and keep them up to date with continuous training and automation.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Leverage AWS Databases",
      text: "Leverage experience and expertise in building solutions with cloud-native services such as Amazon Redshift.",
    },
    {
      icon: "/assets/heart-rate.png",
      heading: "Level Up Data Governance",
      text: "Monitor all data on an ongoing basis to ensure best practices for accessibility and compliance.",
    },
    {
      icon: "/assets/efficiency.png",
      heading: "Navigate the Build vs. Buy Decision",
      text: "We consult with you to determine which data solutions make the most sense for your business.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Collaborate With a Team of Experts",
      text: "Solve data challenges with a team of experts at a fraction of the cost of building an in-house team.",
    },
    {
      icon: "/assets/efficiency.png",
      heading: "Visualize Your Data",
      text: "Improve your analytics with custom dashboards and BI tools such as Tableau, Amazon QuickSight and Power BI.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Drive Data-Driven Decision Making",
      text: "Detect anomalies in new data, make recommendations for customers, use data to inform courses of action.",
    },
  ],
};

const ProfessionalServices = [
  {
    icon: "/assets/targetpoint.png",
    title: "Data Engineering and Analytics",
    description:
      "A modernized data architecture, strategy, and tools lets you work with your data faster and more cost-effectively. Whether you’re establishing a data lake, lakehouse, data warehouse or data mart, or you’re modernizing an outdated and underperforming ETL pipeline, our engineering experts can help.",
    link: "/services/aws-migrations",
  },
  {
    icon: "/assets/serviceGrid2.png",
    title: "Machine Learning Operations (MLOps)",
    description:
      "Keep your models up to date with the latest parameters and hyperparameters. We’ll develop the underlying data architecture, model pipelines and stores, and automate training jobs, QA processes, and parameter validation to ensure the efficiency, accuracy, and accessibility of your models. Or, receive expert advice on integrating types of machine learning into your cloud environment.",
    link: "/services/aws-modernization",
  },
  {
    icon: "/assets/softwareCloud3.png",
    title: "Data Science and AI/ML",
    description:
      "Train custom algorithms to work with your data and improve product innovation, decision-making, and business operations. With techniques like predictive analytics, Natural Language Processing, classification, and computer vision, our team will develop state-of-the art solutions to make the most of your data.",
    link: "/services/data-analytics",
  },
  {
    icon: "/assets/serviceGrid4.png",
    title: "Generative AI",
    description:
      "Whether you’re just getting started or needing to scale your pre-existing model’s infrastructure, our AI specialists can help. Keep your data private and secure on AWS while developing models that empower applications, streamline customer experiences, boost your team’s productivity, and optimize business processes.",
    link: "/services/devops",
  },
];

const Analytics = () => {
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/checkers.png"
        title="Data, Analytics and Machine Learning"
        description="A comprehensive practice for every step in your data-driven journey"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <section className="mb-14 flex items-center justify-center bg-transparent px-4 sm:mb-7">
        <div className="aspect-w-32 aspect-h-9 w-full max-w-6xl">
          <iframe
            className="h-[35rem] rounded-lg shadow-lg"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_a6us8kaq0g"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        tagText="OVERVIEW"
        title="Leverage Data Analytics and Machine Learning to Elevate Your Business"
        mainDescription="Whether you’re assessing data lake options, improving existing data architecture and pipelines, or implementing custom AI and ML algorithms, we have in-house data, analytics and machine learning consulting expertise for every step of your data-driven journey."
        additionalDescription=""
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />

      <DynamicSection
        title="Data, Analytics and Machine Learning Services"
        subtitle="Unlock Data-Driven Business Intelligence"
        description="When you work with Teverse you’re working with AWS-certified expertise. We’ve qualified for  the AWS Data and Analytics Competency and the AWS Machine Learning Competency, as well as AWS Glue, Redshift, QuickSight and OpenSearch Service Delivery Designations. "
        buttonVisible={true}
        buttonText="Learn More"
        cards={ProfessionalServices}
      />
      <FAQ />
      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText="Custom Alt Text"
        title="We have the tools to understand your cloud and the guidance to make the most of it."
        description="Our team of cloud experts is ready to help you with your next AWS initiative. Get advanced machine learning consulting from Teverse."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Schedule a Call"
        href={""}
      />
      <Resources />
    </div>
  );
};

export default Analytics;
