import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { Button } from "../../ui/button";
import ArrowIcon from "../../icons/arrow";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ListItem } from "./ListItem";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Software",
    // href: "/software",
    items: [
      {
        title: "Teverse Control",
        href: "/software/teverse-control",
        label:
          "Cloud services platform providing visibility, guidance & support for your cloud",
      },
      {
        title: "Teverse Gateway",
        href: "/software/teverse-gateway",
        label:
          "AWS guidance for efficient cloud growth and foundational best practices",
      },
      {
        title: "Teverse Engagements",
        href: "/software/cloud-engagements",
        label:
          "Get transparent reporting and live updates on your team’s status",
      },
      {
        title: "Teverse Cloud Score",
        href: "/software/cloud-score",
        label:
          "Proprietary scoring of your cloud architecture against AWS best practices",
      },
      {
        title: "Teverse Cloud Secure",
        href: "/software/cloud-secure",
        label: "Fully managed security, detection, and response",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: " Cloud Managed Services",
        href: "/services",
        items: [
          {
            title: "Cloud Foundation",
            href: "/services/cloud-management-services/cloud-foundation",
            label: "Manage costs, support your teams, and build to scale.",
          },
          {
            title: "Cloud One",
            href: "/services/cloud-managed/one",
            label:
              "Our comprehensive service for AWS optimization, operations, and security",
          },
        ],
      },
      {
        title: "AWS",
        href: "/aws",
        label: "Discover our AWS services and support offerings",
      },
      {
        title: "Professional Services",
        href: "/services/professional-services",
        items: [
          {
            title: "AWS Migration",
            label: "Minimize downtime, forecast costs, and migrate efficiently",
          },
          {
            title: "AWS Mordernization",
            label: "Containerization, serverless, and microservices",
          },
          {
            title: "Data, Analytics & Machine Learning ",
            label:
              "Leverage data analytics and machine learning to elevate your business",
          },
        ],
      },
      {
        title: "AI Management Services",
        href: "/services/ai-management",
        items: [
          {
            title: "AI Foundation",
            label:
              "Cost management and foundational best practices for AI solutions on AWS",
          },
        ],
      },
    ],
  },
  {
    title: "Solution",
    href: "/solution",
    label: "Explore our cloud solutions and services for your business needs",
  },
  {
    title: "Industries",
    label: "Explore the industries we serve with tailored cloud solutions",
    items: [
      {
        title: "Healthcare",
        href: "/industry/healthcare",
        label:
          "Learn how we support healthcare organizations with cloud solutions",
      },
      {
        title: "Life Sciences",
        href: "/industry/life-sciences",
        label: "Discover our cloud services tailored for life sciences",
      },
      {
        title: "Retail",
        href: "/industry/retail",
        label: "See how we help retail businesses thrive in the cloud",
      },
      {
        title: "Software",
        href: "/industry/software",
        label: "Optimize software development with our cloud expertise",
      },
      {
        title: "Finance",
        href: "/industry/finance",
        label: "Explore cloud solutions designed for the finance sector",
      },
      {
        title: "Media",
        href: "/industry/media",
        label: "Empower media companies with robust cloud capabilities",
      },
    ],
  },
  {
    title: "Resources",
    label: "Access our case studies, blog, and more resources",
    items: [
      {
        title: "Case Studies",
        href: "/case-studies",
        label: "Explore real-world examples of our solutions in action",
      },
      {
        title: "Blog",
        href: "/blog",
        label: "Read insights, tips, and industry news on our blog",
      },
    ],
  },
  {
    title: "Company",
    // href: "/company",
    label: "Learn more about our mission, team, and opportunities",
    items: [
      {
        title: "About Us",
        href: "/company/about-us",
        label: "Discover our company's mission, vision, and values",
      },
      {
        title: "Careers",
        href: "/company/careers",
        label: "Explore career opportunities with our team",
      },
      {
        title: "Press & News",
        href: "/company/press",
        label: "Stay up-to-date with our latest news and media coverage",
      },
      {
        title: "FAQ",
        href: "/company/faq",
        label: "Get answers to frequently asked questions",
      },
    ],
  },
];

// const renderNavContent = (items: NavItem[]) => {
//   // Group items by section
//   const sections = items.reduce(
//     (acc, item) => {
//       const section = item.section || "default";
//       if (!acc[section]) {
//         acc[section] = [];
//       }
//       acc[section].push(item);
//       return acc;
//     },
//     {} as Record<string, NavItem[]>,
//   );

//   return (
//     <div className="grid grid-cols-3 gap-6 bg-gradient-to-b from-white to-orange-50/50 p-6">
//       {Object.entries(sections).map(([sectionName, sectionItems]) => (
//         <div key={sectionName} className="space-y-4">
//           <ListItemV2
//             title={
//               sectionName === "default" ? sectionItems[0].title : sectionName
//             }
//             href="#"
//             isSection
//           />
//           <ul className="space-y-4">
//             {sectionItems.map((item) => (
//               <ListItemV2
//                 key={item.title}
//                 title={item.title}
//                 href={item.href || "#"}
//                 description={item.label}
//               />
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <ListItem key={item.title} title={item.title} href={item?.href as string}>
        {item.items ? (
          <>
            <hr className="my-3" />
            <ul className="ml-4 mt-2 space-y-2">
              {item.items.map((subItem) => (
                <li key={subItem.title} className="list-disc">
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.href || "#"}
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {subItem.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </>
        ) : (
          item.label
        )}
      </ListItem>
    ));
  };

  return (
    <nav
      className={cn(
        "bg-white px-6 font-mono text-black shadow-md lg:px-8 sm:px-6",
        pathname !== "/" &&
          "bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] shadow-none",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/">
          <div className="flex flex-shrink-0 items-center overflow-hidden">
            <Image
              src="/assets/logo-3.png"
              width={200}
              height={200}
              alt="brand logo"
              className="shadow-sm"
            />
          </div>
        </Link>

        {/* Mobile Navigation */}
        <div className="hidden 2md:flex">
          <MobileNav
            navItems={navItems}
            siteName="Teverse"
            isOpen={isMobileOpen}
            toggleOpen={() => setIsMobileOpen(!isMobileOpen)}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="2md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "font-mono",
                          isActive(item?.href as string)
                            ? "rounded-none border-b-2 border-orange-600 font-bold"
                            : "text-gray-700",
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] grid-cols-2 gap-3 p-6 lg:w-[500px] lg:grid-cols-[.75fr_1fr] md:w-[400px]">
                          {/* {renderNavContent(item.items)} */}
                          {renderNavItems(item.items)}

                          {/* {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href as string}
           
                            >
                              {subItem.label}
                            </ListItem>
                          ))} */}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono",
                        isActive(item.href || "")
                          ? "rounded-none border-b-2 border-orange-600 font-bold"
                          : "text-gray-700",
                      )}
                      asChild
                    >
                      <Link href={item.href as string}>{item.title}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">
                    <Button className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:px-10 md:py-4 md:text-lg">
                      Contact <ArrowIcon />
                    </Button>{" "}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
