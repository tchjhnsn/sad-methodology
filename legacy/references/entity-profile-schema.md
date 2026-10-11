# Entity Profile Schema

This is the complete schema for an entity profile. Every entity — from a multinational ecosystem to a single
internal tool — uses this same schema. **No field may be left blank.** Every field must have either a value
or a field status that explains why no value exists. This makes the state of every aspect of the entity
visible and auditable.

---

## Field Status Definitions

Every field in the schema must have a value or one of the following statuses. These statuses are
**structural primitives** — they apply to every field in every entity profile regardless of industry,
context, or entity type.

- **N/A** — This field does not apply to this entity type. Include a brief note explaining why.
  Example: "Revenue Model: N/A — this is an open source tool with no commercial intent."
- **Not yet determined** — This field applies, but no decision or development has occurred yet. The entity
  is too early in its lifecycle for this field to have a value.
- **Planned** — A decision has been made that this will be developed, but work hasn't started.
- **In development** — Active work is happening on this field's subject matter.
- **Documented** — A value exists and is recorded. The field is populated with actual content.
- **Under review** — A current value exists but is being reconsidered or may change.
- **Consciously deferred** — This field is applicable and could have a value, but the decision has been
  intentionally postponed. Multiple possible futures exist. When using this status, always note the
  potential trajectories. Example: "Revenue Model: Consciously deferred — could become commercial SaaS,
  could remain free and open source, could become freemium. Decision will be revisited after v1.0 launch."

---

## Schema

```markdown
# Entity Profile: [Name]

## 1. Identity

- **Name:** [Entity name]
- **Description:** [One to three sentences describing what this entity is and does]
- **Type:** [software | physical | service | content | hybrid | other]
- **Parent Entity:** [Name of parent entity, or "None" if top-level]
- **Date Created:** [When this entity was first conceived or created]
- **Profile Version:** [Version number of this profile]
- **Last Updated:** [Date of last profile update]

## 2. Classification

- **Classification:** [ecosystem | subsidiary | product-within-company | open-source-tool | internal-tool | shared-infrastructure | unplaced-idea]
- **Classification Rationale:** [Why this classification was chosen. What evidence supports it. If evidence
  is insufficient for certainty, state what is assumed and what would confirm or change the classification.]
- **Classification Confidence:** [confirmed | provisional | inconclusive]
- **Independence Test:**
  - Does it have its own product? [yes/no/insufficient-evidence — brief explanation]
  - Does it have its own brand? [yes/no/insufficient-evidence — brief explanation]
  - Does it have its own business model? [yes/no/insufficient-evidence — brief explanation]
  - Does it have operations and identity separate from the parent's core? [yes/no/insufficient-evidence — brief explanation]
  - Would users identify with it independently of any other entity? [yes/no/insufficient-evidence — brief explanation]
- **Potential Trajectory:** [If classification is provisional or the entity's future is an open question,
  note the possible trajectories. Example: "Currently a hobby project. Could become a commercial product,
  an open source tool, or remain personal. Decision consciously deferred."]

## 3. Pillar Assessment

### 3a. Product Pillar
- **Status:** [developed | in-progress | conceptual | intentionally-absent]
- **Lifecycle Stage:** [ideation | documentation | implementation | production]
- **Product Orientation:** [offering | operational-capability | enabling-infrastructure]
- **Description:** [What this entity produces, creates, or builds. Who it serves. What problem it solves.
  The product pillar is about the made thing — the artifact, the creation, the output of intentional
  design and construction. This includes customer-facing offerings, operational capabilities like
  manufacturing facilities, and enabling infrastructure like platforms and protocols.]
- **Key Artifacts:** [List of key product artifacts — specs, codebase, prototypes, factories, etc.]
- **Notes:** [Any relevant context about the product's current state]

#### Product Composition (if applicable)

Not every product has internal composition. A simple product is just a product. But when a product
reaches the complexity where it contains what feel like other products, document its composition here.
If the product is simple, mark this section N/A.

- **Core:** [The fundamental capability or technology that all components share. What makes this product
  THIS product rather than some other product. Example: "Claude's core is a large language model capable
  of reasoning, writing, coding, and tool use." Example: "Tesla's core is battery technology and AI/autonomy."]
- **Variants:** [Different expressions of the core optimized for different tradeoffs. Example: "Opus
  (maximum capability), Sonnet (balanced), Haiku (speed and efficiency)." Example: "Model S (performance),
  Model 3 (mass market), Model Y (utility), Cybertruck (durability)."]
- **Surfaces:** [Distinct product experiences that deliver the core to different users. Each surface has
  its own UX, user base, and potentially its own brand identity. Example: "Claude Chat (web/mobile
  conversation), Claude Code (CLI for developers), Cowork (desktop automation), API (programmatic access)."]
- **Platform Capabilities:** [Infrastructure, protocols, and extension points that enhance what surfaces
  can do. Not user-facing directly. Example: "MCPs (tool integration protocol), tool use, system prompts,
  context window architecture." Example: "Supercharger network, Autopilot/FSD software stack."]

When a component at any layer — variant, surface, or platform capability — begins to develop independence
across multiple pillars (its own brand identity, its own user base, its own business logic), it has
crossed the threshold from "component within the product composition" to "entity that needs its own
profile." Note this transition in the Child Entities section.

### 3b. Brand Pillar
- **Status:** [developed | in-progress | conceptual | unintentional | intentionally-absent]
- **Lifecycle Stage:** [ideation | documentation | implementation | production]
- **Intentionality:** [Is the brand being actively shaped, or is it forming passively?]
- **Brand-Product Relationship:** [product-creates-brand | brand-creates-product | brand-is-product | co-developed | N/A]
- **Description:** [What the brand identity is, how people perceive this entity, what emotional relationship exists]
- **Brand Operations:** [Does the brand have its own operations? Events, merchandise, marketing campaigns, partnerships?]
- **Key Artifacts:** [List of brand artifacts — style guides, logos, brand docs, marketing materials, etc.]
- **Notes:** [Any relevant context about the brand's current state]

### 3c. Business Pillar
- **Status:** [developed | in-progress | conceptual | intentionally-absent]
- **Lifecycle Stage:** [ideation | documentation | implementation | production]
- **Revenue Model:** [How this entity captures value — subscription, sales, advertising, licensing, etc., or "None"]
- **Business Products:** [Does the business have its own products? Pricing tiers, enterprise plans, contracts, etc.]
- **Independence:** [Can this business sustain itself without being subsidized by another entity?]
- **Key Artifacts:** [List of business artifacts — financial models, pricing docs, contracts, partnership agreements, etc.]
- **Notes:** [Any relevant context about the business's current state]

## 4. Mission Alignment

- **Ecosystem Mission:** [The governing mission of the parent ecosystem, if applicable]
- **Entity's Role in Mission:** [How this specific entity contributes to or serves the ecosystem mission]
- **Mission Alignment Strength:** [strong | moderate | weak | unclear | not-applicable]
- **Notes:** [Any relevant context about mission alignment]

## 5. Relationships

For each relationship, create an entry:

### Relationship: [Entity Name] ↔ [Other Entity Name]
- **Type:** [horizontal | vertical | diagonal | radial | loose-affiliation | external-dependency]
- **Strength:** [strong | moderate | weak | emerging]
- **Directionality:** [bidirectional | Entity A → Entity B | Entity B → Entity A]
- **Independence:** [Can each entity succeed independently of this relationship? yes/no]
- **Description:** [How these entities relate, what value the relationship creates]
- **Ambiguity Notes:** [If the relationship type is unclear, explain why and present both readings]

## 6. Visibility

For each significant asset, specify visibility:

| Asset | Visibility | Notes |
|-------|-----------|-------|
| [e.g., Source code] | [public / private / partially-public] | [e.g., Core is private, SDK is public] |
| [e.g., Brand assets] | [public / private / internal] | [e.g., Style guide is internal] |
| [e.g., Business docs] | [public / private / internal] | [e.g., Pricing is public, margins are internal] |
| [e.g., Documentation] | [public / private / internal] | |
| [e.g., Repository] | [public / private / N/A] | [e.g., GitHub public repo] |
| [e.g., Website] | [public / private / N/A] | |

## 7. Child Entities

List all entity profiles nested within this one. Each child has its own full entity profile.

| Child Entity | Classification | Status | Origin |
|-------------|---------------|--------|--------|
| [Name] | [classification] | [active / archived / discontinued] | [how it became a child entity — built, acquired, spun out from product composition, etc.] |

## 8. Lifecycle & Archival

- **Status:** [active | archived | discontinued]
- **If Archived/Discontinued:**
  - Date: [When it was archived or discontinued]
  - Reason: [Why]
  - Replaced By: [What replaced it, if anything]
  - Lessons Learned: [What was learned from this entity's lifecycle]

## 9. Documentation Audit

- **Documentation Status:** [complete | partial | sparse | absent]
- **Gaps Identified:**

| Expected Document | Status | Priority | Notes |
|------------------|--------|----------|-------|
| [e.g., Product specification] | [exists / missing / outdated] | [critical / important / recommended] | [e.g., "Codebase exists but no written spec"] |

- **Recommended Next Document:** [What should be produced next, with reasoning]

## 10. Changelog

| Date | Change | Trigger |
|------|--------|---------|
| [Date] | [What changed in the profile] | [What triggered the update — manual review, code change, business decision, etc.] |
```

---

## Classification Definitions

**Ecosystem:** A top-level entity that contains and governs multiple child entities unified by a shared
mission. An ecosystem is not just a holding company or a conglomerate — its entities are interconnected
and the whole is greater than the sum of the parts. Alphabet is an ecosystem. The Musk ecosystem
(Tesla + SpaceX + xAI + The Boring Company + Neuralink) is an ecosystem. The classification of
"ecosystem" describes the container, not the contents.

**Subsidiary:** An entity with its own product, brand, and business — with operations and identity that are
completely separate from the parent's core products and brand. Waymo is a subsidiary of Alphabet. WhatsApp is
a subsidiary of Meta. A subsidiary stands apart from the parent's core identity. Users of a subsidiary may
never know or care about the parent.

**Product within a company:** A product that ships under the parent's brand, operates within the parent's
business, and is part of the parent's core identity. Tesla's Optimus robot is a product within Tesla — it
serves a different market than vehicles but is a Tesla product, not a subsidiary. It does not have its own
separate brand or business operations.

**Open source tool:** A product released publicly for community use. May have its own community, governance,
and even a foundation, but typically does not have an independent brand identity or business model in the way
a subsidiary does. React and PyTorch are open source tools within Meta's ecosystem. Their operations (community
management, releases, governance) are separate from Meta's core products, but they are not subsidiaries.

**Internal tool:** Something built for the ecosystem's own operations. Not public-facing. No external users.
Solves an internal problem. May be critically important but is never confused with a subsidiary or a product.

**Shared infrastructure:** Code, tooling, methodology, or organizational knowledge that multiple entities draw
from. Has no brand and no business model of its own. Exists in service of the entities it supports. When shared
infrastructure begins to accumulate its own brand or business logic, it is either becoming a subsidiary or
is improperly formed.

**Unplaced idea:** Something that has not yet been classified. Exists in a notebook, a conversation, a mind
dump, a prototype. May become any of the above. The most important thing is that it be recognized as unplaced —
not prematurely elevated and not dismissed.

---

## Relationship Type Definitions

**Horizontal adjacency:** Entities serving overlapping or complementary markets at the same level. Each
must be independently viable. Tesla Vehicles and Tesla Energy are horizontal — different markets, same
level, each must stand on its own.

**Vertical integration:** Entities operating at different levels of the same value chain. Achieves
sovereignty over supply chain. Tesla's battery cell production vertically integrates with its vehicle
manufacturing.

**Diagonal movement:** When a horizontal expansion creates a vertical integration opportunity that didn't
previously exist. Cannot be fully predicted in advance. Tesla's Optimus (horizontal for Tesla) created
vertical integration with SpaceX's Mars colonization mission.

**Radial:** The relationship between a core and its surfaces within a product composition. Multiple
surfaces emanate from a shared core. Improvements to the core propagate outward to all surfaces.
Innovations at one surface can potentially migrate to others. Claude's model (core) relates radially
to Claude Chat, Claude Code, Cowork, and the API (surfaces). This is structural-compositional, not
market-positional.

**Loose affiliation:** Entities sharing a parent and mission but with minimal operational integration.
They benefit from the shared brand or resource pool but don't directly depend on each other.

**External dependency:** A relationship with an entity outside the ecosystem that is relied upon but not
owned. Apple's reliance on TSMC for chip fabrication. A SaaS product's dependence on AWS for hosting.
The framework notes the dependency and its strategic implications (risk, sovereignty, potential for
future vertical integration) without producing a full entity profile for the external entity.

---

## Product Orientation Definitions

**Offering:** The thing delivered to external users or customers. This is what people think of when
they say "product." The Model 3, the iPhone, Claude Chat. Offerings need market analysis, competitive
positioning, user research, and pricing.

**Operational capability:** Something built to enable offerings but not delivered to external customers
directly. Tesla's Gigafactory, Amazon's fulfillment centers, a company's internal deployment pipeline.
Operational capabilities need capacity planning, efficiency metrics, and capital expenditure tracking.
They went through the same lifecycle as offerings (ideation, documentation, implementation, production)
and are products of engineering — but their audience is internal.

Note: An entity's product orientation can change. Tesla's battery cells started as operational capability
(powering Tesla's own vehicles) and may be transitioning to an offering (selling cells to other manufacturers).
TSMC's fabs are offerings — manufacturing capability IS what customers pay for. Henry Ford's factories
were operational capability for automobiles until World War I, when manufacturing capability itself became
the offering for military equipment. Product orientation is a current-state assessment, not a permanent label.

**Enabling infrastructure:** A shared foundation that multiple entities draw from. Platform capabilities
in a product composition are enabling infrastructure. Shared design systems, common authentication
services, data pipelines. Enabling infrastructure has no brand and no direct business model — it exists
in service of the entities it supports.

---

## Versioning Within Entities

Products can have versions, and versions can have models. Each can be active or archived independently.
Versioning sits within the product composition model — variants are the primary vehicle for versioning.

Example: iPhone (product) → iPhone 12 (version) → iPhone 12 Pro, iPhone 12 Mini (models)

The iPhone 5c was a model that was discontinued. The iPhone 5 version line was eventually succeeded. The iPhone
product continues. Each level can have its own entity profile if the complexity warrants it. For simple version
tracking, a note in the parent entity's changelog is sufficient. For versions or models with their own distinct
identity (like the iPhone SE line), a child entity profile may be appropriate.

---

## Pillar Status Definitions

- **Developed:** The pillar is built, operational, and actively functioning.
- **In-progress:** The pillar is being actively built or developed.
- **Conceptual:** The pillar has been thought about but no concrete work has started.
- **Intentionally absent:** A conscious decision has been made that this pillar is not needed for this entity.
  This is different from "not yet determined" — intentionally absent means the absence is the decision.
- **Unintentional (brand only):** The brand exists passively — people have perceptions — but no intentional
  shaping is occurring. This is distinct from "absent" because brand always exists whether shaped or not.

---

## Vault Frontmatter (machine-readable layer)

The schema above describes the *content* of an entity profile. The vault additionally requires frontmatter fields on the `entity-profile.md` note itself so Dataview queries and AI agents can reason across entities structurally. These are orthogonal to the human-readable Classification field — Classification describes the entity conceptually, while the frontmatter fields below describe its structural role in the vault.

### Required on every entity profile

```yaml
---
type: entity-profile              # or platform-profile / surface-profile for those entity-classes
source: human | machine | hybrid
created: <date>                   # when the entity was first conceived
ingested: <date>                  # when the profile was added to the vault (often == created)
updated: <date>                   # last substantive edit
last-reviewed: <date>             # last time a human scanned for correctness (SAD v3)
last-compiled: <date>             # last time the profile was regenerated from raw inputs (SAD v3, optional for hand-authored profiles)
tags: [entity, ...]
entity-class: business | hobby | platform | surface | hybrid | standalone | open-source-tool
entity-lifecycle-stage: concept | scoped | specced | prototyping | active | maintenance | archived
authorship: sole | co-authored | extracted-from | external   # SAD v3 — required everywhere
ip-sensitivity: high | normal | n/a                          # SAD v3 — required everywhere (was archived-only)
scope: project                    # SAD v3 — every entity profile is project-scoped
scope-entity: <self>          # self-reference; makes Dataview queries over project-scoped artifacts uniform
---
```

#### `scope` and `scope-entity` (SAD v3)

Names the level the note operates at. See SAD_SKILL_v3 — PART 0.5 for the full Global / Project / Local model. Every entity-profile is by definition `scope: project` — the profile *is* the project's root document in the wiki half. The `scope-entity` field is a self-reference wikilink, keeping the Dataview query shape uniform across project-scoped artifacts. Non-entity-profile notes that declare `scope: project` point their `scope-entity` at the owning entity's profile.

`scope:` and `scope-entity:` declaration is **required when scope is ambiguous from path**, **optional when unambiguous**. Entity profiles are always required to declare because making the self-reference explicit is useful for Dataview. Other notes under `projects/<entity>/**` may omit the fields (path implies project scope with entity named).

#### `authorship` (SAD v3)

Required on every entity profile (not only archived ones). Values:

- **sole** — Authored alone by the vault owner.
- **co-authored** — Co-authored with one or more named collaborators. Requires `co-authors: [<name>, ...]`.
- **extracted-from** — A solo continuation of work that originated as something else. Requires `extracted-from: <predecessor-entity>` and an explanatory note about which portions were author-owned. Reflect (extracted from ThriveSight) is the canonical example.
- **external** — Material authored entirely outside the vault and ingested as reference (rare for entity profiles; common for raw sources).

`ip-sensitivity` accompanies `authorship`. Set `high` whenever co-authored material is present or extraction boundaries matter; `normal` for sole-authored work in normal contexts; `n/a` for ingested external material where the field isn't meaningful.

### `entity-class` values

Describes the entity's *structural role*, not its commercial posture. These are distinct from the Classification field:

- **business** — A monetized venture. The entity exists with commercial intent.
- **hobby** — A non-monetized or exploratory project.
- **platform** — An underlying engine whose output is consumed by other entities (APIs, protocols, shipped packages, models). Platforms rarely have user-facing brand.
- **surface** — A user-facing wrapper built on one or more platforms. Surfaces have their own brand, business model, and product direction.
- **hybrid** — Both a platform and a surface (e.g., a consumer app that also exposes a developer API).
- **standalone** — Neither parent nor child in any platform/surface relationship.
- **open-source-tool** — Publicly released code/spec artifact under a permissive license. May have community use, governance, even a foundation, but typically lacks an independent business model. Distinct from `platform` because the consumers are external developers, not internal entities. Reflect (Apache 2.0, public on GitHub) is the canonical example. (Added in SAD v3 alignment.)

A single entity can have multiple classifications on different axes. A parent-ecosystem may be `business` at the top level while its internal engine is `platform` and its internal apps are `surface`.

### `entity-lifecycle-stage` values

Tracks entity maturity. These parallel SAD phases (see SAD_SKILL_v3 for the mapping):

- **concept** — Name and one-sentence description only. `_ideas/` folder exists.
- **scoped** — IDEA_MAP.md exists; tensions identified (SAD Phase 0A complete).
- **specced** — Full SAD Phase 1B spec package exists; entity is releasable as an open specification.
- **prototyping** — SAD Phase 2 implementation in progress.
- **active** — Shipped, or near-shipped with real users.
- **maintenance** — Stable; minimal active development.
- **archived** — Stopped, superseded, or abandoned. Lives under `projects/_archive/`.

`entity-lifecycle-stage` is the overall entity state. The pillar-level `Lifecycle Stage` values (ideation | documentation | implementation | production) remain, and they are per-pillar. An entity at `prototyping` may have product at `implementation`, brand at `ideation`, and business at `documentation`.

#### Lifecycle-stage regression (SAD v3)

Stages are not strictly monotonic. An entity can revert to an earlier stage when its prior classification turns out to have been premature, or when content that justified the higher stage relocates to another entity. The Polity AI Lab regression (`scoped → concept` on 2026-04-21, after the ThriveSight-era corpus relocated to reflect) is the canonical example.

When regressing, set:

```yaml
entity-lifecycle-stage: <earlier-stage>           # the new (regressed-to) value
lifecycle-regression-reason: "<why>"              # required on regression
lifecycle-regression-date: <date>                  # required on regression
lifecycle-regression-from: <previous-stage>       # the value being regressed from
```

The regression must also appear in the entity's changelog. Regression is a legitimate protocol, not a defect — recording it preserves the audit trail.

### Required when `entity-class: business`

```yaml
sector: tech | real-estate | hospitality | media | sports-tech | fintech | other
```

### Required for `platform` and `surface` entities

Platforms declare what they provide:

```yaml
type: platform-profile
platforms-provided: <feature-or-engine> ...
consumed-by-surfaces: <surface> ...        # back-reference, updated as surfaces adopt
```

Surfaces declare what they consume and who owns them:

```yaml
type: surface-profile
platforms-used: <platform> ...
surfaces-of: <parent-ecosystem>
```

### Reference-without-inherit (SAD v3)

Distinct from supersession. Use when a new entity *studies* a predecessor's work but consciously chooses not to copy-forward — the predecessor continues to exist (possibly active and open-source), and the successor is a parallel development. Polity's fresh-start posture relative to reflect is the live example.

```yaml
references:
  - entity: <predecessor>
    relationship: reference-only        # reference-only | study | inspired-by
    inherits-from: false                # always false for reference-only
    note: "<one-line on what's being studied without inheriting>"
```

Difference from supersession:

- **Supersession**: predecessor is archived; successor takes its place.
- **Reference-without-inherit**: predecessor stays active; successor is a parallel build that learns without inheriting.

### Supersession (entity-level)

Entities — not just ideas — can be superseded. On the successor's live profile:

```yaml
supersedes: <older-entity> <another-older-entity>
supersession-reason: "<why the successor absorbs the predecessor>"
```

On the superseded entity's archived profile:

```yaml
superseded-by: <successor>
entity-status: archived
archive-reason: "Superseded by <successor>; see successor's supersession-reason"
```

Idea-level supersession continues to use the `superseded` idea-status and `lineage-to` — the entity-level convention is a parallel mechanism operating at a coarser grain.

### Open-source readiness

Set on any entity that is intentionally scoped for community build-ability (most relevant at `specced` stage):

```yaml
open-source-ready: true | false
community-buildable: true | false
open-source-target: <URL or repo path>         # where the spec package will be published
```

An entity at `entity-lifecycle-stage: specced` with `open-source-ready: true` and `community-buildable: true` is a Phase-1B-complete deliverable — spec without implementation — suitable for blog-post-plus-repo release.

### Archive metadata

Required when `entity-status: archived`:

```yaml
entity-status: archived
archive-reason: "<why>"
```

`ip-sensitivity` and `co-authors` are required *everywhere* under SAD v3 (see the `authorship` section above), not only on archived profiles. Archived co-authored work specifically should set `ip-sensitivity: high` and consult the `ip-protection` skill before any access or edit.

See `archive-pattern.md` (if produced) or the archive-pattern section in the vault `CLAUDE.md` for the accompanying folder conventions.

---

## Migration note (SAD v3 alignment, 2026-04-22)

The fields added in this revision (`ingested`, `last-reviewed`, `last-compiled`, `authorship`, the `open-source-tool` entity-class value, the `references:` block, the `lifecycle-regression-*` fields, and `ip-sensitivity` becoming required everywhere) are **additive**. Existing profiles do not need a forced migration pass — they remain valid until next-touched.

Backfill discipline: when a SAD session opens an entity profile for any reason, add the missing v3 fields as part of that session's housekeeping. Profiles known to need the most-recent v3 fields:

- All entities under `projects/` that pre-date 2026-04-21.
- All archived entities under `projects/_archive/` (mostly already carry `ip-sensitivity` and `co-authors` because the older convention required it on archived only — those are compliant).

A Dataview query identifying out-of-compliance profiles can be scaffolded as needed; no scheduled migration is required.
