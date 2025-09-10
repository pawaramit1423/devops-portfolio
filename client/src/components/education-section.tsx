import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const certifications = [
    {
      name: "AWS Certified DevOps Engineer",
      level: "Professional Level",
      year: "2023"
    },
    {
      name: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      year: "2023"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      level: "Associate Level",
      year: "2022"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-3xl text-primary mr-4" size={32} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground" data-testid="education-degree">
                    Bachelor of Science in Computer Engineering
                  </h4>
                  <p className="text-muted-foreground" data-testid="education-university">
                    University of Technology
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="education-year">
                    2018 - 2022
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground text-sm">
                    Specialized in Systems Engineering and Network Architecture with focus on distributed systems and cloud computing fundamentals.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center mb-6">
                <Award className="text-3xl text-accent mr-4" size={32} />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                    data-testid={`certification-${index}`}
                  >
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.level || cert.organization}
                      </p>
                    </div>
                    <span className="text-accent text-sm font-mono">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
