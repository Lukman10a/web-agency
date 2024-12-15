import React, { Fragment } from "react";

import ProfessionalServices from "@/components/professional-services";
import ServiceGrid from "@/components/service-grid";
import ManagedServices from "@/components/services";
import AwsServicesHero from "@/components/services-hero-section";
import GetInTouchSection from "@/components/shared/get-in-touch";
import SoftwareFAQ from "@/components/software-faq";

export default function Page() {
  return (
    <Fragment>
      <AwsServicesHero />
      <ManagedServices />
      <ProfessionalServices />
      <ServiceGrid />
      <SoftwareFAQ />

      <GetInTouchSection />
    </Fragment>
  );
}
