import { GraduationCap, BookOpen, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./scroll-reveal";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    school: "Faculty of Science, Kasetsart University",
    period: "2022 - Present",
    detail: "GPA: 3.xx",
  },
  {
    icon: BookOpen,
    title: "High School Diploma (Science-Math)",
    school: "Demonstration School",
    period: "2019 - 2022",
    detail: "GPA: 3.8x",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding px-4">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About & Education
            </h2>
            <p className="mt-3 text-muted-foreground">
              ประวัติการศึกษาและแนะนำตัว
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <Card className="glass h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Who am I?
                </h3>
                <p className="leading-relaxed text-card-foreground/80">
                  Passionate about building web applications with React,
                  Tailwind CSS, and modern web tech. I enjoy crafting clean,
                  accessible user interfaces and turning ideas into delightful
                  digital experiences. Currently focused on frontend development
                  while expanding my skills in UI/UX design and full-stack
                  fundamentals.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-4">
            {education.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <Card className="glass">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.school}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="rounded-full bg-secondary px-2 py-1 font-medium text-secondary-foreground">
                            {item.period}
                          </span>
                          <span className="rounded-full bg-secondary px-2 py-1 font-medium text-secondary-foreground">
                            {item.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
