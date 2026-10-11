# Everything Ecosystem

A methodology for building with AI assistance across software, physical and business development. It keeps intent coherent across time, related efforts and AI agents, and chooses a development methodology **per system** rather than applying one everywhere.

**Under active development.** Most catalog answers are marked *assumed* until evidence tests them. The working name of the methodology may change, and this repository will be renamed with it.

## What's here

- `site/`: the public website (Astro). Its pages in `site/src/content/docs/` are **generated** from the source notes by an export that publishes only allowlisted pages; do not edit them here. `site/publish-report.md` lists what each export published and refused.
- `legacy/`: the original SAD v3 methodology (2026-05), kept for history. SAD is now the *spec-anchored* entry in the methodology catalog.

## Build the site

```bash
cd site
npm install
npm run build
```

## Licences

- Methodology text (the site's content): **CC BY 4.0**. See `LICENSE-CONTENT`.
- Code and schemas: **Apache 2.0**. See `LICENSE`.

## Contributing

See `CONTRIBUTING.md`.
