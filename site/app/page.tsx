import UnicornScene from 'unicornstudio-react/next';
import Link from 'next/link';
import React from 'react';

const HERO_SCENE_ID = 'REPLACE_WITH_SCENE_ID'; // TODO: set actual Unicorn Studio project ID

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-background">
          <UnicornScene projectId={HERO_SCENE_ID} width="100%" height="100%" />
        </div>
        <div className="hero-content">
          <h1>UNLTD</h1>
          <p>unlimited insight / zero knowledge</p>
          <p style={{ marginTop: '1rem' }}>
            A framework for context-engineered, multi-agent execution—turning expert knowledge into shipped systems.
          </p>
          <Link href="#waitlist" className="cta-button" style={{ display: 'inline-block', marginTop: '2rem' }}>
            JOIN THE WAITLIST
          </Link>
          <p style={{ marginTop: '1rem', fontSize: '0.75rem' }}>Built by Aegntic — acceleration with accountability.</p>
        </div>
      </section>

      <section>
        <h2>WHAT IS UNLTD</h2>
        <p>
          UNLTD lets LLMs retrieve, synthesize, and act on high-quality sources to build projects from idea to distribution—
          reliably, repeatably.
        </p>
      </section>

      <section>
        <h2>WHY NOW</h2>
        <p>
          The cost of coordination—not compute—limits teams. UNLTD compresses coordination with agent orchestration, rigorous
          context, and a safety-first runtime.
        </p>
      </section>

      <section>
        <h2>CORE CAPABILITIES</h2>
        <ul>
          <li>
            <strong>Context Engine</strong> – Pulls from vetted code, papers, repos, transcripts, and graphs; semantic extraction
            with provenance.
          </li>
          <li>
            <strong>Multi-Agent Build</strong> – Plan → code → test → docs → deploy, in parallel; adjudication selects the best
            path.
          </li>
          <li>
            <strong>Safety & Integrity</strong> – Misbehavior probes, anomaly flags, red-team routines, and audit trails baked in.
          </li>
          <li>
            <strong>Distribution Loop</strong> – Sites, docs, media, and telemetry to close the feedback cycle.
          </li>
        </ul>
      </section>

      <section>
        <h2>HOW IT WORKS</h2>
        <ol>
          <li>
            <strong>Ingest:</strong> curate sources and constraints.
          </li>
          <li>
            <strong>Orchestrate:</strong> parallel agents propose, implement, and evaluate.
          </li>
          <li>
            <strong>Select:</strong> ranked outputs pass safety and quality gates.
          </li>
          <li>
            <strong>Ship:</strong> artifacts published; signals feed back into context.
          </li>
        </ol>
      </section>

      <section>
        <h2>PRINCIPLES</h2>
        <p>
          Context over guesswork. Parallel over linear. Provenance over vibes.<br />
          Acceleration, not abandonment—speed with safeguards.
        </p>
      </section>

      <section>
        <h2>PROOF OF WORK</h2>
        <p>
          Origin in archive-mind (GitHub): the open nucleus behind UNLTD’s context engineering and orchestration patterns.
        </p>
        <p>
          <Link href="https://github.com/aegntic/archive-mind" target="_blank" rel="noopener noreferrer">
            VIEW GITHUB
          </Link>
        </p>
      </section>

      <section id="waitlist">
        <h2>EARLY ACCESS</h2>
        <p>Join for private demos, architecture notes, and the first production modules.</p>
        <form className="waitlist-form" action="https://example.com/waitlist" method="post">
          <input type="email" name="email" placeholder="work email" required />
          <button type="submit" className="cta-button">
            JOIN THE WAITLIST
          </button>
        </form>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
          We’ll only send high-signal updates. Unsubscribe anytime.
        </p>
      </section>

      <footer>© Aegntic — UNLTD Framework</footer>
    </main>
  );
}
