// import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ContactSection from "./lets-talk";
import NewHero from "./shared/new-hero";

interface Capability {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Service {
  title: string;
  slug: string;
  description: string;
  content: string;
  features: string[];
  benefits: string[];
  capabilities: Capability[];
}

interface ServicePageProps {
  category: string;
  description: string;
  services: Service[];
}

export default function ServicesPage({
  category,
  description,
  services,
}: ServicePageProps) {
  return (
    <>
      <NewHero
        imgSrc="/assets/big-data-2.png"
        title={category}
        description={description}
        buttonText="Get Started"
        buttonLink="/contact"
      />
      <div className="mb-4 text-gray-900">
        <div className="container mx-auto max-w-7xl px-16 lg:px-10 sm:px-6">
          <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-4 text-3xl font-bold">
                Empowering Your Business
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Our cutting-edge services are designed to transform your
                operations and drive innovation.
              </p>
              <Button className="self-start bg-orange-500 text-white hover:bg-orange-600">
                Learn More
              </Button>
            </motion.div>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  id={service.slug}
                  className="overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <CardHeader className="bg-gradient-to-r from-orange-100 to-pink-100">
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xl text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="my-2 text-gray-700">{service.content}</p>
                      <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                        <div>
                          <h3 className="mb-2 text-2xl font-semibold text-orange-500">
                            Features
                          </h3>
                          <ul className="list-disc space-y-1 pl-5 text-gray-700">
                            {service.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-2 text-2xl font-semibold text-orange-500">
                            Benefits
                          </h3>
                          <ul className="list-disc space-y-1 pl-5 text-gray-700">
                            {service.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-4 text-2xl font-semibold text-orange-500">
                          Capabilities
                        </h3>
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:grid-cols-1">
                          {service.capabilities.map((capability, index) => (
                            <Card
                              key={index}
                              className="border-orange-200 bg-orange-100 transition-colors duration-300 hover:bg-orange-200"
                            >
                              <CardHeader>
                                <CardTitle className="flex items-center text-lg text-orange-700">
                                  {capability.icon && (
                                    <capability.icon className="mr-2 h-5 w-5" />
                                  )}
                                  {capability.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-700">
                                  {capability.description}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
