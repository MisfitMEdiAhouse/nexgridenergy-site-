import React, { useEffect, useMemo, useState } from "react";
import {
  BatteryCharging,
  Bolt,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Home,
  Menu,
  MessageCircle,
  PanelTop,
  ShieldCheck,
  Sun,
  X,
  Zap
} from "lucide-react";

const CHAT_URL =
  "https://chat.nexgridenergy.net/chat?utm_source=nexgrid_site&utm_medium=website&utm_campaign=public_site";

const FORM_CHAT_URL =
  "https://chat.nexgridenergy.net/chat?utm_source=nexgrid_site&utm_medium=form&utm_campaign=assessment_request";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg shadow-teal-900/20">
        <Zap size={25} strokeWidth={2.6} />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-black tracking-tight text-white">
          Nex<span className="text-teal-300">Grid</span>
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
          Energy
        </div>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Backup Power", "#backup-power"],
    ["How It Works", "#how-it-works"],
    ["Financing", "#financing"],
    ["FAQ", "#faq"],
    ["Privacy", "#privacy"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a className="btn-primary" href={CHAT_URL}>
            Start Assessment
          </a>
        </nav>

        <button
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-slate-950/90 p-5 backdrop-blur-xl lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              className="rounded-xl border border-white/10 p-2 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <X />
            </button>
          </div>

          <div className="grid gap-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-lg font-bold text-white"
              >
                {label}
              </a>
            ))}
            <a
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 text-center"
              href={CHAT_URL}
            >
              Start Free Backup Power Assessment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#071827]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-200">
            <ShieldCheck size={17} />
            Home backup power assessments
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Backup Power for the Home You Refuse to Leave Vulnerable.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
            NexGrid Energy helps homeowners protect against outages, rising
            utility costs, and grid uncertainty with Humless battery backup
            systems and smart home energy assessments.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary justify-center" href={CHAT_URL}>
              Start Free Backup Power Assessment
              <ChevronRight size={18} />
            </a>
            <a className="btn-secondary justify-center" href="#booking">
              Book Home Backup Power Assessment
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Home backup battery systems",
              "Inverter and panel integration",
              "Solar pairing options",
              "Financing available",
              "Local energy assessment"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="text-teal-300" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card self-center p-6">
          <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-teal-100 p-3 text-teal-700">
                <BatteryCharging size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black">Free Backup Power Assessment</h2>
                <p className="text-sm font-medium text-slate-500">
                  Find out what your home needs before the next outage.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Outage risk", "How exposed your home is during grid interruptions."],
                ["Solar/battery fit", "Whether storage pairs with your solar or future system."],
                ["Backup priorities", "What loads matter most: fridge, HVAC, medical, internet."],
                ["Financing path", "Options to make protection more affordable."],
                ["Install readiness", "Panel, inverter, and permitting considerations."]
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-black text-slate-900">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{body}</div>
                </div>
              ))}
            </div>

            <a className="btn-dark mt-6 w-full justify-center" href={CHAT_URL}>
              Start Assessment
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-grid">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="section-title text-slate-950">
            Grid instability is no longer somebody else’s problem.
          </h2>
          <p className="section-copy">
            Outages, peak pricing, and utility uncertainty are pushing homeowners
            to rethink backup power. A battery system can help keep essential
            loads running and create a smarter path toward energy independence.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            ["Power outages", "Protect critical loads when the grid goes down.", Bolt],
            ["Rising utility costs", "Understand whether storage can improve your energy strategy.", CircleDollarSign],
            ["Solar pairing", "Store more of your solar energy for when it matters.", Sun]
          ].map(([title, body, Icon]) => (
            <div key={title} className="feature-card">
              <Icon className="text-teal-600" />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackupPower() {
  return (
    <section id="backup-power" className="section bg-white">
      <div className="container-grid">
        <div className="order-2 lg:order-1">
          <div className="rounded-[2rem] bg-[#071827] p-6 text-white shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <BatteryCharging className="mb-5 text-teal-300" size={44} />
              <h3 className="text-3xl font-black">Humless Battery Backup Solutions</h3>
              <p className="mt-4 leading-7 text-slate-300">
                NexGrid Energy helps homeowners evaluate and install Humless
                battery backup solutions for essential loads, solar pairing, and
                resilience planning.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Backup power</p>
          <h2 className="section-title text-slate-950">
            Battery backup designed around the way your home actually runs.
          </h2>
          <p className="section-copy">
            Every home is different. Your backup plan should account for outage
            history, panel readiness, load priorities, solar compatibility,
            utility rules, and budget.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              "Essential load backup planning",
              "Whole-home backup feasibility review",
              "Inverter and electrical panel considerations",
              "Solar-ready storage options",
              "Installation and permit readiness"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-teal-600" size={20} />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Start the AI assessment", "Answer a few quick questions about your home, outages, solar, and energy goals.", MessageCircle],
    ["Tell us your concerns", "Prioritize backup loads, budget, and whether your main concern is outages or bills.", ClipboardCheck],
    ["Review options", "See what kind of battery/inverter path may fit your home.", BatteryCharging],
    ["Book an assessment", "Schedule a home backup power assessment with a NexGrid specialist.", CalendarCheck],
    ["Install your system", "Move from assessment to installation planning, permits, and final setup.", Home]
  ];

  return (
    <section id="how-it-works" className="section bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title text-slate-950">
            From quick assessment to a clear backup power plan.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, body, Icon], index) => (
            <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-2xl bg-teal-50 p-3 text-teal-700">
                  <Icon />
                </div>
                <span className="text-sm font-black text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Financing() {
  return (
    <section id="financing" className="section bg-[#071827] text-white">
      <div className="container-grid">
        <div>
          <p className="eyebrow text-teal-300">Financing</p>
          <h2 className="section-title text-white">
            Protect your home without guessing your way through the numbers.
          </h2>
          <p className="section-copy text-slate-300">
            Financing availability and final pricing depend on system design,
            equipment, home electrical conditions, permits, and lender approval.
            The assessment helps clarify your options before you commit.
          </p>
          <a className="btn-primary mt-8" href={CHAT_URL}>
            Start Assessment
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid gap-4">
          {[
            ["Budget alignment", "Understand what system size and backup priorities match your budget."],
            ["Solar pairing", "Explore how battery backup can complement existing or future solar."],
            ["Install readiness", "Review panel, inverter, utility, and permitting considerations."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolarPairing() {
  return (
    <section className="section bg-white">
      <div className="container-grid">
        <div>
          <p className="eyebrow">Solar pairing</p>
          <h2 className="section-title text-slate-950">
            Already have solar? Battery backup may be your missing piece.
          </h2>
          <p className="section-copy">
            Many solar homes still go dark during outages unless the system is
            designed with storage and the right backup configuration. NexGrid
            helps identify whether your home is ready for battery pairing.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-4">
            <div className="feature-card bg-white">
              <Sun className="text-amber-500" />
              <div>
                <h3>Solar installed</h3>
                <p>Evaluate whether your existing system can support storage.</p>
              </div>
            </div>
            <div className="feature-card bg-white">
              <PanelTop className="text-teal-600" />
              <div>
                <h3>Panel review</h3>
                <p>Understand electrical readiness before installation.</p>
              </div>
            </div>
            <div className="feature-card bg-white">
              <BatteryCharging className="text-green-600" />
              <div>
                <h3>Battery path</h3>
                <p>Build toward essential load or whole-home backup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Does NexGrid manufacture Humless equipment?", "No. NexGrid Energy helps homeowners evaluate and install Humless battery backup solutions. Final equipment recommendations depend on the assessment."],
    ["Can a battery power my whole home?", "Sometimes. It depends on load priorities, system size, electrical panel configuration, inverter capacity, and budget."],
    ["Do I need solar to use battery backup?", "Not always. Battery systems may be installed with or without solar depending on your goals and equipment design."],
    ["Is financing available?", "Financing may be available depending on project scope, eligibility, and lender approval."],
    ["Will this lower my utility bill?", "Potential savings vary. NexGrid does not guarantee savings. An assessment is required to understand your energy profile."]
  ];

  return (
    <section id="faq" className="section bg-slate-50">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title text-slate-950">Questions homeowners ask first.</h2>

        <div className="mt-8 grid gap-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-black text-slate-950">
                {question}
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [smsConsent, setSmsConsent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = FORM_CHAT_URL;
  }

  return (
    <section id="booking" className="section bg-white">
      <div className="container-grid">
        <div>
          <p className="eyebrow">Start here</p>
          <h2 className="section-title text-slate-950">
            Start your free backup power assessment.
          </h2>
          <p className="section-copy">
            Tell us what you care about most: outages, rising utility costs,
            solar battery pairing, whole-home backup, or financing.
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            By submitting a form, you agree to receive automated SMS messages
            from NexGrid Energy regarding home backup power systems, energy
            assessments, appointment scheduling, and customer support. Message
            frequency varies. Message and data rates may apply. Reply STOP to
            opt out or HELP for help. Consent is not a condition of purchase.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" placeholder="First name" />
            <input className="field" placeholder="Last name" />
            <input className="field" placeholder="Phone" type="tel" />
            <input className="field" placeholder="Email" type="email" />
            <input className="field sm:col-span-2" placeholder="ZIP code" />
            <select className="field sm:col-span-2" defaultValue="">
              <option value="" disabled>
                Biggest concern
              </option>
              <option>Power outages</option>
              <option>High utility bills</option>
              <option>Solar battery pairing</option>
              <option>Whole-home backup</option>
              <option>Financing</option>
            </select>
          </div>

          <label className="mt-5 flex gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700">
            <input
              type="checkbox"
              checked={smsConsent}
              onChange={(e) => setSmsConsent(e.target.checked)}
              className="mt-1 h-5 w-5"
            />
            <span>
              I agree to receive automated SMS messages from NexGrid Energy.
              Message/data rates may apply. Reply STOP to opt out. Consent is
              not a condition of purchase.
            </span>
          </label>

          <button className="btn-dark mt-5 w-full justify-center" type="submit">
            Continue to AI Assessment
            <ChevronRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <main className="bg-slate-50">
      <Header />
      <LegalPage title="Privacy Policy">
        <p>
          NexGrid Energy collects information you provide through forms, chat
          assessments, scheduling links, and contact requests. This may include
          your name, phone number, email address, ZIP code, home energy concerns,
          appointment preferences, and related assessment details.
        </p>
        <p>
          We use this information to respond to inquiries, provide energy
          assessments, schedule appointments, support customer service, and
          improve our services.
        </p>
        <p>
          If you provide SMS consent, you may receive automated SMS messages
          from NexGrid Energy regarding home backup power systems, energy
          assessments, appointment scheduling, and customer support. Message
          frequency varies. Message and data rates may apply. Reply STOP to opt
          out or HELP for help. Consent is not a condition of purchase.
        </p>
        <p>
          We may use service providers such as Base44, Twilio, Calendly, Resend,
          website hosting providers, analytics providers, and related operations
          platforms to process information and deliver services.
        </p>
        <p>
          NexGrid Energy does not sell personal information. Public permit
          records, if used for market research, are not treated as SMS or email
          consent.
        </p>
      </LegalPage>
      <Footer />
    </main>
  );
}

function Terms() {
  return (
    <main className="bg-slate-50">
      <Header />
      <LegalPage title="Terms of Service">
        <p>
          This website provides general information about NexGrid Energy, home
          backup power, Humless battery backup solutions, solar pairing,
          financing, and energy assessments.
        </p>
        <p>
          Information on this site is not a final design, savings estimate,
          utility recommendation, engineering plan, or installation guarantee.
          Final recommendations require an assessment and may depend on home
          electrical conditions, equipment availability, permitting, utility
          rules, and local regulations.
        </p>
        <p>
          NexGrid Energy does not guarantee utility savings, outage prevention,
          or uninterrupted power. Battery backup performance depends on system
          design, battery capacity, inverter configuration, load selection, and
          installation conditions.
        </p>
        <p>
          If you opt in to SMS messages, you may reply STOP to opt out or HELP
          for help. Consent is not a condition of purchase.
        </p>
      </LegalPage>
      <Footer />
    </main>
  );
}

function LegalPage({ title, children }) {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-7 shadow-sm lg:p-10">
        <h1 className="text-4xl font-black text-slate-950">{title}</h1>
        <div className="prose-content mt-8">{children}</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071827] px-5 py-12 text-slate-300 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <div className="flex flex-wrap gap-5 text-sm font-semibold">
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#terms" className="hover:text-white">Terms of Service</a>
          <a href={CHAT_URL} className="hover:text-white">Start Assessment</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <BackupPower />
      <HowItWorks />
      <Financing />
      <SolarPairing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const page = useMemo(() => {
    if (route === "#privacy") return <Privacy />;
    if (route === "#terms") return <Terms />;
    return <HomePage />;
  }, [route]);

  return page;
}
