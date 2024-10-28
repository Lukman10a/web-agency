import React from "react";
import securityImg from "/public/assets/3d-tech-1.png";
import database from "/public/assets/database.png";
import bigData from "/public/assets/big-data.png";
import Expandable from "../ui/animated/expandable-carousel";
// import Image from "next/image";

// const content = [
//   {
//     title: "Migrate my existing solution to the cloud",
//     description:
//       "As an experienced cloud partner, we prepare the target infrastructure, make the cloud adoption process smooth, less risky and help you make your services cloud-ready before you hop on.",
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src={database}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Optimize my current cloud infrastructure",
//     description:
//       "Many cloud users face technical or economical challenges. We help you reduce excessive costs, unexpected downtimes, scaling problems or bumpy process when releasing new features.",
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src={bigData}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Kickstart my new cloud project",
//     description:
//       "In early stages you work with limited resources to make the MVP fly. Focus on your core business and our experienced crew will manage the cloud super-efficiently, as it plays a big part in your success.",
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src={securityImg}
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
// ];

const items = [
  {
    image: securityImg,
    title: "Migrate my existing solution to the cloud",
    description:
      "As an experienced cloud partner, we prepare the target infrastructure, make the cloud adoption process smooth, less risky and help you make your services cloud-ready before you hop on.",
  },
  {
    image: database,
    title: "Optimize my current cloud infrastructure",
    description:
      "Many cloud users face technical or economical challenges. We help you reduce excessive costs, unexpected downtimes, scaling problems or bumpy process when releasing new features.",
  },
  {
    image: bigData,
    title: "Kickstart my new cloud project",
    description:
      "In early stages you work with limited resources to make the MVP fly. Focus on your core business and our experienced crew will manage the cloud super-efficiently, as it plays a big part in your success.",
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-11/12 mx-auto my-3">
      {/* <StickyScroll content={content} /> */}
      <Expandable list={items} />
    </div>
  );
}
