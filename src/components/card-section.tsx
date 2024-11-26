import React from "react";

import Card from "./shared/card";

const detailsData = [
  {
    title: "John Goldman",
    subtitle: "CTO, Paybill",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
    buttonText: "Read More",
    linkHref: "#",
  },
  {
    title: "James Coleman",
    subtitle: "CEO, FinCorp",
    description:
      "Our analysts help you stay ahead of the curve with timely insights and recommendations for optimizing cloud costs and improving infrastructure efficiency.",
    buttonText: "Learn More",
    linkHref: "#",
  },
];

const CardSection = () => {
  return (
    <div className="mx-auto mb-32 flex w-[90%] max-w-[1150px] justify-center gap-6 2md:items-center md:mb-16 md:flex-col">
      {detailsData.map((detail, index) => (
        <Card
          key={index}
          title={detail.title}
          subtitle={detail.subtitle}
          description={detail.description}
          buttonText={detail.buttonText}
          linkHref={detail.linkHref}
        />
      ))}
    </div>
  );
};

export default CardSection;
