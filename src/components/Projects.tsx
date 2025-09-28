import { ExternalLink, Github, Eye, Brain, BarChart3, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Object Detection System",
      description: "Advanced computer vision system using YOLOv8 and OpenCV for real-time object detection and tracking with high accuracy and performance optimization.",
      icon: <Eye className="w-6 h-6" />,
      tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
      gradient: "from-blue-500 to-cyan-500",
      features: ["Real-time processing", "Multi-object tracking", "Performance optimization"]
    },
    {
      title: "Customer Churn Prediction Platform",
      description: "Machine learning platform built with Streamlit and Artificial Neural Networks to predict customer churn with interactive visualization and insights.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "Streamlit", "ANN", "Scikit-learn"],
      gradient: "from-purple-500 to-violet-500",
      features: ["Interactive dashboard", "Predictive analytics", "Data visualization"]
    },
    {
      title: "Intelligent Text Summarizer",
      description: "NLP-powered text summarization tool using SpaCy and Transformers to generate concise, coherent summaries from large documents.",
      icon: <FileText className="w-6 h-6" />,
      tech: ["Python", "SpaCy", "Transformers", "NLP"],
      gradient: "from-green-500 to-emerald-500",
      features: ["Abstractive summarization", "Multi-language support", "Custom length control"]
    },
    {
      title: "Interactive Sales Analytics Dashboard",
      description: "Comprehensive Tableau dashboard providing deep insights into sales performance, customer behavior, and business trends with interactive visualizations.",
      icon: <BarChart3 className="w-6 h-6" />,
      tech: ["Tableau", "SQL", "Data Analysis", "Business Intelligence"],
      gradient: "from-orange-500 to-red-500",
      features: ["Interactive filters", "KPI tracking", "Trend analysis"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-futuristic group overflow-hidden perspective-1000">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground border-primary/30">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-accent hover:text-accent-foreground border-accent/30">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-holographic transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;