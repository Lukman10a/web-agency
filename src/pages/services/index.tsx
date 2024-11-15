import GetInTouchSection from "@/components/shared/get-in-touch";
import ProfessionalServices from "@/components/professional-services";
import Resources from "@/components/resources";
import ServiceGrid from "@/components/serviceGrid";
import ManagedServices from "@/components/services";
import AwsServicesHero from "@/components/services-hero-section";
import SoftwareFAQ from "@/components/software-faq";
import React, { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <AwsServicesHero />
      <ManagedServices />
      <ProfessionalServices />
      <ServiceGrid />
      <SoftwareFAQ />
      <Resources />
      <GetInTouchSection />
    </Fragment>
  );
}
