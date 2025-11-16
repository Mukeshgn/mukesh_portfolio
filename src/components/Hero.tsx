import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import heroBg from "@/assets/data-tech-bg.webp";
import mukeshPhoto from "@/assets/mukesh-profile.webp";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Hello, I'm Mukesh
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mukesh Gopi Nandh Udatha
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Data Analyst | SQL Developer | Power BI Developer
            </h2>
            
            {/* Metrics */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-2xl">4+</span>
                <span className="text-muted-foreground">Data Analysis Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-2xl">5+</span>
                <span className="text-muted-foreground">Datasets Analyzed</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open('https://github.com/Mukeshgn', '_blank', 'noopener,noreferrer')}
              >
                <Github className="w-4 h-4 mr-2" />
                Github
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open('https://www.linkedin.com/in/mukesh-gopi-nandh', '_blank', 'noopener,noreferrer')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open(`${import.meta.env.BASE_URL}Mukesh_GopiNandh_Resume.pdf`, '_blank', 'noopener,noreferrer')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-hover">
                <img 
                  src={mukeshPhoto} 
                  alt="Mukesh Gopi Nandh Udatha - Data Analyst" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer bg-transparent border-none"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
