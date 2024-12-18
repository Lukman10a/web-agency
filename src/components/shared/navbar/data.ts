export interface NavItem {
  title: string;
  href?: string;
  items: {
    category: string;
    href?: string;
    description?: string;
    subitems?: {
      title: string;
      description?: string;
      href: string;
    }[];
  }[];
}

let resource_href;

if (typeof window !== "undefined") {
  const currentPath = window.location.pathname;
  // Set resourceHref based on current path
  resource_href = currentPath === "/blog" ? "/blog" : "/case-studies";
}

export const navItems: NavItem[] = [
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        category: "Cloud Solutions",
        // href: "/solutions",
        description:
          "Explore our cloud solutions and services for your business needs",
        subitems: [
          {
            title: "Teverse Control",
            // description:
            //   "Cloud services platform providing visibility, guidance & support for your cloud",
            href: "/solutions/teverse-control",
          },
          {
            title: "Teverse Gateway",
            // description:
            //   "AWS guidance for efficient cloud growth and foundational best practices",
            href: "/solutions/teverse-gateway",
          },
          {
            title: "Teverse Engagements",
            // description:
            //   "Get transparent reporting and live updates on your team's status",
            href: "/solutions/cloud-engagements",
          },
          {
            title: "Teverse Cloud Score",
            // description:
            //   "Proprietary scoring of your cloud architecture against AWS best practices",
            href: "/solutions/cloud-score",
          },
          {
            title: "Teverse Cloud Secure",
            // description: "Fully managed security, detection, and response",
            href: "/solutions/cloud-secure",
          },
        ],
      },
      {
        category: "IDAM Solutions",
        // href: "/solutions/idam",
        // description: "Comprehensive Identity & Access Management Solutions",
        subitems: [
          {
            title: "Identity Governance and Administration (IGA)",
            // description: "Manage user identities and access privileges",
            href: "/solutions/idam/iga",
          },
          {
            title: "Single Sign-On (SSO) and MFA",
            // description: "Simplify user authentication across multiple apps",
            href: "/solutions/idam/sso",
          },
          {
            title: "Identity Federation",
            // description:
            //   "Enable seamless integration of identity systems across organizations or domains.",
            href: "/solutions/idam/idf",
          },
          {
            title: "Privileged Access Management (PAM)",
            // description: "Secure privileged accounts and credentials",
            href: "/solutions/idam/pam",
          },
          {
            title: "Customer Identity and Access Management (CIAM)",
            // description:
            //   "Deliver secure, seamless, and personalized user experiences for your customers.",
            href: "/solutions/idam/ciam",
          },
          {
            title: "Managing machine identities and BoTs",
            // description:
            //   "Ensure secure authentication and lifecycle management for machine and bot identities.",
            href: "/solutions/idam/mmib",
          },
        ],
      },
      {
        category: "Generative AI",
        // href: "/solutions/generative-ai",
        description: "Explore AI-driven innovations for your business",
        subitems: [
          {
            title: "Document Reader",
            // description: "AI-powered document analysis and extraction",
            href: "/solutions/generative-ai/document-reader",
          },
          {
            title: "Safety Alerts",
            // description: "AI-based safety monitoring and alert system",
            href: "/solutions/generative-ai/safety-alerts",
          },
          {
            title: "Foundation Models",
            // description: "Leverage large-scale AI models for advanced tasks",
            href: "/solutions/generative-ai/foundation-models",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        category: "Cloud",
        description: "Optimize your cloud infrastructure",
        subitems: [
          {
            title: "Cloud Managed Services",
            // description:
            //   "We offer a comprehensive range of services for every challenge companies face on AWS.",
            href: "/services",
          },
          {
            title: "Cloud Foundation",
            // description:
            //   "Manage costs, support your teams, and build to scale.",
            href: "/services/cloud-management-services/cloud-foundation",
          },
          {
            title: "Cloud GoTo",
            // description:
            //   "Our comprehensive service for AWS optimization, operations, and security",
            href: "/services/cloud-management-services/cloud-goto",
          },
          {
            title: "AWS Migration",
            // description:
            //   "Minimize downtime, forecast costs, and migrate efficiently",
            href: "/services/professional-services/aws-migration",
          },
          {
            title: "AWS Modernization",
            // description: "Containerization, serverless, and microservices",
            href: "/services/professional-services/aws-modernization",
          },
        ],
      },
      {
        category: "Identity and Access Management (IDAM) ",
        // href: "/services/professional-services",
        description:
          "Expert consultation and implementation for robust Identity and Access Management solutions.",
        subitems: [
          {
            title: "IDAM Migration",
            // description:
            //   "Seamless migration of existing identity and access systems with minimal downtime and maximum security.",
            href: "/services/idam#idam-migration",
          },
          {
            title: "Implementation & Integration ",
            // description:
            //   "End-to-end implementation and integration of IDAM solutions tailored to your business needs.",
            href: "/services/idam#idam-implementation-integration",
          },
          {
            title: "Customisation",
            // description:
            //   "Personalized customization of IDAM platforms to align with unique organizational requirements.",
            href: "/services/idam#idam-customization",
          },
          {
            title: "IDAM Strategy ",
            // description:
            //   "Personalized IDAM strategy platforms to align with unique organizational requirements.",
            href: "/services/idam#idam-strategy",
          },
          {
            title: "Evaluation & Recommendation",
            // description:
            //   "Comprehensive assessment and actionable recommendations for optimizing IDAM systems.",
            href: "/services/idam#idam-evaluation-recommendation",
          },
          {
            title: "Technology Roadmap & Planning",
            // description:
            //   "Strategic planning and roadmap development for future-proof IDAM implementations.",
            href: "/services/idam#idam-technology-roadmap",
          },
          {
            title: "Standard API Connectors",
            // description:
            //   "Pre-built API connectors for seamless integration with existing applications and systems.",
            href: "/services/idam#idam-api-connectors",
          },
          {
            title: "Managed Services",
            // description:
            //   "Ongoing management and support for maintaining a secure and efficient IDAM environment.",
            href: "/services/idam#idam-managed-services",
          },
        ],
      },
      {
        category: "Software Engineering",
        description:
          "Comprehensive software engineering services for modern and scalable solutions.",
        subitems: [
          {
            title: "Software Architecture and Design",
            // description:
            //   "Crafting scalable and robust software architecture tailored to your business goals.",
            href: "/services/software-engineering#software_archi",
          },
          {
            title: "Application Management Services",
            // description:
            //   "End-to-end management of software applications, ensuring performance and reliability.",
            href: "/services/software-engineering#application-management-services",
          },
          {
            title: "Software and App Development",
            // description:
            //   "Developing custom software and applications to meet your unique business requirements.",
            href: "/services/software-engineering#software-app-development",
          },
          {
            title: "Hire DevOps Engineers",
            // description:
            //   "Access highly skilled DevOps professionals to streamline and optimize your development pipeline.",
            href: "/services/software-engineering#devops",
          },
          {
            title: "System, Data, and API Integration",
            // description:
            //   "Seamlessly integrate systems, data, and APIs for enhanced interoperability and efficiency.",
            href: "/services/software-engineering#system-data-api-integration",
          },
          {
            title: "Strategic IT Consulting",
            // description:
            //   "Expert guidance on IT strategy and execution to align with business objectives.",
            href: "/services/software-engineering#strategic-it-consulting",
          },
        ],
      },
      {
        category: "Cyber Security",
        description: "Comprehensive cybersecurity solutions",
        subitems: [
          {
            title: "Cybersecurity",
            // description:
            //   "Protect your digital assets with our comprehensive cybersecurity services",
            href: "/services/security/cyber",
          },
        ],
      },
      {
        category: "Generative AI",
        // href: "",
        description:
          "Leverage AWS AI tools: Amazon Bedrock, SageMaker, and Foundation Models",
        subitems: [
          {
            title: "AI Management Services",
            // description: "Leverage AI solutions",
            href: "/services/ai-management",
          },
          {
            title: "AI Foundation",
            // description:
            //   "Cost management and foundational best practices for AI solutions on AWS",
            href: "/services/ai-management/ai-foundation",
          },
        ],
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    items: [
      {
        category: "Healthcare",
        description:
          "Learn how we support healthcare organizations with cloud solutions",
        href: "/industries/healthcare",
      },
      {
        category: "Life Sciences",
        description: "Discover our cloud services tailored for life sciences",
        href: "/industries/life-sciences",
      },
      {
        category: "Retail",
        description: "See how we help retail businesses thrive in the cloud",
        href: "/industries/retail",
      },
      {
        category: "Software",
        description: "Optimize software development with our cloud expertise",
        href: "/industries/software",
      },
      {
        category: "Finance",
        description: "Explore cloud solutions designed for the finance sector",
        href: "/industries/finance",
      },
      {
        category: "Media",
        description: "Empower media companies with robust cloud capabilities",
        href: "/industries/media",
      },
      {
        category: "Private Equity ",
        description: "",
        href: "/industries/private",
      },
    ],
  },
  {
    title: "Resources",
    href: resource_href,
    items: [
      {
        category: "Case Studies",
        description: "Explore real-world examples of our solutions in action",
        href: "/case-studies",
      },
      {
        category: "Blog",
        description: "Read insights, tips, and industry news on our blog.",
        href: "/blog",
      },
    ],
  },
  {
    title: "Company",
    href: "/company",
    items: [
      {
        category: "About Us",
        description: "Discover our company's mission, vision, and values",
        href: "/company/about-us",
      },
      {
        category: "Careers",
        description: "Explore career opportunities with our team",
        href: "/company/careers",
      },
      {
        category: "Press & News",
        description: "Stay up-to-date with our latest news and media coverage",
        href: "/company/press",
      },
      {
        category: "FAQ",
        description: "Get answers to frequently asked questions",
        href: "/company/faq",
      },
      {
        category: "Contact",
        description: "Need more info, send us a message",
        href: "/contact",
      },
      {
        category: "Our Partners",
        description: "Work closely with our partners.",
        href: "/company/partners",
      },
    ],
  },
];
