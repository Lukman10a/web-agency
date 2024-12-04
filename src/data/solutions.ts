import { StaticImageData } from "next/image";

import { BarChart, Key, Lock, LucideIcon, Settings, User } from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon | string | StaticImageData; // Some icons are from Lucide and others are SVG paths
}

export interface Solution {
  title: string;
  slug: string;
  description: string;
  content: string;
  features: string[];
  benefits: string[];
  capabilities: Capability[];
}

export interface Category {
  category: string;
  description: string;
  solutions: Solution[];
}

export type SolutionsData = Record<string, Category>;

export const solutionsData: SolutionsData = {
  idam: {
    category: "IDAM Solutions",
    description: "Comprehensive Identity & Access Management Solutions",
    solutions: [
      {
        title: "Identity Governance and Administration (IGA)",
        slug: "iga",
        description: "Manage user identities and access privileges",
        content:
          "Our IGA solution provides comprehensive identity lifecycle management, access request and approval workflows, and detailed audit trails. It helps organizations maintain compliance and reduce security risks associated with inappropriate access.",
        features: [
          "Automated user provisioning and deprovisioning",
          "Access certification and reviews",
          "Policy and role management",
          "Identity analytics and reporting",
          "Compliance management",
        ],
        benefits: [
          "Improved security posture",
          "Reduced administrative overhead",
          "Enhanced compliance with regulations",
          "Increased visibility into user access",
        ],
        capabilities: [
          {
            title: "User Lifecycle Management",
            description:
              "Automate the creation, modification, and deletion of user accounts across all systems.",
            icon: User,
          },
          {
            title: "Access Governance",
            description:
              "Implement and enforce access policies, conduct regular access reviews, and maintain compliance.",
            icon: Key,
          },
          {
            title: "Identity Analytics",
            description:
              "Gain insights into user behavior, access patterns, and potential risks through advanced analytics.",
            icon: BarChart,
          },
        ],
      },
      {
        title: "Single Sign-On (SSO)",
        slug: "sso",
        description: "Simplify user authentication across multiple apps",
        content:
          "Our SSO solution enables users to access multiple applications with a single set of credentials. This improves user experience, increases productivity, and enhances security by reducing password fatigue and associated risks.",
        features: [
          "Centralized authentication",
          "Support for multiple protocols (SAML, OAuth, OpenID Connect)",
          "User-friendly login interface",
          "Integration with existing directory services",
          "Multi-factor authentication support",
        ],
        benefits: [
          "Improved user experience",
          "Reduced password-related helpdesk calls",
          "Enhanced security through centralized authentication",
          "Increased productivity",
        ],
        capabilities: [
          {
            title: "Centralized Authentication",
            description:
              "Provide a single point of entry for users to access all applications.",
            icon: Lock,
          },
          {
            title: "Protocol Support",
            description:
              "Support various authentication protocols to integrate with diverse applications.",
            icon: Settings,
          },
          {
            title: "User Provisioning",
            description:
              "Automate user account creation and management across applications.",
            icon: User,
          },
        ],
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        slug: "mfa",
        description: "Enhance security with multi-factor authentication",
        content:
          "Our MFA solution adds an extra layer of security to your authentication process. It combines something the user knows (password) with something they have (mobile device) or something they are (biometrics) to verify user identity.",
        features: [
          "Support for various authentication factors (SMS, email, mobile app, biometrics)",
          "Risk-based authentication",
          "Self-service enrollment and management",
          "Integration with SSO and existing applications",
          "Offline authentication options",
        ],
        benefits: [
          "Significantly reduced risk of unauthorized access",
          "Compliance with industry regulations",
          "Flexible and user-friendly authentication options",
          "Protection against password-based attacks",
        ],
        capabilities: [
          {
            title: "Multi-Factor Authentication",
            description: "Implement various MFA methods to enhance security.",
            icon: "/icons/mfa.svg",
          },
          {
            title: "Risk-Based Authentication",
            description:
              "Adapt authentication strength based on assessed risk levels.",
            icon: "/icons/risk-based-auth.svg",
          },
          {
            title: "Adaptive Authentication",
            description:
              "Adjust authentication requirements based on context and user behavior.",
            icon: "/icons/adaptive-auth.svg",
          },
        ],
      },
      {
        title: "Privileged Access Management (PAM)",
        slug: "pam",
        description: "Secure privileged accounts and credentials",
        content:
          "Our PAM solution helps organizations secure, control, and monitor access to critical assets. It provides features like password vaulting, session recording, and just-in-time access to minimize the risk of privileged account abuse.",
        features: [
          "Secure password vault",
          "Just-in-time privileged access",
          "Session monitoring and recording",
          "Privileged session management",
          "Automated password rotation",
        ],
        benefits: [
          "Reduced risk of insider threats",
          "Improved audit and compliance reporting",
          "Enhanced visibility into privileged activities",
          "Streamlined privileged access workflows",
        ],
        capabilities: [
          {
            title: "Password Vaulting",
            description:
              "Securely store and manage privileged account credentials.",
            icon: "/icons/password-vault.svg",
          },
          {
            title: "Session Management",
            description:
              "Monitor and control privileged sessions for enhanced security.",
            icon: "/icons/session-management.svg",
          },
          {
            title: "Access Control",
            description:
              "Implement granular access controls to sensitive resources.",
            icon: "/icons/access-control.svg",
          },
        ],
      },
    ],
  },
  "generative-ai": {
    category: "Generative AI",
    description: "Explore AI-driven innovations for your business",
    solutions: [
      {
        title: "Document Reader",
        slug: "document-reader",
        description: "AI-powered document analysis and extraction",
        content:
          "Our Document Reader uses advanced AI algorithms to analyze and extract key information from various document types. It can process invoices, contracts, and forms, saving time and reducing errors in data entry and document processing.",
        features: [
          "Optical Character Recognition (OCR)",
          "Natural Language Processing (NLP)",
          "Template-free document understanding",
          "Integration with existing document management systems",
          "Support for multiple languages and document formats",
        ],
        benefits: [
          "Increased efficiency in document processing",
          "Reduced manual data entry errors",
          "Faster turnaround times for document-heavy processes",
          "Improved data accuracy and consistency",
        ],
        capabilities: [
          {
            title: "Data Extraction",
            description:
              "Extract key information from various document types with high accuracy.",
            icon: "/icons/data-extraction.svg",
          },
          {
            title: "Document Classification",
            description:
              "Automatically classify documents based on content and metadata.",
            icon: "/icons/document-classification.svg",
          },
          {
            title: "Data Validation",
            description:
              "Validate extracted data against predefined rules and standards.",
            icon: "/icons/data-validation.svg",
          },
        ],
      },
      {
        title: "Safety Alerts",
        slug: "safety-alerts",
        description: "AI-based safety monitoring and alert system",
        content:
          "Our Safety Alerts system uses AI to monitor real-time data from various sources and predict potential safety hazards. It can be applied in industries like manufacturing, construction, and healthcare to prevent accidents and improve overall safety.",
        features: [
          "Real-time data analysis from IoT sensors",
          "Machine learning-based anomaly detection",
          "Predictive maintenance alerts",
          "Integration with existing safety systems",
          "Mobile alerts and notifications",
        ],
        benefits: [
          "Reduced workplace accidents and injuries",
          "Proactive identification of potential hazards",
          "Improved compliance with safety regulations",
          "Cost savings through preventive maintenance",
        ],
        capabilities: [
          {
            title: "Anomaly Detection",
            description:
              "Identify unusual patterns and potential safety hazards in real-time.",
            icon: "/icons/anomaly-detection.svg",
          },
          {
            title: "Predictive Maintenance",
            description:
              "Predict potential equipment failures and schedule maintenance proactively.",
            icon: "/icons/predictive-maintenance.svg",
          },
          {
            title: "Real-time Monitoring",
            description:
              "Monitor critical safety parameters and generate alerts when thresholds are exceeded.",
            icon: "/icons/real-time-monitoring.svg",
          },
        ],
      },
      {
        title: "Foundation Models",
        slug: "foundation-models",
        description: "Leverage large-scale AI models for advanced tasks",
        content:
          "Our Foundation Models provide access to state-of-the-art AI capabilities. These models can be fine-tuned for specific tasks such as natural language processing, image recognition, and predictive analytics, enabling businesses to build advanced AI-powered applications quickly.",
        features: [
          "Pre-trained large language models",
          "Computer vision capabilities",
          "Transfer learning for quick adaptation",
          "API access for easy integration",
          "Continuous model updates and improvements",
        ],
        benefits: [
          "Rapid development of AI-powered applications",
          "Access to cutting-edge AI capabilities",
          "Reduced time and cost for AI model development",
          "Improved accuracy and performance in various AI tasks",
        ],
        capabilities: [
          {
            title: "Natural Language Processing",
            description:
              "Utilize pre-trained models for tasks such as text classification, summarization, and translation.",
            icon: "/icons/nlp.svg",
          },
          {
            title: "Computer Vision",
            description:
              "Leverage models for image recognition, object detection, and image generation.",
            icon: "/icons/computer-vision.svg",
          },
          {
            title: "Predictive Analytics",
            description:
              "Build predictive models for various business applications using pre-trained models.",
            icon: "/icons/predictive-analytics.svg",
          },
        ],
      },
    ],
  },
};
