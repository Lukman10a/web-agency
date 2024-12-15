import React from "react";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

// Assuming you're using Lucide icons

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "orange" | "outline";
  size?: "default" | "lg" | "sm";
  icon?: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  className,
  variant = "orange",
  size = "default",
  icon = <ArrowRightIcon />,
}) => {
  const baseClasses =
    "flex w-fit items-center justify-center rounded-full uppercase font-medium";

  const variantClasses = {
    orange: "border border-black bg-orange-600 text-white hover:bg-orange-700",
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
  };

  const sizeClasses = {
    default: "px-8 md:py-3 text-base md:px-10 py-4 md:text-lg",
    sm: "px-6 py-3 text-sm  md:text-base",
    lg: "px-10 py-4 text-lg md:px-12 md:py-5 md:text-xl",
  };

  return (
    <Button
      asChild
      className={` ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} md:w-full ${className || ""} `}
    >
      <Link href={href}>
        {children}{" "}
        {icon &&
          React.cloneElement(icon as React.ReactElement, { className: "ml-2" })}
      </Link>
    </Button>
  );
};

export default CTAButton;
