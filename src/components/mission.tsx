import Image from "next/image";
import React from "react";

interface SectionProps {
  title: string;
  subTitle: string;
  description: string;
  additionalInfo: string;
  imageSrc: string;
}

const MissionSection: React.FC<SectionProps> = ({
  title,
  subTitle,
  description,
  additionalInfo,
  imageSrc,
}) => {
  return (
    <section className="flex sm:flex-col gap-6 items-center max-w-5xl mx-auto px-6 py-12">
      {/* Left Content */}
      <div className="w-full flex justify-between">
        <div className="relative flex flex-col space-y-4 justify-center items-center">
          <Image className="text-3xl mb-4" src={title} width={200} height={120} alt=""/>
          <Image className="text-3xl mb-4" src={subTitle} width={300} height={200} alt=""/>
          <Image src={imageSrc} alt="Concentric Design" width={800} height={400} className="relative" />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full mt-8 md:mt-0 md:pl-8 text-xl">
        
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-gray-600">{additionalInfo}</p>
      </div>
    </section>
  );
};

export default MissionSection;
