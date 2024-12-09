import { Heart, Laptop, Target, Users } from "lucide-react";

export const careersPageData = {
  jobListings: [
    {
      title: "Senior Cloud Solutions Architect",
      location: "Remote, US",
      type: "Full-time",
      department: "Engineering",
    },
    {
      title: "AWS Cloud Engineer",
      location: "Remote, US",
      type: "Full-time",
      department: "Engineering",
    },
    {
      title: "Technical Account Manager",
      location: "Remote, US",
      type: "Full-time",
      department: "Customer Success",
    },
    {
      title: "Cloud Financial Analyst",
      location: "Remote, US",
      type: "Full-time",
      department: "Finance",
    },
    {
      title: "Senior Product Manager",
      location: "Remote, US",
      type: "Full-time",
      department: "Product",
    },
    {
      title: "Cloud Security Engineer",
      location: "Remote, US",
      type: "Full-time",
      department: "Security",
    },
  ],

  whyJoinBenefits: [
    {
      title: "Competitive Benefits",
      description:
        "Comprehensive health, dental, and vision coverage, plus 401(k) matching",
    },
    {
      title: "Remote-First Culture",
      description:
        "Work from anywhere in the US with flexible hours and work-life balance",
    },
    {
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear paths for advancement",
    },
    {
      title: "Latest Technology",
      description: "Work with cutting-edge cloud technologies and AWS services",
    },
    {
      title: "Inclusive Environment",
      description: "A diverse and welcoming workplace where everyone belongs",
    },
    {
      title: "Impact",
      description:
        "Make a real difference in how companies leverage cloud technology",
    },
  ],

  teamCultureItems: [
    {
      icon: Users,
      title: "Collaborative Environment",
      description:
        "Work alongside talented professionals who share your passion for cloud technology",
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description:
        "Enjoy the flexibility of working from anywhere while staying connected with your team",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "We believe in maintaining a healthy balance between work and personal life",
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description:
        "Continuous learning and development opportunities to advance your career",
    },
  ],

  applicationProcess: [
    {
      step: "1",
      title: "Application Review",
      description:
        "Submit your application and our team will review your qualifications",
    },
    {
      step: "2",
      title: "Initial Interview",
      description:
        "Connect with our recruiting team to discuss your experience and aspirations",
    },
    {
      step: "3",
      title: "Technical Assessment",
      description:
        "Demonstrate your skills through relevant technical exercises",
    },
    {
      step: "4",
      title: "Final Interview",
      description: "Meet with the team and discuss next steps",
    },
  ],

  comprehensiveBenefits: [
    {
      title: "Health & Wellness",
      items: [
        "Medical, dental, and vision coverage",
        "Mental health support",
        "Fitness reimbursement",
        "Health savings account",
      ],
    },
    {
      title: "Financial Benefits",
      items: [
        "Competitive salary",
        "401(k) with company match",
        "Stock options",
        "Annual bonus program",
      ],
    },
    {
      title: "Time Off",
      items: [
        "Unlimited PTO",
        "Paid holidays",
        "Paid parental leave",
        "Volunteer time off",
      ],
    },
    {
      title: "Professional Development",
      items: [
        "Learning stipend",
        "Conference attendance",
        "Certification support",
        "Mentorship program",
      ],
    },
    {
      title: "Lifestyle",
      items: [
        "Remote work setup",
        "Internet stipend",
        "Company events",
        "Employee discounts",
      ],
    },
    {
      title: "Additional Perks",
      items: [
        "Home office allowance",
        "Birthday off",
        "Employee referral bonus",
        "Team building events",
      ],
    },
  ],
};

// Dummy press release data
export const pressReleases = [
  {
    id: 1,
    title: "Teverse and CrowdStrike Launch Teverse Cloud Secure",
    description: "Advanced Cloud Detection and Response for AWS Customers",
    date: new Date(2024, 0, 15), // January 15, 2024
    type: "Product Launch",
  },
  {
    id: 2,
    title: "Teverse Welcomes Glenn Grant as SVP",
    description:
      "Strengthening Customer Success in AWS Cloud and AI Initiatives",
    date: new Date(2024, 1, 20), // February 20, 2024
    type: "Leadership",
  },
  {
    id: 3,
    title: "Teverse Expands Cloud Services to APAC Region",
    description:
      "Strategic Expansion Brings Innovative Cloud Solutions to Asia-Pacific Market",
    date: new Date(2023, 11, 5), // December 5, 2023
    type: "Expansion",
  },
  {
    id: 4,
    title: "Teverse Achieves AWS Advanced Tier Partner Status",
    description:
      "Recognized for Exceptional Cloud Expertise and Customer Success",
    date: new Date(2023, 6, 12), // July 12, 2023
    type: "Partnership",
  },
  {
    id: 5,
    title: "Teverse Launches AI-Powered Cloud Optimization Tool",
    description:
      "Revolutionary Platform Helps Businesses Maximize Cloud Efficiency",
    date: new Date(2024, 2, 8), // March 8, 2024
    type: "Product Launch",
  },
  {
    id: 6,
    title: "Teverse Reports Record Growth in Cloud Migrations",
    description:
      "Company Sees 40% Increase in Enterprise Cloud Transformation Projects",
    date: new Date(2023, 9, 25), // October 25, 2023
    type: "Financial",
  },
];
