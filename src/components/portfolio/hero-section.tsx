import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";
import profileImage from "@/assets/profile.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <ScrollReveal className="order-2 md:order-1">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Kongphon Y.{" "}
              <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
                (Kong)
              </span>
            </h1>

            <p className="text-lg text-muted-foreground sm:text-xl">
              Computer Science Student | Aspiring Frontend Developer & UI/UX
              Enthusiast
            </p>

            <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground md:items-start">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>Kong********@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>086-xxx-xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Saraburi, Thailand</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild className="gradient-bg border-0 text-primary-foreground hover:opacity-90">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-primary-glow/30 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-glass-border shadow-2xl sm:h-80 sm:w-80">
              <img
                src={profileImage}
                alt="Kongphon Y. (Kong) profile picture"
                className="h-full w-full object-cover"
                width={816}
                height={816}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="h-6 w-4 rounded-full border-2 border-muted-foreground p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
