import React from "react";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

interface SecurityCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function SecurityCard({
  title,
  description,
  href,
  icon,
}: SecurityCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-lg bg-blue-50 p-3 text-blue-600">{icon}</div>
        <ArrowRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
