# Changelog

All notable changes to SAD as published in this repository. The canonical methodology lives at [methodology/SAD.md](./methodology/SAD.md); the repo versions semantically.

## [3.2.0] — 2026-05-13

Methodology evolution surfaced through the working application of SAD v3 to the Polity-app V1 build. Five additions; three pending decisions surfaced for the methodology community.

### Added

- **Phase 1B-Final · Articulation Closure** as a named phase between Phase 1B Final Review and Phase 2 Implementation. Documents the workflow, deliverables, and exit criteria for occupying the boundary until a cross-spec gap audit returns clean.
- **`skills/articulation-closure/SKILL.md`** — capability-skill for running the articulation closure workflow. Names the polity-app reference implementation as the worked example.
- **`skills/build-roadmap/SKILL.md`** — capability-skill for authoring the build roadmap deliverable that articulation closure produces.
- **`skills/version-identity/SKILL.md`** — capability-skill for the version-identity discipline (one new sub-persona per version, foreshadowing, brand continuity invariants).
- **`methodology/lifecycle-overview-2026-05-13.html`** — visual that shows the full SAD pipeline (Articulation → Build → Ship) with sub-phase granularity and the bridge from Phase 1B-Final to autonomous execution. Pairs with the existing `architecture.svg` (which is the static figure) — this HTML adds the operational where-we-are layer.
- **`methodology/amendments/v3.2-2026-05-13.md`** — amendment doc consolidating the new disciplines: the Ralph Wiggum test (articulation quality bar), functional completion conditions (named user behavior, not code structure), autonomous-execution adopted from the community (the Ralph loop tradition, including Anthropic's `ralph-wiggum` claude-code plugin), bundled-commit hygiene, and the lockfile-with-package.json corollary.

### Surfaced (pending decisions)

These are flagged in v3.2 but not yet committed to the canonical methodology:

- **HTML vs. Obsidian-hygiene tension** — deliverables shipped as HTML lose Templater/Dataview/wikilink workflows. Five options surfaced; decision pending.
- **Brand-load-bearing assets must be explicitly loaded** — fonts, color tokens, logos cannot depend on system cascade. Encoded as a v3.2+ rule.
- **Per-deliverable explicit vs. implicit articulation** — if a deliverable is reachable through a higher-level artifact (sitemap, brand voice, content models, retrospective sweep), explicit per-deliverable authorship is optional. The discipline is *no silent absence*.

### Methodology positioning

- **Autonomous execution is adopted from the community, not authored here.** SAD's contribution is the articulation precondition; the executor is the Ralph loop tradition. See `methodology/amendments/v3.2-2026-05-13.md` §4 for the rationale and the community-survey rationale.

## [3.0.0] — 2026-04-24

Initial public release of SAD v3.

- Added the canonical methodology document (`methodology/SAD.md`) — 14-part framework covering the LLM Wiki/Skill framing, dual-mode activities, two-layer data model, scope levels (Global/Project/Local), Campaign/Session/Checkpoint hierarchy, seven-phase pipeline (0A through 5), Convergence Layer, capability-skills, session-proposal pattern, session-log format, supporting patterns (supersession, reference-without-inherit, monorepo consolidation), failure modes, worked example, and critical reminders.
- Added the architecture figure (`methodology/architecture.svg`) — detailed lifecycle visualization showing all seven phases, the document derivation tree inside Phase 1B, the ambiguity catalog bridge connecting Phase 1B to Phase 3, the Phase 4 feedback loop, the Documentation → Implementation boundary, and the post-production CI/CD + Spec Evolution cycle.
- Added the interactive HTML (`docs/index.html`) — clickable version of the architecture figure served via GitHub Pages.
- Added the extended walk-through (`methodology/walkthrough.md`) — phase-by-phase narrative companion to the figure.
- Added the one-pager (`methodology/onepager.md`) and its simple workflow figure.
- Added the capability-skills under `skills/` — time-awareness and session-capture as drop-in Claude Code skill files.
- Added reference documents under `references/` — raw-source taxonomy (21 subtypes), entity-profile schema, and the methodology-family roadmap naming planned future variants.
- Scope narrowed explicitly to Product-pillar, software-type. Brand, Business, and other product-type variants are deferred to the roadmap; SAD v3 does not cover them.
- Credits: Andrej Karpathy's writing on LLM auto-research as conceptual anchor; Anthropic's *Building Effective Agents* for workflow-pattern taxonomy.

### Versioning policy going forward

- **Major version** (v4.0.0): structural change to the phase pipeline, Convergence Layer, or spec hierarchy.
- **Minor version** (v3.1.0): new sections, new capability-skills, new reference docs, or substantive content additions that don't change existing structure.
- **Patch version** (v3.0.1): typo fixes, clarifications, broken-link repairs, wording tightening.
