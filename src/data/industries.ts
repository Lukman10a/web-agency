import { NewHeroProps } from "@/components/shared/new-hero";

interface Testimonial {
  content: string;
  imageSrc: string;
  author: string;
  buttonText?: string;
  showButton?: boolean;
}

interface CompanyDetails {
  title: string;
  description: string;
}

interface Capability {
  title: string;
  description: string;
  icon: string;
}

interface ServiceCard {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  showTag: boolean;
  tagText: string;
  index: number;
  showButton: boolean;
  buttonText: string;
  href: string;
}

interface Statistics {
  stats: string;
  description: string;
  details: string;
}

export interface IndustryData {
  heroSection: NewHeroProps;
  companyProfiles: {
    companyOne: Testimonial;
    companyTwo: Testimonial;
    heading: string;
    paragraph: string;
  };
  companyDetails: CompanyDetails[];
  capabilities: Capability[];
  servicesCards: ServiceCard[];
  resources: { show: boolean };
  statsCard?: Statistics;
}

export const retailData: IndustryData = {
  heroSection: {
    title: "Retail on AWS",
    description:
      "Empower your retail business with AI-driven, scalable cloud solutions.",
    showButton: false,
    imgSrc: "/svg/retail.svg",
  },
  companyProfiles: {
    companyOne: {
      content:
        "Using AWS solutions, our inventory management process has been transformed. Teverse's AI-powered analytics have reduced stockouts and improved customer satisfaction by 30%. Their approach ensures our systems adapt to seasonal demand effortlessly.",
      imageSrc: "/svg/goodfood.svg",
      author: "Laura Daniels | Head of Operations, GoodFood Co.",
    },
    heading: "Redefining retail through innovation and customer focus",
    paragraph:
      "From streamlining supply chains to enhancing customer experiences, AWS cloud solutions help retailers achieve operational excellence and drive growth.",
    companyTwo: {
      content:
        "With Teverse's guidance, we seamlessly migrated our e-commerce platform to AWS. The enhanced scalability has allowed us to handle peak traffic effortlessly, ensuring a reliable shopping experience for our customers worldwide.",
      imageSrc: "/svg/retailpartner.svg",
      author: "Mark Johnson | CEO, RetailPartner",
      buttonText: "Discover More",
      showButton: true,
    },
  },
  companyDetails: [
    {
      title: "E-commerce retailers",
      description:
        "Optimize inventory, personalize shopping experiences, and deliver unparalleled performance during high-traffic events with AWS solutions.",
    },
    {
      title: "Brick-and-mortar stores",
      description:
        "Enhance in-store operations with smart IoT integrations, real-time analytics, and secure payment processing.",
    },
  ],
  capabilities: [
    {
      title: "AI-driven demand forecasting",
      description:
        "Accurately predict customer needs and optimize inventory levels.",
      icon: "/svg/ai-forecast.svg",
    },
    {
      title: "Seamless omnichannel experiences",
      description:
        "Unify customer touchpoints across online and offline channels.",
      icon: "/svg/omnichannel.svg",
    },
  ],
  servicesCards: [
    {
      imgSrc: "/assets/retail-vision.png",
      altText: "Retail Vision",
      title: "Future of Retail",
      description:
        "Leverage AI and cloud innovations to revolutionize how you connect with customers.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Learn More",
      href: "/retail",
    },
  ],
  resources: { show: true },
};

export const financeData = {
  heroSection: {
    title: "Financial Services on AWS",
    description:
      "Cloud solutions to transform financial systems and innovate faster.",
    showButton: false,
    imgSrc: "/svg/financial.svg",
  },
  companyProfiles: {
    companyOne: {
      content:
        "With Teverse's AWS integration expertise, we have enhanced the accuracy of our fraud detection systems by 40%. Their AI models provide invaluable insights for risk mitigation.",
      imageSrc: "/svg/fintech.svg",
      author: "Diana Reeves | CTO, FinTech Solutions",
    },
    heading: "Staying ahead in a competitive financial landscape",
    paragraph:
      "As financial regulations evolve and customer expectations rise, our solutions enable you to stay compliant while fostering innovation.",
    companyTwo: {
      content:
        "Migrating to AWS allowed us to process financial transactions at unprecedented speeds, improving client satisfaction and trust. Teverse's tailored strategy ensured a seamless transition.",
      imageSrc: "/svg/securepay.svg",
      author: "Michael Clark | CEO, SecurePay",
      buttonText: "Read the Case Study",
      showButton: true,
    },
  },
  companyDetails: [
    {
      title: "Banking institutions",
      description:
        "Accelerate digital transformation with secure, scalable cloud infrastructure tailored for compliance.",
    },
    {
      title: "Investment firms",
      description:
        "Harness big data to gain actionable insights and optimize investment strategies.",
    },
  ],
  capabilities: [
    {
      title: "Real-time analytics",
      description: "Make informed decisions with real-time financial insights.",
      icon: "/svg/analytics.svg",
    },
    {
      title: "Regulatory compliance",
      description:
        "Stay compliant with industry standards like GDPR and PCI DSS.",
      icon: "/svg/compliance.svg",
    },
  ],
  servicesCards: [
    {
      imgSrc: "/assets/finance-vision.png",
      altText: "Finance Vision",
      title: "The Future of Finance",
      description:
        "Enable innovation and efficiency in financial services with AWS cloud solutions.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Discover More",
      href: "/finance",
    },
  ],
  resources: { show: true },
};

export const healthcareData = {
  heroSection: {
    title: "Healthcare on AWS",
    description: "Innovative cloud solutions for better patient outcomes.",
    showButton: false,
    imgSrc: "/svg/healthcare.svg",
  },
  companiesProfile: {
    cards: {
      content:
        "By leveraging AWS, Teverse helped us implement advanced patient analytics, enabling personalized care while ensuring data security.",
      imageSrc: "/svg/meditech.svg",
      author: "Dr. Alan Monroe | CIO, MediTech",
    },
    heading: "Empowering healthcare providers through technology",
    paragraph:
      "From telemedicine to advanced research, AWS offers the tools you need to deliver exceptional care in an evolving landscape.",
  },
  statsCard: {
    stats: "150+",
    description: "Healthcare organizations empowered by AWS solutions.",
    details:
      "From local clinics to global health organizations, our cloud solutions support a wide range of healthcare needs.",
  },
  detailsData: [
    {
      title: "Telemedicine providers",
      description:
        "Deliver seamless virtual consultations with secure, scalable infrastructure.",
    },
    {
      title: "Life sciences companies",
      description:
        "Accelerate drug discovery with powerful computational and storage capabilities.",
    },
  ],
  capabilitiesData: [
    {
      title: "Data security and compliance",
      description:
        "Ensure HIPAA and GDPR compliance while safeguarding patient data.",
      icon: "/svg/security.svg",
    },
    {
      title: "AI-powered diagnostics",
      description: "Leverage machine learning to enhance diagnostic accuracy.",
      icon: "/svg/ai-diagnostics.svg",
    },
  ],
  companyDataTwo: {
    content:
      "Teverse enabled us to deploy scalable telehealth solutions, making healthcare more accessible to underserved communities.",
    imageSrc: "/svg/telehealth.svg",
    author: "Sara Lee | CEO, TeleHealth Now",
    buttonText: "Explore Our Work",
    showButton: true,
  },
  servicesCards: [
    {
      imgSrc: "/public/assets/contact",
      altText: "Image",
      title: "Our healthcare vision",
      description:
        "A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Build with us",
      href: "/",
    },
    {
      imgSrc: "/assets/security-posture.png",
      altText: "Image",
      title: "Strengthen Your Security Posture",
      description:
        "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment.",
      showTag: true,
      tagText: "GET IN TOUCH",
      index: 2,
      showButton: true,
      buttonText: "Schedule a call",
      href: "/",
    },
  ],
};

// export const healthcareData = {
//   heroSection: {
//     title: "Healthcare on AWS",
//     description:
//       "AI solutions and cloud-native technologies for every patient.",
//     showButton: false,
//     icon: "/svg/newheroicon.svg",
//     imgSrc: "/svg/healthcare.svg",
//   },
//   companiesProfile: {
//     cards: {
//       content:
//         "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
//       imageSrc: "/svg/carehubs.svg",
//       author: "Peter Philips | CTO, Recognize",
//     },
//     heading:
//       "Now more than ever patients need state of the art technology and systems",
//     paragraph:
//       "You’ve got personnel shortages, compliance obligations, and regulatory pressures to contend with—but the industry isn’t standing still. We help you leverage cloud-native technologies and AI to ensure every patient gets optimal experiences and equitable outcomes while keeping their data private and secure.",
//   },
//   statsCard: {
//     stats: "100+",
//     description: "Healthcare & Life Sciences firms we’ve helped build on AWS",
//     details:
//       "From neighborhood clinics to international nonprofits to some of the largest life sciences firms in the world—we’ve helped companies of all sizes and stages serve their patients.",
//   },
//   detailsData: [
//     {
//       title: "Healthcare payers",
//       description:
//         "You handle the intricate balance of optimizing claim management, member retention, and health outcomes amidst a rapidly evolving industry. We help you build accessible member experiences that serve them and help you better understand their needs.",
//     },
//     {
//       title: "Healthcare providers",
//       description:
//         "You need to maintain patient confidentiality while streamlining operations in an increasingly digital landscape. We specialize in tailoring AWS infrastructure to meet the needs of providers, ensuring you have a secure, compliant, and scalable environment to deliver exceptional care.",
//     },
//   ],
//   capabilitiesData: [
//     {
//       title: "HIPAA compliance",
//       description:
//         "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//       icon: "/svg/hipaa.svg",
//     },
//     {
//       title: "Health research",
//       description:
//         "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
//       icon: "/svg/health.svg",
//     },
//     {
//       title: "Health research",
//       description:
//         "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
//       icon: "/svg/health.svg",
//     },
//     {
//       title: "HIPAA compliance",
//       description:
//         "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//       icon: "/svg/hipaa.svg",
//     },
//     {
//       title: "HIPAA compliance",
//       description:
//         "Our modernization roadmap ensures your operations and data practices are secure and resilient",
//       icon: "/svg/hipaa.svg",
//     },
//     {
//       title: "Health research",
//       description:
//         "Conduct large-scale research projects with seamless analytics for data science or business intelligence",
//       icon: "/svg/health.svg",
//     },
//   ],
//   companyDataTwo: {
//     content:
//       "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
//     imageSrc: "/svg/carehubs.svg",
//     author: "Peter Philips | CTO, Recognize",
//     buttonText: "Read More",
//     showButton: true,
//   },
//   servicesCards: [
//     {
//       imgSrc: "/public/assets/contact",
//       altText: "Image",
//       title: "Our healthcare vision",
//       description:
//         "A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together.",
//       showTag: true,
//       tagText: "AWS PREMIER CONSULTING PARTNER",
//       index: 1,
//       showButton: true,
//       buttonText: "Build with us",
//       href: "/",
//     },
//     {
//       imgSrc: "/assets/security-posture.png",
//       altText: "Image",
//       title: "Strengthen Your Security Posture",
//       description:
//         "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment.",
//       showTag: true,
//       tagText: "GET IN TOUCH",
//       index: 2,
//       showButton: true,
//       buttonText: "Schedule a call",
//       href: "/",
//     },
//   ],
// };

export const lifeSciencesData = {
  hero: {
    title: "Life Sciences on AWS",
    description: "AI solutions and cloud-native technologies.",
    showButton: false,
    icon: "/svg/newheroicon.svg",
    imgSrc: "/",
  },

  companiesProfile: {
    cards: {
      content:
        "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/carehubs.svg",
      author: "Peter Philips | CTO, Recognize",
    },
    heading:
      "Now more than ever patients need state of the art technology and systems.",
    paragraph:
      "How do you innovate while adhering to stringent regulatory demands? We help you stay focused on your product with cloud-native services and AI solutions to accelerate research and development, maintain compliance, and ensure your breakthroughs reach the market efficiently.",
  },
  statsCard: {
    stats: "100+",
    description: "Healthcare & Life Sciences firms we’ve helped build on AWS",
    details:
      "From startups breaking new ground in biotech to established pharmaceutical giants and leading medical device manufacturers—we've guided a diverse range of firms to harness the cloud for cutting-edge solutions.",
  },
  companiesWeServe: [
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
  ],
  ourCapabilities: [
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
  ],
  servicesCards: [
    {
      imgSrc: "/public/assets/contact",
      altText: "Image",
      title: "Our life sciences vision",
      description:
        "We believe that life-saving innovations will reach those in need faster and more reliably when given best-in-class cloud solutions. Partner with us to build the future of life sciences together.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Build with us",
      href: " /",
    },
    {
      imgSrc: "/public/assets/contact",
      altText: "Image",
      title: "Schedule a Free Consultation With a Teverse Cloud Advisor",
      description:
        "Schedule a Free Call with a Cloud Advisor to learn more about how we help life sciences companies with the power of AWS.",
      showTag: true,
      tagText: "GET IN TOUCH",
      index: 2,
      showButton: true,
      buttonText: "Get Started",
      href: "/",
    },
  ],
  companiesProfileTwo: {
    cards: {
      content:
        "We would have had to hire three people to get what we’re getting from Teverse, and even then wouldn’t have reached the level of experience that Teverse brings. I look at Teverse as an extension of our team. It’s a true partnership. Teverse’s experience and expertise is extremely valuable to us.",
      imageSrc: "/svg/carehubs.svg",
      author: "Peter Philips | CTO, Recognize",
      buttonText: "Read More",
      showButton: true,
    },
  },
};

export const mediaData = {
  hero: {
    title: "Media & Communication on AWS",
    description:
      "Cloud and AI solutions for the next-generation of media workflows",
    showButton: false,
    imgSrc: "/svg/media.svg",
  },
  companyData: {
    content:
      "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
    imageSrc: "/svg/goodfood.svg",
    author: "Peter Philips | CTO, Recognize",
  },
  heading: "Content is king and consumer expectations have never been higher",
  paragraph:
    "Demand for content is constantly growing but the complexity of high-fidelity workflows and global delivery isn’t going away. We empower you with cloud-native and AI solutions to streamline production, create more engaging experiences, and seamlessly deliver to all platforms.",
  companyDataTwo: {
    content:
      "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential forimproved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
    imageSrc: "/svg/carehubs.svg",
    author: "Peter Philips | CTO, Recognize",
    buttonText: "Read More",
    showButton: true,
  },
  detailsData: [
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
  ],
  ourCapabilitiesData: [
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
  ],
  descriptionParagraph:
    "From global media conglomerates to innovative digital agencies, telecom multi-nationals to gaming studio startups, we've enabled every part of the media ecosystem to redefine content delivery and audience engagement.",
  servicesCardOne: {
    imgSrc: "/public/assets/contact",
    altText: "Image",
    title: "Our media vision",
    description:
      "A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together.",
    showTag: true,
    tagText: "AWS PREMIER CONSULTING PARTNER",
    index: 1,
    showButton: true,
    buttonText: "Build with us",
    href: "/",
  },
  servicesCardTwo: {
    imgSrc: "/assets/security-posture.png",
    altText: "Image",
    title: "Strengthen Your Security Posture",
    description:
      "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment.",
    showTag: true,
    tagText: "GET IN TOUCH",
    index: 2,
    showButton: true,
    buttonText: "Schedule a call",
    href: "/",
  },
};

export const privateData = {
  hero: {
    title: "Private Equity",
    description:
      "Teverse has extensive experience creating value for private equity firms and their portfolio companies by providing tailored services and technical expertise to help maximize cost savings, optimize infrastructure, and enable innovation.",
    showButton: true,
    buttonText: "Get Started",
    imgSrc: "/svg/private.svg",
  },
  companyProfile: {
    cards: {
      content:
        "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/goodfood.svg",
      author: "Peter Philips | CTO, Recognize",
    },
    heading:
      "Maximize the Value of Your Portfolio Companies with Tailored Private Equity Solutions",
    paragraph:
      "Every business aims to create value, and maximize the ROI for their investors. It requires a significant amount of experience to navigate the unique obstacles and opportunities for portfolio companies. As a private equity-owned company, Teverse has a comprehensive understanding of the needs of PE firms and their companies. Work with a partner with a proven history of enabling PE firms to optimize, modernize and streamline the infrastructure of their portfolio companies. You can rely on our demonstrated expertise in AWS and transformative technology, including generative AI and machine learning, to help you drive growth, increase profitability and capitalize on every opportunity.",
  },
  benefits: {
    tag: "BENEFITS",
    heading: "PE Services to Accelerate Growth and Drive Tangible Results",
    gridCardData: [
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
    ],
  },
  servicesCard: {
    imgSrc: "/public/assets/contact",
    altText: "Image",
    title:
      "Learn How Teverse Can Help You Maximize the Value of Your Portfolio Companies",
    description:
      "Ready to unlock the full potential of your portfolio companies and drive sustainable growth? Schedule a free consultation with a Teverse Cloud Solutions Architect today. We’re here to support you every step of the way as you determine the right private equity services for your organization.",
    showTag: false,
    index: 2,
    showButton: true,
    buttonText: "Schedule a call",
    href: "/",
  },
};

export const softwareData = {
  hero: {
    title: "Software on AWS",
    description: "Cloud and AI solutions for the next-generation of software",
    showButton: false,
    imgSrc: "/svg/software.svg",
  },

  companiesProfile: {
    cards: {
      content:
        "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/goodfood.svg",
      author: "Peter Philips | CTO, Recognize",
    },
    heading: "Software is eating the world—and AI may be eating software",
    paragraph:
      "Demand for content is constantly growing but the complexity of high-fidelity workflows and global delivery isn’t going away. We empower you with cloud-native and AI solutions to streamline production, create more engaging experiences, and seamlessly deliver to all platforms.",
  },
  statsCards: [
    {
      stats: "250+",
      description: "Healthcare & Life Sciences firms we’ve helped build on AWS",
      details:
        "From neighborhood clinics to international nonprofits to some of the largest life sciences firms in the world—we’ve helped companies of all sizes and stages serve their patients.",
    },
    {
      stats: "1000+",
      description: "Healthcare & Life Sciences firms we’ve helped build on AWS",
      details:
        "From neighborhood clinics to international nonprofits to some of the largest life sciences firms in the world—we’ve helped companies of all sizes and stages serve their patients.",
    },
  ],
  detailsData: [
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
  ],
  ourCapabilitiesData: [
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
  ],
  companiesProfileTwo: {
    cards: {
      content:
        "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
      imageSrc: "/svg/carehubs.svg",
      author: "Peter Philips | CTO, Recognize",
      buttonText: "Read More",
      showButton: true,
    },
  },
  servicesCards: [
    {
      imgSrc: "/public/assets/contact",
      altText: "Image",
      title: "Our media vision",
      description:
        "A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together.",
      showTag: true,
      tagText: "AWS PREMIER CONSULTING PARTNER",
      index: 1,
      showButton: true,
      buttonText: "Build with us",
      href: "/",
    },
    {
      imgSrc: "/assets/security-posture.png",
      altText: "Image",
      title: "Strengthen Your Security Posture",
      description:
        "Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment.",
      showTag: true,
      tagText: "GET IN TOUCH",
      index: 2,
      showButton: true,
      buttonText: "Schedule a call",
      href: "/",
    },
  ],
};
