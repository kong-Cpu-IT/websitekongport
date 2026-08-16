import { useState } from "react";
import { Code2, Users, HeartHandshake, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

type Category = "All" | "Projects" | "Activities";

const items = [
  {
    title: "Student Club Management Web App",
    category: "Projects",
    description:
      "A full-featured web application built for a university student club to manage members, events, and announcements.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    icon: Code2,
    highlight: "Built for University Activity",
  },
  {
    title: "Head of Tech Team - University Hackathon 2024",
    category: "Activities",
    description:
      "Led the technical team in organizing the university hackathon. Designed and deployed the event landing page used by 300+ attendees.",
    tech: ["Leadership", "Event Tech", "Landing Page"],
    icon: Users,
    highlight: "300+ Attendees",
  },
  {
    title: "Volunteer Teaching - Basic Coding for Kids",
    category: "Activities",
    description:
      "Volunteered to teach fundamental programming concepts to children using Scratch and Python in an engaging, hands-on format.",
    tech: ["Scratch", "Python", "Teaching"],
    icon: HeartHandshake,
    highlight: "2023",
  },
];

const categories: Category[] = ["All", "Activities", "Projects"];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  return (
    <section id="projects" className="section-padding px-4">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Activities & Projects
            </h2>
            <p className="mt-3 text-muted-foreground">
              กิจกรรมและผลงานที่ผ่านมา
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as Category)}
            className="mb-10 flex justify-center"
          >
            <TabsList className="glass">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:gradient-bg data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <Card
                className={cn(
                  "group glass h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                )}
              >
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="mb-2 w-fit text-xs"
                  >
                    {item.category}
                  </Badge>
                  <CardTitle className="text-lg text-card-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.highlight}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mb-4 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 text-primary hover:bg-transparent hover:text-primary/80"
                    aria-label={`View details about ${item.title}`}
                  >
                    {item.category === "Project" ? "View project details" : "Read about this activity"}
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
