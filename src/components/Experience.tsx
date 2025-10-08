import { Building2, Calendar, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    company: "Arthmate Tech Pvt. Ltd.",
    role: "Software Developer Engineer 2",
    duration: "2024 - Present",
    location: "Kolkata, India",
    achievements: [
      {
        title: "Loan Against Property (LAP) Platform",
        description: "Developed and maintained a scalable Loan Against Property platform, handling loan applications, document management, and real-time status tracking.",
        technologies: ["Node.js", "React.js", "REST API", "Authentication"]
      },
      {
        title: "Customer Api Stack",
        description: "Engineered a robust Customer API stack to manage lead and loan work flow api based and to manage user profiles, KYC processes, and secure document uploads with real-time updates.",
        technologies: ["Node.js","Postgre","ORM(Sequelize)","REST API", "Authentication"]
      },
      {
        title: "Customer Portal Development",
        description: "Developed comprehensive customer portal with real-time payment tracking, OTP-based authentication, and dynamic QR code generation",
        technologies: ["Node.js", "React.js", "REST API", "Authentication"]
      },
      {
        title: "Enach Public Portal",
        description: "Developed a public portal for eNACH services, enabling users to manage mandates and payments with secure authentication and real-time updates",
        technologies: ["Node.js", "React.js", "REST API", "Authentication"]
      },
      {
        title: "Observability & Monitoring",
        description: "Enhanced system observability through structured logging with Winston and implemented real-time alerting via Slack Webhooks",
        technologies: ["Winston", "Slack Webhooks", "Monitoring", "DevOps"]
      },
      
    ],
    icon: Building2,
    gradient: "from-blue-500 to-purple-600"
  }
];

const education = [
  {
    institution: "Indian Institute of Technology, Guwahati",
    degree: "Master of Technology (M.Tech)",
    field: "Fluid & Thermal Engineering",
    duration: "2021 - 2023",
    cgpa: "7.97 CGPA",
    highlights: [
      "Advanced Algorithms & Data Structures",
      "Software Engineering & Architecture"
    ],
    icon: Award,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    institution: "NIT Warangal",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Mechanical Engineering",
    duration: "2016 - 2020",
    cgpa: "7.77 CGPA",
    highlights: [
      "Web Development & Programming",
    ],
    icon: Award,
    gradient: "from-green-500 to-blue-600"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient-text">Professional Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building scalable systems and leading innovation in fintech
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-3">
            <Zap className="h-6 w-6" />
            Professional Experience
          </h3>
          
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="card-futuristic animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.gradient} flex-shrink-0`}>
                    <exp.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h4>
                    <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div 
                      key={achIndex}
                      className="group p-6 rounded-xl bg-muted/5 border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <h5 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h5>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {achievement.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-3">
            <Award className="h-6 w-6" />
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.institution}
                className="card-futuristic animate-slide-in-left"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-6">
                  {/* Institution Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.gradient} flex-shrink-0`}>
                      <edu.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.field}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{edu.duration}</span>
                        <span className="text-accent font-semibold">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Key Subjects</h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;