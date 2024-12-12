"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { useScrollLock } from "@/hooks/use-scroll-lock";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ArrowIcon from "../../icons/arrow";

interface NavItem {
  title: string;
  href?: string;
  items: {
    category: string;
    href?: string;
    description: string;
    subitems?: {
      title: string;
      description: string;
      href: string;
    }[];
  }[];
}

const navItems: NavItem[] = [
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
            description:
              "Cloud services platform providing visibility, guidance & support for your cloud",
            href: "/solutions/teverse-control",
          },
          {
            title: "Teverse Gateway",
            description:
              "AWS guidance for efficient cloud growth and foundational best practices",
            href: "/solutions/teverse-gateway",
          },
          {
            title: "Teverse Engagements",
            description:
              "Get transparent reporting and live updates on your team's status",
            href: "/solutions/cloud-engagements",
          },
          {
            title: "Teverse Cloud Score",
            description:
              "Proprietary scoring of your cloud architecture against AWS best practices",
            href: "/solutions/cloud-score",
          },
          {
            title: "Teverse Cloud Secure",
            description: "Fully managed security, detection, and response",
            href: "/solutions/cloud-secure",
          },
        ],
      },
      {
        category: "IDAM Solutions",
        // href: "/solutions/idam",
        description: "Comprehensive Identity & Access Management Solutions",
        subitems: [
          {
            title: "Identity Governance and Administration (IGA)",
            description: "Manage user identities and access privileges",
            href: "/solutions/idam/iga",
          },
          {
            title: "Single Sign-On (SSO) and MFA",
            description: "Simplify user authentication across multiple apps",
            href: "/solutions/idam/sso",
          },
          {
            title: "Identity Federation",
            description:
              "Enable seamless integration of identity systems across organizations or domains.",
            href: "/solutions/idam/idf",
          },
          {
            title: "Privileged Access Management (PAM)",
            description: "Secure privileged accounts and credentials",
            href: "/solutions/idam/pam",
          },
          {
            title: "Customer Identity and Access Management (CIAM)",
            description:
              "Deliver secure, seamless, and personalized user experiences for your customers.",
            href: "/solutions/idam/ciam",
          },
          {
            title: "Managing machine identities and BoTs",
            description:
              "Ensure secure authentication and lifecycle management for machine and bot identities.",
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
            description: "AI-powered document analysis and extraction",
            href: "/solutions/generative-ai/document-reader",
          },
          {
            title: "Safety Alerts",
            description: "AI-based safety monitoring and alert system",
            href: "/solutions/generative-ai/safety-alerts",
          },
          {
            title: "Foundation Models",
            description: "Leverage large-scale AI models for advanced tasks",
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
            description: "...",
            href: "/services",
          },
          {
            title: "Cloud Foundation",
            description:
              "Manage costs, support your teams, and build to scale.",
            href: "/services/cloud-management-services/cloud-foundation",
          },
          {
            title: "Cloud GoTo",
            description:
              "Our comprehensive service for AWS optimization, operations, and security",
            href: "/services/cloud-management-services/cloud-goto",
          },
          {
            title: "AWS Migration",
            description:
              "Minimize downtime, forecast costs, and migrate efficiently",
            href: "/services/professional-services/aws-migration",
          },
          {
            title: "AWS Modernization",
            description: "Containerization, serverless, and microservices",
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
            description:
              "Seamless migration of existing identity and access systems with minimal downtime and maximum security.",
            href: "/services/idam#idam-migration",
          },
          {
            title: "Implementation & Integration ",
            description:
              "End-to-end implementation and integration of IDAM solutions tailored to your business needs.",
            href: "/services/idam#idam-implementation-integration",
          },
          {
            title: "Customisation",
            description:
              "Personalized customization of IDAM platforms to align with unique organizational requirements.",
            href: "/services/idam#idam-customization",
          },
          {
            title: "Evaluation & Recommendation",
            description:
              "Comprehensive assessment and actionable recommendations for optimizing IDAM systems.",
            href: "/services/idam#idam-evaluation-recommendation",
          },
          {
            title: "Technology Roadmap & Planning",
            description:
              "Strategic planning and roadmap development for future-proof IDAM implementations.",
            href: "/services/idam#idam-technology-roadmap",
          },
          {
            title: "Standard API Connectors",
            description:
              "Pre-built API connectors for seamless integration with existing applications and systems.",
            href: "/services/idam#idam-api-connectors",
          },
          {
            title: "Managed Services",
            description:
              "Ongoing management and support for maintaining a secure and efficient IDAM environment.",
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
            description:
              "Crafting scalable and robust software architecture tailored to your business goals.",
            href: "/services/software-engineering#software_archi",
          },
          {
            title: "Application Management Services",
            description:
              "End-to-end management of software applications, ensuring performance and reliability.",
            href: "/services/software-engineering#application-management-services",
          },
          {
            title: "Software and App Development",
            description:
              "Developing custom software and applications to meet your unique business requirements.",
            href: "/services/software-engineering#software-app-development",
          },
          {
            title: "Hire DevOps Engineers",
            description:
              "Access highly skilled DevOps professionals to streamline and optimize your development pipeline.",
            href: "/services/software-engineering#devops",
          },
          {
            title: "System, Data, and API Integration",
            description:
              "Seamlessly integrate systems, data, and APIs for enhanced interoperability and efficiency.",
            href: "/services/software-engineering#system-data-api-integration",
          },
          {
            title: "Strategic IT Consulting",
            description:
              "Expert guidance on IT strategy and execution to align with business objectives.",
            href: "/services/software-engineering#strategic-it-consulting",
          },
        ],
      },
      {
        category: "Cyber Security",
        description: "....",
        subitems: [
          {
            title: "Cybersecurity",
            description: "Comprehensive cybersecurity solutions",
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
            description: "Leverage AI solutions",
            href: "/services/ai-management",
          },
          {
            title: "AI Foundation",
            description:
              "Cost management and foundational best practices for AI solutions on AWS",
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
      // {
      //   category: "Industry Solutions",
      //   description:
      //     "Explore the industries we serve with tailored cloud solutions",
      //   href: "#",
      // },
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
    href: "/resources",
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

export function MainNav() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#scrollable",
  });
  const router = useRouter();

  // Lock and unlock scrolling based on activeItem
  React.useEffect(() => {
    if (activeItem) {
      lock();
    } else {
      unlock();
    }
    return () => {
      unlock();
    };
  }, [activeItem, lock, unlock]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveItem(null);
      setIsSheetOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    // bg-home-gradient
    <nav className="relative font-mono" id="scrollable">
      <nav className="supports-[backdrop-filter]:bg-main-gradient/60 fixed top-0 z-50 w-full border-b bg-main-gradient px-7 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flexitems-center space-x-2 overflow-hidden"
            >
              <Image
                src={"/assets/logo-main-sm.png"}
                width={150}
                height={150}
                alt="brand logo"
                // className="size-40 object-contain"
              />
            </Link>
            <div className="flex gap-6 md:hidden">
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className={cn(
                    `text-sm font-medium transition-colors hover:text-primary ${
                      activeItem === item.title
                        ? "text-orange-650"
                        : "text-black"
                    }`,
                    isActive(item?.href as string) && "text-orange-650",
                  )}
                  onClick={() =>
                    setActiveItem(activeItem === item.title ? null : item.title)
                  }
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="md:hidden">
              <Button className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:px-10 md:py-4 md:text-lg">
                Contact <ArrowIcon />
              </Button>{" "}
            </Link>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden border-black md:block"
                >
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="max-w-[400px] bg-nav-items sm:w-full"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href="/"
                      className="flex items-center space-x-2 font-mono"
                    >
                      <Image
                        src={"/assets/logo-main-sm.png"}
                        width={150}
                        height={150}
                        alt="brand logo"
                        // className="size-40 object-contain"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="text-left">
                    Navigate through our services and solutions
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="no-scrollbar mt-6 h-[calc(100vh-8rem)]">
                  <Accordion type="single" collapsible>
                    {navItems.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent className="no-scrollbar">
                          {item.items.map((section) => (
                            <div key={section.category} className="mb-4">
                              <Link href={section?.href || "#"}>
                                <h3 className="mb-2 text-sm font-semibold">
                                  {section.category}
                                </h3>
                              </Link>
                              <p className="mb-2 text-xs text-black opacity-50">
                                {section.description}
                              </p>
                              <div className="space-y-2">
                                {section?.subitems?.map((subitem) => (
                                  <Link
                                    key={subitem.title}
                                    href={subitem.href}
                                    className="block text-sm hover:text-primary"
                                  >
                                    {subitem.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-opacity-100 bg-nav-items"
          >
            <ScrollArea className="container h-[calc(100vh-4rem)] gap-5 p-6">
              {navItems.map(
                (item) =>
                  activeItem === item.title && (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="grid grid-cols-3 gap-10 md:grid-cols-2"
                    >
                      {item.items.map((section) => (
                        <div key={section.category} className="space-y-4">
                          <div className="group flex items-center justify-between">
                            <h3 className="border-b-2 border-transparent text-lg font-semibold transition-all duration-300 ease-in hover:border-gray-700">
                              {section.href ? (
                                <Link href={section.href} className="">
                                  {section.category}
                                </Link>
                              ) : (
                                <span>{section.category}</span>
                              )}
                            </h3>
                            {/* <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></span> */}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {section.description}
                          </p>
                          {section.subitems && (
                            <hr className="border-gray-900 bg-gray-900" />
                          )}
                          <div className="grid gap-4">
                            {section?.subitems?.map((subitem) => (
                              <Link
                                key={subitem.title}
                                href={subitem.href}
                                className="group space-y-2 rounded-lg p-4 hover:bg-muted"
                              >
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium group-hover:text-primary">
                                    {subitem.title}
                                  </h4>
                                  <ChevronRight className="ease h-4 w-4 transition-all group-hover:translate-x-1" />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {subitem.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ),
              )}
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {activeItem && (
        <div
          className="fixed inset-0 bg-background/50"
          onClick={() => setActiveItem(null)}
        />
      )}
    </nav>
  );
}
