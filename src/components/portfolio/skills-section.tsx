import { ScrollReveal } from "./scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Users,
  type LucideIcon,
} from "lucide-react";

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Tools & Databases",
    icon: Database,
    skills: ["Git", "Figma", "Supabase", "VS Code"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Teamwork", "Problem Solving", "Agile Mindset"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding px-4">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skills
            </h2>
            <p className="mt-3 text-muted-foreground">
              เทคโนโลยีและทักษะที่ใช้งาน
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 100}>
              <Card className="glass h-full">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
