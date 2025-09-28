import { 
  Code, 
  BarChart3, 
  Cloud, 
  Brain, 
  Eye, 
  Users, 
  Lightbulb,
  Target,
  Database,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL", "MySQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Tableau", "Power BI", "Excel"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Regression", "Classification", "Clustering", "Hyperparameter Tuning"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Deep Learning",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["ANN", "CNN", "Transfer Learning"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "NLP & Computer Vision",
      icon: <Eye className="w-6 h-6" />,
      skills: ["SpaCy", "Tokenization", "YOLOv8", "OpenCV"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Teamwork", icon: <Users className="w-5 h-5" /> },
    { name: "Adaptability", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Problem-solving", icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-futuristic group perspective-1000">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-y-12 transition-all duration-500 transform-style-3d`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-holographic transition-all duration-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${skillIndex * 50}ms` }}>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                      <span className="text-muted-foreground hover:text-foreground transition-colors duration-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="card-glass px-6 py-4 rounded-full flex items-center space-x-2 hover:bg-card/80 hover:scale-110 hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-primary animate-pulse-glow">
                  {skill.icon}
                </div>
                <span className="text-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;