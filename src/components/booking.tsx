// import React from "react";
// import image from "../../public/assets/cardimage1.png";
// import Image from "next/image";
// import ArrowIcon from "./icons/arrow";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import sysops from "../../public/assets/sysops.png";
// import security from "../../public/assets/security.png";
// import archi from "../../public/assets/archi.png";
// import cloud from "../../public/assets/cloud.png";
// import devops from "../../public/assets/devops.png";
// import data from "../../public/assets/data.png";
// import star from "../../public/assets/starfour.png";
// import orangestar from "../../public/assets/orangestar.png";
// import CloudJourney from "./cloud-journey";

// const Booking = () => {
//   return (
//     <section>
//       {/* Start of let's talk card */}
//       <div className="px-[2em] py-[3em] sm:py-[1em] ">
//         <div className="relative flex sm:flex-col gap-14 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em]">
//           <div className=" w-1/2 sm:w-full  mb-0">
//             <Image
//               src={image}
//               alt="Card image"
//               className=" mr-4 w-full"
//               width={500}
//               height={500}
//             />
//           </div>
//           <div className="w-1/2 sm:w-full self-center sm:self-auto">
//             <span>
//               <Image
//                 width={500}
//                 height={500}
//                 src={star}
//                 alt="star"
//                 className="w-12 h-12 xl:invisible absolute bottom-20 right-[15rem] "
//               />
//             </span>

//             <span>
//               <Image
//                 width={500}
//                 height={500}
//                 src={orangestar}
//                 alt="star"
//                 className="w-12 h-12 xl:invisible absolute bottom-24 right-[17rem]  "
//               />
//             </span>
//             <h3 className="font-sora font-[600] text-[3rem] 2md:text-[2rem] mb-[.3em] h-10 flex gap-[.3em] justify-start items-center w-full">
//               Let’s talk!
//             </h3>

//             <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1.5em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
//               Quick intro to what we’re all about, answering questions and
//               drafting a roadmap of your cloud journey. All within 30 minutes.
//             </p>
//             <Button
//               asChild
//               className="w-fit py-[1.6em] border border-black uppercase flex items-center justify-center   text-[.75rem] 2md:text-[.7rem] font-light rounded-full text-white bg-orange-600 hover:bg-orange-700"
//             >
//               <Link href="#">
//                 BOOK A FREE CALL <ArrowIcon />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//       {/* end of let's talk card */}

//       {/* start of stats */}
//       <div className="border-y sm:border-x border-[#8080809c] w-[1100px] max-w-[90%] mx-auto  px-[2em] py-[1.2em] flex justify-around items-center gap-3 sm:gap-5 mb-16">
//         {/* Stat Item 1 */}
//         <div className="text-center flex items-center space-x-2">
//           <p className="text-3xl font-sora font-semibold">100+</p>
//           <div className="border-l border-gray-300 h-6"></div>
//           <p className="text-gray-500 font-sans">Clusters</p>
//         </div>

//         {/* Stat Item 2 */}
//         <div className="text-center  flex items-center space-x-2">
//           <p className="text-3xl font-sora font-semibold">1000+</p>
//           <div className="border-l border-gray-300 h-6"></div>
//           <p className="text-gray-500 font-sans">Nodes</p>
//         </div>

//         {/* Stat Item 3 */}
//         <div className="text-center  flex items-center space-x-2">
//           <p className="text-3xl font-sora font-semibold">50+</p>
//           <div className="border-l border-gray-300 h-6"></div>
//           <p className="text-gray-500 font-sans">AWS Projects</p>
//         </div>
//       </div>
//       {/* end of stats */}

//       {/* start of certification */}
//       <div className="bg-orange-650 py-16 relative">
//         {/* Title */}
//         {/*start design stars */}
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-12 left-[15rem] "
//           />
//         </span>

//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-24 left-[15rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-36 left-[15rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-12 left-[18rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-24 left-[18rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-12 left-[21rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-12 right-72"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-20 right-[15rem]"
//           />
//         </span>
//         <span>
//           <Image
//             width={500}
//             height={500}
//             src={star}
//             alt="star"
//             className="w-9 h-9 xl:invisible absolute top-20 right-[21rem]"
//           />
//         </span>
//         {/*end design stars */}
//         <div className="text-center mb-8 ">
//           <h2 className="text-4xl md:text-3xl font-sora font-bold text-gray-900">
//             We are certified professionals
//           </h2>

//           <p className="font-sans text-lg md:text-sm mt-4 w-[90%] mx-auto">
//             Your security is our priority. We hold top industry certifications
//             including
//             <br /> ISO, AWS, CISSP, and more.
//           </p>
//         </div>

//         {/* Certifications Badges */}
//         <div className="flex 2md:flex-col justify-center items-center gap-12 md:gap-8 lg:space-y-0 px-5 max-w-[1200px] mx-auto">
//           {/* First Row of Badges */}
//           <div className="flex gap-5">
//             <Image
//               width={500}
//               height={500}
//               src={sysops}
//               alt="AWS SysOps Administrator Badge"
//               className="w-32 md:w-24 md:h-24"
//             />
//             <Image
//               width={500}
//               height={500}
//               src={security}
//               alt="AWS Security Badge"
//               className="w-32 md:w-24 md:h-24"
//             />
//             <Image
//               width={500}
//               height={500}
//               src={archi}
//               alt="AWS Solutions Architect Badge"
//               className="w-32 md:w-24 md:h-24"
//             />
//           </div>

//           {/* Second Row of Badges */}
//           <div className="flex gap-5">
//             <Image
//               width={500}
//               height={500}
//               src={cloud}
//               alt="AWS Cloud Practitioner Badge"
//               className="w-32 md:w-24 md:h-24"
//             />
//             <Image
//               width={500}
//               height={500}
//               src={devops}
//               alt="AWS DevOps Engineer Badge"
//               className="w-32 h-32 md:w-24 md:h-24"
//             />
//             <Image
//               width={500}
//               height={500}
//               src={data}
//               alt="AWS Data Analytics Badge"
//               className="w-32 md:w-24 md:h-24"
//             />
//           </div>
//         </div>
//       </div>
//       {/* end of certification */}

//       <CloudJourney />

//       {/* start of LARA card */}
//       <div className="relative flex sm:flex-col gap-14 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[3em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em] bg-gradient-to-r from-[#0813481A] to-[#FF95571A] ">
//         <div className=" w-1/2 sm:w-full  mb-0">
//           <Image
//             src={image}
//             alt="Card image"
//             className=" mr-4 w-full sm:mb-2"
//             width={500}
//             height={500}
//           />
//         </div>

//         <div className="w-1/2 sm:w-full self-center sm:self-auto relative ">
//           <h3 className="font-sora font-[600] text-[2.5rem] 2md:text-[1.7rem] mb-[1em] md:mb-[.4em] h-10 flex gap-[.3em] justify-start items-center w-full leading-tight">
//             What the “hack” is LARA?!
//           </h3>

//           <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
//             LARA is designed to help companies build an infrastructure for
//             hosting their services quickly & reliably, according to AWS best
//             practices and based on open source.
//           </p>

//           <p className="uppercase text-[1.2rem] font-semibold font-sora 2md:text-[.8rem]">
//             Our Unique Cloud Native Platform
//           </p>
//         </div>
//       </div>
//       {/* end of LARA card */}
//     </section>
//   );
// };

// export default Booking;


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import CloudJourney from "./cloud-journey";
import image from "../../public/assets/cardimage1.png";
import sysops from "../../public/assets/sysops.png";
import security from "../../public/assets/security.png";
import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import devops from "../../public/assets/devops.png";
import data from "../../public/assets/data.png";
import ArrowIcon from "./icons/arrow";

const stats = [
  { count: "100+", label: "Clusters" },
  { count: "1000+", label: "Nodes" },
  { count: "50+", label: "AWS Projects" },
];

const badges = [
  { src: sysops, alt: "AWS SysOps Administrator Badge" },
  { src: security, alt: "AWS Security Badge" },
  { src: archi, alt: "AWS Solutions Architect Badge" },
  { src: cloud, alt: "AWS Cloud Practitioner Badge" },
  { src: devops, alt: "AWS DevOps Engineer Badge" },
  { src: data, alt: "AWS Data Analytics Badge" },
];

const Booking: React.FC = () => (
  <section>
    {/* Let's Talk Card */}
    <div className="container mx-auto p-6">
      <div className="card mx-auto max-w-5xl flex sm:flex-col gap-6 p-6 bg-[#fcfcfc] rounded-2xl">
        <Image src={image} alt="Card image" width={500} height={500} className="w-1/2 sm:w-full" />
        <div className="w-1/2 sm:w-full">
          <h3 className="text-3xl font-bold mb-4">Let’s talk!</h3>
          <p className="mb-6">Quick intro to our services and roadmap for your cloud journey in 30 minutes.</p>
          <Button asChild>
            <Link href="#" className="bg-orange-600 text-white rounded-full px-4 py-3 flex items-center">
              BOOK A FREE CALL <ArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="container mx-auto flex justify-between gap-3 p-6 border-t border-b mb-16 max-w-4xl">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold">{stat.count}</p>
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Certification Section */}
    <div className="bg-orange-650 py-16 text-center text-gray-900">
      <h2 className="text-4xl font-bold mb-4">We are certified professionals</h2>
      <p className="mb-8">Your security is our priority. We hold top certifications like ISO, AWS, CISSP, and more.</p>
      <div className="flex flex-wrap justify-center gap-5">
        {badges.map((badge, index) => (
          <Image key={index} src={badge.src} alt={badge.alt} width={100} height={100} className="w-32" />
        ))}
      </div>
    </div>

    {/* Cloud Journey */}
    <CloudJourney />

    {/* LARA Card */}
    <div className="container mx-auto p-6 bg-gradient-to-r from-[#0813481A] to-[#FF95571A] rounded-2xl flex sm:flex-col gap-6">
      <Image src={image} alt="Card image" width={500} height={500} className="w-1/2 sm:w-full" />
      <div className="w-1/2 sm:w-full">
        <h3 className="text-2.5xl font-bold mb-4">What the “hack” is LARA?!</h3>
        <p className="mb-4">LARA helps companies build secure, reliable infrastructures according to AWS best practices.</p>
        <p className="text-lg font-semibold">Our Unique Cloud Native Platform</p>
      </div>
    </div>
  </section>
);

export default Booking;
