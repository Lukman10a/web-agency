"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { useHash } from "@/hooks/use-hash";
import { cn, Heading, scrollToSection } from "@/lib/utils";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const hash = useHash();
  const [currentSection, setCurrentSection] = useState<string | null>(
    headings[0].id as string,
  ); // State to manage current section

  const handleSelectSection = (value: string) => {
    setCurrentSection(value);
    console.log(value);
  };
  useEffect(() => {
    const section = hash.replace("#", ""); // Extract current section ID

    if (section) {
      scrollToSection(section); // Scroll to the section
    }
  }, [hash]);

  return (
    <nav
      className="sticky top-5 my-20 w-64 space-y-4 font-mono"
      aria-label="Table of contents"
    >
      <h2 className="font-bold">Table of Contents</h2>
      {headings
        .filter((item) => [2, 3].includes(item.level as number))
        .map((item, index) => {
          const isActive = item.id === currentSection;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`} // Link to section using hash
              className={cn(
                "group flex items-start gap-4 text-sm text-muted-foreground no-underline transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )}
              onClick={() => handleSelectSection(item.id as string)}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full",
                    isActive && "bg-[#ff7b72] text-white",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <span className="mt-0.5 whitespace-pre-line leading-tight">
                {item.title}
              </span>
            </Link>
          );
        })}
    </nav>
  );
}
