import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Details",
      period: "2020 - 2024",
      description: "Specialized in Machine Learning and Data Science"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Objective */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">My Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate AI Engineer dedicated to pushing the boundaries of machine learning 
                  and deep learning. I specialize in developing intelligent systems that solve 
                  real-world problems through computer vision, natural language processing, 
                  and advanced analytics.
                </p>
              </CardContent>
            </Card>

            {/* Location & Contact */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Hyderabad, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Available for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">IELTS Band 7.5 - Excellent English proficiency</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Certified Full Stack Data Science & AI Professional</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Google Data Analytics Certification (Ongoing)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;