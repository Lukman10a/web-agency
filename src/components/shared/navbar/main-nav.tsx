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

import logo_img from "../../../../public/assets/logo-main-sm.png";
// import ArrowIcon from "../../icons/arrow";
import { navItems } from "./data";

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
    <nav className="relative z-50 font-mono" id="scrollable">
      <nav className="supports-[backdrop-filter]:bg-main-gradient/60 fixed top-0 w-full border-b bg-main-gradient px-7 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between overflow-y-hidden">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo_img}
                // width={160}
                // height={160}
                priority
                alt="brand logo"
                className="size-40 object-contain"
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
            {/* <Link href="/contact" className="md:hidden">
              <Button className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:px-10 md:py-4 md:text-lg">
                Contact <ArrowIcon />
              </Button>{" "}
            </Link> */}
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
                          <h4 className="group w-fit cursor-pointer items-center justify-between border-b-2 border-transparent text-lg font-semibold transition-all duration-300 ease-in hover:border-gray-700">
                            {section.href ? (
                              <Link href={section.href} className="h-full">
                                {section.category}
                              </Link>
                            ) : (
                              <span>{section.category}</span>
                            )}
                          </h4>

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
