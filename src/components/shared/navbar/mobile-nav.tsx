"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignRight } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  items?: Omit<NavItem, "items">[];
}

interface MobileNavProps {
  navItems: NavItem[];
  logo?: React.ReactNode;
  siteName: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

export function MobileNav({
  navItems,
  logo,
  siteName,
  isOpen,
  toggleOpen,
}: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={toggleOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="px-0 text-3xl hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <AlignRight />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white pr-0 font-mono">
        <MobileLink
          href="/"
          onOpenChange={toggleOpen}
          className="flex w-fit items-center"
        >
          {logo && <div className="mr-2 h-4 w-4">{logo}</div>}
          <span className="text-2xl font-bold text-orange-650">{siteName}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pr-3">
          <Accordion type="single" className="w-full">
            {navItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger
                  className="py-2 text-base"
                  chevronClassName={!item.items ? "hidden" : ""}
                >
                  {item.href ? (
                    <MobileLink
                      href={item.href}
                      onOpenChange={toggleOpen}
                      className="flex w-full justify-between font-mono font-medium"
                    >
                      {item.title}
                    </MobileLink>
                  ) : (
                    <span className="font-mono font-medium">{item.title}</span>
                  )}
                </AccordionTrigger>
                {item.items && (
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      {item.items.map((subItem, subIndex) => (
                        <React.Fragment key={subIndex}>
                          {!subItem.disabled && (
                            <MobileLink
                              href={subItem.href || "#"}
                              onOpenChange={toggleOpen}
                              className="text-muted-foreground"
                            >
                              <p>{subItem.title}</p>
                              {subItem.label && (
                                <span className="rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                  {subItem.label}
                                </span>
                              )}
                            </MobileLink>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: () => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(); // Close menu on link click
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
