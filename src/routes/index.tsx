import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, FolderOpen, Briefcase, Award, Zap, FileText, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal, Stagger } from "@/components/ScrollReveal";
import { HoverPortrait } from "@/components/HoverPortrait";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageLoader } from "@/components/PageLoader";
import { ContactForm } from "@/components/ContactForm";
import { FloatingContact } from "@/components/FloatingContact";
import { CubeStage } from "@/components/CubeStage";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kusha Kumar NR — UX & Product Designer" },
      { name: "description", content: "UX and Product Designer (HFI CUA) with 8+ years of experience designing human-centered products across e-learning, ecommerce, healthcare, finance and airlines." },
      { property: "og:title", content: "Kusha Kumar NR — UX & Product Designer" },
      { property: "og:description", content: "Senior UX/UI Designer crafting intuitive, accessible products. Currently at Wipro." },
      { property: "og:url", content: "https://kushakumar.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://kushakumar.lovable.app/" },
    ],
  }),
  component: Portfolio,
});

const ROLES = [
  "UX & Product Designer",
  "HFI Certified Usability Analyst",
  "Senior UX/UI Designer at Wipro",
  "Design systems & accessibility",
];

function Portfolio() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <PageLoader />
      <FloatingNav />
      <FloatingContact />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl w-full">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface/60 backdrop-blur text-xs text-muted-ink mb-8">
              <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
              Open to senior product design roles
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.02]">
              Hi, I'm <span className="text-foreground">Kusha Kumar</span> — UX &amp; Product Designer
            </h1>
          </ScrollReveal>

          <div className="mt-6 h-14 sm:h-16 relative">
            {ROLES.map((r, i) => (
              <h2
                key={r}
                className="absolute inset-0 text-3xl sm:text-5xl font-semibold tracking-tight text-accent-blue"
                style={{
                  opacity: i === idx ? 1 : 0,
                  transform: i === idx ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity .6s ease, transform .6s ease",
                }}
              >
                {r}
              </h2>
            ))}
          </div>

          <ScrollReveal delay={160}>
            <div className="mt-12 mb-10">
              <HoverPortrait />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className="text-base sm:text-lg text-muted-ink max-w-2xl mx-auto leading-relaxed">
              A collaborative User Experience Designer with <span className="text-foreground">8+ years</span> bridging research, behavior and craft.
              I turn ambiguous problems into intuitive products across e-learning, ecommerce, healthcare, finance and airlines.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:Kushnr192@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue">
                <Mail className="size-4" />Get in touch
              </a>
              <a href="https://www.behance.net/kushinr619945f" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline bg-surface/60 backdrop-blur text-sm font-medium hover:bg-surface-2 hover:-translate-y-0.5 transition">
                View Behance<ArrowUpRight className="size-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="Designing with humans in mind.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-muted-ink leading-relaxed text-lg">
            <p>
              My background in Computer Applications shaped me to be <span className="text-foreground">intuitive, analytical and creative</span> — and gave me a lens to understand humans from individual behaviors to broader psychological patterns.
            </p>
            <p>
              Training as an <span className="text-foreground">HFI Certified Usability Analyst</span> pushed me beyond research, toward building products that genuinely meet human needs. I love finding creative solutions to complex problems, and I'm endlessly enthusiastic about the meaningful impact good products can create.
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-surface p-6 space-y-4">
            <Stat k="8+ yrs" v="Designing products" />
            <Stat k="5 industries" v="E-learning, Ecommerce, Healthcare, Finance, Airlines" />
            <Stat k="HFI CUA" v="Certified Usability Analyst, 2023" />
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Where I've designed.">
        <Stagger className="space-y-3" step={80} y={20}>
          {EXPERIENCE.map((e) => (
            <ExperienceRow key={e.company + e.period} {...e} />
          ))}
        </Stagger>
      </Section>

      {/* SKILLS / TOOLKIT */}
      <Section id="skills" eyebrow="Toolkit" title="Craft, research & systems.">
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" step={70} y={20}>
          {SKILLS.map((g) => (
            <div key={g.title} className="group rounded-2xl border border-hairline bg-surface overflow-hidden h-full hover:border-accent-blue/40 transition">
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-background">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.slice(0, 4).map((it) => (
                      <span key={it} className="px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-wider text-foreground/90 border border-hairline">{it}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-3 right-3 size-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 grid place-items-center text-accent-blue text-lg font-bold">
                  {g.title[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-blue" />
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="px-3 py-1.5 rounded-full bg-surface-2 text-muted-ink text-xs border border-hairline">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Stagger>
      </Section>

      {/* PROJECTS */}
     <Section id="projects" eyebrow="Selected work" title="Projects you need to see.">
  <ScrollReveal>
    <p className="text-muted-ink -mt-6 mb-10 max-w-xl">
      For NDA compliance, deeper case studies are available on request. Curious?{" "}
      <a href="mailto:Kushnr192@gmail.com" className="text-accent-blue underline-offset-4 hover:underline">Drop me a line</a>.
    </p>
  </ScrollReveal>

  {/* First 7 — Projects */}
  <Stagger className="grid md:grid-cols-2 gap-5" step={100} y={28}>
    {PROJECTS.slice(0, 7).map((p) => (
      <ProjectCard key={p.slug} slug={p.slug} title={p.title} tag={p.tag} blurb={p.blurb} image={p.image} />
    ))}
  </Stagger>

  {/* Case Study heading */}
  <ScrollReveal>
    <h3 className="mt-16 mb-8 text-2xl font-semibold tracking-tight">Case Study</h3>
  </ScrollReveal>

  {/* The balance — Case Studies */}
  <Stagger className="grid md:grid-cols-2 gap-5" step={100} y={28}>
    {PROJECTS.slice(7).map((p) => (
      <ProjectCard key={p.slug} slug={p.slug} title={p.title} tag={p.tag} blurb={p.blurb} image={p.image} />
    ))}
  </Stagger>
</Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education & Certificates" title="Where I learned.">
        <Stagger className="grid md:grid-cols-2 gap-4" step={70} y={20}>
          {EDUCATION.map((ed) => (
            <div key={ed.school} className="rounded-2xl border border-hairline bg-surface p-6">
              <div className="text-xs text-muted-ink mb-2">{ed.period}</div>
              <h3 className="font-semibold">{ed.school}</h3>
              <p className="text-sm text-muted-ink mt-1">{ed.degree}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-32">
        <div className="max-w-4xl mx-auto rounded-3xl border border-hairline bg-gradient-to-b from-surface to-background p-10 md:p-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-4">Let's build something</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Have a problem worth <span className="text-accent-blue">solving?</span>
          </h2>
          <p className="mt-5 text-muted-ink max-w-xl mx-auto">
            I'm always up for thoughtful conversations about product, design systems and accessibility.
          </p>

          <ContactForm />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:Kushnr192@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition">
              <Mail className="size-4" /><span>Kushnr192@gmail.com</span>
            </a>
            <a href="tel:+919008472125" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline text-sm hover:bg-surface-2 hover:-translate-y-0.5 transition">
              +91 90084 72125
            </a>
            <a href="https://shorturl.at/hquwJ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline text-sm hover:bg-surface-2 hover:-translate-y-0.5 transition">
              <Linkedin className="size-4" /><span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* FOOTER 3D CUBE STAGE */}
        <div className="max-w-4xl mx-auto mt-16">
          <CubeStage />
        </div>

        <p className="text-center text-xs text-muted-ink mt-10">
          Designed and developed by{" "}
          <a href="https://www.yusuffux.com" target="_blank" rel="noreferrer" className="text-accent-blue underline-offset-4 hover:underline">
            YusuffGems
          </a>
        </p>
      </section>
    </div>
  );
}

function FloatingNav() {
  const items = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#projects", icon: FolderOpen, label: "Projects" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#education", icon: Award, label: "Education" },
    { href: "#skills", icon: Zap, label: "Skills" },
    { href: "#contact", icon: FileText, label: "Contact" },
  ];

  return (
    <nav
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-[9999]

        md:top-5
        md:bottom-auto
      "
      aria-label="Primary"
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-hairline bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-visible">
        {/* Logo / Home */}
        <a
          href="#home"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-surface-2 transition"
          aria-label="Go to Home"
        >
          <div className="size-6 rounded-md bg-accent-blue flex items-center justify-center text-[10px] font-bold text-primary-foreground">
            K
          </div>

          <span className="text-sm font-medium hidden lg:inline">
            Kusha Kumar
          </span>
        </a>

        <span className="w-px h-5 bg-hairline mx-1 hidden sm:block" />

        {/* Navigation Items */}
        {items.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="
              group
              relative
              size-8
              md:size-9
              rounded-full
              grid
              place-items-center
              text-muted-ink
              hover:text-foreground
              hover:bg-surface-2
              transition-all
              duration-200
            "
          >
            <Icon className="size-4" />

            {/* Desktop Tooltip */}
            <span
              className="
                absolute
                -bottom-10
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                rounded-md
                bg-black
                px-3
                py-1
                text-xs
                text-white
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-200
                pointer-events-none
                z-[99999]
                hidden md:block
              "
            >
              {label}
            </span>
          </a>
        ))}

        <span className="w-px h-5 bg-hairline mx-1 hidden sm:block" />

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-24 md:py-32 max-w-6xl mx-auto w-full">
      <div className="mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-accent-blue mb-3">{eyebrow}</div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-foreground">{k}</div>
      <div className="text-sm text-muted-ink">{v}</div>
    </div>
  );
}

function ExperienceRow({ company, role, period, summary }: { company: string; role: string; period: string; summary: string }) {
  return (
    <div className="group rounded-2xl border border-hairline bg-surface hover:bg-surface-2 transition p-6 md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{company}</h3>
        <span className="text-xs text-muted-ink">{period}</span>
      </div>
      <div className="text-accent-blue text-sm mt-1">{role}</div>
      <p className="text-muted-ink mt-3 leading-relaxed">{summary}</p>
    </div>
  );
}


function ProjectCard({ slug, title, tag, blurb, image }: { slug: string; title: string; tag: string; blurb: string; image: string }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      aria-label={`${title} — view case study`}
      className="group block rounded-2xl border border-hairline bg-surface overflow-hidden hover:border-accent-blue/40 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
    >
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={image}
          alt={`${title} — ${tag} case study preview`}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-accent-blue">{tag}</span>
          <ArrowUpRight className="size-4 text-muted-ink group-hover:text-foreground transition" />
        </div>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-ink mt-2 leading-relaxed">{blurb}</p>
      </div>
    </Link>
  );
}

const EXPERIENCE = [
  {
    company: "Wipro", role: "Senior UX Designer", period: "Mar 2025 — Present",
    summary: "Leading end-to-end design from concept to delivery, managing client interactions and applying UX methodology to enterprise, finance, SaaS and experiential domains."
  },
  {
    company: "Spekond Technology", role: "UX Designer", period: "Nov 2024 — Feb 2025",
    summary: "Crafted intuitive, visually appealing interfaces for customer-facing platforms — websites, mobile apps and kiosks for booking, check-in and flight tracking."
  },
  {
    company: "Flatworld Solution", role: "UI Designer & Graphic", period: "Jun 2024 — Nov 2024",
    summary: "Produced final designs for infographics, presentations, banners, website pages, case studies and white papers across the business."
  },
  {
    company: "Lobotus Technology (Pearson India)", role: "UX Designer", period: "Jan 2021 — Apr 2023",
    summary: "Ran qualitative and quantitative research to improve end-user experiences. Tested with WCAG accessibility standards to make products usable for disabled users as well."
  },
  {
    company: "Canopus-GBS Pvt Ltd, Bangalore", role: "UX & UI Designer", period: "Aug 2019 — Mar 2020",
    summary: "Research, ideation, prototyping and MVP building. Collaborated with product and engineering via Figma, Jira and Miro to ship simplified flows for complex information."
  },
  {
    company: "Codeinks Software Pvt Ltd", role: "Junior UI & UX Designer", period: "Feb 2016 — Jun 2019",
    summary: "Supported senior designers on mobile application design and produced digital boards in Photoshop and XD for brand submittals."
  },
];

const SKILLS = [
  { title: "Design", items: ["Figma", "Sketch", "Adobe XD", "Illustrator", "Photoshop", "InDesign"] },
  { title: "Secondary", items: ["HTML", "CSS", "After Effects", "3D Maya"] },
  { title: "UX Design", items: ["HCD", "Design Strategy", "Personas", "Heuristic Evaluation", "Task Flow", "IA", "Wireframes", "Prototyping", "Usability Testing", "Accessibility"] },
  { title: "UI Design", items: ["Typography", "Micro-interactions", "Branding", "Style Guides", "Design Systems", "HiFi Mockups"] },
  { title: "User Research", items: ["Interviews", "Surveys", "A/B Testing", "Card Sorting", "Field Studies", "Eyetracking", "Analytics"] },
  { title: "Workshops", items: ["Design Sprints", "Experience Canvas", "Lightning Decision Jam", "Journey Maps", "Story Maps"] },
];


const EDUCATION = [
  { school: "NASSCOM", degree: "HFI Certified Usability Analyst Training", period: "Aug 2023" },
  { school: "Bridge UX Design Studios, Bangalore", degree: "UX Product Design", period: "2017" },
  { school: "Zee Institute of Creative Art, Mangalore", degree: "Diploma in Graphics & 3D Animation", period: "Aug 2012 — Aug 2014" },
  { school: "Gulbarga University", degree: "BCA — Bachelor of Computer Applications", period: "Jun 2009 — Jun 2012" },
];
