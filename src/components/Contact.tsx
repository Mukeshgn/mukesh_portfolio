import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_u6ank29",
        "template_nc7f0z9",
        formData,
        "7HvBUCxCLRdTnim_V"
      );

      toast({
        title: "Message sent!",
        description: "I will get back to you soon.",
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Details</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:mukeshudatha7@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>mukeshudatha7@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Mukeshgn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/Mukeshgn</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mukesh-gopi-nandh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/mukesh-gopi-nandh</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Resume</h3>
      
            {/* Download Resume */}
            <a
                href="/mukesh_portfolio/Mukesh_GopiNandh_Resume.pdf"
                download="Mukesh_GopiNandh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300 transform hover:scale-105 mb-3"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>

          




              <p className="text-sm text-muted-foreground text-center">
                Resume file: Mukesh_GopiNandh_Resume.pdf
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
