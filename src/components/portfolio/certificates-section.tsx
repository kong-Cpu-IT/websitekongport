import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollReveal } from "./scroll-reveal";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    description:
      "Completed coursework covering HTML, CSS, responsive layouts, accessibility, and modern web design principles.",
    credentialUrl: "#",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: "2024",
    description:
      "Gained foundational skills in data analytics, spreadsheets, SQL, data visualization, and R programming.",
    credentialUrl: "#",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    description:
      "Study in progress. Building cloud literacy and understanding of AWS core services, billing, security, and architecture.",
    credentialUrl: "#",
    inProgress: true,
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding px-4">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certificates
            </h2>
            <p className="mt-3 text-muted-foreground">ใบรับรองและความสำเร็จ</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 100}>
              <Card className="group glass h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">
                    {cert.title}
                  </CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.year}
                    {cert.inProgress && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                        In Progress
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {cert.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        View Credential
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-card-foreground">
                          {cert.title}
                        </DialogTitle>
                        <DialogDescription>
                          {cert.issuer} • {cert.year}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed text-card-foreground/80">
                          {cert.description}
                        </p>
                        <Button asChild className="gradient-bg border-0 text-primary-foreground hover:opacity-90">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open Credential Link
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
