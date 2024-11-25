"use client";

import * as React from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";

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

interface NavItem {
  title: string;
  href?: string;
  items: {
    category: string;
    description: string;
    subitems: {
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
    ],
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        category: "Cloud Managed Services",
        description: "Optimize your cloud infrastructure",
        subitems: [
          {
            title: "Cloud Foundation",
            description:
              "Manage costs, support your teams, and build to scale.",
            href: "/services/cloud-management-services/cloud-foundation",
          },
          {
            title: "Cloud One",
            description:
              "Our comprehensive service for AWS optimization, operations, and security",
            href: "/services/cloud-management-services/cloud-one",
          },
        ],
      },
      {
        category: "AWS",
        description: "Discover our AWS services and support offerings",
        subitems: [
          {
            title: "AWS Services",
            description: "Explore our full range of AWS services",
            href: "/aws",
          },
        ],
      },
      {
        category: "Professional Services",
        description: "Expert consultation and implementation",
        subitems: [
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
          {
            title: "Data, Analytics & Machine Learning",
            description:
              "Leverage data analytics and machine learning to elevate your business",
            href: "/services/professional-services/data-analytics-ml",
          },
        ],
      },
      {
        category: "AI Management Services",
        description: "Leverage AI solutions",
        subitems: [
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
      {
        category: "Industry Solutions",
        description:
          "Explore the industries we serve with tailored cloud solutions",
        subitems: [
          {
            title: "Healthcare",
            description:
              "Learn how we support healthcare organizations with cloud solutions",
            href: "/industries/healthcare",
          },
          {
            title: "Life Sciences",
            description:
              "Discover our cloud services tailored for life sciences",
            href: "/industries/life-sciences",
          },
          {
            title: "Retail",
            description:
              "See how we help retail businesses thrive in the cloud",
            href: "/industries/retail",
          },
          {
            title: "Software",
            description:
              "Optimize software development with our cloud expertise",
            href: "/industries/software",
          },
          {
            title: "Finance",
            description:
              "Explore cloud solutions designed for the finance sector",
            href: "/industries/finance",
          },
          {
            title: "Media",
            description:
              "Empower media companies with robust cloud capabilities",
            href: "/industries/media",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      {
        category: "Knowledge Base",
        description: "Access our case studies, blog, and more resources",
        subitems: [
          {
            title: "Case Studies",
            description:
              "Explore real-world examples of our solutions in action",
            href: "/case-studies",
          },
          {
            title: "Blog",
            description: "Read insights, tips, and industry news on our blog",
            href: "/blog",
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    href: "/company",
    items: [
      {
        category: "About Mission",
        description: "Learn more about our mission, team, and opportunities",
        subitems: [
          {
            title: "About Us",
            description: "Discover our company's mission, vision, and values",
            href: "/company/about-us",
          },
          {
            title: "Careers",
            description: "Explore career opportunities with our team",
            href: "/company/careers",
          },
          {
            title: "Press & News",
            description:
              "Stay up-to-date with our latest news and media coverage",
            href: "/company/press",
          },
          {
            title: "FAQ",
            description: "Get answers to frequently asked questions",
            href: "/company/faq",
          },
        ],
      },
    ],
  },
];

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <div className="relative bg-nav-gradient">
      <header className="fixed top-0 z-50 w-full border-b bg-background bg-nav-gradient px-7">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#FF9557]">TEVERSE</span>
            </Link>
            <nav className="flex gap-6 md:hidden">
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeItem === item.title
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() =>
                    setActiveItem(activeItem === item.title ? null : item.title)
                  }
                >
                  {item.title}
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button className="inline-flex md:hidden">Get Started</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden items-center md:block"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="max-w-[400px] bg-white sm:w-full"
              >
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our services and solutions
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="mt-6 h-[calc(100vh-8rem)]">
                  <Accordion type="single" collapsible>
                    {navItems.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          {item.items.map((section) => (
                            <div key={section.category} className="mb-4">
                              <h3 className="mb-2 text-sm font-semibold">
                                {section.category}
                              </h3>
                              <p className="mb-2 text-sm text-muted-foreground">
                                {section.description}
                              </p>
                              <div className="space-y-2">
                                {section.subitems.map((subitem) => (
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
      </header>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-white"
          >
            <ScrollArea className="container h-[calc(100vh-4rem)] p-6">
              {navItems.map(
                (item) =>
                  activeItem === item.title && (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="grid grid-cols-3 gap-6 md:grid-cols-2"
                    >
                      {item.items.map((section) => (
                        <div key={section.category} className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              {section.category}
                            </h3>
                            {item.href && (
                              <Link
                                href={item.href}
                                className="text-sm font-medium text-primary hover:underline"
                              >
                                View All
                              </Link>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {section.description}
                          </p>
                          <div className="grid gap-4">
                            {section.subitems.map((subitem) => (
                              <Link
                                key={subitem.title}
                                href={subitem.href}
                                className="group space-y-2 rounded-lg p-4 hover:bg-muted"
                              >
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium group-hover:text-primary">
                                    {subitem.title}
                                  </h4>
                                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1" />
                                </div>
                                <p className="text-sm text-muted-foreground">
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
    </div>
  );
}
