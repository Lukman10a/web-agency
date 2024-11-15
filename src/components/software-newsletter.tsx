import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="mx-auto mb-7 max-w-7xl rounded-lg bg-[#262626] px-4 py-10 text-center">
      <h2 className="text-3xl font-semibold text-white sm:text-xl">
        Newsletter
      </h2>
      <p className="mt-2 py-4 text-lg text-white sm:text-left sm:text-sm">
        Get the latest news on Amazon Web Services&#44; the cloud&#44; emerging
        tech&#44; and more with our weekly
        <span className="block sm:inline">
          newsletter. Every Thursday&#44; direct to your inbox.
        </span>
      </p>
    </section>
  );
};

export default NewsletterSection;
