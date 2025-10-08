import { useState } from 'react';
import { ExternalLink, Github, Brain, Zap, X, StickyNote,PersonStanding } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  icon: any;
  gradient: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
   {
    id: 'Launchyard',
    title: 'Launchyard',
    subtitle: 'Automated Deployment Platform',
    description: 'Deploy projects via GitHub URL – built with Docker, AWS ECS',
    detailedDescription: 'Cloud-native deployment automation platform that transforms GitHub repositories into production-ready applications. Features CI/CD pipeline automation, containerization, monitoring, and real-time analytics.',
    technologies: ['Docker', 'AWS ECS','Node.js', 'Microservices'],
    features: [
      'One-click GitHub URL deployment',
      'Automated Docker containerization',
      'Real-time deployment monitoring',
      'Scalable AWS ECS orchestration',
    ],
    icon: Zap,
    gradient: 'from-green-500 to-blue-600',
    githubUrl: 'https://github.com/RajDeora1234/launchyard'
  },
  {
    id: 'Thredio ',
    title: 'Thredio ',
    subtitle: 'A Simple Post Sharing Platform',
    description: 'Share posts with ease – built with React, Node.js, PostgreSQL',
    detailedDescription: 'A minimalist social platform for sharing text-based posts. Users can create, edit, delete, and like posts in a clean, distraction-free interface. Built with React for the frontend and Node.js with PostgreSQL for the backend.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL','ORM(Sequelize)','Real-time'],
    features: [
      'User authentication and profiles',
      'Create, edit, delete posts',
      'Like and comment on posts',
      'Responsive design for all devices',
    ],
    icon: StickyNote,
    gradient: 'from-purple-500 to-pink-600',
    demoUrl: 'https://thredio.onrender.com/',
    githubUrl: 'https://github.com/RajDeora1234/Thredio'
  },
  {
    id: 'Student Checkin System',
    title: 'Student Checkin System',
    subtitle: 'A Student Check-in System',
    description: 'Checkin records of students with seach features – built with React, Node.js, MongoDB',
    detailedDescription: 'A student checkin system for tracking students check in status. Users can checkin in the system. It keeps record of checkin on current day also. Built with React for the frontend and Node.js with MongoDB for the backend.',
    technologies: ['React', 'Node.js', 'Express', "MongoDB","JWT Authentication","Real-time"],
    features: [
      'User authentication and profiles',
      'Checkin functionality',
      'Seach student feature',
      'Responsive design for all devices',
    ],
    icon: PersonStanding,
    gradient: 'from-purple-500 to-pink-600',
    demoUrl: 'https://student-checkin-system.onrender.com/',
    githubUrl: 'https://github.com/RajDeora1234/student-checkin-system'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-futuristic cursor-pointer group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-6">
                {/* Project Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedProject.gradient}`}>
                    <selectedProject.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <p className="text-accent">{selectedProject.subtitle}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">About the Project</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.demoUrl && (
                    <Button className="btn-primary-glow" onClick={() => window.open(selectedProject.demoUrl, "_blank")}>
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")}>
                      <Github className="h-5 w-5 mr-2" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;