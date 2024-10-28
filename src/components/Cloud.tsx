import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
  { id: 2, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
  { id: 3, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
  { id: 4, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
  { id: 5, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
  { id: 6, name: "Lorem Ipsum Dolor", title: "CEO & CO-FOUNDER", image: "/assets/member-image.png" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">One cloud family</h2>
      <p className="text-gray-600 mb-10">Get to know our team of experts.</p>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-100 p-8 rounded-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.title}</h3>
              <p className="text-gray-500">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
