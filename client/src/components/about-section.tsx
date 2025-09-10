import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a passionate DevOps Engineer with 4.5 years of experience automating workflows, ensuring system reliability, and fostering seamless collaboration across development and operations teams. My expertise lies in building end-to-end CI/CD pipelines that transform how organizations deploy software, reducing deployment times and increasing release frequency while maintaining the highest standards of security and reliability.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-experience">4.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent" data-testid="stat-projects">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-automation">99%</div>
                  <div className="text-sm text-muted-foreground">Automation Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-muted rounded-xl flex items-center justify-center" data-testid="profile-placeholder">
                <User size={96} className="text-muted-foreground" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-mono text-sm">
                <span className="mr-2">🟢</span>
                Available for hire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
