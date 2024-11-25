import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import Image from "next/image";
import React from "react";


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
   
  ];
  



const companyData = {
  content:
    "Mission's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Mission, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/goodfood.svg",
  author: "Peter Philips | CTO, Recognize",
};



const Retail = () => {
  return (
    <section>
  <NewHero
        title="Private Equity"
        description="Mission has extensive experience creating value for private equity firms and their portfolio companies by providing tailored services and technical expertise to help maximize cost savings, optimize infrastructure, and enable innovation. "
        showButton={true}
        buttonText="Get Started"      
        ImgSrc="/"
      />

       <CompaniesProfile
        cards={companyData}
        heading="Maximize the Value of Your Portfolio Companies with Tailored Private Equity Solutions"
        paragraph="Every business aims to create value, and maximize the ROI for their investors. It requires a significant amount of experience to navigate the unique obstacles and opportunities for portfolio companies. As a private equity-owned company, Mission has a comprehensive understanding of the needs of PE firms and their companies. Work with a partner with a proven history of enabling PE firms to optimize, modernize and streamline the infrastructure of their portfolio companies. You can rely on our demonstrated expertise in AWS and transformative technology, including generative AI and machine learning, to help you drive growth, increase profitability and capitalize on every opportunity."
          />
          
     <section className="mx-auto max-w-[1300px] w-[90%] mb-24">
         <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
           BENEFITS
        </span>   
              
        <h2 className="mb-12 mt-4 w-[60%] font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-8 sm:w-full sm:text-xl">
         PE Services to Accelerate Growth and Drive Tangible Results
        </h2>
              
        <div className="grid md:grid-cols-1 grid-cols-2 gap-8">
                    {GridCardData.map((card, index) => (
                        <div
                        key={index}
                        className="bg-orange-650 text-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            
                        <Image src={card.icon} height={50} width={50} alt='card' className="w-10 mb-4" />
                        <h3 className="text-2xl 2md:text-xl font-semibold mb-4">{card.title}</h3>
                        <p className="leading-relaxed">{card.description}</p>
                        </div>
                    ))}
         </div>
    </section>


      <Preverity />
 

       <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="Learn How Mission Can Help You Maximize the Value of Your Portfolio Companies"
        description="Ready to unlock the full potential of your portfolio companies and drive sustainable growth? Schedule a free consultation with a Mission Cloud Solutions Architect today. We’re here to support you every step of the way as you determine the right private equity services for your organization."
        showTag={false}
        index={2}
        showButton={true}
        buttonText="Schedule a call"
      />

      

      
      <Resources />
    </section>
  );
};

export default Retail;
