import { useEffect, useState } from "react";

import { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import { ExpandableList } from "@/components/shared/solutions-list";

interface ExpandableProps {
  list?: {
    image: string | StaticImageData;
    title: string;
    description: string;
  }[];
  autoPlay?: boolean;
  className?: string;
}

export default function Expandable({
  list = [],
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div
      className={cn(
        "flex h-96 w-full flex-row gap-1 overflow-x-auto md:flex-col sm:h-auto sm:overflow-x-visible",
        className,
      )}
    >
      {list.map((item, index) => (
        <ExpandableList
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
