// Navbar.tsx
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import ArrowIcon from "../icons/arrow";
import { MobileNav } from "./mobile-nav"; // Import MobileNav
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Solution", href: "/solution" },
  { title: "About Us", href: "/about-us" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "AWS", href: "/aws" },
  { title: "FAQ", href: "/faq" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <nav
      className={cn(
        "bg-white shadow-md px-6 text-black font-mono sm:px-6 lg:px-8",
        pathname !== "/" &&
          "bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] shadow-none"
      )}
    >
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        <Link href="/">
          <div className="flex-shrink-0 flex items-center overflow-hidden">
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
        <div className="2md:flex hidden">
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
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title} className="row-span-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href as string}
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                >
                                  <div className="mb-2 text-lg font-medium">
                                    {subItem.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
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
                          ? "border-orange-600 font-bold border-b-2 rounded-none"
                          : "text-gray-700"
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
                  className={navigationMenuTriggerStyle()}
                  href="/contact"
                >
                  <Button className="w-fit border border-black flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10">
                    Contact <ArrowIcon />
                  </Button>
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
