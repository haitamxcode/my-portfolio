import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Button } from './ui/button';
import project00 from '@/assets/images/project-03.png';
import project01 from '@/assets/images/project-00.png';
import project02 from '@/assets/images/project-02.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'My Portfolio',
    description: 'Interactive Site to Show the Web My Identity and what I am Capable of',
    image: project00,
    tags: ['React', 'Tailwindcss'],
    link: 'https://github.com/kylenxcode/my-portfolio/',
  },
  {
    title: 'Golden Wings (work in progress)',
    description: 'Showcasing the Services of the Entreprise and Management of Appointments.',
    image: project01,
    tags: ['React', 'Tailwindcss', 'MySQL'],
    link: 'https://github.com/kylenxcode/golden-wings-custom/',
  },
  {
    title: 'LeafHub (work in progress)',
    description: 'Browse, Read, Write Books and Interact with your Authors/Readers all in one Place.',
    image: project02,
    tags: ['Laravel', 'Tailwindcss', 'MongoDB'],
    link: 'https://github.com/kylenxcode/leafhub/',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-24 md:top-36 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold glow-text text-center mb-16 font-cinzel-decorative"
        >
          Projects I've <span className="gradient-text">Built</span>
        </h2>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform 
                  duration-1000 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0c4b49]/70 translate-y-0 
                     group-hover:-translate-y-full transition-transform 
                     duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background 
                     via-background/50 to-transparent opacity-60 group-hover:opacity-40 
                     transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold transition-colors duration-500 
                    font-cinzel-decorative group-hover:gradient-text glow-text">
                  {project.title}
                </h3>

                <p className="text-foreground/60 text-sm transition-colors
                   duration-600 font-karina group-hover:text-foreground glow-text">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass border 
                      font-karina border-primary/30 text-foreground/60 
                      group-hover:text-foreground transition-colors 
                      duration-500 glow-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full glass font-cinzel border-primary/50 
                    hover:bg-[#0c4b49] group-hover:shadow-lg 
                    text-foreground/60 group-hover:text-foreground 
                    group-hover:shadow-primary transition-all duration-500 mt-6"
                  >
                    View Project
                    <ArrowUpRight size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
