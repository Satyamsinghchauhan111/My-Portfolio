import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  contactItem,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("formdata", formData);

  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (replace with your actual service ID, template ID, and public key)
      await emailjs.send(
        "service_o9t7myr", // Replace with your EmailJS service ID
        "template_tc0c7bi", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: "Satyam Singh Chauhan",
        },
        "pQ3vt7CCtaK7NsBdB"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-10 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className="glass glass-hover p-4 md:p-6 border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary">
                  Let's Connect
                </h3>
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <motion.div
                    className="flex items-center space-x-4"
                    variants={contactItem}
                  >
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:satyamsingh7417@gmail.com"
                        className="text-foreground/70"
                      >
                        satyamsingh7417@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    variants={contactItem}
                  >
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">💼</span>
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/satyam-singh-087157184/"
                        className="text-foreground/70"
                      >
                        https://www.linkedin.com/in/satyam-singh
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    variants={contactItem}
                  >
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com/satyamtheone"
                        className="text-foreground/70"
                      >
                        https://github.com/satyamtheone
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4"
                    variants={contactItem}
                  >
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">📞</span>
                    </div>
                    <div>
                      <p className="font-medium">Contact</p>
                      <a href="tel:8533924968" className="text-foreground/70">
                        Click to contact me
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className="glass glass-hover p-4 md:p-6 border-white/10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="neu dark:bg-muted/50 dark:border-0 border-[0.5px] border-blue-00 focus:ring-2 focus:ring-blue-800"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="neu dark:bg-muted/50 dark:border-0 border-[0.5px] border-blue-00 focus:ring-2 focus:ring-blue-800"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="neu dark:bg-muted/50 dark:border-0 border-[0.5px] border-blue-00 focus:ring-2 focus:ring-blue-800"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full glass-strong glass-hover bg-primary/20 hover:bg-primary/30 border-primary/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
