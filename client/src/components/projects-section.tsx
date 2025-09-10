import { Github, ExternalLink, TrendingUp, DollarSign, Activity, Rocket } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Automated CI/CD Pipeline",
      description: "Developed and maintained a GitOps-based CI/CD pipeline using Jenkins and Kubernetes, reducing deployment time by 50% and improving release frequency from bi-weekly to daily deployments.",
      technologies: ["Jenkins", "Kubernetes", "GitOps", "Docker"],
      metric: "50% faster deployments • 99.9% uptime",
      icon: <TrendingUp size={64} className="text-muted-foreground" />
    },
    {
      title: "Cloud Infrastructure with Terraform",
      description: "Used Terraform to provision and manage a multi-tier application environment on AWS, demonstrating expertise in Infrastructure as Code and achieving 30% cost optimization through resource right-sizing.",
      technologies: ["Terraform", "AWS", "VPC", "Auto Scaling"],
      metric: "30% cost reduction • 100% infrastructure automation",
      icon: <DollarSign size={64} className="text-muted-foreground" />
    },
    {
      title: "Monitoring & Alerting System",
      description: "Implemented a robust observability stack with Prometheus and Grafana to monitor system health and set up proactive alerts for potential issues, improving system uptime to 99.95%.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "ELK Stack"],
      metric: "99.95% uptime • 60% faster incident response",
      icon: <Activity size={64} className="text-muted-foreground" />
    },
    {
      title: "Microservices Orchestration",
      description: "Designed and implemented a scalable microservices architecture using Kubernetes and Istio service mesh, supporting 10x traffic growth while maintaining sub-200ms response times.",
      technologies: ["Kubernetes", "Istio", "Helm", "gRPC"],
      metric: "10x scalability • <200ms response time",
      icon: <Rocket size={64} className="text-muted-foreground" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-background rounded-xl p-8 border border-border card-hover" data-testid={`project-card-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="flex gap-3">
                    <button className="text-muted-foreground hover:text-primary transition-colors" data-testid={`project-github-${index}`}>
                      <Github size={20} />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors" data-testid={`project-demo-${index}`}>
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="bg-muted h-48 rounded-lg mb-6 flex items-center justify-center" data-testid={`project-image-${index}`}>
                  {project.icon}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                      }`}
                      data-testid={`project-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-accent font-mono" data-testid={`project-metric-${index}`}>
                  <span className="mr-2">📊</span>
                  {project.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
