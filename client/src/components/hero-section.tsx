import { Code, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download an actual resume file
    console.log('Download resume functionality would be implemented here');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Accelerating Innovation
            <span className="block gradient-text">Through Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridging the gap between development and operations to build resilient, scalable systems that drive business success through cutting-edge DevOps practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              data-testid="button-view-projects"
            >
              <Code className="mr-2 inline" size={20} />
              View My Projects
            </button>
            <button 
              onClick={downloadResume}
              className="border border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 inline" size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
