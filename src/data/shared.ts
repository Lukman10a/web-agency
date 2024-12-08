export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  // Additional testimonials can be added here...
];

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
  {
    id: 4,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
  {
    id: 5,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
  {
    id: 6,
    name: "Lorem Ipsum Dolor",
    title: "CEO & CO-FOUNDER",
    image: "/assets/cloudFamily.png",
  },
];

interface ValueData {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

export const ourValuesData: ValueData[] = [
  {
    title: "No nonsense culture",
    description:
      "The ever-changing world of cloud computing demands continuous learning. Our engineers strive for the best solutions, new techniques, and skills.",
    image: "/assets/cardimage1.png",
    backgroundColor: "#FFC7DC",
  },
  {
    title: "Determination",
    description:
      "Our engineers are dedicated to adapting and improving their skills to deliver optimal solutions.",
    image: "/assets/cardimage2.png",
    backgroundColor: "#FFDECB",
  },
  {
    title: "Innovation First",
    description:
      "We believe in constantly innovating to stay ahead. Our team is always looking for ways to push boundaries.",
    image: "/assets/cardimage3.png",
    backgroundColor: "#B0F6FF",
  },
  {
    title: "Adaptability",
    description:
      "We understand that the cloud landscape is constantly evolving, and so must we.",
    image: "/assets/cardimage3.png",
    backgroundColor: "#DADCE4",
  },
];

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "QUESTIONS",
  "GENERAL",
  "SOLUTIONS",
  "PEOPLE",
  "TECH",
];

export const faqData: FAQItem[] = [
  {
    question: "What is cloud consulting, and how can it benefit my business?",
    answer:
      "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency. It ensures your business leverages the full potential of cloud services like AWS, Azure, or Google Cloud.",
    category: "GENERAL", // Add category
  },
  {
    question: "How do I know if my business is ready for cloud migration?",
    answer:
      "Your business may be ready for cloud migration if you're facing challenges with maintaining on-premises infrastructure, need to scale quickly, or want to reduce IT overhead costs. A cloud consultant can assess your current systems and help you determine the right strategy for a successful migration.",
    category: "QUESTIONS", // Add category
  },
  {
    question: "What are the different types of cloud services I can use?",
    answer:
      "There are three main types of cloud services: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides virtualized computing resources, PaaS offers a platform for building and deploying applications, and SaaS delivers software applications over the internet, eliminating the need for local installation.",
    category: "SOLUTIONS", // Add category
  },
  {
    question:
      "What are the common challenges businesses face during cloud adoption?",
    answer:
      "Common challenges include data security concerns, lack of in-house expertise, managing cloud costs, and ensuring system compatibility. Cloud consultants can guide businesses through these hurdles by offering solutions tailored to your specific needs and helping you adopt best practices for cloud management.",
    category: "GENERAL", // Add category
  },
  {
    question: "How can cloud consulting help optimize my current cloud setup?",
    answer:
      "Cloud consultants can help optimize your current cloud environment by identifying inefficiencies, reducing unnecessary costs, improving performance, and implementing best practices for scalability and security. They'll analyze your usage patterns and recommend tailored optimizations to improve cost-effectiveness and overall system performance.",
    category: "SOLUTIONS", // Add category
  },
  {
    question: "How long does a typical cloud migration take?",
    answer:
      "The duration of a cloud migration varies depending on the complexity of your existing infrastructure and the scope of the migration. On average, migrations can take anywhere from a few weeks to several months. A cloud consultant will work with you to establish a realistic timeline and manage the process step-by-step to minimize disruptions to your business.",
    category: "QUESTIONS", // Add category
  },
];

// data.ts

export interface CompanyData {
  content: string;
  imageSrc: string;
  author: string;
  buttonText?: string;
  showButton?: boolean;
}

export const companyData: CompanyData = {
  content:
    "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/goodfood.svg",
  author: "Peter Philips | CTO, Recognize",
};

export const companyDataTwo: CompanyData = {
  content:
    "Teverse's expertise in generative AI unveiled exciting possibilities for our data extraction process. Their innovative approach using Amazon Bedrock demonstrated remarkable potential for improved accuracy and efficiency. Thanks to Teverse, we've gained valuable insights that will shape the future of our healthcare technology solutions.",
  imageSrc: "/svg/carehubs.svg",
  author: "Peter Philips | CTO, Recognize",
  buttonText: "Read More",
  showButton: true,
};

export interface DetailData {
  title: string;
  description: string;
}

export const detailsData: DetailData[] = [
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
];

export interface CapabilityData {
  title: string;
  description: string;
  icon: string;
}

export const ourCapabilitiesData: CapabilityData[] = [
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
