import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono text-xl font-semibold text-primary">
            AT<span className="text-accent">.</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-primary transition-colors duration-200"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-primary transition-colors duration-200"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="hover:text-primary transition-colors duration-200"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-primary transition-colors duration-200"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-primary transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block hover:text-primary transition-colors duration-200"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block hover:text-primary transition-colors duration-200"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block hover:text-primary transition-colors duration-200"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block hover:text-primary transition-colors duration-200"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block hover:text-primary transition-colors duration-200"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
