import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Code2, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import heroImage from '@/assets/hero-bg.jpg';
import rajeshPhoto from '../assets/rajesh-photo.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Building future-ready systems with code, cloud, and creativity.";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-primary/20 rounded-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-accent text-sm font-medium">
            Currently open to exciting fullstack/backend engineering roles
          </span>
        </div>

        {/* Name and Profile Picture */}
        <div className="flex items-center justify-center gap-6 mb-6 animate-slide-in-left">
          <img 
            src={rajeshPhoto}
            alt="Rajesh Deora"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
          />
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="hero-gradient-text">Rajesh</span>
            <br />
            <span className="text-foreground">Deora</span>
          </h1>
        </div>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-right">
          Software Developer Engineer 2 @ <span className="text-primary font-semibold">Arthmate Tech</span>
        </div>

        <div className="text-lg text-muted-foreground mb-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          M.Tech from <span className="text-accent font-semibold">IIT Guwahati</span> | B.Tech from <span className="text-accent font-semibold">NIT Warangal</span>
        </div>

        {/* Animated Tagline */}
        <div className="text-2xl md:text-3xl font-light mb-12 h-20 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-foreground font-jetbrains">
            {displayText}
            <span className="animate-blink border-r-2 border-primary ml-1"></span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <a href="https://drive.google.com/file/d/12fRqUC8Co0xuu-qJn5Wh_3FcMVAuVBEp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-primary-glow px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  You can reach me via email, phone, or WhatsApp.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <a href="mailto:rajdeoranitw@gmail.com" className="flex items-center gap-4 p-3 border rounded-md hover:bg-accent">
                  <Mail className="h-6 w-6" />
                  <span>rajdeoranitw@gmail.com</span>
                </a>
                <a href="tel:+918290821476" className="flex items-center gap-4 p-3 border rounded-md hover:bg-accent">
                  <Phone className="h-6 w-6" />
                  <span>+91 8290821476</span>
                </a>
                <a href="https://wa.me/918290821476" className="flex items-center gap-4 p-3 border rounded-md hover:bg-accent">
                  <MessageSquare className="h-6 w-6" />
                  <span>+91 8290821476</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/RajDeora1234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tech-hover p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/rajesh-deora-54a017159/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tech-hover p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://leetcode.com/u/rajesh_nitw/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tech-hover p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <Code2 className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;