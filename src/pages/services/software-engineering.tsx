import React from "react";

import { softwareEngineeringServices } from "@/data/services";

import ServicesPage from "@/components/services-page";

const SoftwareEngineering = () => {
  return <ServicesPage {...softwareEngineeringServices} />;
};

export default SoftwareEngineering;
