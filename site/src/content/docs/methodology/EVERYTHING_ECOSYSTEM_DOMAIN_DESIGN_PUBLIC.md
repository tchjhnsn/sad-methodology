---
{
  "type": "reference",
  "source": "hybrid",
  "created": "2026-10-11",
  "ai-model": "claude-opus-5.5",
  "authority": "strategic",
  "status": "DRAFT",
  "tags": [
    "everything-ecosystem",
    "domain-design",
    "public-edition"
  ],
  "name": "Domain design",
  "description": "What the Everything Ecosystem methodology is for: the problem it addresses, its principles, the theses it tests, its concepts and rules, and how a methodology is chosen for each system. The standalone public edition.",
  "source-path": "methodology/EVERYTHING_ECOSYSTEM_DOMAIN_DESIGN_PUBLIC.md"
}
---


# Domain design

*Public edition. The working version is kept with the founder's projects; where they differ, the working version governs and this page is corrected.*

This page describes **what the methodology means**, independent of any tool or project: the problem, the principles, the concepts, and the rules that must always hold.

## The problem

**Intent decays.** Whoever builds something (a product, a platform, a building, a company) holds an intent for it. That intent is lost across three gaps:

1. **Time.** Decisions are forgotten, or quietly contradicted by later work.
2. **Related efforts.** Things that belong together drift apart in structure and lose track of how they relate.
3. **Agents.** More and more of the work is done by AI assistants that begin each session without memory and write in their own way.

A second problem sits inside the first: **no one way of building fits every system.** Treating every engineering situation the same way wastes effort on some systems and under-governs others. Within a single project, different parts are best built in different ways.

## Principles

**P1. The quality of the question determines the quality of the answer.** Every choice is reached through stated questions. When an answer turns out poor, look first for a poor or missing question, and improve it.

**P2. AI assists ideation, not only development.** Before anything is built, an AI assistant can help a person express what they know, find what they don't, and see the shape of the domain they want to enter. A person's own knowledge is a domain in its own right, and it meets the world's received knowledge (*endoxa*) at a boundary: where the two agree, where the person's knowledge corrects or adds to the world's, and where both are silent. Novel thought tends to live at that boundary.

## Goals

1. Keep intent coherent and traceable from idea to built thing, across time, related efforts and agents.
2. Give every effort a structure that can be queried: what it is, what stage it is at, what it needs, and how it relates to others.
3. For each part of a design, choose the development methodology that fits it, and record why.
4. Gather evidence about which methodologies work under which conditions, including when AI does much of the building.

## Theses under test

These are claims the methodology exists partly to test. None is assumed true.

- **T1. Domain-generality.** The same structural questions apply to software, hardware, physical development (buildings, cities) and business development. Software-defined engineering in hardware is early supporting evidence.
- **T2. Specs-as-source for AI-assisted development.** Is the specification, as the source of truth from which code is derived, the best approach when AI does most of the building? The expected answer is conditional: best for some kinds of system, not all. See the [research](/research/).
- **T3. Ecosystem sovereignty.** For an ambitious mission, an ecosystem of independent, mutually reinforcing efforts is a stronger constitution than any single product.

## What it does not try to do

- Provide collaboration features. It works the same for one person or many; collaboration comes from the general tools it runs on (version control, a shared notes system).
- Build storage, editing or version control. Those are integrated, not built.
- Impose one methodology on every system.
- Automate the founder's or owner's decisions. Assistants recommend; a person ratifies.

## Concepts

| Term | Meaning |
|---|---|
| **Entity** | Anything with a profile, a lifecycle stage and relationships: a company, product, platform, building, city |
| **Intent** | What its owner means a thing to be and do; the scarce asset this methodology protects |
| **Development domain** | The kind of thing being developed: software, physical, business. Domains nest (physical → built environment → buildings) |
| **Development methodology** | A disciplined way of turning intent into a built thing within a domain: test-driven development, spec-as-source, model-based systems engineering |
| **Methodology family** | Methodologies that share a stance on what the source of truth is (e.g. spec-driven: spec-first, spec-anchored, spec-as-source) |
| **Source of truth** | The artifact that wins when artifacts disagree: a spec, model, test, contract, drawing, or the code itself |
| **System** | A part of an entity that a methodology is chosen for |
| **Artifact type** | A kind of document or diagram a methodology produces or needs, with its purpose, notation and formats: a decision record, a process diagram, an API contract, a building model |
| **Body of knowledge** | Not a methodology but an input to one; for example, research on personal space and crowding informs how rooms are sized |
| **Assignment** | The ratified record that a system is built by a methodology, with the reasons |
| **Evidence** | What happened when an assignment was followed, recorded so the catalog can learn |

## How a methodology is chosen

```
Development domain ──contains──► Methodology family ──contains──► Methodology ──requires──► Artifact types
                                                                        ▲
System ──answers the decision questions──► recommendation ──ratified──► Assignment ──produces──► Evidence
                                                                                                    │
                                                         Evidence changes catalog answers ◄─────────┘
```

1. Describe the system and answer the [decision questions](/questions/). Mark each answer **tested** (backed by evidence) or **assumed**.
2. Consider the methodologies in the system's development domain from the [catalog](/catalog/). Each states when it fits and when it does not.
3. Several often fit different parts of the same system; a combination is normal.
4. Research first when an assumed answer sits where the cost of being wrong is high.
5. A person ratifies the choice. Evidence from building is recorded against it, and it may move catalog answers from assumed to tested.

The [artifact catalog](/artifact-types/) works the same way for documents and diagrams: several notations often answer the same question, and choosing between them is itself a decision.

## Rules that always hold

1. Every ratified assignment names the system, the methodology, the answers that justified it, and who ratified it.
2. An assistant may recommend; only a person ratifies.
3. Every system has one source of truth at a time. Changing it is a recorded switch, not drift.
4. Where two systems built by different methodologies meet, a contract between them exists.
5. Every methodology entry says when **not** to use it.
6. Evidence is recorded against the assignment it came from, and is never edited afterwards; catalog claims cite evidence or are marked untested.
7. The catalogs guide choice; they do not limit it. A method or artifact type outside the catalog may be used, and is added as a candidate.
8. Recency confers no authority: a newer document does not override an older, higher-standing one by being newer.

## Lifecycles

- **Catalog entry:** candidate → listed → evidenced → deprecated (never deleted). Any entry can be sent for re-checking when it may be out of date.
- **Assignment:** proposed → ratified → in force → switched or retired. A ratified assignment is never edited; a change is a new assignment.
- **Decision question:** in use → refined (with a new version and the reason) when a poor answer is traced to it.

## A worked example (illustrative)

A team builds a **sales-tax calculation service**. Tax rules come from statute and change on known dates; a wrong answer costs money and trust; every result must show the rule that produced it.

- *Source of truth (M1):* rules stored as data (rate, jurisdiction, effective dates, citation), plus executable tests from hand-worked cases. The prose specification is narrative only. **Assumed.**
- *Knowability (M2):* knowable from statute. **Tested** by reading the statutes.
- *Cost of being wrong (M4):* high. **Tested.**
- *Verifiability (M5):* every result can be worked by hand. **Tested.**

Recommendation and choice: **spec-as-source in the narrow sense** (the rule records are the spec, and a generic engine interprets them), **test-driven development** for the calculation logic, and **design by contract** so that a rule with no citation or effective date can never be stored. Generating the whole service from a prose specification is rejected: prose cannot catch an off-by-one date.

Research before ratifying: the assumed answers above, because the cost of error is high.

## Status

Under active development. Most catalog answers are still **assumed**; they will change as evidence arrives.
