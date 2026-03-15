import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
          Get in Touch
        </p>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-3">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Have a question about an order or a product? We're here to help —
          reach out via WhatsApp, email, or the form below.
        </p>
      </div>

      {/* WhatsApp CTA */}
      <div className="max-w-lg mx-auto mb-10">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-5 group transition-all hover:shadow-md"
        >
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-green-800">
              Chat on WhatsApp
            </p>
            <p className="text-green-700 text-sm">
              Get instant support from our team. Typically responds in under 5
              minutes!
            </p>
          </div>
          <Send className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-xl">Store Information</h2>
          {[
            {
              icon: MapPin,
              label: "Address",
              value: "123 Trend Street, Fashion District\nNew York, NY 10001",
            },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: Mail, label: "Email", value: "support@trendcart.com" },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "+1 (234) 567-890",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">
                  {value}
                </p>
              </div>
            </div>
          ))}

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <h3 className="font-display font-semibold mb-2">Business Hours</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-semibold text-foreground">
                  9 AM – 8 PM EST
                </span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold text-foreground">
                  10 AM – 6 PM EST
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-foreground">
                  12 PM – 5 PM EST
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-xl mb-5">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Your Name
              </Label>
              <Input
                placeholder="Alex Johnson"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Email Address
              </Label>
              <Input
                type="email"
                placeholder="alex@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label className="text-sm font-semibold mb-1.5 block">
                Message
              </Label>
              <Textarea
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              data-ocid="contact.submit_button"
              disabled={sent}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
            >
              {sent ? (
                "Message Sent!"
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
