import { Cloud, Infinity, Container, Code, BarChart3, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Cloud className="text-3xl text-primary" size={32} />,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP"]
    },
    {
      icon: <Infinity className="text-3xl text-accent" size={32} />,
      title: "CI/CD",
      skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions"]
    },
    {
      icon: <Container className="text-3xl text-primary" size={32} />,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Helm"]
    },
    {
      icon: <Code className="text-3xl text-accent" size={32} />,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible"]
    },
    {
      icon: <BarChart3 className="text-3xl text-primary" size={32} />,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack"]
    },
    {
      icon: <Terminal className="text-3xl text-accent" size={32} />,
      title: "Scripting",
      skills: ["Python", "Bash", "Go"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core <span className="text-primary">Skills</span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover" data-testid={`skill-card-${index}`}>
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-4">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((skillName, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer"
                      data-testid={`skill-badge-${skillName.toLowerCase()}`}
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
