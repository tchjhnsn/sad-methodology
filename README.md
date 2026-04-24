# SAD — Specification-Anchored Development

*A methodology for AI-assisted software development. Product-pillar, software product type.*

## What SAD is

SAD is a methodology for humans and AI coding agents to build software together with rigor. It attacks the defining failure mode of iterative AI development — **compounding error** — by narrowing what "correct" means through formal specification *before* any line of code is written. A precise spec doesn't raise the per-step success rate; it collapses the interpretive space the agent operates in.

**See the interactive lifecycle figure:** [https://tchjhnsn.github.io/sad-methodology/](https://tchjhnsn.github.io/sad-methodology/)

## The core ideas

- **Seven-phase pipeline.** Externalize → stress-test research → unconstrained vision → subtractive scope → full spec package → implement → verify → evolve → complete. Each phase reduces one specific kind of ambiguity.
- **Convergence Layer.** Automated adversarial pressure-testing at spec-time (ambiguity < 10%) and implementation-time (compliance ≥ 95%), before human review. Humans read pressure-tested drafts, not first passes.
- **Two-layer data model.** Raw inputs (ideas, conversations, research) are immutable cold storage. Compiled artifacts (specs, session logs) are re-buildable from raw. Context survives AI compaction.
- **Scope levels.** Global / Project / Local, mapped cleanly onto Claude Code's memory hierarchy.
- **Shareability as convergence consequence.** When ambiguity drops below the Convergence thresholds, the artifact becomes handoff-ready. The same disambiguation that produces internal consistency also produces the condition where someone not in the authoring conversation can read, understand, or build from the artifact without further explanation.

## What's in this repo

```
sad-methodology/
├── README.md                    ← you are here
├── LICENSE                      ← Apache 2.0
├── CONTRIBUTING.md              ← how to engage
├── CHANGELOG.md                 ← release notes
├── docs/
│   └── index.html               ← the interactive lifecycle figure (served via GitHub Pages)
├── methodology/
│   ├── SAD.md                   ← the canonical methodology document
│   ├── walkthrough.md           ← 10-minute extended walk-through
│   ├── onepager.md              ← 30-second summary
│   ├── architecture.svg         ← detailed static lifecycle figure
│   └── onepager-workflow.svg    ← one-pager's simple phase-pipeline figure
├── skills/
│   ├── time-awareness/SKILL.md       ← small capability-skill that grounds sessions in real-world time
│   └── session-capture/SKILL.md      ← auto-captures predecessor session context
└── references/
    ├── raw-source-taxonomy.md        ← controlled vocabulary for raw layer inputs
    ├── entity-profile-schema.md      ← frontmatter schema for entity profiles
    └── methodology-family.md         ← planned future variants (Brand, Business, other product types)
```

## Reading order

**If you have 30 seconds:** [the interactive figure](https://tchjhnsn.github.io/sad-methodology/) or [methodology/onepager.md](./methodology/onepager.md).

**If you have 10 minutes:** [methodology/walkthrough.md](./methodology/walkthrough.md).

**If you want the full methodology:** [methodology/SAD.md](./methodology/SAD.md).

**If you want to adopt the rituals in your own Claude Code workflow:** the SKILL.md files under `skills/` are drop-in capability-skills. They codify bash `date`-based timestamp grounding and predecessor-session capture. Use standalone or as templates.

## Scope and limits

SAD is explicitly scoped to **Product-pillar, software-type** work — web apps, CLI tools, libraries, APIs, open-source projects. Adaptations for Brand pillar, Business pillar, and other product types (physical, service, content) are planned as separate, domain-specific variants. See [references/methodology-family.md](./references/methodology-family.md) for the roadmap. Don't apply SAD directly to non-software or non-product work; author the equivalent variant.

## Credits and influences

- **Andrej Karpathy** — writing on LLM auto-research and the LLM Wiki / LLM Skill distinction is the conceptual anchor of SAD v3's data-model framing. The observation that *specs are what make LLM-authored software evaluable* (without them, evaluation is circular) is the core motivation for SAD's Convergence Layer.
- **Anthropic's *Building Effective Agents*** — SAD's internal mechanics map onto several of Anthropic's named workflow patterns: prompt chaining (the phase pipeline), evaluator-optimizer (the Convergence Loops), routing with human-in-the-loop (the Decision Boundary protocol), and parallelization (spec package authoring). SAD composes these patterns under a fixed human-authored methodology rather than a dynamic orchestrator LLM.
- **Spec-first and spec-driven development traditions** — Design by Contract, Specification by Example, TDD, BDD, Domain-Driven Design. SAD shares lineage with these while adding mechanical disambiguation (Convergence Layer) as a first-class primitive.

## License

Apache License 2.0 — see [LICENSE](./LICENSE) for full text. You are free to use, modify, distribute, and adapt SAD for any purpose, commercial or not, with attribution.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). In brief: typo-fixes, clarifications, and translations are welcome as PRs. Structural changes to the methodology are author-reviewed — propose as issues first.

## Author

Torian Johnson — [@tchjhnsn](https://github.com/tchjhnsn). SAD v3 was authored under SAD's own discipline (the methodology's own Convergence Layer was applied to its own authoring), as a self-referential stress-test.
