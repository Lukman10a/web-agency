import React from "react";

import { idamServices } from "@/data/services";

import ServicesPage from "@/components/services-page";

const idam = () => {
  return (
    <div>
      <ServicesPage heroImage="/assets/3d-tech-1.png" {...idamServices} />
    </div>
  );
};

export default idam;
