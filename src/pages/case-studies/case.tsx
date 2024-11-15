import { Calendar, CheckCircle, Tag, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CaseStudy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Fintech DevOps Automation</h1>
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>2024-11-02</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            <span>Fintech Solutions Ltd.</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["DevOps", "Fintech", "Kubernetes", "CI/CD"].map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Fintech Solutions Ltd., a rapidly growing fintech startup,
              required a modernized DevOps approach to handle increasing
              customer demand and operational complexity. The company aimed to
              optimize deployment speed, improve system reliability, and
              establish a scalable, automated infrastructure. Our team
              implemented tailored DevOps practices, including continuous
              integration and continuous deployment (CI/CD) pipelines,
              Kubernetes orchestration, and automated testing, which led to
              significant operational improvements.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Background</h2>
        <p className="mb-4">
          Fintech Solutions Ltd. faced challenges in maintaining agility as its
          customer base grew. Their development and operations teams struggled
          with slow deployment cycles, manual processes, and limited visibility
          into system health. Given the high stakes in the fintech industry,
          where reliability, security, and performance are paramount, the
          company needed a streamlined DevOps process to ensure faster
          time-to-market without compromising quality or compliance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Solution</h2>
        <p className="mb-4">
          We collaborated closely with Fintech Solutions teams to design and
          implement a robust DevOps automation solution based on the following
          components:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>CI/CD Pipelines:</strong> Implemented automated pipelines
            using Jenkins and GitHub Actions, allowing for seamless integration,
            testing, and deployment across environments.
          </li>
          <li>
            <strong>Kubernetes Orchestration:</strong> Deployed Kubernetes to
            manage and scale containerized applications, providing a flexible
            and resilient environment that can handle fluctuating workloads.
          </li>
          <li>
            <strong>Infrastructure as Code (IaC):</strong> Adopted IaC practices
            using Terraform, enabling version-controlled, replicable
            infrastructure that can be quickly spun up or modified.
          </li>
          <li>
            <strong>Automated Testing:</strong> Integrated automated testing for
            code quality, security, and performance checks to detect issues
            early in the development lifecycle.
          </li>
        </ul>
        <p>
          This combination of tools and practices significantly reduced manual
          effort, minimized human errors, and enhanced system reliability,
          allowing the team to focus on innovation rather than maintenance.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Results</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Reduced Deployment Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Deployment cycles were shortened by over 60%, allowing Fintech
                Solutions to deliver new features and improvements to customers
                faster than ever.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Enhanced System Resilience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Kubernetes and automated failover mechanisms improved system
                uptime and robustness, reducing the frequency of service
                interruptions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Increased Developer Productivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The streamlined CI/CD pipeline and automated testing allowed
                developers to focus more on feature development, reducing
                deployment-related overhead.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Cost Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                By optimizing resource utilization through Kubernetes and IaC,
                Fintech Solutions saw a reduction in cloud infrastructure costs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Outcome</h2>
        <p>
          Deployment time was drastically reduced, enabling faster releases and
          a more robust, resilient infrastructure. The project not only
          accelerated Fintech Solutions&rsquo; release cycles but also
          established a scalable foundation for future growth and innovation in
          the highly competitive fintech sector.
        </p>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Testimonial</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="italic">
              &ldquo;The DevOps automation solution has been a game-changer for
              us. We&#39;ve been able to scale our operations with confidence,
              reduce time-to-market, and maintain high system reliability—all
              critical factors in fintech. We now have a flexible and dependable
              infrastructure that grows with us.&rdquo;
            </blockquote>
            <p className="mt-2 font-semibold">— CTO, Fintech Solutions Ltd.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          AWS Services and Tools Used
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          {[
            {
              name: "Kubernetes",
              description: "For orchestration and scalability",
            },
            { name: "Jenkins and GitHub Actions", description: "For CI/CD" },
            {
              name: "Terraform",
              description: "For Infrastructure as Code (IaC)",
            },
            {
              name: "AWS EC2, S3, and EKS",
              description: "For cloud infrastructure",
            },
          ].map((tool) => (
            <Card key={tool.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tool.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">About the Client</h2>
        <Card>
          <CardHeader>
            <CardTitle>Fintech Solutions Ltd.</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Fintech Solutions Ltd. is an innovative fintech startup dedicated
              to delivering secure, high-performance financial technology
              solutions. Specializing in consumer finance products, the company
              is focused on meeting the evolving needs of digital finance in a
              fast-paced, competitive environment.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
