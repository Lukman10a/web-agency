import HelpSection from "@/components/need-help";
import NewsletterSection from "@/components/software-newsletter";
import SolutionsSection from "@/components/solution-section";
import React from "react";

export default function Software() {
  return (
    <main>
      <SolutionsSection />
      <HelpSection />
      <NewsletterSection />
    </main>
  );
}
