import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/images/my-image-2.png';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: "devicon-nodejs-plain", name: "NodeJS" },
  { icon: "devicon-react-plain", name: "React" },
  { icon: "devicon-tailwindcss-plain", name: "Tailwindcss" },
  { icon: "devicon-laravel-plain", name: "Laravel" },
  { icon: "devicon-nextjs-plain", name: "NextJS" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-php-plain", name: "PHP" },
  { icon: "devicon-typescript-plain", name: "TypeScript" },
  { icon: "devicon-mysql-plain", name: "MySQL" },
  { icon: "devicon-mongodb-plain", name: "MongoDB" },
  { icon: "devicon-c-plain", name: "C" },
  { icon: "devicon-cplusplus-plain", name: "C++" },
  { icon: "devicon-python-plain", name: "Python" },
  { icon: "devicon-docker-plain", name: "Docker" },
];

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  const [showAll, setShowAll] = useState(false);

  const isMobile = useIsMobile();
  const maxSkills = isMobile ? 6 : 7;
  const visibleSkills = showAll ? skills : skills.slice(0, maxSkills);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        {
          opacity: 1, x: 0, filter: 'blur(0px)', duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%' }
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo(
        '.skill-icon',
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: skillsRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src={profileImage}
                alt="Kylen - Web Developer"
                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl glow-text md:text-5xl font-bold font-cinzel-decorative">
              About <span className="animate-pulse duration-100000 gradient-text">Haitam</span> :
            </h2>

            <p className="text-foreground/70 text-base md:text-lg 
               leading-relaxed glow-text text-justify font-karina">
              I am a web<span className="gradient-text"> developer</span>, digital 
              <span className="gradient-text"> artist</span>, and content
              <span className="gradient-text"> creator</span> who specializes
              in building immersive digital experiences. Expert in modern web 
              technologies and Creative in designs, I bring your ideas to life 
              through code and AI tools. </p> 
            <p className="text-foreground/70 text-base md:text-lg 
               leading-relaxed glow-text text-justify font-karina"> 
              My work is simply merging 
              <span className="text-foreground"> technology</span>, 
              <span className="text-foreground"> creativity</span>, 
              and <span className="text-foreground">security</span> to create 
              unique eye-catching web applications. Every project is a journey 
              of innovation and fun collaboration, ensuring it's not just 
              <span className="gradient-text"> functional</span>, but truly 
              <span className="gradient-text"> memorable</span>. 
              </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">

          <h3 className="text-4xl md:text-5xl glow-text font-bold font-cinzel-decorative mb-8">
            What I<span className="animate-pulse duration-100000 gradient-text"> Use</span> :
          </h3>

          {/* Skill container with fade mask */}
          <div className="relative">

            {/* Grid */}
            <div
              ref={skillsRef}
              className={`grid grid-cols-2 md:grid-cols-7 gap-4 transition-all duration-500 ${
                showAll ? "max-h-full" : "max-h-[300px] overflow-hidden"
              }`}
            >
              {visibleSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-icon p-6 rounded-2xl bg-gradient-to-r from-[#0c4b49] to-[#0a3a38] text-background text-center hover:glow-border transition-all duration-300 cursor-pointer group shadow-2xl flex flex-col items-center justify-center"
                >
                  <i className={`${skill.icon} text-4xl mx-auto mb-3 text-foreground/60 group-hover:text-foreground transition-colors duration-500`} />
                  <p className="text-sm font-medium text-center font-cinzel text-foreground/60 group-hover:text-foreground transition-colors duration-500">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Fading mask that STARTS AFTER the first visible row */}
            {!showAll && (
              <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Button */}
          <div className="mt-2 flex justify-center relative">
            <button
              onClick={() => setShowAll(!showAll)}
              className="relative text-lg font-cinzel-decorative text-foreground/70 hover:text-foreground transition-colors duration-300 px-6"
            >
              {/* Left line */}
              <span className="absolute left-[-200%] top-1/2 w-[200%] border-t border-foreground/40" />

              {/* Right line */}
              <span className="absolute right-[-200%] top-1/2 w-[200%] border-t border-foreground/40" />

              {/* Text */}
              <span className="relative px-4">
                {showAll ? "Less" : "More"}
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
