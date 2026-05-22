"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowRight, Building, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const googleMapsUrl = "https://maps.app.goo.gl/BvwviroUbLQtUXQk9?g_st=iw";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setStatus("error");
      return;
    }

    const formData = new FormData(form);
    const inquiry = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      orderType: String(formData.get("orderType") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: inquiry.firstName,
          last_name: inquiry.lastName,
          customer_name: `${inquiry.firstName} ${inquiry.lastName}`.trim(),
          customer_email: inquiry.email,
          from_email: inquiry.email,
          email: inquiry.email,
          reply_to: inquiry.email,
          phone: inquiry.phone,
          order_type: inquiry.orderType,
          message: inquiry.message,
          feedback: inquiry.message,
        },
        publicKey
      );
      
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS inquiry failed:", error);
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 bg-secondary/70 dark:bg-black/40" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h4 className="mb-6 text-sm font-black uppercase tracking-[0.28em] text-redclay">Visit or order</h4>
            <h1 className="mb-8 text-5xl font-black leading-none text-foreground md:text-7xl">
              Come for the warm batch.
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-muted-foreground">
              Ask about fresh pav timing, cake orders, bulk snack boxes, or the
              fastest way to reach our Admapur counter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="mb-10 text-3xl font-black text-foreground">Send an Inquiry</h2>
              <form
                onSubmit={handleInquirySubmit}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1 relative">
                    <label htmlFor="firstName" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      className="w-full rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-1 relative">
                    <label htmlFor="lastName" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      className="w-full rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1 relative">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-1 relative">
                    <label htmlFor="phone" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1 relative">
                  <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Order Type</label>
                  <input 
                    type="text" 
                    id="company"
                    name="orderType"
                    className="w-full rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-1 relative">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Message Details</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-none border-b border-border bg-transparent py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-4 flex items-center gap-4 bg-redclay px-10 py-5 text-sm font-black uppercase tracking-widest text-cream transition-all duration-300 hover:bg-saffron hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting" : "Submit Inquiry"} <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </button>
                {status === "sent" && (
                  <p className="text-sm font-semibold text-redclay">
                    Inquiry submitted. We will contact you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-semibold text-muted-foreground">
                    Inquiry could not be submitted. Check the EmailJS setup.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Right Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-12"
            >
              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-redclay">Bakery Address</h3>
                <div className="flex items-start gap-5 mb-6">
                  <Building className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-3 text-xl font-black text-foreground">Modern Bakery</h4>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      Admapur, Bhudargad Subdistrict<br/>
                      Kolhapur, Maharashtra 416208<br/>
                      India
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 bg-redclay px-5 py-3 text-xs font-black uppercase tracking-widest text-cream transition-colors hover:bg-saffron hover:text-ink"
                    >
                      <MapPin className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-border" />

              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-redclay">Direct Contact</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">General Enquiries</p>
                      <p className="text-foreground text-lg font-light">+91 9823095728</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Bulk Orders</p>
                      <p className="text-foreground text-lg font-light">sarangisr7@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-border" />

              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-redclay">Business Hours</h3>
                <div className="flex items-start gap-5">
                  <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-foreground font-light w-full">
                    <span>Monday - Friday</span>
                    <span className="text-right font-medium">08:00 - 20:00</span>
                    <span>Saturday</span>
                    <span className="text-right font-medium">09:00 - 18:00</span>
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-right text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full border-t border-border grayscale transition-all duration-1000 hover:grayscale-0">
        <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10 pointer-events-none" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.7912061226!2d73.94729115820313!3d16.208466100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00d72fdbccba7%3A0xc3b1e326cd4e2072!2sAdmapur%2C%20Maharashtra%20416208!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-0"
        ></iframe>
      </section>
    </div>
  );
}
