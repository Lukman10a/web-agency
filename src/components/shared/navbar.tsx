// Navbar.tsx
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "./button";
import ArrowIcon from "../icons/arrow";
import { MobileNav } from "./mobile-nav"; // Import MobileNav

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Services",
    items: [
      { title: "Cloud Consulting", href: "#cloud-consulting" },
      { title: "Security Consulting", href: "#security-consulting" },
      { title: "Managed Consulting", href: "#managed-consulting" },
    ],
  },
  { title: "About Us", href: "#about-us" },
  { title: "Case Studies", href: "#case-studies" },
  { title: "FAQ", href: "#faq" },
  { title: "Blog", href: "#blog" },
  {
    title: "Contact",
    href: "#contact",
    disabled: false, // You can set this based on conditions
    label: "Get in touch",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 text-black font-mono  sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-orange-600">Teverse</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:flex hidden">
          <MobileNav navItems={navItems} siteName="Teverse" />
        </div>

        {/* Desktop Navigation */}
        <div className="md:hidden">
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
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href={subItem.href}
                                >
                                  <div className="mb-2 text-lg font-medium">
                                    {subItem.title}
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={item.href}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#contact"
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
