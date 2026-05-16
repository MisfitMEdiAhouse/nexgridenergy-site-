import React, { useState } from "react";

const AI_CHAT_URL = "https://chat.nexgridenergy.net";
const LEAD_EMAIL = "pricemedia82@gmail.com";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    hasSolar: "",
    goal: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(null);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitLead = (e) => {
    e.preventDefault();

    const subject = "NexGrid Energy Backup Power Assessment";
    const body = `
New NexGrid Energy lead:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
ZIP: ${form.zip}
Has solar: ${form.hasSolar}
Main goal: ${form.goal}
SMS consent checked: ${form.consent ? "Yes" : "No"}

Compliance note:
Submitting this form does not enroll the homeowner in automated SMS unless consent is explicitly captured and confirmed.
    `.trim();

    localStorage.setItem(
      "nexgrid_latest_lead",
      JSON.stringify({ ...form, createdAt: new Date().toISOString() })
    );

    window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <main className="site">
      <style>{styles}</style>

      <header className="nav">
        <a className="brand" href="#home" aria-label="NexGrid Energy home">
          <span className="brandIcon">⚡</span>
          <span>NexGrid Energy</span>
        </a>

        <nav className="navLinks">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#assessment">Assessment</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="navButton" href={AI_CHAT_URL}>
          Talk to AI
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">Home backup power · Solar battery pairing · Energy resilience</p>
          <h1>Battery backup systems for homes that cannot afford to lose power.</h1>
          <p className="heroCopy">
            NexGrid Energy helps homeowners evaluate Humless battery and inverter solutions,
            solar battery pairing, generator alternatives, outage protection, and local energy
            backup options.
          </p>

          <div className="heroActions">
            <a className="primary" href="#assessment">
              Get My Backup Power Score
            </a>
            <a className="secondary" href={AI_CHAT_URL}>
              Chat With NexGrid AI
            </a>
          </div>

          <div className="trustStrip">
            <span>✓ Solar-home friendly</span>
            <span>✓ Backup power planning</span>
            <span>✓ No pressure assessment</span>
          </div>
        </div>

        <div className="heroCard">
          <div className="gridPulse">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2>Backup Power Readiness</h2>
          <p>
            Find out whether your home is better suited for battery backup, solar pairing,
            generator support, or a staged energy upgrade.
          </p>

          <div className="scoreBox">
            <div>
              <strong>3 minute</strong>
              <small>AI-assisted assessment</small>
            </div>
            <div>
              <strong>0 spam</strong>
              <small>No automated outreach without consent</small>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">What NexGrid helps with</p>
          <h2>Turn outages, rate changes, and solar gaps into a clear backup plan.</h2>
        </div>

        <div className="cards">
          <article className="card">
            <span className="cardIcon">🔋</span>
            <h3>Battery Backup</h3>
            <p>
              Evaluate whole-home or critical-load battery backup options for outages,
              emergencies, and grid instability.
            </p>
          </article>

          <article className="card">
            <span className="cardIcon">☀️</span>
            <h3>Solar + Battery Pairing</h3>
            <p>
              Homes with solar but no storage may still lose power during outages. NexGrid
              helps identify the right storage path.
            </p>
          </article>

          <article className="card">
            <span className="cardIcon">🏠</span>
            <h3>Home Energy Assessment</h3>
            <p>
              Review home size, outage risk, electrical panel needs, usage patterns, and
              backup priorities before quoting equipment.
            </p>
          </article>

          <article className="card">
            <span className="cardIcon">⚙️</span>
            <h3>Inverter Planning</h3>
            <p>
              Match battery and inverter setups to real household needs instead of guessing
              with generic system sizes.
            </p>
          </article>
        </div>
      </section>

      <section className="split">
        <div>
          <p className="eyebrow">Why battery backup</p>
          <h2>Solar panels alone do not always mean backup power.</h2>
          <p>
            A lot of homeowners assume solar automatically keeps the house powered during
            an outage. Many systems shut down unless a proper battery and inverter setup is
            installed. NexGrid helps homeowners understand what they already have, what is
            missing, and what upgrade path makes sense.
          </p>
        </div>

        <div className="checkList">
          <p>✓ Protect refrigerators, internet, lights, and critical circuits</p>
          <p>✓ Reduce dependence on gas generators</p>
          <p>✓ Improve solar self-use where applicable</p>
          <p>✓ Plan for outages before the next emergency</p>
        </div>
      </section>

      <section id="process" className="section darkSection">
        <div className="sectionHeader">
          <p className="eyebrow">Simple process</p>
          <h2>From quick assessment to install-ready recommendation.</h2>
        </div>

        <div className="steps">
          <div className="step">
            <strong>01</strong>
            <h3>Run the score</h3>
            <p>Answer a few basic questions about your home, solar, outages, and backup goals.</p>
          </div>

          <div className="step">
            <strong>02</strong>
            <h3>Review options</h3>
            <p>Get a clear path for battery backup, solar pairing, inverter needs, or panel upgrades.</p>
          </div>

          <div className="step">
            <strong>03</strong>
            <h3>Book a design call</h3>
            <p>When the fit is right, schedule a local assessment and system recommendation.</p>
          </div>
        </div>
      </section>

      <section id="assessment" className="section assessment">
        <div className="sectionHeader">
          <p className="eyebrow">Start here</p>
          <h2>Get your backup power assessment.</h2>
          <p>
            Use the form below or talk to the NexGrid AI assistant. This is a research and
            assessment request, not automatic SMS enrollment.
          </p>
        </div>

        <div className="assessmentGrid">
          <form className="leadForm" onSubmit={submitLead}>
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Phone
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Best phone number"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Best email"
              />
            </label>

            <label>
              ZIP Code
              <input
                value={form.zip}
                onChange={(e) => update("zip", e.target.value)}
                placeholder="84401"
                required
              />
            </label>

            <label>
              Do you already have solar?
              <select
                value={form.hasSolar}
                onChange={(e) => update("hasSolar", e.target.value)}
                required
              >
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>

            <label>
              Main goal
              <select
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
                required
              >
                <option value="">Select one</option>
                <option value="Outage protection">Outage protection</option>
                <option value="Solar battery storage">Solar battery storage</option>
                <option value="Lower grid dependence">Lower grid dependence</option>
                <option value="Generator alternative">Generator alternative</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span>
                I agree NexGrid Energy may contact me about my request. I understand this
                does not enroll me in automated SMS unless explicit SMS consent is separately
                confirmed.
              </span>
            </label>

            <button className="primary full" type="submit">
              Request Assessment
            </button>

            {submitted && (
              <p className="success">
                Your request was prepared. If your email app opened, hit send.
              </p>
            )}
          </form>

          <aside className="aiBox">
            <h3>Want the faster path?</h3>
            <p>
              Use the AI assistant to answer homeowner questions, qualify battery fit, and
              route serious prospects into the NexGrid workflow.
            </p>
            <a className="secondary full" href={AI_CHAT_URL}>
              Open NexGrid AI Chat
            </a>
            <small>
              AI chat URL currently points to <strong>chat.nexgridenergy.net</strong>.
              Connect that subdomain to the NexGrid AI app when ready.
            </small>
          </aside>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Questions</p>
          <h2>Common backup power questions.</h2>
        </div>

        <div className="faq">
          <details>
            <summary>Do solar panels keep my home powered during an outage?</summary>
            <p>
              Not always. Many grid-tied solar systems shut down during an outage unless
              they are paired with the correct battery and inverter setup.
            </p>
          </details>

          <details>
            <summary>Is a battery better than a generator?</summary>
            <p>
              It depends on the home. Batteries can be quieter, cleaner, and solar-friendly.
              Generators may still make sense for some backup strategies.
            </p>
          </details>

          <details>
            <summary>Do I need a full-home backup system?</summary>
            <p>
              Not necessarily. Many homeowners start with critical-load backup for essentials
              like refrigeration, internet, lighting, medical equipment, or key circuits.
            </p>
          </details>

          <details>
            <summary>Will submitting this form enroll me in SMS marketing?</summary>
            <p>
              No. Permit records and website form requests are not treated as automated SMS
              consent. Automated outreach requires explicit consent.
            </p>
          </details>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>NexGrid Energy</strong>
          <p>Home backup power · Battery storage · Solar pairing</p>
        </div>

        <div className="footerLinks">
          <button onClick={() => setModal("privacy")}>Privacy Policy</button>
          <button onClick={() => setModal("terms")}>Terms</button>
          <a href={AI_CHAT_URL}>AI Chat</a>
        </div>
      </footer>

      {modal && (
        <div className="modalBackdrop" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setModal(null)}>
              ×
            </button>

            {modal === "privacy" ? (
              <>
                <h2>Privacy Policy</h2>
                <p>
                  NexGrid Energy collects information submitted through this website for
                  assessment, scheduling, and customer service purposes. We do not sell
                  personal information. Permit data, public records, and assessment requests
                  are not treated as consent for automated SMS or email marketing.
                </p>
                <p>
                  If SMS contact is offered, consent must be separately and explicitly
                  captured. You may request removal from future contact at any time.
                </p>
              </>
            ) : (
              <>
                <h2>Terms of Use</h2>
                <p>
                  This website provides general information about home backup power, battery
                  storage, solar pairing, and energy assessments. Final recommendations depend
                  on property conditions, equipment availability, local codes, utility rules,
                  and installer review.
                </p>
                <p>
                  Submitting an assessment request does not guarantee approval, financing,
                  installation, or specific savings.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

const styles = `
:root {
  --bg: #071114;
  --panel: #0e1d22;
  --panel2: #12282f;
  --text: #f4fbff;
  --muted: #a8bac1;
  --line: rgba(255,255,255,.12);
  --green: #1dd6a3;
  --green2: #08a87e;
  --blue: #59b7ff;
  --yellow: #ffd166;
  --shadow: 0 30px 80px rgba(0,0,0,.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: radial-gradient(circle at top left, rgba(29,214,163,.22), transparent 34%),
              radial-gradient(circle at 80% 10%, rgba(89,183,255,.16), transparent 30%),
              var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.site {
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px clamp(18px, 5vw, 64px);
  background: rgba(7,17,20,.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -.03em;
  font-size: 1.15rem;
}

.brandIcon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--green), var(--blue));
  box-shadow: 0 12px 30px rgba(29,214,163,.25);
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: .95rem;
}

.navLinks a:hover {
  color: var(--text);
}

.navButton,
.primary,
.secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  border-radius: 999px;
  padding: 0 20px;
  font-weight: 800;
  border: 1px solid transparent;
  cursor: pointer;
}

.navButton,
.primary {
  color: #04100d;
  background: linear-gradient(135deg, var(--green), #7fffd8);
  box-shadow: 0 16px 40px rgba(29,214,163,.25);
}

.secondary {
  color: var(--text);
  background: rgba(255,255,255,.07);
  border-color: var(--line);
}

.full {
  width: 100%;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
  padding: clamp(54px, 8vw, 110px) clamp(18px, 5vw, 64px);
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: .13em;
  font-size: .78rem;
  font-weight: 900;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 900px;
  margin-bottom: 22px;
  font-size: clamp(2.75rem, 8vw, 6.5rem);
  line-height: .92;
  letter-spacing: -.075em;
}

h2 {
  font-size: clamp(2rem, 5vw, 4.1rem);
  line-height: 1;
  letter-spacing: -.06em;
  margin-bottom: 18px;
}

h3 {
  font-size: 1.25rem;
  letter-spacing: -.03em;
  margin-bottom: 10px;
}

.heroCopy,
.sectionHeader p,
.split p,
.card p,
.step p,
.aiBox p,
.faq p,
.footer p,
.modal p {
  color: var(--muted);
  line-height: 1.7;
}

.heroCopy {
  max-width: 720px;
  font-size: 1.12rem;
}

.heroActions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 30px 0 22px;
}

.trustStrip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #d9fff4;
  font-size: .9rem;
}

.trustStrip span {
  padding: 8px 12px;
  background: rgba(29,214,163,.1);
  border: 1px solid rgba(29,214,163,.25);
  border-radius: 999px;
}

.heroCard {
  position: relative;
  overflow: hidden;
  min-height: 440px;
  padding: 32px;
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(18,40,47,.95), rgba(9,23,28,.95));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.heroCard:before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle, rgba(29,214,163,.22), transparent 40%);
  animation: float 7s ease-in-out infinite alternate;
}

.heroCard > * {
  position: relative;
}

.gridPulse {
  height: 190px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
}

.gridPulse span {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 999px;
  border: 1px solid rgba(29,214,163,.38);
  animation: pulse 2.8s ease-out infinite;
}

.gridPulse span:nth-child(2) {
  animation-delay: .5s;
}

.gridPulse span:nth-child(3) {
  animation-delay: 1s;
}

.scoreBox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 26px;
}

.scoreBox div {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--line);
}

.scoreBox strong,
.scoreBox small {
  display: block;
}

.scoreBox small {
  margin-top: 6px;
  color: var(--muted);
}

.section,
.split {
  padding: clamp(48px, 7vw, 92px) clamp(18px, 5vw, 64px);
}

.sectionHeader {
  max-width: 850px;
  margin-bottom: 28px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.card,
.step,
.leadForm,
.aiBox,
.faq details {
  background: rgba(14,29,34,.86);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 18px 60px rgba(0,0,0,.18);
}

.card {
  padding: 24px;
}

.cardIcon {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  border-radius: 16px;
  background: rgba(29,214,163,.12);
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, .75fr);
  gap: 30px;
  align-items: center;
  background: rgba(255,255,255,.035);
  border-block: 1px solid var(--line);
}

.checkList {
  display: grid;
  gap: 12px;
}

.checkList p {
  margin: 0;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(29,214,163,.1);
  border: 1px solid rgba(29,214,163,.22);
  color: #ddfff6;
}

.darkSection {
  background: linear-gradient(180deg, rgba(8,18,22,.1), rgba(8,18,22,.55));
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.step {
  padding: 26px;
}

.step strong {
  display: inline-block;
  margin-bottom: 42px;
  color: var(--yellow);
  font-size: .9rem;
}

.assessmentGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr);
  gap: 18px;
  align-items: start;
}

.leadForm,
.aiBox {
  padding: 24px;
}

.leadForm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  color: #d9e9ee;
  font-weight: 750;
  font-size: .92rem;
}

input,
select {
  width: 100%;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.075);
  color: var(--text);
  border-radius: 14px;
  min-height: 48px;
  padding: 0 14px;
  outline: none;
}

select option {
  color: #071114;
}

input:focus,
select:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 4px rgba(29,214,163,.12);
}

.checkbox {
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--muted);
  font-weight: 500;
  line-height: 1.5;
}

.checkbox input {
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  margin-top: 2px;
}

.leadForm button,
.success {
  grid-column: 1 / -1;
}

.success {
  margin: 0;
  color: var(--green);
  font-weight: 800;
}

.aiBox {
  position: sticky;
  top: 92px;
}

.aiBox small {
  display: block;
  margin-top: 16px;
  color: var(--muted);
  line-height: 1.6;
}

.faq {
  display: grid;
  gap: 12px;
  max-width: 950px;
}

.faq details {
  padding: 20px 22px;
}

.faq summary {
  cursor: pointer;
  font-weight: 850;
}

.faq p {
  margin: 14px 0 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 28px clamp(18px, 5vw, 64px);
  border-top: 1px solid var(--line);
  background: rgba(0,0,0,.18);
}

.footer p {
  margin: 8px 0 0;
}

.footerLinks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.footerLinks button,
.footerLinks a {
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  padding: 0;
}

.footerLinks button:hover,
.footerLinks a:hover {
  color: var(--text);
}

.modalBackdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 18px;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(10px);
}

.modal {
  position: relative;
  width: min(680px, 100%);
  padding: 32px;
  border-radius: 26px;
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.modalClose {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  color: var(--text);
  cursor: pointer;
  font-size: 1.4rem;
}

@keyframes pulse {
  0% {
    transform: scale(.65);
    opacity: .9;
  }
  100% {
    transform: scale(1.85);
    opacity: 0;
  }
}

@keyframes float {
  from {
    transform: translate(-8%, -5%);
  }
  to {
    transform: translate(8%, 7%);
  }
}

@media (max-width: 980px) {
  .hero,
  .split,
  .assessmentGrid {
    grid-template-columns: 1fr;
  }

  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .aiBox {
    position: static;
  }
}

@media (max-width: 720px) {
  .nav {
    align-items: flex-start;
  }

  .navLinks {
    display: none;
  }

  .hero {
    padding-top: 44px;
  }

  .heroCard {
    min-height: 360px;
    padding: 24px;
  }

  .cards,
  .leadForm {
    grid-template-columns: 1fr;
  }

  .scoreBox {
    grid-template-columns: 1fr;
  }

  .footer {
    flex-direction: column;
  }

  .primary,
  .secondary,
  .navButton {
    min-height: 48px;
  }
}
`;
