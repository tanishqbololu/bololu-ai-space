import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleField from '@/components/ParticleField';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Particles */}
      <ParticleField />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 dark:from-background/90 dark:via-background/70 dark:to-background/90" />
      
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 particles-bg" />
      <div className="absolute inset-0 matrix-rain opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2 animate-bounce-in">Tanishq Bololu</span>
            <span className="text-holographic text-glow text-4xl md:text-5xl lg:text-6xl">AI Engineer</span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light scan-lines">
            Machine Learning & Deep Learning Specialist
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions through cutting-edge AI technologies, 
            computer vision, and natural language processing.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.8s' }}>
          <Button 
            onClick={scrollToProjects}
            variant="hero"
            className="group relative overflow-hidden btn-futuristic"
          >
            <span className="relative z-10">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-border hover:bg-muted/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-glow futuristic-border"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-32 right-32 w-8 h-8 bg-accent/30 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default Hero;