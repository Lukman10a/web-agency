import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#262626] text-center py-10 mb-7 px-4 rounded-lg mx-auto max-w-7xl">
      <h2 className="text-white sm:text-xl text-3xl font-semibold">Newsletter</h2>
      <p className="text-white sm:text-sm text-lg mt-2 py-4 sm:text-left">
        Get the latest news on Amazon Web Services, the cloud, emerging tech, and more with our weekly
        <span className="block sm:inline">newsletter. Every Thursday, direct to your inbox.</span>
      </p>
    </section>
  );
};

export default NewsletterSection;
