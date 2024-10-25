// SplitText.tsx
import { useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Make sure you have a `cn` utility for conditional classnames

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "ANIMATE",
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const timer = useRef<NodeJS.Timeout>();

  const letterClassName =
    "inline-block h-1/2 select-none overflow-hidden leading-none transition-transform duration-300 ease-out";

  return (
    <div
      className={cn(
        "relative mx-auto cursor-pointer text-4xl font-black uppercase text-yellow-500 md:text-5xl lg:text-9xl",
        className
      )}
    >
      {/* Invisible text for size maintenance */}
      <div className="invisible leading-none">{text}</div>
      <div className="absolute top-0 flex h-full">
        {text.split("").map((letter, index) => (
          <div
            onMouseEnter={() => {
              if (timer.current) {
                clearTimeout(timer.current);
              }
              setActiveIndex(index);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => {
                setActiveIndex(undefined);
              }, 300);
            }}
            key={index}
            className="relative inline-flex h-full flex-col"
          >
            {/* Top half */}
            <span
              className={cn(letterClassName, {
                "-translate-y-5": index === activeIndex,
                "-translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "-translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              {letter}
            </span>

            {/* Bottom half */}
            <span
              className={cn(letterClassName, {
                "translate-y-5": index === activeIndex,
                "translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitText;
