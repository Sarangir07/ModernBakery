"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CakeSlice,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const feedbackRecipient = "sarangisr7@gmail.com";
const googleMapsUrl = "https://maps.app.goo.gl/BvwviroUbLQtUXQk9?g_st=iw";
const phoneNumber = "+91 9823095728";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const bakeryHighlights = ["Fresh pav batches", "Cake orders", "Bulk snack boxes"];

export function Footer() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleFeedbackSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: feedbackRecipient,
            customer_email: customerEmail,
            from_email: customerEmail,
            email: customerEmail,
            reply_to: customerEmail,
            feedback,
            message: feedback,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "EmailJS request failed");
      }

      setCustomerEmail("");
      setFeedback("");
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS feedback failed:", error);
      setStatus("error");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/70 to-transparent" />
      <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-saffron/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-redclay/20 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:px-8 lg:py-20">
        <div className="mb-14 grid gap-6 border-y border-cream/12 py-8 md:grid-cols-[1.2fr_.8fr_.8fr] md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-saffron">
              <Sparkles className="h-4 w-4" />
              Baked fresh in Kolhapur
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight text-cream md:text-5xl">
              Warm breads, crisp snacks, and celebration cakes from Modern Bakery.
            </h2>
          </div>

          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="group inline-flex min-h-16 items-center justify-between gap-4 border border-cream/15 bg-cream/8 px-5 py-4 hover:border-saffron/70 hover:bg-saffron hover:text-ink"
          >
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.18em] opacity-70">Call counter</span>
              <span className="mt-1 block text-lg font-black">{phoneNumber}</span>
            </span>
            <Phone className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-16 items-center justify-between gap-4 border border-cream/15 bg-cream/8 px-5 py-4 hover:border-saffron/70 hover:bg-saffron hover:text-ink"
          >
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.18em] opacity-70">Find us</span>
              <span className="mt-1 block text-lg font-black">Open Google Maps</span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_.7fr_.9fr_1.05fr]">
          <div className="max-w-xl">
            <Link href="/" className="mb-7 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center bg-saffron text-ink shadow-[0_18px_50px_rgb(156_175_136_/_0.22)]">
                <CakeSlice className="h-8 w-8" />
              </span>
              <span>
                <span className="block font-serif text-3xl font-black leading-none">Modern Bakery</span>
                <span className="mt-2 block text-xs font-black uppercase tracking-[0.22em] text-cream/55">
                  Admapur, Kolhapur
                </span>
              </span>
            </Link>
            <p className="leading-7 text-cream/72">
              Fresh puffs, pav, biscuits, and cakes from a Kolhapur bakery
              counter built for everyday cravings.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {bakeryHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border border-cream/12 bg-cream/8 px-3 py-2 text-xs font-bold text-cream/72"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-saffron">
              Browse
            </h3>
            <ul className="space-y-4 text-sm font-black text-cream/72">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-saffron">
                    <span className="h-px w-5 bg-cream/20 transition-all group-hover:w-8 group-hover:bg-saffron" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-saffron">
              Counter
            </h3>
            <ul className="space-y-5 text-sm text-cream/74">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-cream/12 bg-cream/8">
                  <MapPin className="h-4 w-4 text-saffron" />
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-6 hover:text-saffron"
                >
                  Modern Bakery, Admapur, Bhudargad, Kolhapur 416208
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-cream/12 bg-cream/8">
                  <Phone className="h-4 w-4 text-saffron" />
                </span>
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="hover:text-saffron">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-cream/12 bg-cream/8">
                  <Mail className="h-4 w-4 text-saffron" />
                </span>
                <a href={`mailto:${feedbackRecipient}`} className="hover:text-saffron">
                  {feedbackRecipient}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-cream/12 bg-cream/8">
                  <Clock3 className="h-4 w-4 text-saffron" />
                </span>
                <span className="leading-6">Open most days, morning to evening. Call for fresh batch timing.</span>
              </li>
            </ul>
          </div>

          <div className="border border-cream/12 bg-cream/[0.06] p-5 shadow-[0_24px_80px_rgb(0_0_0_/_0.18)]">
            <div className="mb-5 flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-saffron text-ink">
                <MessageSquareText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.22em] text-saffron">
                  Feedback
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/70">
                  Tell us what tasted great, or what we should bake next.
                </p>
              </div>
            </div>
            <form onSubmit={handleFeedbackSubmit} className="space-y-3">
              <input
                type="email"
                name="customerEmail"
                value={customerEmail}
                onChange={(event) => setCustomerEmail(event.target.value)}
                placeholder="Your email"
                required
                className="h-12 w-full border border-cream/14 bg-ink/40 px-4 text-sm text-cream outline-none placeholder:text-cream/40 focus:border-saffron"
              />
              <textarea
                name="feedback"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder="Your feedback"
                rows={3}
                required
                className="w-full resize-none border border-cream/14 bg-ink/40 px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/40 focus:border-saffron"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 w-full items-center justify-center gap-2 bg-saffron px-4 text-sm font-black uppercase tracking-[0.16em] text-ink hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {status === "sending" ? "Sending" : "Send"}
              </button>
              {status === "sent" && (
                <p className="text-sm font-semibold text-saffron">Feedback sent. Thank you.</p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold text-cream/80">
                  Feedback could not be sent. Check EmailJS settings and try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/12 pt-6 text-sm text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Modern Bakery. Baked fresh daily.</p>
          <p className="font-bold uppercase tracking-[0.18em]">Pav, puffs, biscuits, cakes</p>
        </div>
      </div>
    </footer>
  );
}
