import { Briefcase, Calendar, Building2, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Data Visualization Intern",
      company: "Tata Group",
      period: "2023",
      type: "Internship",
      description: "Completed comprehensive data visualization training focusing on creating impactful visual representations of complex datasets using industry-standard tools.",
      achievements: [
        "Mastered advanced Tableau techniques for dashboard creation",
        "Developed interactive visualizations for business intelligence",
        "Gained expertise in data storytelling and presentation"
      ],
      skills: ["Tableau", "Data Visualization", "Business Intelligence", "Analytics"]
    },
    {
      title: "SQL Case Study Analyst",
      company: "Pizza Runner Project",
      period: "2023",
      type: "Project",
      description: "Conducted in-depth SQL analysis for a fictional pizza delivery business, demonstrating advanced database querying and business analysis skills.",
      achievements: [
        "Designed complex SQL queries for business insights",
        "Analyzed customer ordering patterns and delivery metrics",
        "Created comprehensive reports for business optimization"
      ],
      skills: ["SQL", "Database Analysis", "Business Intelligence", "Data Analysis"]
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      status: "Ongoing",
      description: "Comprehensive program covering data analysis, visualization, and statistical methods"
    },
    {
      name: "Certified Full Stack Data Science & AI Professional",
      issuer: "Industry Certification",
      status: "Completed",
      description: "Advanced certification in machine learning, deep learning, and AI development"
    },
    {
      name: "IELTS Academic",
      issuer: "British Council",
      status: "Band 7.5",
      description: "International English Language Testing System - Advanced proficiency"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg">{cert.name}</h4>
                      <Badge variant={cert.status === 'Ongoing' ? 'default' : 'secondary'}>
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="card-glass mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-3">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Actively pursuing advanced certifications in AI and machine learning 
                    to stay at the forefront of technology innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;