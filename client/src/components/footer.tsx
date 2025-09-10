export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-lg font-semibold text-primary mb-4 md:mb-0">
            AT<span className="text-accent">.</span>
          </div>
          <div className="text-muted-foreground text-sm" data-testid="copyright">
            © 2024 Alex Thompson. Built with modern DevOps principles.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid="footer-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
