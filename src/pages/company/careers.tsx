import Image from "next/image";

import { careersPageData } from "@/data/company";
import { Briefcase, Building2, CheckCircle2, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CareersPage() {
  const {
    jobListings,
    whyJoinBenefits,
    teamCultureItems,
    applicationProcess,
    comprehensiveBenefits,
  } = careersPageData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            alt="Team members collaborating"
            className="h-full w-full object-cover"
            src="/assets/improvedsecurity.png"
            fill
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-32">
          <div className="max-w-2xl text-white">
            <h1 className="font-sora text-4xl font-bold tracking-tight xl:text-6xl sm:text-5xl">
              Build Your Career at Teverse
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              We&apos;re looking for innovators who are passionate about AWS and
              ready to serve and support our customers in their cloud journey.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="default"
                className="rounded-full bg-orange-650 hover:bg-gray-100 hover:text-black"
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Open Positions</h2>
          <p className="mt-2 text-gray-600">
            Join our team and help shape the future of cloud technology
          </p>
        </div>

        <section className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {jobListings.map((job, i) => (
            <Card key={i} className="p-6">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="mr-2 h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center text-gray-600">
                  <Building2 className="mr-2 h-4 w-4" />
                  {job.department}
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </section>

        {/* Benefits Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold">Why Join Teverse?</h2>
          <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {whyJoinBenefits.map((benefit, i) => (
              <div key={i} className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* New Team Culture Section */}
      <section className="bg-main-gradient py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">Our Team Culture</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Join a team that values collaboration, innovation, and personal
            growth. We&lsquo;re building something special together.
          </p>
          <div className="mt-12 grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {teamCultureItems.map((item, i) => (
              <Card key={i} className="p-6">
                <item.icon className="h-12 w-12 text-orange-650" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Application Process Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Application Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Our hiring process is designed to be transparent and efficient.
            Here&lsquo;s what you can expect:
          </p>
          <div className="mt-16">
            <div className="grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
              {applicationProcess.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-650 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  {/* {i < 3 && (
                    <div className="absolute left-1/2 top-8 block w-full -translate-x-1/2 border-t-2 border-dashed border-gray-300 md:hidden" />
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="bg-main-gradient py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Comprehensive Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We offer a competitive benefits package designed to support your
            health, wealth, and well-being
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {comprehensiveBenefits.map((benefit, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <ul className="mt-4 space-y-2">
                  {benefit.items.map((item, j) => (
                    <li key={j} className="flex items-center text-gray-600">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl bg-orange-650 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Join Our Team?</h2>
            <p className="mx-auto mt-4 max-w-2xl">
              Take the next step in your career and become part of a team
              that&lsquo;s shaping the future of cloud technology
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 bg-white text-primary hover:bg-gray-100"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
