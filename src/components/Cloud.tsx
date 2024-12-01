import React from "react";

import { teamMembers } from "@/data/shared";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:mt-10">
        One cloud family
      </h2>
      <p className="mb-10 text-gray-600">Get to know our team of experts.</p>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image as background */}
              <div
                className="h-48 w-48 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Text Content */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {member.title}
                </h3>
                <p className="text-gray-500">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
