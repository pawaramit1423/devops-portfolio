import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn", testId: "link-linkedin" },
    { icon: <Github size={20} />, href: "#", label: "GitHub", testId: "link-github" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter", testId: "link-twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities, challenging projects, and innovative DevOps solutions. Whether you're looking to optimize your deployment pipelines or scale your infrastructure, let's connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="text-primary mr-4" size={20} />
                  <span>alex.thompson@email.com</span>
                </div>
                <div className="flex items-center" data-testid="contact-location">
                  <MapPin className="text-primary mr-4" size={20} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="text-primary mr-4" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={link.label}
                    data-testid={link.testId}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            {...field}
                            data-testid="input-name"
                            className="bg-input border-border focus:ring-2 focus:ring-ring"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-email"
                            className="bg-input border-border focus:ring-2 focus:ring-ring"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            rows={4}
                            {...field}
                            data-testid="input-message"
                            className="bg-input border-border focus:ring-2 focus:ring-ring resize-vertical"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={contactMutation.isPending}
                    data-testid="button-send-message"
                  >
                    <Send className="mr-2" size={16} />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
