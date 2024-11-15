import { forwardRef } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  icon?: React.ReactNode; // Add the icon prop here
}

export const ListItem = forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon, href }, ref) => {
    const Icon = icon;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const inRef = ref;
    return (
      <li>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
          >
            <div className="flex items-center space-x-2">
              {Icon && Icon}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-[#1C64F2]">
              {children}
            </p>
          </NavigationMenuLink>
        </Link>
      </li>
    );
  },
);

ListItem.displayName = "ListItem";

interface ListItemV2Props {
  className?: string;
  title: string;
  href: string;
  description?: string;
  isSection?: boolean;
  children?: React.ReactNode;
}

export function ListItemV2({
  className,
  title,
  href,
  description,
  isSection = false,
  children,
}: ListItemV2Props) {
  return (
    <li className={cn(isSection && "mb-6 last:mb-0")}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors",
            className,
          )}
        >
          {isSection ? (
            <>
              <div className="mb-4 text-xl font-medium">{title}</div>
              <div className="mb-6 h-px w-8 bg-gray-900" />
            </>
          ) : (
            <>
              <div className="mb-2 text-base font-medium leading-none">
                {title}
              </div>
              {description && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {description}
                </p>
              )}
            </>
          )}
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
