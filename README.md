# Educational Policy Analysis & Program Evaluation: a graduate-level guide from problem definition to policy memo, with a logic-model builder, a criteria scorer and an equity impact scorer

[![CI/CD](https://github.com/Freddricklogan/educational-policy-analysis/actions/workflows/deploy.yml/badge.svg)](https://github.com/Freddricklogan/educational-policy-analysis/actions/workflows/deploy.yml)
[![Coverage](https://img.shields.io/badge/coverage-79.84%25-green)](#5-getting-started--verification)
[![Security (CodeQL)](https://github.com/Freddricklogan/educational-policy-analysis/actions/workflows/codeql.yml/badge.svg)](https://github.com/Freddricklogan/educational-policy-analysis/actions/workflows/codeql.yml)
[![License MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Live Demo](https://img.shields.io/badge/live%20resource-online-brightgreen)](https://freddricklogan.github.io/educational-policy-analysis/)

## 1. Executive Summary & Business Impact

**Problem statement.** Education leaders and doctoral students are asked to recommend a policy or judge a programme and reach for whichever framework they met last: a logic model with no theory behind it, a cost figure with no effect beside it, an aggregate result that hides who lost. Bardach, Levin and McEwan, Stufflebeam and Weiss are on the reading list; the discipline of applying them to one decision is not practised.

**Solution & value delivered.** A sixteen-section resource that walks the policy cycle, decision analysis in four strands, logic models and theories of change, evaluation frameworks, Bardach's criteria and eightfold path, policy instruments, cost-effectiveness against cost-benefit with a worked example, stakeholder mapping, implementation science, equity and the decision memo — with a logic-model builder that assembles a real after-school programme link by link, a criteria scorer over an option and an equity impact scorer over a policy. The page is one of ten
resources built on the shared
[Learning Resource Kit](https://github.com/Freddricklogan/learning-resource-kit):
an Executive Shell with live counts, collapsible sections whose progress is
saved in the reader's browser, a five-question quiz written for this
resource that records xAPI 1.0.3 statements locally, and a print layout that
opens every section. Nothing leaves the page; the content-security policy
forbids network calls.

**[→ Read the full case study](docs/CASE_STUDY.md)**

| Outcome | How this repo delivers it |
| --- | --- |
| A resource, not a slide deck | 16 sections (18 minutes at 230 wpm) with an executive summary first: two crafts, policy cycle, decision analysis I–IV, logic-model builder, evaluation frameworks, policy criteria, resource allocation, equity lens, Bardach's eightfold path, policy instruments, cost-benefit vs cost-effectiveness, stakeholder mapping, theory of change, implementation, the policy memo, glossary |
| Interactive where it matters | 4 authored widgets (see §4) kept intact through the conversion and verified under a strict CSP |
| Evidence of learning | Quiz answers and completion recorded as xAPI statements with an anonymous actor; inspectable on the page |
| Reviewable by an institution | No inline script or style, typed buttons, table bodies, a `<main>` landmark; html-validate and ESLint in CI |
| Usable everywhere | Keyboard-operable sections, deep links that open their section, print stylesheet, no horizontal scroll at 400 px |

## 2. Demonstrated Competencies & Technical Skills

- **EdTech & Human-Centered Design** — the memo is the destination: every section ends in something a decision-maker can act on; the builder and two scorers make the reader commit to a judgement before the page explains it; a worked CEA/CBA example uses the same two programmes so both verdicts can be compared.
- **Systems Architecture & CS** — authored content in `index.html`, its
  widgets in `src/page.js`, its styles in `src/page.css` under the `--lr-`
  namespace; the kit vendored as `src/lr-kit.js`; config and tests that
  fail CI if a quiz question is malformed.
- **Cybersecurity & Compliance** — `default-src 'none'; script-src 'self';
  connect-src 'none'`; no third-party script; Trivy, npm audit and CodeQL in
  CI.
- **Data Science & AI** — reading time and section counts computed from the
  content at load; scores recorded as scaled results, never claimed.

## 3. System Architecture & Data Flow

```mermaid
flowchart LR
  subgraph TB1["Trust Boundary: GitHub Pages (static)"]
    HTML["index.html<br/>authored content · 16 sections"]:::client
    PAGE["src/page.js + src/page.css<br/>4 widgets · --lr- tokens"]:::client
    KIT["src/lr-kit.js + lr-kit.css<br/>shell · progress · quiz · xAPI · print"]:::service
    CFG["src/config.js<br/>title · tagline · 5 questions"]:::data
  end
  subgraph TB2["Trust Boundary: the reader's browser"]
    LS["localStorage<br/>lr:educational-policy-analysis:progress · :xapi · lr:actor"]:::data
  end
  HTML --> PAGE
  CFG --> KIT
  HTML --> KIT
  KIT -->|"CSP: connect-src 'none'"| LS
  classDef client fill:#1f2a44,stroke:#58A6FF,color:#e6edf3
  classDef service fill:#14213d,stroke:#3fb950,color:#e6edf3
  classDef data fill:#1b2a1f,stroke:#3fb950,color:#e6edf3
```

## 4. Technical Highlights & Engineering Decisions

### The authored widgets

| Widget | What it does |
| --- | --- |
| Decision Analysis tabs | Four strands — logic of inquiry, quantitative, qualitative, program and policy evaluation — each with purpose, tools, central question and key authors |
| Logic Model Builder | Steps a sample peer-tutoring initiative through inputs, activities, outputs, outcomes and impact; any stage can be read for its definition |
| Policy criteria scorer | Weighted checklist over effectiveness, efficiency, equity, feasibility and acceptability; fills a bar and gives a Weak / Mixed / Strong verdict |
| Equity impact scorer | Checklist of equity safeguards — disaggregation, vertical equity, unintended consequences — with a verdict on remaining blind spots |

### ADR-1 — Convert, do not rewrite

**Context.** The original was one hand-authored file: rich content and
bespoke widgets, but inline styles and scripts that no content-security
policy or validator accepts.

**Decision.** The kit's converter moved the stylesheet and scripts out of
the page, replaced 41 inline style attributes with
15 generated classes, namespaced 26 custom properties, typed
6 buttons, gave 2 tables a body and wrapped the content in a `<main>` landmark. The content and
widget code were not rewritten; `AUDIT.md` lists every change.

**Consequence.** The page passes html-validate under a strict CSP with its
original behaviour intact, and the change is auditable line by line.

### ADR-2 — One quiz, one attempt, standard statements

**Context.** The page's own self-checks vanish on reload and record nothing.

**Decision.** Five questions written from this resource's content live in
`src/config.js`; the kit accepts a single attempt per question, shows the
explanation, and records xAPI *answered* and *completed* statements with a
scaled score, kept in the browser and shown as JSON.

**Consequence.** The score reflects what the reader knew before the
explanation, and an institution can see the exact statements a learning
record store would receive.

### ADR-3 — Progress means opened

**Context.** Scroll depth is easy to measure and says little about reading.

**Decision.** A section counts as opened when its collapsed state is
removed — by click, keyboard, deep link or "Expand all" — and an
*experienced* statement is recorded once.

**Consequence.** The KPI strip is conservative: 16 sections, and the count
only rises when the reader opens one.

## 5. Getting Started & Verification

**Prerequisites.** Node 22 for the checks; the page itself needs only a
browser.

```bash
git clone https://github.com/Freddricklogan/educational-policy-analysis.git
cd educational-policy-analysis
npm ci
npm run check     # eslint → html-validate → vitest
npx serve .       # open http://localhost:3000
```

**Verification — the numbers this repository actually produced:**

```bash
npm run lint      # 0 problems
npm run validate  # html-validate index.html: clean
npm run coverage  # 7 passed; All files 79.84% (config.js 100%, vendored lr-kit.js 78.75%)
```

| Check | Result |
| --- | --- |
| Unit tests (Vitest, jsdom) | **7 passed / 7** across 2 files — quiz validity, page invariants, the kit mounted on this page |
| Coverage | All files **79.84%** statements: `src/config.js` 100%, vendored `src/lr-kit.js` 78.75% from this page's smoke test (the kit's own suite covers it at 99%) |
| ESLint, html-validate | clean |
| Conversion audit | 41 inline styles → 15 classes · 26 tokens namespaced · 6 buttons typed · 2 tables fixed |
| Headless Chrome smoke | **0 console errors**; all 4 widgets exercised; sections opened 16/16 on Expand all; no horizontal scroll at 1200 or 400 px |

## 6. Live Demo & Production Showcase

**<https://freddricklogan.github.io/educational-policy-analysis/>**

**30-second guided walkthrough.** Press **Take the 30-second tour**.

1. **A graduate-level resource, not a slide deck** — 16 sections, about
   18 minutes of reading.
2. **Open a section** — the first section opens and the count rises.
3. **Check your understanding** — five questions on the two crafts, theories of change, cost-effectiveness, implementation and equity.
4. **Your statements, inspectable** — the xAPI JSON recorded in this browser.

The quiz covers:
- analysis before acting versus evaluation after
- logic model versus theory of change
- cost-effectiveness arithmetic from the worked example
- fidelity and dosage in implementation
- disaggregation under the equity lens

Part of the resource hub at <https://freddricklogan.github.io/resources/>.
