/**
 * ============================================================
 *  ENY SUPPORT PAGE — SINGLE SOURCE OF TRUTH
 *  Edit this file only. Add / remove / reorder people freely;
 *  the grid adapts to however many members you list.
 * ============================================================
 *
 *  HOW TO ADD A HEADSHOT
 *  1. Drop the image in  /public/team/   (e.g. /public/team/ada.jpg)
 *  2. Set  image: "/team/ada.jpg"  below.
 *  If `image` is missing or the file fails to load, a styled
 *  initials avatar is shown automatically (nothing breaks).
 *
 *  Tip: square, face-centred images (min 600×600) look best.
 *
 *  WHATSAPP NUMBER FORMAT
 *  International format, digits only, no "+", spaces or dashes.
 *  Nigeria example: 2348012345678  (234 + number without leading 0)
 *  Canada example:  14165551234
 */

export type TeamMember = {
  name: string;
  role: string;
  /** Short line under the role, e.g. what they help with */
  blurb: string;
  /** Digits only, international format */
  whatsapp: string;
  /** Path inside /public, e.g. "/team/ada.jpg" */
  image?: string;
  /** Optional extras — remove if not needed */
  email?: string;
  /** Small chips shown on the card */
  tags?: string[];
  /** Custom WhatsApp opening message (falls back to site.defaultMessage) */
  message?: string;
};

export const site = {
  brand: "ENY Consulting",
  eyebrow: "Sales & Enrollment Support",
  headline: "Talk to a real person.",
  headlineAccent: "Get answers in minutes.",
  subheadline:
    "Questions about our programs, pricing, payment, or how to enroll? Pick a support team member below and message them directly on WhatsApp.",
  availability: "Mon – Fri · 9:00 AM – 6:00 PM (WAT)",
  responseTime: "Typically replies within minutes",
  defaultMessage:
    "Hello ENY Consulting 👋 I'd like to learn more about your program and how to enroll.",
  /** Optional: shown in footer. Leave "" to hide. */
  website: "https://businessanalysisschool.com",
  websiteLabel: "businessanalysisschool.com",
};

export const helpTopics = [
  { icon: "🎓", title: "Program Enrollment", text: "Get enrolled and secure your spot." },
  { icon: "💳", title: "Payments & Pricing", text: "Plans, receipts and payment options." },
  { icon: "🧭", title: "Choosing the Right Fit", text: "Not sure where to start? We'll guide you." },
  { icon: "🛠️", title: "Access & Onboarding", text: "Login, materials and getting started." },
];

/* ---------- TEAM (4 members — replace the placeholders) ---------- */
export const team: TeamMember[] = [
  {
    name: "Madojemu Glory",
    role: "Sales & Enrollment Support",
    blurb: "Programs, pricing and enrollment guidance.",
    whatsapp: "2349169994482",
    image: "/team/member-1.png",
    tags: ["Enrollment", "Pricing", "Guidance", "General"],
  },
  {
    name: "Abe Kehinde",
    role: "Sales Associate",
    blurb: "Helps you pick the right program and get started.",
    whatsapp: "2349085539380",
    image: "/team/member-2.png",
    tags: ["Programs", "Onboarding"],
  },
  {
    name: "Adegoke Esther",
    role: "Sales & Enrollment Support",
    blurb: "Payments, receipts and account access.",
    whatsapp: "234 916 999 4483",
    image: "/team/member-3.jpeg",
    tags: ["Payments", "Access"],
  },
  {
    name: "Obike Franca",
    role: "Sales Support",
    blurb: "General enquiries and partnership questions.",
    whatsapp: "2349085515969",
    image: "/team/member-4.jpeg",
    tags: ["General", "Partnerships"],
  },
];

/** Builds a wa.me link with a prefilled message */
export function waLink(number: string, message?: string) {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message ?? site.defaultMessage);
  return `https://wa.me/${digits}?text=${text}`;
}
