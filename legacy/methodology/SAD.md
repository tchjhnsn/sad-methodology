
# Specification-Anchored Development (SAD)
## AI Reference Document — Complete Methodology v3.0

> **Scope.** SAD v3 is specifically for work on the **Product pillar, software product type**. Its spec hierarchy (IMPL_SPEC, DATA_MODEL_SPEC, BEHAVIORAL_SPEC, VERIFICATION_SPEC) is structured around software artifacts — web apps, CLI tools, libraries, APIs, open-source projects. The *process* — externalize, stress-test, unconstrained vision, subtractive scope, full specification, implementation, verification, evolution, completion — is believed to generalize, but adaptations to other pillars (Brand, Business) and other product types (physical, service, content) are planned as separate, domain-specific variants. See methodology-family for the family roadmap. Do not apply SAD v3 to Brand or Business work directly; author the equivalent variant instead when those pillars warrant formal methodology.

> **Core principle.** Compounding error is the defining failure mode of iterative AI development. Even a 1% per-step error rate becomes catastrophic over 50+ steps. SAD addresses this by narrowing the space of "correct" behavior through formal specification before any implementation begins. A precise spec doesn't improve the per-step success rate — it collapses what "incorrect" can even mean.
>
> **Extended principle.** Premature specification is its own failure mode. Specs written before the idea is fully understood encode misunderstanding at the source. The pipeline begins with exploratory phases that establish what is worth specifying before any specification is attempted.
>
> **v3 principle.** A methodology is two things: a *skill* (capabilities the AI invokes) and a *wiki* (knowledge the AI reads). SAD v2 over-developed the skill side and under-developed the wiki side. v3 treats them as co-equal and gives the wiki side a formal data model, a controlled vocabulary, and a compile discipline.

---

## DELTA LOG — what changed from v2 to v3

Authored 2026-04-22 alongside the v3 skill. Concise; for the full reasoning see idea-sad-v3-integration-2026-04-22 and the SAD v3 bundle session entry in _sessions/SESSION_LOG.

- **Opening framing.** v3 opens with the Karpathy LLM Wiki / LLM Skill distinction (PART 0). v2 implicitly privileged the Skill side; v3 makes the two sides co-equal.
- **Scope levels.** v3 adds PART 0.5 naming Global / Project / Local scopes explicitly, with a two-halves-of-a-project pattern (wiki half in vault, code half under `~/code/`) and a `scope:` frontmatter convention. Session Opening Protocol gains Step 0 (declare the level). Matches Claude Code's memory hierarchy (Global/Project/Local correspond to Claude Code's Global/Project/Local layers; Enterprise is N/A for solo operators).
- **Scope narrowed explicitly.** v3 names itself as Product-pillar, software-type. Planned variants for Brand, Business, and other product types are tracked in methodology-family but are not authored yet; the generalization is deferred until we have two or three concrete variants to generalize from.
- **Shareability as convergence consequence.** v3 names explicitly (in PART 7 and Critical Reminder #16) that passing the Convergence thresholds is what produces handoff-readiness. The methodology doesn't need a separate demo-readiness discipline because the same disambiguation that passes Spec Convergence also produces the condition where the artifact is intelligible to someone outside the authoring context.
- **Dual-mode activities.** v3 explicitly distinguishes continuous activities (ingest, idea capture, session logging, wiki maintenance, staleness review) from episodic phases (PART 1). v2 implied SAD applies only inside the phase pipeline.
- **Two-layer data model.** Raw (immutable) vs. compiled (re-buildable) is now formalized at the methodology level (PART 2). v2 had no formal raw layer.
- **Raw-source taxonomy.** The new raw-source-taxonomy reference doc enumerates 21 raw-source-type subtypes with per-subtype frontmatter, compile path, and cold-storage discipline.
- **Five timestamp fields.** `created`, `ingested`, `updated`, `last-compiled`, `last-reviewed` are now standardized. v2 used only `Last revised` ad hoc.
- **Campaign / Session / Checkpoint hierarchy.** v3 replaces v2's calendar-bounded sessions with scope-bounded sessions organized into a three-level hierarchy (PART 3). The progress widget tracks the current Session's scope, not the whole Campaign.
- **Session-linkage frontmatter.** `predecessor-session`, `successor-session`, and `campaign` fields on every conversation-log raw capture (PART 3, PART 8).
- **Session-start / session-end rituals.** Explicitly named, mandatory, invoke time-awareness and session-capture skills (PART 3).
- **Time-awareness as a named skill.** skills/time-awareness/SKILL — codifies the bash `date` ritual that grounds every timestamp.
- **Session-capture as a named skill.** skills/session-capture/SKILL — auto-captures predecessor sessions at start, drafts compiled session-log entries at end.
- **Session-proposal pattern.** A new `raw-source-type` for prospective sessions (PART 9). Validates itself by being used immediately to spawn this Campaign's downstream sessions.
- **Two-tier VISION_SPEC.** For multi-venture umbrella entities, VISION_SPEC takes a parent-and-children form (PART 5). Vir is the canonical example.
- **Surface nesting patterns.** Surfaces may be nested under their parent ecosystem (Apple → iOS) or flat-promoted as siblings to it (Alphabet → Waymo), depending on operational independence (PART 5). Polity → {Journey, Polity News, Dating, Forum, Games, Glean} is the canonical flat-promoted example, established 2026-04-23.
- **Reference-without-inherit.** A new lineage pattern distinct from supersession (PART 11, entity-profile-schema — Reference-without-inherit (SAD v3)). Polity → Reflect is the canonical example.
- **Lifecycle-stage regression protocol.** Stages may revert; the protocol records `lifecycle-regression-reason` and `lifecycle-regression-date` (PART 5, entity-profile-schema — Lifecycle-stage regression (SAD v3)). Polity AI Lab `scoped → concept` (2026-04-21) canonical.
- **Authorship frontmatter.** Required on every entity profile (`sole | co-authored | extracted-from | external`); paired with `ip-sensitivity` (`high | normal | n/a`). v2 only required these on archived profiles.
- **`open-source-tool` entity-class.** Added to the entity-class enum to accommodate Reflect.
- **Spec-first open release.** Existed in v2 (line 113-118); v3 names it as a first-class terminal state and points to Reflect as canonical example.
- **Monorepo consolidation patterns.** Squash-import / subtree-merge / submodule named explicitly with when-each-applies guidance (PART 11). Reflect's `api/` import is the canonical squash-import example.
- **Failure modes added.** Wiki staleness from skipped compile, raw bloat from unbounded ingest, ritual skipping under time pressure, Campaign drift (PART 12).
- **No silent drift in capability-skills.** Critical reminders 11–15 (PART 14) make the v3 rituals load-bearing rather than aspirational.

What did **not** change from v2: the Phase 0A → 5 pipeline, the seven spec documents and their structures (Vision, Version, Product, Data Model, Impl, Behavioral, Verification), the Convergence Layer (Spec Convergence + Implementation Convergence), the Decision Boundary protocol, the Spec Change Classes (0–4), the staleness marker / reconciliation sprint discipline, and the Session Opening Protocol's core steps. v3 is additive and refining — it does not retract v2's load-bearing inventions.

---

## PART 0: SAD AS SKILL-AND-WIKI

The opening conceptual anchor for v3.

### The Karpathy distinction

- **LLM Skill** = capability. *How* the LLM operates. Procedures, phase gates, session protocol, decision-boundary protocols, the rituals an AI runs.
- **LLM Wiki** = knowledge base. *What* the LLM knows. Compiled markdown, cross-linked, maintained, retrieval-optimized.

### Mapping to SAD

- **Skill-layer of SAD** (well-developed in v2): this document, vault `CLAUDE.md`, repo `CLAUDE.md`, phase protocol, session protocol, decision-boundary gates, Convergence Layer.
- **Wiki-layer of SAD** (formalized in v3): VISION_SPEC through VERIFICATION_SPEC, entity profiles, IDEA_MAP, RESEARCH_SYNTHESIS, SESSION_LOG, the entire `everything-ecosystem/methodology/` corpus, `_sources/` raw layer, `_sessions/raw/` raw layer.

v2 described how the wiki *is derived* (spec hierarchy, derivation rules) but not how it is *maintained as a knowledge base*. v3 adds:

- A two-layer data model: raw (immutable) vs compiled (re-buildable).
- A controlled raw-source vocabulary (raw-source-taxonomy).
- Timestamp conventions that detect staleness (`last-reviewed`, `last-compiled`).
- A compile discipline that names who, when, from what, and how.

Every subsequent section in this document is explicit about whether it operates on the Skill layer, the Wiki layer, or the boundary between them.

---

## PART 0.5: SCOPE LEVELS — GLOBAL / PROJECT / LOCAL

SAD v3 work operates at three nested scopes. Claude Code's memory hierarchy names these levels; SAD makes them first-class methodology concepts and names what lives at each.

### Global

The scope that spans everything Torian works on. The cross-project layer.

Physical footprint: `/Users/torianm/Documents/` (the vault) is the primary container; `/Users/torianm/code/` is its sibling on disk, connected by code-pointer notes in the vault. The two together constitute the Global working surface.

What lives at Global:

- `everything-ecosystem/` — the methodology itself. Governs every project.
- `Torian/` — the personal pillar (reflections, curriculum, publications). About Torian globally, not about any specific project.
- `_ideas/` (root) — cross-entity idea capture.
- `_sessions/` — session logs that span entities and Campaigns.
- `_sources/` — raw external material not yet routed to an entity.
- `_meta/` — vault infrastructure (templates, queries, migration notes).
- `_archive/` — superseded entities and methodology versions.
- `Documents/CLAUDE.md` — the **global CLAUDE.md** (the vault constitution doubles as Claude Code's Global layer, reached via symlink at `~/.claude/CLAUDE.md`).

Global is what's true regardless of the specific project a Session is working on.

### Project

One entity. SAD's first-class unit of work. A project has **two physical halves** connected by a code-pointer note:

**Wiki half** — `Documents/projects/<entity>/`:

- `entity-profile.md` — the identity of the entity.
- `product/`, `brand/`, `business/` — the three pillars (the pillar set is entity-class-dependent).
- `product/spec/VISION_SPEC.md` → `VERIFICATION_SPEC.md` — the SAD spec package.
- `product/design/` — wireframes, flows, component library.
- `product/code/pointer.md` — the bridge to the code half.
- `product/SESSION_LOG.md` — institutional memory for this project.
- `_ideas/`, `_sources/` — raw layers scoped to this entity.

**Code half** — `~/code/<repo>/`:

- `CLAUDE.md` — repo-specific conventions (inherits from Global; adds only what's project-specific).
- Source code, build config, tests.
- `SESSION_LOG.md` — code-side session log (read first in implementation sessions per PART 4).

The two halves are one Project. The code-pointer note is the bridge; updates to frontmatter on either side that affect the other (e.g., `deployment-status`, `last-deployed`) propagate via the pointer.

Project is what's true when a Session is working on a specific entity.

### Local

The current Session. Claude Code's Local memory layer plus SAD's Session-specific ephemera.

What's at Local:

- The specific SAD phase and spec layer loaded for this Session.
- The task scope declared at session-start.
- The TodoList / scratchpad for this Session.
- Transient decisions before they're logged.
- The specific `_sessions/raw/<date>-<slug>.md` capture this Session produces.

Local is what's true *right now* and is either captured (raw) or compiled (the session-log entry) at Session-end. Nothing at Local persists as-is; everything either becomes raw or gets compiled.

### How the levels nest

```
Global (Documents/ + code/)
├── everything-ecosystem/        ← methodology (Global)
├── Torian/                      ← personal pillar (Global)
├── _ideas/, _sessions/, _sources/, _meta/, _archive/   ← global infrastructure + raw
├── CLAUDE.md                    ← Global CLAUDE.md (doubles as vault constitution)
│
├── projects/<entity>/           ← Project (wiki half)
│   ├── entity-profile.md
│   ├── product/spec/
│   ├── product/SESSION_LOG.md
│   ├── _ideas/, _sources/
│   └── (Local sessions run here)
│
└── ~/code/<repo>/               ← Project (code half) — sibling on disk, child of the entity logically
    ├── CLAUDE.md                ← Project-layer conventions
    ├── SESSION_LOG.md
    └── (Local sessions run here)
```

The nesting is by **ownership**, not by file-system position. `~/code/<repo>/` is a physical sibling of `Documents/` but a logical child of the entity at `Documents/projects/<entity>/`.

### Scope declaration in frontmatter

Every note *may* declare its scope in frontmatter. Declaration is optional when scope is unambiguous from path, required when scope is ambiguous:

```yaml
scope: global | project | local
scope-entity: <entity>     # required when scope: project
```

Unambiguous-from-path examples (declaration optional):

- Anything under `everything-ecosystem/**` → `scope: global`.
- Anything under `projects/<entity>/**` → `scope: project`, `scope-entity: <entity>`.
- Anything under `_sessions/raw/**` → depends on the session's subject; typically `scope: global` for methodology sessions and `scope: project` for entity-specific sessions.

Ambiguous cases (declaration required):

- A reference doc that applies to one specific entity but was stashed under `everything-ecosystem/references/` — must declare `scope: project` with `scope-entity`.
- A cross-project session-proposal that doesn't route to a single entity — declares `scope: global`.
- A `_sources/` capture from a podcast that informs multiple entities — declare `scope: global` until routed.

Why declare at all when path often tells the answer:

- **Moves become auditable.** Moving a file between scope-distinct folders forces a conscious update to `scope:`, preventing silent drift.
- **Ambiguous documents self-declare.** Path alone doesn't disambiguate every case.
- **Dataview queryability.** "All Project-scoped docs touching Polity" becomes a trivial query.

### Session-start: declare the level

SAD v3 Session Opening Protocol (PART 4) adds one step at the top:

> **Step 0.** State the level this Session operates at: Global / Project / Local. If Project, name the entity. If Local, name the parent Project.

This becomes part of the session-start ritual, alongside time-awareness and session-capture. A Session that cannot declare its level has no bounded scope and is at high risk of drift.

---

## PART 1: DUAL-MODE ACTIVITIES

SAD v2 described a linear phase pipeline (Phase 0A → 5). That implies SAD only applies when a project is actively progressing through phases. But the most consistently valuable artifacts in the vault are produced *continuously*, outside any specific phase.

### Continuous activities (always-on)

Always available. No project gate required. May be invoked any time.

| Activity | Purpose | Outputs land in |
|---|---|---|
| **Ingest** | Capture raw sources into the vault | `_sources/`, `_sessions/raw/`, `_ideas/` |
| **Idea capture** | Mind-dump into `_ideas/` | `_ideas/` (root or per-entity) |
| **Session logging** | Record sessions as work happens | `_sessions/raw/`, `_sessions/SESSION_LOG.md` |
| **Wiki maintenance** | Consolidation passes, cross-link audits | Anywhere in the compiled layer |
| **Staleness review** | Check compiled pages against their upstream raw | Any compiled artifact (updates `last-reviewed`) |

### Episodic activities (per-project phase pipeline)

The Phase 0A → Phase 5 pipeline as defined in PART 3, run when a specific entity progresses.

### How the two modes compose

Continuous activities deposit raw and compiled artifacts that episodic phases later read. Phase 0B (Research) does not start from zero — it reads whatever the continuous Ingest activity has already deposited under the entity's `_sources/`. Phase 0A (Mind Dump) does not start from zero — it reads whatever continuous Idea capture has already deposited under the entity's `_ideas/`.

A common failure mode in v2 was treating a phase-start as the moment to *begin* gathering — wasting time re-collecting material that continuous activities should have been building all along. v3's discipline: continuous activities feed the phases.

---

## PART 2: TWO-LAYER DATA MODEL

The wiki-layer's core architecture.

### Raw layer (immutable inputs)

Never edited after capture, only added. Comprises:

- `_ideas/` — idea-dumps (free-form thinking).
- `_sources/` — external ingested material (podcasts, papers, screenshots, etc.) — vault root and per-entity.
- `_sessions/raw/` — raw conversation transcripts of Cowork/Claude-Code sessions.

Every raw file declares a `raw-source-type` per raw-source-taxonomy.

### Compiled layer (re-buildable from raw)

Editable through regeneration, not direct authoring. Comprises:

- `IDEA_MAP.md`, `RESEARCH_SYNTHESIS.md`, `VISION_SPEC.md` and other spec layers.
- Entity profiles.
- `_sessions/SESSION_LOG.md` — compiled session logs synthesized from raw conversation transcripts.
- The entire `everything-ecosystem/` methodology corpus (this document included).

Compiled artifacts carry `last-compiled: <date>` (and may carry `last-reviewed`) so staleness is queryable.

### File-type table

| File pattern | Layer | Authored by | Compile path |
|---|---|---|---|
| `_ideas/*.md` | Raw | Human (or hybrid in mind-dump session) | Routed to entity `_ideas/`, then graduated into `IDEA_MAP.md` |
| `_sources/*.md` | Raw | External (ingested) | Feeds `RESEARCH_SYNTHESIS.md` of destination entity |
| `_sessions/raw/*.md` | Raw | Machine (session-capture skill) | Feeds compiled `_sessions/SESSION_LOG.md` |
| `<entity>/product/IDEA_MAP.md` | Compiled | AI from `_ideas/` | Phase 0A output |
| `<entity>/product/RESEARCH_SYNTHESIS.md` | Compiled | AI from `_sources/` | Phase 0B output |
| `<entity>/product/spec/*.md` | Compiled | AI from upstream specs | Phase 0C–1B outputs |
| `<entity>/entity-profile.md` | Compiled | Hybrid | Hand-curated; some fields auto-stamped |
| `_sessions/SESSION_LOG.md` | Compiled | Hybrid (session-capture skill drafts; human confirms) | Synthesized at session-end |
| Vault `CLAUDE.md`, repo `CLAUDE.md` | Compiled (skill layer) | Human, AI-assisted | Hand-edited; reflects settled conventions |

### Compile discipline

A compile pass:

1. Identifies the upstream raw inputs (by wikilink or path).
2. Reads them fully — no skimming.
3. Produces or refreshes the compiled artifact.
4. Stamps `last-compiled: <today>` (use the time-awareness skill for the timestamp).
5. Logs the compile in the entity's session log.

Staleness rule: a compiled artifact whose upstream raw has changed (newer `created`, `ingested`, or `updated` than the compiled `last-compiled`) is *stale* and should be re-compiled before being relied on for downstream decisions.

---

## PART 3: SCOPE-BOUNDED SESSIONS — CAMPAIGN / SESSION / CHECKPOINT

v2 sessions were calendar-bounded and implicit. v3 makes session boundaries scope-bounded and explicit, organized into a three-level hierarchy.

### Campaign (top-level)

The whole arc of work on an entity or goal. Multi-week or multi-month. Spans many Cowork/Claude-Code sessions. Has a charter (intent, target outcome, exit criteria). Examples:

- "vault restructure + SAD v3 update" (the Campaign that produced this document).
- "Polity AI Lab — concept to specced".
- "Reflect — open-source release".

### Session (mid-level)

A discrete scope *within* a Campaign. Opens with an intent, closes with an outcome. May span one Cowork conversation or multiple. Hours to days. The unit a SAD `_sessions/SESSION_LOG.md` entry describes.

### Checkpoint (sub-session)

A meaningful pause/accomplishment within a Session. Generates a checkpoint entry in the session's log, not a new session entry. Examples within a session: "Reflect repo transferred and made public," "vault Phase 4 migration complete."

### Why this matters

The progress widget (TodoList in Cowork; PR/branch tracking in Claude-Code) tracks the *current Session's scope*, not the whole Campaign. When the Session's scoped tasks drain and the intended outcome lands, the Session closes; the next Session opens.

This replaces v2's implicit "session = one Cowork conversation" with "Session = one bounded scope, possibly traversing multiple Cowork conversations."

### Session-linkage frontmatter

Every `conversation-log` raw source declares the predecessor and successor Cowork sessions:

```yaml
predecessor-session: <session-id>
successor-session: <session-id>
campaign: <campaign-name>
```

These fields form the navigable graph that lets a future archaeologist (or session-capture skill) reconstruct any Campaign from its raw trail.

### Session-start ritual (Skill layer)

At the start of every Session:

1. Invoke skills/time-awareness/SKILL — record `session-start-time` in UTC ISO-8601.
2. Invoke skills/session-capture/SKILL — capture predecessor session tail to `_sessions/raw/`.
3. Read the Session's relevant compiled context:
   - Vault `CLAUDE.md` (or repo `CLAUDE.md` for code work).
   - Most-recent entry in `_sessions/SESSION_LOG.md`.
   - The entity's profile and any open spec layers relevant to the Session's scope.
4. State the Session's scope: intent, target outcome, exit criteria, parent Campaign.
5. Use TodoList (Cowork) or equivalent to enumerate the Session's tasks.

### Session-end ritual (Skill layer)

At Session close:

1. Invoke skills/time-awareness/SKILL — record `session-end-time`.
2. Invoke skills/session-capture/SKILL — write the Session's raw `_sessions/raw/<date>-<slug>.md`.
3. Append a compiled entry to `_sessions/SESSION_LOG.md` per the format in PART 9.
4. Graduate any session-proposals that were executed; spawn new ones for follow-on work.

---

## PART 4: SESSION OPENING PROTOCOL (skill-layer)

For *implementation* sessions specifically (Phase 2 and beyond). Mandatory.

0. **Declare the level.** State whether this Session operates at Global, Project, or Local scope. If Project, name the entity. If Local, name the parent Project. (See PART 0.5.)
1. Run the Session-start ritual (PART 3).
2. Read `_sessions/SESSION_LOG.md` (full — don't skim).
3. Read repo `CLAUDE.md` (full).
4. Read the spec layer(s) relevant to the current task.
5. State: (a) the precise task, (b) which spec section(s) it maps to, (c) anticipated decision points.
6. Check for unresolved staleness markers in the Session Log.
7. **Do not write a single line of implementation code until steps 0–6 are complete.**

Staleness rule (carried from v2): if there are unresolved staleness markers on the module you're about to work on, run a reconciliation sprint first. No new features on modules with unresolved markers.

---

## PART 5: THE COMPLETE PIPELINE (episodic phases)

The Phase 0A → 5 pipeline as in v2, with v3 refinements noted inline.

### Document hierarchy

```
VISION_SPEC.md          ← permanent, unconstrained, never scoped down
  └── VERSION_SPEC_v[N].md    ← subtractive cut of vision for this version
        └── PRODUCT_SPEC.md         ← intent, scope, user taxonomy (per version)
              └── DATA_MODEL_SPEC.md
              └── IMPL_SPEC.md
              └── BEHAVIORAL_SPEC.md
              └── VERIFICATION_SPEC.md

SESSION_LOG.md          ← reads across all phases, all versions
CLAUDE.md (repo)        ← reads at start of every implementation session
IDEA_MAP.md             ← produced in Phase 0A, feeds Phase 0B and 0C
RESEARCH_SYNTHESIS.md   ← produced in Phase 0B, feeds Phase 0C
```

**Derivation rule.** Every downstream document derives from the document directly above it. Product Spec derives from Version Spec, not Vision Spec. If a downstream document contradicts its parent, the parent wins — unless a spec change protocol is initiated.

**Surface nesting — two valid patterns (v3).** Surfaces of a parent ecosystem may live either nested (`<parent>/surfaces/<surface>/`) or flat-promoted (`projects/<surface>/` as a sibling to the parent). The choice is based on operational independence: nest when the surface is tightly coupled to the parent brand (Apple → iOS); promote when the surface is an independent product that merely consumes the parent's platforms (Alphabet → Waymo). Polity's six surfaces are flat-promoted as of 2026-04-23 (Journey, Polity News, Dating, Forum, Games, Glean — all siblings to `polity/`, all declaring `platforms-used: polity/platforms/ai-lab` and `surfaces-of: polity` in frontmatter). See vault CLAUDE.md Part II for the full choice heuristic.

**Two-tier VISION_SPEC (v3).** For *multi-venture umbrella entities* (e.g., Vir, whose marketing site implies six ventures under one umbrella thesis), VISION_SPEC takes a parent-and-children form:

- **Parent VISION_SPEC** at `<umbrella>/product/VISION_SPEC.md` — the umbrella thesis.
- **Per-venture VISION_SPEC** at `<umbrella>/<venture>/product/VISION_SPEC.md` — derived from the parent (inherits values, mission, constraints) but each has its own VERSION_SPEC and downstream layers.

Use this pattern only when the umbrella is genuinely multi-venture; single-product entities use the flat hierarchy above.

### Document locations

```
<entity>/product/IDEA_MAP.md
<entity>/product/RESEARCH_SYNTHESIS.md
<entity>/product/spec/VISION_SPEC.md
<entity>/product/spec/VERSION_SPEC_v[N].md
<entity>/product/spec/PRODUCT_SPEC.md
<entity>/product/spec/DATA_MODEL_SPEC.md
<entity>/product/spec/IMPL_SPEC.md
<entity>/product/spec/BEHAVIORAL_SPEC.md
<entity>/product/spec/VERIFICATION_SPEC.md
<entity>/product/SESSION_LOG.md
<entity>/product/code/pointer.md          ← references the repo at ~/code/<repo>/
<entity>/_sources/                         ← raw layer for this entity (new in v3)
<entity>/_ideas/                           ← per-entity idea raw layer
```

Two CLAUDE.md files exist:

- **Vault `CLAUDE.md`** at `~/Documents/CLAUDE.md` — vault-level constitution. Read at the start of vault-side work.
- **Repo `CLAUDE.md`** at `~/code/<repo>/CLAUDE.md` — repo-level conventions. Read in implementation sessions.

Code lives outside the vault by convention. The vault-side `code/pointer.md` is a frontmatter-driven reference; the canonical code artifacts live in `~/code/<repo>/`.

### Lifecycle-Stage ↔ SAD Phase Mapping

| `entity-lifecycle-stage` | SAD Phase State |
|---|---|
| `concept` | Before Phase 0A. Only name + one-sentence description exists. |
| `scoped` | Phase 0A complete. IDEA_MAP.md exists. |
| `specced` | Phase 1B complete. Full spec package exists. |
| `prototyping` | Phase 2 in progress. Implementation active; SESSION_LOG.md in use. |
| `active` | Post Phase 5 for at least one version; ongoing operation. |
| `maintenance` | Post Phase 5; minimal active development. |
| `archived` | Project stopped or superseded. Lives under `projects/_archive/`. |

**Spec-first open release** (carried from v2, expanded). An entity at `specced` with `open-source-ready: true` and `community-buildable: true` represents a distinct, named SAD outcome. The deliverable is the Phase-1B spec package itself — implementation is delegated to the community, and the repository contains specs rather than code. This is a legitimate terminal state for entities that should exist but shouldn't be built by the authoring team. Reflect's eventual spec release will be the canonical example; the engine is already public and the spec package is the next step.

**Lifecycle-stage regression** (new in v3). Stages are not strictly monotonic — see entity-profile-schema — Lifecycle-stage regression (SAD v3) for the protocol. The Polity AI Lab's regression from `scoped → concept` (2026-04-21) is the canonical example.

### Phase 0A: Mind Dump + Thought Partnership

Purpose, AI role, "what this is not," conversation conduct, output (`IDEA_MAP.md`), and ★ Checkpoint 0A all carry from v2 unchanged.

**v3 refinement.** Phase 0A starts by reading whatever the continuous Idea capture activity has already deposited under the entity's `_ideas/` — a Phase 0A that begins from zero ignores months of pre-deposited thinking.

### Phase 0B: Research

Purpose, sub-types (market / historical / technical / domain / user), AI role, output (`RESEARCH_SYNTHESIS.md`), and ★ Checkpoint 0B all carry from v2 unchanged.

**v3 refinement.** Phase 0B is the *episodic compile* of whatever continuous Ingest has already deposited under the entity's `_sources/`. Research is not "go find things" — it's "synthesize what's already been gathered, ordered against the Idea Map." Going-out-to-find is itself an Ingest activity; it just happens at a coarser cadence during Phase 0B.

The phase produces a compiled artifact (`RESEARCH_SYNTHESIS.md`) that cites raw sources by wikilink and stamps `last-compiled: <date>`.

### Phase 0C: Unconstrained Vision Documentation

Purpose, AI role, output (`VISION_SPEC.md`), required sections, and ★ Checkpoint 0C all carry from v2 unchanged.

**v3 refinement (multi-venture).** When the entity is a multi-venture umbrella, this phase produces the parent VISION_SPEC and identifies the per-venture VISION_SPEC slots as separate Phase 0C runs.

### Phase 1A: Version Scoping

Carries from v2 unchanged.

### Phase 1B: Specification

Carries from v2 unchanged. The Convergence Layer (Spec Convergence loop) carries unchanged.

### Phase 2: Implementation

Carries from v2. Decision Boundary protocol unchanged. Session-end log entry now uses the v3 format (PART 9).

### Phase 3: Verification (Implementation Convergence Loop)

Carries from v2 unchanged.

### Phase 4: Spec Evolution

Carries from v2 unchanged.

### Phase 5: Completion

Carries from v2 unchanged.

---

## PART 6: SPECIFICATION DOCUMENT STRUCTURES

The structures from v2 (Vision Spec, Version Spec, Product Spec, Data Model Spec, Impl Spec, Convention doc, Behavioral Spec, Verification Spec) carry forward unchanged. See v2 archive for full templates if needed; they remain authoritative.

The only structural addition in v3 is the **two-tier VISION_SPEC** described in PART 5 above, used selectively for multi-venture umbrella entities.

---

## PART 7: THE CONVERGENCE LAYER

Carries from v2 unchanged. Spec Convergence (Phase 1B) and Implementation Convergence (Phase 3) operate as before. The ambiguity-catalog continuity bridge carries forward.

**Shareability as a consequence of convergence.** The Convergence thresholds (< 10% ambiguity for critical specs, < 20% for others, ≥ 95% compliance at implementation) are not only internal consistency checks. They are calibrated to produce **handoff readiness** — the point where the artifact is intelligible to someone not in the room. When Spec Convergence is satisfied, the spec package can be handed to another developer who would produce a faithful implementation without further conversation. When Implementation Convergence is satisfied, the running software can be demoed without caveats. This property is not a separate goal and not a separate ritual; it is the direct consequence of the same disambiguation the Convergence thresholds measure. Culturally-valued practices like "always be ready to demo" are therefore achievable from the methodology's own mechanics — you don't need a demo-readiness discipline on top of SAD because passing Convergence already produces the condition.

---

## PART 8: CAPABILITY-SKILLS INVOKED BY SAD v3

SAD v3 names two capability-skills as load-bearing rituals. They live under `everything-ecosystem/skills/` and are invoked at the points named in PART 3.

- **time-awareness** — grounds every session in real-world time via `date`. Used at session-start, session-end, and any time a `created` / `ingested` / `captured-at` / `last-compiled` / `last-reviewed` field is being authored.
- **session-capture** — at session-start, captures the predecessor Cowork session's tail to `_sessions/raw/`. At session-end, drafts the compiled `_sessions/SESSION_LOG.md` entry for human confirmation.

If either skill is unavailable, fall back as that skill's own SKILL.md describes; do not silently skip the corresponding ritual.

---

## PART 9: SESSION-PROPOSAL PATTERN

A `session-proposal` is a `raw-source-type` (see raw-source-taxonomy — session-proposal). It describes a future session the user wants to run.

### Lifecycle

```
active                  ← captured but not yet run
  → in-progress         ← session opens against this proposal
    → graduated         ← session completed; proposal carries `lineage-to: <session-log-entry>`
  → deferred            ← consciously postponed
  → archived            ← decided against, or folded into another proposal
```

### Required frontmatter (beyond raw-source universal)

```yaml
type: idea
raw-source-type: session-proposal
idea-status: active | in-progress | graduated | deferred | archived
destination-entity: <entity>
scope: "<one-line>"
intent: "<what the session accomplishes>"
target-outcome: "<deliverables>"
estimated-duration: "<time>"
priority: next | queued | someday | last
proposed-in-session: <cowork-session-id>
dependencies: [<other-proposal>, ...]    # optional
predecessor-source: <idea-dump-or-other> # optional
lineage-to: <session-log-entry>           # set when graduated
```

### Batch-dump workflow

In a planning session the user speaks multiple session ideas across multiple entities. Each is captured as its own `session-proposal` file routed to the right entity's `_ideas/` folder. A Dataview query surfaces the backlog across all entities, ordered by priority.

---

## PART 10: SESSION LOG (compiled) — entry format

Compiled entry written at session-end, appended to `_sessions/SESSION_LOG.md`. Drafted by the session-capture skill; finalized by the human.

```markdown
## Session N — <date(s)> (scope-bounded, ~<duration>)
**Campaign:** <campaign-name>
**Session IDs:**
- Predecessor: <cowork-session-id> (raw capture)
- This session: <cowork-session-id>
- Successor: <TBD or session-id>
**Intent:** <one-paragraph>
**Entities/Pillars Touched:** <bulleted list>
**Artifacts Produced/Modified:** <bulleted list with wikilinks>
**Checkpoints Achieved:** <numbered list>
**Sub-Session Transitions:** <prose narrative of how the scope evolved>
**Key Decisions:** <bulleted list>
**Open / Deferred Work:** <bulleted list>
**Recommended Next Session:** <wikilink to next session-proposal>
```

Compiled session-log entries cite raw conversation logs; raw conversation logs are not loaded into active context unless the entry's reader explicitly cites a passage.

---

## PART 11: SUPPORTING PATTERNS

### Authorship and IP boundaries

Every entity profile carries `authorship` and `ip-sensitivity` fields per entity-profile-schema — `authorship` (SAD v3). The four authorship values (`sole`, `co-authored`, `extracted-from`, `external`) cover the IP boundary cases SAD has encountered. Reflect (extracted from ThriveSight) is the canonical `extracted-from` example.

### Reference-without-inherit

When a new entity studies a predecessor's work without copying it forward, use the `references:` block in the entity profile (see entity-profile-schema — Reference-without-inherit (SAD v3)). Polity → Reflect is the canonical example. Distinct from supersession.

### Monorepo consolidation patterns

When consolidating code from multiple repos into one (and the SAD methodology is involved in the decision), three patterns are named:

- **Squash import.** Full working-tree of source repo copied into `<subfolder>/` of destination in a single commit. Source repo stays archived as historical record. Use when full per-commit history isn't needed in the monorepo. Example: Reflect's `api/` subfolder, imported from archived `tchjhnsn/reflect-api`.
- **Subtree merge.** Full git history preserved in destination via `git subtree`. Use when history matters in-monorepo (e.g., for `git log` to find old commits).
- **Submodule.** Source repo referenced by commit SHA, not integrated. Use when the source should stay independently versioned.

Document the choice in the entity's session log and (if material) in the IMPL_SPEC.

### Lifecycle-stage regression

See entity-profile-schema — Lifecycle-stage regression (SAD v3). Polity AI Lab `scoped → concept` (2026-04-21) is canonical.

---

## PART 12: KNOWN FAILURE MODES

Carries the v2 failure modes (anchoring too early, conflating vision and version, orphaned vision, spec staleness, hidden ambiguity, checkpoint fatigue, AI context loss, Goodhart's Law in Implementation Convergence) and adds:

### Wiki staleness from skipped compile

When continuous activities deposit new raw without anyone running a compile pass, downstream compiled artifacts become quietly stale. Symptoms: an entity profile that hasn't been re-read since before its underlying ideas evolved; a `RESEARCH_SYNTHESIS.md` whose `last-compiled` is older than the most recent `_sources/` ingest. Mitigation: include staleness review in the session-start ritual whenever a session opens against a compiled artifact.

### Raw bloat from unbounded ingest

`_sources/` and `_sessions/raw/` will grow without bound. v3 declines to enforce retention because the cost of keeping is low and the cost of deleting (lost provenance) is high. Mitigation: use `retention-review: <date>` on raw sources whose value is plausibly time-bound; let Dataview surface them for review when the date arrives.

### Ritual skipping under time pressure

The session-start and session-end rituals are easy to skip "just this once." Skipping them once breaks the predecessor/successor chain and forces the next session to either reconstruct it or live without. Mitigation: the rituals are short (under a minute combined). Treat them as load-bearing.

### Campaign drift

A Campaign that loses its charter becomes an open-ended container for vaguely-related work. Mitigation: every Campaign has a charter (intent, target outcome, exit criteria); when those drift, either rewrite the charter explicitly or close the Campaign and open a new one.

---

## PART 13: WORKED EXAMPLE

A small scope-bounded Session running end-to-end through the v3 pipeline. Uses real entities and shows how the taxonomy, schema, and capability-skills compose.

### Scenario

The Polity AI Lab is at `entity-lifecycle-stage: concept` (regressed from `scoped` on 2026-04-21 — see projects/polity/platforms/ai-lab/entity-profile). Torian wants to author its `IDEA_MAP.md` to advance it back to `scoped`. This is a Phase 0A Session.

### Campaign

`Polity AI Lab — concept to specced` (a multi-session Campaign whose first session is this one).

### Session-start ritual

1. **Time-awareness** — `bash: date -u +"%Y-%m-%dT%H:%M:%SZ"` → `2026-04-23T15:00:00Z`. Stash as `session-start-time`.
2. **Session-capture (Trigger 1)** — call `mcp__session_info__list_sessions`. The most recent prior session is the SAD v3 bundle session (`local_<id>`) which is the predecessor for the SAD Campaign, not this AI Lab Campaign. Surface to user: "Most recent session is the SAD v3 bundle. Is this Polity AI Lab Phase 0A a fresh Campaign, or a continuation of an earlier AI Lab session?" User: "Fresh Campaign." Skip predecessor capture; note it in scratchpad.
3. **Read context:**
   - Vault `CLAUDE.md`.
   - `_sessions/SESSION_LOG.md` (most recent entry: SAD v3 bundle).
   - `projects/polity/platforms/ai-lab/entity-profile.md` (concept, regressed, references-only-to Reflect).
   - Continuous-deposit check: any pre-existing `projects/polity/platforms/ai-lab/_ideas/` content. (None yet.)
   - Continuous-deposit check: any `projects/polity/platforms/ai-lab/_sources/` content. (None yet.)
4. **State the Session scope:**
   - Intent: produce `IDEA_MAP.md` for the Polity AI Lab.
   - Target outcome: AI Lab advances to `scoped`; tensions and what-this-is-not articulated; first set of `_sources/` and `_ideas/` deposits made.
   - Exit criteria: ★ Checkpoint 0A passed; entity-lifecycle-stage updated; session-log entry written.
   - Parent Campaign: `Polity AI Lab — concept to specced`.
5. **TodoList:** "Mind-dump → draft IDEA_MAP → user review → ★ 0A confirm → update entity profile → close session."

### Mid-session deposits (continuous activities, executed inside an episodic phase)

During the mind-dump, Torian references three external sources he wants to study. Each is captured as raw:

- A Karpathy podcast on memory architecture → `_sources/2026-04-23-karpathy-memory-architecture.md` with `raw-source-type: podcast-transcript`, frontmatter naming show, episode, speakers, duration.
- A specific Aristotle passage from *Politics* Book III → `_sources/2026-04-23-aristotle-politics-iii-9.md` with `raw-source-type: book-excerpt`, frontmatter naming author, edition, page-range, ISBN.
- A screenshot of a competitor's AI-companion onboarding → `_sources/2026-04-23-competitor-onboarding.md` with `raw-source-type: screenshot` and `image-path` to the file in `attachments/`.

Each carries `created`, `ingested`, `authorship: external`, `ip-sensitivity: normal`, and `destination-entity: projects/polity/platforms/ai-lab`. Time-awareness is invoked once for the batch.

Two idea-dumps are also captured to `projects/polity/platforms/ai-lab/_ideas/` with `raw-source-type: idea-dump`.

### Phase 0A output

`projects/polity/platforms/ai-lab/product/IDEA_MAP.md` is drafted (compiled artifact). Frontmatter:

```yaml
---
type: spec                              # IDEA_MAP is a compiled spec-layer artifact
source: hybrid
created: 2026-04-23
ingested: 2026-04-23
last-compiled: 2026-04-23
authorship: sole
ip-sensitivity: normal
tags: [idea-map, polity, ai-lab, phase-0a, sad-v3]
---
```

The body cites the three `_sources/` raw deposits and the two `_ideas/` raw deposits by wikilink. Raw is not loaded into active context elsewhere; the IDEA_MAP carries the synthesis.

### ★ Checkpoint 0A

User reads the IDEA_MAP. Confirms Core Tension, Full Scope, Open Contradictions, "What This Is Not." Says CONFIRM.

### Entity profile update

`projects/polity/platforms/ai-lab/entity-profile.md` updated:

```yaml
entity-lifecycle-stage: scoped          # advanced from concept
updated: 2026-04-23
last-reviewed: 2026-04-23
authorship: sole
ip-sensitivity: normal
references:
  - entity: reflect
    relationship: reference-only
    inherits-from: false
    note: "Polity's AI Lab studies Reflect's architecture but builds from first principles; no code carryover."
```

A changelog row added: `2026-04-23 | Phase 0A complete; entity-lifecycle-stage advanced from concept to scoped. | Phase 0A session.`

### Session-end ritual

1. **Time-awareness** — `bash: date -u +"%Y-%m-%dT%H:%M:%SZ"` → `2026-04-23T17:30:00Z`. Stash as `session-end-time`.
2. **Session-capture (Trigger 2):**
   - Optional raw capture of this session's tail to `_sessions/raw/2026-04-23-polity-ai-lab-phase-0a.md`. Skipped here because the IDEA_MAP fully captures the value; tail isn't needed for Campaign continuity.
   - Draft compiled session-log entry to `_sessions/SESSION_LOG.md`:
     ```
     ## Session 12 — April 23, 2026 (scope-bounded, ~2.5 hours)
     **Campaign:** Polity AI Lab — concept to specced
     **Session IDs:**
     - Predecessor: none (fresh Campaign start)
     - This session: <cowork-session-id>
     - Successor: TBD
     **Intent:** Phase 0A — produce IDEA_MAP.md for Polity AI Lab; advance from concept to scoped.
     **Entities/Pillars Touched:** projects/polity/platforms/ai-lab (entity profile, product/IDEA_MAP.md), root projects/polity/platforms/ai-lab/_sources (3 deposits), projects/polity/platforms/ai-lab/_ideas (2 deposits).
     **Artifacts Produced/Modified:**
     - IDEA_MAP.md (created)
     - projects/polity/platforms/ai-lab/entity-profile (entity-lifecycle-stage scoped)
     - 3 _sources/ raw deposits, 2 _ideas/ raw deposits
     **Checkpoints Achieved:** ★ 0A confirmed.
     **Sub-Session Transitions:** mind-dump → external sourcing (continuous Ingest within Phase 0A) → IDEA_MAP synthesis → ★ 0A → profile update.
     **Key Decisions:** Polity continues to reference reflect without inheriting; AI Lab thesis grounded in Aristotelian polity-formation rather than memory-graph optimization.
     **Open / Deferred Work:** Phase 0B (RESEARCH_SYNTHESIS) — spawn proposal.
     **Recommended Next Session:** session-proposal-polity-ai-lab-phase-0b
     ```
   - Spawn next session-proposal: `_ideas/session-proposal-polity-ai-lab-phase-0b.md` with `priority: next`, `dependencies: []`, `proposed-in-session: <this-session-id>`.

### What this example demonstrates

- **Continuous and episodic compose.** Phase 0A (episodic) consumed Ingest deposits (continuous) made during the same session.
- **Two-layer model in action.** Three raw `_sources/` files and two `_ideas/` files, plus the compiled `IDEA_MAP.md` that cites them. Raw is never loaded into active context after capture; the compiled artifact carries forward.
- **Schema fields used.** `entity-lifecycle-stage` advanced; `references:` block populated; `last-reviewed` and `authorship` stamped; changelog appended.
- **Both capability-skills invoked.** Time-awareness at every timestamp; session-capture at session-start (predecessor check) and session-end (log draft).
- **Campaign chain extended.** This session is the first in a new Campaign; the next session-proposal carries `predecessor-session` pointing here.
- **No silent drift.** Every artifact created carries proper frontmatter; the entity-profile changelog records the transition.

---

## PART 14: CRITICAL REMINDERS FOR AI

1. **Pipeline order is mandatory** — Phase 0A before 0B before 0C before 1A before 1B. Never spec before vision; never implement before spec converges.
2. **Vision vs. Version distinction** — Vision is the unconstrained product; Version is this scope cut. When in doubt: "Is this about what the product *ultimately is*, or about what *this version includes*?"
3. **Spec authority** — When reality conflicts with spec, the spec changes — not the policy.
4. **Convergence Loop discipline** — Spec Convergence before every spec checkpoint; Implementation Convergence before every verification checkpoint.
5. **Escalate on spec gaps** — If a checkpoint reveals a genuine spec gap, escalate; do not improvise and proceed.
6. **Session Log first, always** — Every implementation session reads the Session Log before anything else.
7. **Ambiguity catalog continuity** — Spec Convergence ambiguities transfer to Verification Spec's catalog and become priority Implementation Convergence scenarios.
8. **Staleness before new features** — No new features on modules with unresolved staleness markers.
9. **Naming consistency** — If a term is in the Glossary, use it exactly everywhere.
10. **No silent drift** — Every spec change is logged; every propagation is traced.
11. **(v3) Run the rituals** — Session-start and session-end rituals are not optional.
12. **(v3) Raw is immutable; compiled is re-buildable** — Edits to raw should only be frontmatter housekeeping; everything else means compiling a new artifact.
13. **(v3) Continuous feeds episodic** — Phases 0A and 0B start from what continuous activities have already deposited. Don't duplicate the gathering.
14. **(v3) Cite, don't load** — Raw sources are cold storage. Cite them by wikilink; load them into active context only when explicitly necessary.
15. **(v3) Time-awareness is load-bearing** — Use the time-awareness skill whenever stamping a `created`, `ingested`, `captured-at`, `last-compiled`, or `last-reviewed` field.
16. **(v3) Disambiguation produces shareability** — Every ★ checkpoint is implicitly a handoff test: could the current artifact be given to someone not in this room — a partner, a collaborator, a community implementer — and read, understood, or built from without further conversation? If yes, you've disambiguated enough. If no, the next iteration of Spec Convergence or the next phase has work to do. This is not a new mechanism; it is a diagnostic question that pairs with the quantitative convergence thresholds.

---

*Specification-Anchored Development — Version 3.0 — April 2026*
*Developed by Torian and Claude*
*Predecessor: SAD_SKILL_v2.md (March 2026)*
