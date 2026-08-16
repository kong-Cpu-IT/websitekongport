import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { CertificatesSection } from "@/components/portfolio/certificates-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kongphon Y. (Kong) | Frontend Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Kongphon Y. (Kong), a Computer Science student at Kasetsart University and aspiring frontend developer passionate about React, Tailwind CSS, and UI/UX.",
      },
      {
        property: "og:title",
        content: "Kongphon Y. (Kong) | Frontend Developer & CS Student",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Kongphon Y. (Kong), a Computer Science student at Kasetsart University and aspiring frontend developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
