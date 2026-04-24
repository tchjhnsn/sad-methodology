# Changelog

All notable changes to SAD as published in this repository. The canonical methodology lives at [methodology/SAD.md](./methodology/SAD.md); the repo versions semantically.

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
