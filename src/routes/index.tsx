import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  Menu,
  Palette,
  Rocket,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";

import logoAsset from "@/assets/aethrix-logo.jpg.asset.json";
import markAsset from "@/assets/aethrix-mark.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aethrix Creatives — Where Ideas Become Impact" },
      {
        name: "description",
        content:
          "Aethrix Creatives is a modern design and digital agency delivering brand, UI/UX, web, Canva, and AI-powered creative solutions.",
      },
      { property: "og:title", content: "Aethrix Creatives — Where Ideas Become Impact" },
      {
        property: "og:description",
        content: "Creative solutions for modern brands, from identity and interfaces to web and AI-powered production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    id: "uiux",
    number: "01",
    title: "UI/UX Design",
    short: "UI/UX",
    description: "Intuitive digital experiences shaped around real users and measurable goals.",
    items: ["Wireframing", "Mobile & Web UI", "Dashboards", "Landing Pages", "E-commerce"],
    icon: Layers3,
  },
  {
    id: "graphic",
    number: "02",
    title: "Graphic Design & Branding",
    short: "Branding",
    description: "Distinctive identity systems and visual communication that stay coherent everywhere.",
    items: ["Logo Design", "Brand Guidelines", "Pitch Decks", "Corporate Reports", "Marketing Collateral", "Social Graphics"],
    icon: Palette,
  },
  {
    id: "web",
    number: "03",
    title: "Web Design & Development",
    short: "Web",
    description: "Fast, responsive digital platforms built to communicate clearly and convert confidently.",
    items: ["Responsive Web Apps", "Corporate & SaaS Sites", "E-commerce", "Speed Optimization", "SEO Foundations"],
    icon: Code2,
  },
  {
    id: "ai",
    number: "04",
    title: "AI-Powered Creative",
    short: "AI Creative",
    description: "Human-led creative enhanced by intelligent tools for speed, scale, and new possibilities.",
    items: ["Product Visuals", "Short-form Video", "Image Enhancement", "Creative Automation"],
    icon: Bot,
  },
  {
    id: "canva",
    number: "05",
    title: "Canva Template Design",
    short: "Canva",
    description: "Practical, polished template systems your team can use without breaking the brand.",
    items: ["Custom Brand Kits", "Social Media Kits", "Presentation Templates", "Team Templates"],
    icon: Sparkles,
  },
];

const workflowLevels = [
  {
    label: "Level 1",
    title: "Agency Workflow",
    copy: "A clear, accountable path from first conversation to final handoff.",
    stages: ["Discovery", "Strategy", "Production", "Quality Check", "Delivery"],
  },
  {
    label: "Level 2",
    title: "Service Flow",
    copy: "A tailored production pipeline adapted to the craft, tools, and outcomes of each discipline.",
    stages: ["Brief", "Research", "Concept", "Refinement", "Handoff"],
  },
  {
    label: "Level 3",
    title: "Standard Operating Procedures",
    copy: "Documented systems that protect consistency, quality, speed, and dependable turnaround.",
    stages: ["Define", "Plan", "Execute", "Review", "Improve"],
  },
];

const industries = [
  { name: "Tech & SaaS", copy: "Interfaces, product brands, websites, and launch systems.", icon: Code2 },
  { name: "E-commerce & Retail", copy: "Product storytelling, online stores, campaigns, and ads.", icon: ShoppingBag },
  { name: "Startups & Corporate", copy: "Identity, pitch decks, reports, and scalable web presence.", icon: Rocket },
  { name: "Healthcare", copy: "Clear, trusted communication for clinics and health campaigns.", icon: HeartPulse },
  { name: "Education", copy: "Engaging systems for schools, universities, and e-learning.", icon: GraduationCap },
  { name: "NGOs & Nonprofits", copy: "Impact reports, campaigns, infographics, and event brands.", icon: Users },
];

const values = [
  { title: "Creative Meets Strategy", copy: "Beautiful work designed to move a clear business goal forward.", icon: Target },
  { title: "Tailored Design", copy: "Original solutions shaped around your audience, voice, and ambition.", icon: Lightbulb },
  { title: "AI-Enhanced Workflow", copy: "Modern tools accelerate production while human judgment leads.", icon: Bot },
  { title: "Reliable Delivery", copy: "Structured milestones, clear communication, and dependable timing.", icon: Zap },
  { title: "Consistent Experience", copy: "One coherent brand language across every customer touchpoint.", icon: BadgeCheck },
  { title: "Long-Term Partner", copy: "A creative team that learns your brand and grows alongside it.", icon: Users },
];

const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500+"];
const timelines = ["As soon as possible", "2–4 weeks", "1–2 months", "Flexible"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-grid">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "services"],
    ["Workflow", "workflow"],
    ["Industries", "industries"],
    ["Why Us", "why-us"],
    ["Contact", "contact"],
  ];
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Aethrix Creatives home">
        <img src={logoAsset.url} alt="Aethrix Creatives" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <Button className="nav-cta" onClick={() => scrollTo("contact")}>Start a Project <ArrowRight /></Button>
      <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowRight /></a>)}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <div className="availability"><span /> Now accepting select projects</div>
        <h1>Where ideas<br />become <span>impact.</span></h1>
        <p className="hero-copy">Creative solutions for modern brands—built with clarity, craft, and technology that moves business forward.</p>
        <div className="hero-actions">
          <Button size="lg" onClick={() => scrollTo("contact")}>Start Your Project <ArrowRight /></Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("services")}>Explore Services</Button>
        </div>
        <div className="capability-row" aria-label="Core capabilities">
          {["Graphic Design", "UI/UX Design", "Web Development", "AI-Powered Creative"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <div className="mark-orbit orbit-one" />
        <div className="mark-orbit orbit-two" />
        <img src={markAsset.url} alt="" />
        <div className="mark-note mark-note-one"><span>01</span> Strategy-led</div>
        <div className="mark-note mark-note-two"><span>02</span> Future-ready</div>
      </div>
      <div className="scroll-cue"><span /> Scroll to explore</div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? services : services.filter((service) => service.id === active);
  return (
    <section id="services" className="page-section services-section">
      <SectionHeading eyebrow="Core capabilities" title="One creative partner. Every touchpoint." copy="From first sketch to final launch, we connect strategy, design, technology, and intelligent production." />
      <div className="service-filters" role="tablist" aria-label="Filter services">
        <Button variant={active === "all" ? "default" : "ghost"} onClick={() => setActive("all")}>All services</Button>
        {services.map((service) => <Button key={service.id} variant={active === service.id ? "default" : "ghost"} onClick={() => setActive(service.id)}>{service.short}</Button>)}
      </div>
      <div className={cn("services-grid", visible.length === 1 && "single-service")}> 
        {visible.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.id}>
              <div className="service-top"><span>{service.number}</span><Icon /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Workflow() {
  const [active, setActive] = useState(0);
  const selected = workflowLevels[active];
  return (
    <section id="workflow" className="page-section workflow-section">
      <SectionHeading eyebrow="How we work" title="Creativity, made dependable." copy="Three connected levels turn ambitious ideas into considered, consistent, and launch-ready work." />
      <div className="workflow-shell">
        <div className="workflow-tabs" role="tablist" aria-label="Workflow levels">
          {workflowLevels.map((level, index) => (
            <button key={level.label} className={cn(active === index && "active")} onClick={() => setActive(index)}>
              <span>{level.label}</span><strong>{level.title}</strong><ChevronRight />
            </button>
          ))}
        </div>
        <div className="workflow-detail">
          <p className="eyebrow">{selected.label}</p>
          <h3>{selected.title}</h3>
          <p>{selected.copy}</p>
          <div className="workflow-stages">
            {selected.stages.map((stage, index) => (
              <div key={stage} className="workflow-stage"><span>{String(index + 1).padStart(2, "0")}</span><strong>{stage}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section id="industries" className="page-section industries-section">
      <SectionHeading eyebrow="Who we help" title="Built for ambitious organizations." copy="We translate complex ideas into clear, credible experiences across high-growth and purpose-led sectors." />
      <div className="industries-grid">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return <button key={industry.name} onClick={() => setActive(index)} className={cn("industry-item", active === index && "active")}><span className="industry-index">0{index + 1}</span><Icon /><span><strong>{industry.name}</strong><small>{industry.copy}</small></span><ArrowRight /></button>;
        })}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="page-section why-section">
      <SectionHeading eyebrow="The Aethrix difference" title="More than polished pixels." copy="We combine curiosity, rigor, and modern production systems to create work that keeps earning attention." />
      <div className="values-grid">
        {values.map((value, index) => {
          const Icon = value.icon;
          return <article className="value-card" key={value.title}><div><span>0{index + 1}</span><Icon /></div><h3>{value.title}</h3><p>{value.copy}</p></article>;
        })}
      </div>
    </section>
  );
}

type FormData = { services: string[]; budget: string; timeline: string; name: string; email: string; company: string; brief: string };

function InquiryForm() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({ services: [], budget: "", timeline: "", name: "", email: "", company: "", brief: "" });

  const toggleService = (id: string) => setForm((prev) => ({ ...prev, services: prev.services.includes(id) ? prev.services.filter((item) => item !== id) : [...prev.services, id] }));
  const next = () => {
    if (step === 1 && form.services.length === 0) return setError("Choose at least one service to continue.");
    if (step === 2 && (!form.budget || !form.timeline)) return setError("Choose a budget and timeline to continue.");
    setError("");
    setStep((current) => Math.min(3, current + 1));
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim() || !emailValid || !form.company.trim() || form.brief.trim().length < 20) {
      setError("Complete each field with a valid email and a brief of at least 20 characters.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) return (
    <section id="contact" className="page-section inquiry-section">
      <div className="success-state"><div className="success-icon"><Check /></div><p className="eyebrow">Inquiry received</p><h2>Thank you, {form.name.split(" ")[0]}.</h2><p>Your project brief is ready for review. The Aethrix team will be in touch to explore the next step.</p><Button variant="outline" onClick={() => { setSent(false); setStep(1); setForm({ services: [], budget: "", timeline: "", name: "", email: "", company: "", brief: "" }); }}>Send another inquiry</Button></div>
    </section>
  );

  return (
    <section id="contact" className="page-section inquiry-section">
      <div className="inquiry-intro"><p className="eyebrow">Start a project</p><h2>Let’s make your next idea impossible to ignore.</h2><p>Share the shape of your project. We’ll come back with the right questions, a considered approach, and clear next steps.</p><div className="response-note"><Zap /><span><strong>A focused first response.</strong> Expect a reply within 1–2 business days.</span></div></div>
      <form className="inquiry-form" onSubmit={submit} noValidate>
        <div className="form-progress">
          {[1, 2, 3].map((item) => <div key={item} className={cn(item <= step && "active")}><span>{item < step ? <Check /> : item}</span><small>{["Services", "Scope", "Details"][item - 1]}</small></div>)}
        </div>
        {step === 1 && <div className="form-step"><div className="form-title"><span>01</span><div><h3>What can we create together?</h3><p>Select every service your project may need.</p></div></div><div className="choice-grid services-choice">{services.map((service) => { const Icon = service.icon; const checked = form.services.includes(service.id); return <button type="button" key={service.id} className={cn("choice-card", checked && "selected")} onClick={() => toggleService(service.id)}><Icon /><span>{service.title}</span><i>{checked && <Check />}</i></button>; })}</div></div>}
        {step === 2 && <div className="form-step"><div className="form-title"><span>02</span><div><h3>Define the project scope.</h3><p>A range helps us recommend the right route.</p></div></div><fieldset><legend>Estimated budget</legend><div className="choice-grid compact">{budgets.map((budget) => <button type="button" key={budget} className={cn("choice-card", form.budget === budget && "selected")} onClick={() => setForm({ ...form, budget })}>{budget}<i>{form.budget === budget && <Check />}</i></button>)}</div></fieldset><fieldset><legend>Ideal timeline</legend><div className="choice-grid compact">{timelines.map((timeline) => <button type="button" key={timeline} className={cn("choice-card", form.timeline === timeline && "selected")} onClick={() => setForm({ ...form, timeline })}>{timeline}<i>{form.timeline === timeline && <Check />}</i></button>)}</div></fieldset></div>}
        {step === 3 && <div className="form-step"><div className="form-title"><span>03</span><div><h3>Tell us where to reach you.</h3><p>A few details, then your project is ready for review.</p></div></div><div className="field-grid"><div><Label htmlFor="name">Full name</Label><Input id="name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></div><div><Label htmlFor="email">Work email</Label><Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></div><div className="full-field"><Label htmlFor="company">Company / brand name</Label><Input id="company" maxLength={100} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" /></div><div className="full-field"><Label htmlFor="brief">Project brief</Label><Textarea id="brief" maxLength={1200} value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} placeholder="What are you creating, who is it for, and what should it achieve?" /></div></div></div>}
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-actions">{step > 1 ? <Button type="button" variant="ghost" onClick={() => { setError(""); setStep(step - 1); }}><ChevronLeft /> Back</Button> : <span />}{step < 3 ? <Button type="button" onClick={next}>Continue <ChevronRight /></Button> : <Button type="submit">Send Inquiry <ArrowRight /></Button>}</div>
      </form>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-main"><div className="footer-brand"><img src={logoAsset.url} alt="Aethrix Creatives" /><h2>Where ideas<br />become <span>impact.</span></h2><p>Creative solutions for modern brands.</p></div><div className="footer-directory"><div><p>Services</p>{services.map((service) => <a key={service.id} href="#services">{service.title}</a>)}</div><div><p>Navigate</p><a href="#workflow">Workflow</a><a href="#industries">Industries</a><a href="#why-us">Why us</a><a href="#contact">Contact</a></div></div></div>
      <div className="footer-bottom"><p>© {year} Aethrix Creatives. All rights reserved.</p><div>{["LinkedIn", "Behance", "Dribbble", "Instagram", "X"].map((social) => <a key={social} href="#contact" aria-label={`${social} profile`}>{social}<ExternalLink /></a>)}</div></div>
    </footer>
  );
}

function HomePage() {
  return <main><Header /><Hero /><Services /><Workflow /><Industries /><WhyUs /><InquiryForm /><Footer /></main>;
}