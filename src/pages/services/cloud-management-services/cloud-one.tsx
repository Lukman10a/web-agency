import React from 'react'
import NewHero from '@/components/shared/new-hero'
import ServicesCard from '@/components/shared/services-card'
import AwsBuild from '@/components/aws-build'
import Resources from '@/components/resources'
import FAQSection from '@/components/shared/FAQ'
import Preverity from '@/components/preverity'
import ToolCard from '@/components/shared/Tool-card'
import Image from 'next/image'


import clock from "/public/svg/awsBuild.svg";
import headphone from "/public/svg/headphone.svg";


 const GridCardData = [
    {
      title: "Efficiency You Need",
      description:
        "Running your environment efficiently is an evolving problem with costs that steadily increase. By shifting to a monthly managed service, you can proactively monitor your costs, stay highly available, and actively maintain your performance while minimizing your overhead. With our FinOps and multi-cloud support, you’ll get experts trained to do exactly that.",
      icon: "/assets/efficiency.png", 
    },
    {
      title: "Your Industry's Best Practices",
      description:
        "Our teams work with some of the largest AWS environments in the world. Whether you’re hosting not only your workloads, but your industry’s workloads or operating complex architectures that require high compliance, we’ve seen the architectures that make large organizations agile and efficient. Trust us to implement modern methodologies and frameworks to help other environments scale and perform.",
      icon: "/assets/target.png", 
    },
    {
      title: "Support You Can Trust",
      description:
        "Our 24/7 support is backed by Enterprise SLAs and AWS expertise. You get an engineer, not a queue. For figuring out a multi-OS bug or tweaking an application without losing customers or breaching a secure system.",
      icon: "/assets/heart.png", 
    },
    {
      title: "Peace of Mind",
      description:
        "How do you know if you’ve made the right choices for your business’s future? Through our services, you get architectural reviews, confidence, and certainty at every step of the process. We keep your AWS environment secure, reliable, and designed for the scale you need.",
      icon: "/assets/heart-rate.png", 
    },
    {
      title: "No More On-Call Rotations",
      description:
        "Never again worry about 3 AM calls and lose your teams for hours at a time due to server bugs. With our tailored managed services, we take care of on-call duties, monitoring incidents for you so that teams can focus on growing the business.",
      icon: "/assets/efficiency.png", 
    },
    {
      title: "Security You Can Rely On",
      description:
        "Powered by CrowdStrike and AWS native security services, we keep your environment secure from external threats and internal incidents. Our 24/7 team is always available through our Mission’s Security Operations Center to ensure you always have peace of mind.",
      icon: "/assets/padlock.png", 
    },
  ];
  

const cardData = [
    {
      title: "Managed Operations",
      description:
        "Regularly review your environment for cost, performance, reliability, and efficiency, helping you better align with AWS best practices. Right-size your infrastructure, develop tagging strategies for your budgets, identify your cost centers, improve your RI and SP purchasing strategies for greater coverage, and get guidance on PPAs and EDPs.",
      icon: "/assets/setting.png",
    },
    {
        title: "Support You Can Trust",
        description:
          "Our 24/7 support is backed by Enterprise SLAs and AWS itself. This means that when an issue arises, or a critical service goes down, you’re not on your own for figuring out a fix. With live chat and ticketing, you get responses in minutes, so you can get back up and running without losing customers or breaching a secure system.",
        icon: headphone,
      },
      {
        title: "Comprehensive Optimization",
        description:
          "Improve your cost efficiency, gain insight into AWS spending and forecast how you’ll grow with help from our team of Cloud Analysts. We offer continuous monitoring and guidance on the performance and efficiency of your environment, helping you to identify waste, bottlenecks, and underlying infrastructural issues and solve them so you can scale.",
        icon: "/assets/dollar.png",
      },
    {
      title: "Harden Security and De-Risk Your Cloud",
      description:
        "Get timely review of your alerts by our Cloud Analysts, who work in tandem with your support team to identify incident trends, attacks, and vulnerabilities. Receive the guidance you need to architect for security and compliance obligations.",
      icon: clock,
    },
    
  ];

  const toolsData = [
    {
      title: "Cloud Optimization & Foundational Best Practices",
      description:
        "We use the leading cloud management platform, Vega Cloud, to analyze your environment for cost savings opportunities. These tools give you greater visibility and control of costs, and we supercharge them by contextualizing their suggestions to your specific goals, situation, and needs.",
      logo: "/assets/vega.png",
      altText: "Vega Logo",
    },
    {
      title: "Comprehensive AWS Operational Support",
      description:
        "Our AWS-certified CloudOps team mitigates operational issues and helps drive continuous improvement by analyzing key performance metrics and trends in ticketing and alerts. Using New Relic One, we monitor your infrastructure and track its changes over time, tune your alerts to ensure the right items get attention, and conduct root cause analysis when incidents occur.",
      logo: "/assets/new-relic.png",
      altText: "New Relic Logo",
    },
    {
      title: "24/7 Managed Detection & Response",
      description:
        "Our AWS-certified CloudOps team mitigates operational issues and helps drive continuous improvement by analyzing key performance metrics and trends in ticketing and alerts. Using Crowdstrike, we monitor your infrastructure and track its changes over time, tune your alerts to ensure the right items get attention, and conduct root cause analysis when incidents occur.",
      logo: "/assets/crowdstrikeblack.png",
      altText: "Crowdstrike Logo",
    },
  ];
  

const CloudOne = () => {
    return (
       <main>
            <NewHero
                 title="Mission Cloud One"
                 description="Our comprehensive service for AWS optimization, operations, and security."
                 buttonText="Get Started"
            />

            <ServicesCard
                imgSrc="/public/assets/contact"
                altText="Custom Alt Text"
                title="One Managed Service for Your Entire Cloud Environment"
                description="Mission Cloud One is our comprehensive cloud managed service to continuously monitor, maintain, optimize, and secure your environment. We remove the operational burdens of managing your AWS environment so you can focus on what matters most: your business."
                showTag={true}
                tagText="Overview"
                index={1}
            />

            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-left">
                    <h2 className="text-xs text-neutral-500 border tracking-wide mb-2 uppercase border-neutral-400 px-4 py-1 rounded-full inline-block">
                        Benefit
                    </h2>

                    <h1 className="text-4xl sm:text-2xl font-medium mb-8 text-neutral-900">
                    Why Mission Cloud One?
                    </h1>
                    <p className="mb-12 text-gray-700">
                        Managing an AWS environment can take valuable time away from engineers. 
                        Building an on-call rotation, dealing with incidents, repairing and 
                        maintaining your infrastructure—these burdens create friction, distracting 
                        teams from mission-critical initiatives and slowing down development.
                    </p>
                    <p className='text-gray-700 mb-10'>
                        With Mission Cloud One, we handle everything you need to keep your environment 
                        reliably running, so that you stay cost efficient, scalable, agile, and secure.
                    </p>
                    <div className="grid sm:grid-cols-1 grid-cols-2 gap-8">
                    {GridCardData.map((card, index) => (
                        <div
                        key={index}
                        className="bg-orange-650 text-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                        <Image src={card.icon} height={50} width={50} alt='card image' />
                        <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                        <p className="leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <AwsBuild
                    cards={cardData}
                    tag="Features Overview"
                    title="Get Comprehensive Support For Your Environment."
                    subtitle="Optimize costs, modernize and align with best practices, and fearlessly take on new initiatives with the support you need to address issues when they arise. Receive round-the-clock proactive support and proactive guidance."
            />

            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-8">
                        <h2 className="text-xs text-neutral-500 border tracking-wide uppercase border-neutral-400 px-4 py-1 rounded-full inline-block">
                            Features - Tooling
                        </h2>

                        <h1 className="text-3xl font-bold mt-2">Industry-Leading Tools</h1>
                        <p className="mt-4 text-gray-600">
                            All Mission Cloud One customers get access to industry-leading tools such as Vega Cloud and New Relic. 
                            We manage all of these <span className='block sm:inline'> tools for you, instrumenting your environment with them, configuring them for your needs, 
                            and tuning their alerts to show only </span> what you need to see.
                        </p>
                    </div>
                    <div className="space-y-8">
                    {toolsData.map((tool, index) => (
                        <ToolCard
                            key={index}
                            title={tool.title}
                            description={tool.description}
                            logo={tool.logo}
                            altText={tool.altText}
                        />
                    ))}
                    </div>
                </div>
            </section>

            <Preverity />

            <FAQSection />

            <Resources />

            <ServicesCard
                imgSrc="/public/assets/contact"
                altText="Custom Alt Text"
                title="Strengthen Your Security Posture"
                description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
                showTag={true}
                tagText="GET IN TOUCH"
                index={1}
                showButton={true}
                buttonText="Schedule a call"
            />

       </main>
    )
}

export default CloudOne