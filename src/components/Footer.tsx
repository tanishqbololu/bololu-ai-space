import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:tanishqbololu@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/tanishqbololu/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              Tanishq Bololu
            </button>
            <p className="text-muted-foreground mt-2">AI Engineer & ML Specialist</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tanishq Bololu
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> in India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              "Transforming ideas into intelligent solutions through cutting-edge AI technologies"
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float opacity-50" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent/20 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
};

export default Footer;