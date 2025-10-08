import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Globe, 
  Zap,
  Layers,
  Box,
  Brain,
  Palette
} from 'lucide-react';

const techStacks = [
  {
    category: "Backend & Frameworks",
    techs: [
      { name: "Node.js", icon: Cpu, description: "High-performance server runtime" },
      { name: "Express", icon: Globe, description: "Fast, minimalist web framework" },
      { name: "JavaScript", icon: Code, description: "Versatile scripting language" },
      { name: "Typescript", icon: Code, description: "Strongly typed, object-oriented, compiled programming language" },
      { name: "Python", icon: Code, description: "High-level, general-purpose language" },
    ]
  },
  {
    category: "Frontend & UI",
    techs: [
      { name: "React.js", icon: Code, description: "Component-based UI library" },
      { name: "Next.js", icon: Zap, description: "The React framework for production" },
    ]
  },
  {
    category: "Databases & Storage",
    techs: [
      { name: "MongoDB", icon: Database, description: "NoSQL document database" },
      { name: "PostgreSQL", icon: Database, description: "Advanced relational database" },
    ]
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: Cloud, description: "Cloud computing platform" },
      { name: "Docker", icon: Box, description: "Application containerization" },
    ]
  },
  {
    category: "Core Competencies",
    techs: [
      { name: "Data Structures & Algorithms", icon: Brain, description: "Efficient problem-solving and system design" }
    ]
  },
  
];

const TechStack = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power modern, scalable applications
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techStacks.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group card-futuristic p-6 rounded-xl cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        <tech.icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-secondary-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Technologies" },
            { number: "1+", label: "Years Experience" },
            { number: "20+", label: "Projects Built" },
            { number: "IIT", label: "Post Graduate" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold hero-gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;