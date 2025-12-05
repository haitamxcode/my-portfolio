import { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-input',
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        '.social-icon',
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.social-icons',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_qxxowbj",
        "template_x8f22lr",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Ph4uUPkUy8gkv8XZp"
      );

      if (result.status === 200) {

        gsap.to(formRef.current, {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });

        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Try again later.");
    }
  };


  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl glow-text font-cinzel-decorative md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-karina text-foreground/70 glow text text-lg">
            Got a project in mind? Let's make your dream <span className='gradient-text'>come to reality.</span>
          </p>
        </div>

        <div ref={formRef} className="max-w-xl mx-auto glass-card rounded-3xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="contact-input font-karina space-y-2">
              <label htmlFor="name" className="text-sm font-cinzel-decorative font-bold text-foreground/80">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass border-primary/30 focus:border-primary font-karina focus:ring-primary/30 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="contact-input font-karina space-y-2">
              <label htmlFor="email" className="text-sm font-cinzel-decorative font-bold text-foreground/80">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass border-primary/30 focus:border-primary font-karina focus:ring-primary/30 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="contact-input space-y-2">
              <label htmlFor="message" className="text-sm font-bold font-cinzel-decorative text-foreground/80">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass border-primary/30 font-karina focus:border-primary focus:ring-primary/30 transition-all min-h-32 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="contact-input font-cinzel-decorative w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary transition-all duration-500 hover:scale-105"
              size="lg"
            >
              Send Message
              <EnvelopeSimple size={20} className="ml-2" />
            </Button>
          </form>

          {/* Social Icons */}
          <div className="social-icons flex justify-center gap-6 mt-8 pt-8 border-t border-border">
            <a
              href="https://github.com/kylenxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-foreground/60 hover:text-foreground p-3 glass rounded-full hover:glow-border hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <GithubLogo size={24} weight="fill" />
            </a>
            <a
              href="https://linkedin.com/in/kylenxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-foreground/60 hover:text-foreground p-3 glass rounded-full hover:glow-border hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <LinkedinLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
