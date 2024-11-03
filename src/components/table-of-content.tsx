"use client";

import { cn, Heading } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Component({ headings }: { headings: Heading[] }) {
  const pathname = usePathname();
  const currentSection = pathname?.split("#")[1]; // Default active section

  return (
    <nav
      className="sticky my-20 w-64 space-y-4 font-mono"
      aria-label="Table of contents"
    >
      <h2 className="font-bold">Table of Contents</h2>
      {headings.map((item, index) => {
        const isActive = item.id === currentSection;
        return (
          <Link
            key={item.id}
            href={`#${item.id}`} // Updated href to include a hash for anchor links
            className={cn(
              "group flex items-start gap-4 text-sm text-muted-foreground no-underline transition-colors hover:text-foreground",
              isActive && "text-foreground",
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full",
                  isActive && "bg-[#ff7b72] text-white",
                )}
              >
                {index + 1}
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
