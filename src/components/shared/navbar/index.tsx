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
        href: "/software/teverse-control",
        label:
          "AWS guidance for efficient cloud growth and foundational best practices",
      },
    ],
  },
  { title: "Solution", href: "/solution" },
  {
    title: "Company",
    href: "/about-us",
    items: [
      {
        title: "About Us",
        href: "/company/about-us",
      },
      {
        title: "Careers",
        href: "/company/careers",
      },
      {
        title: "Press & News",
        href: "/company/press",
      },
      {
        title: "FAQ",
        href: "/company/faq",
      },
    ],
  },
  { title: "Case Studies", href: "/case-studies" },
  { title: "AWS", href: "/aws" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);

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
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[600px] grid-cols-2 gap-3 p-6 lg:w-[500px] lg:grid-cols-[.75fr_1fr] md:w-[400px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href as string}
                              // icon={subItem.icon}
                            >
                              {subItem.label}
                            </ListItem>
                          ))}
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