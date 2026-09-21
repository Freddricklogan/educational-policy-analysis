# Case Study — Educational Policy Analysis & Program Evaluation

**Repository:** [educational-policy-analysis](https://github.com/Freddricklogan/educational-policy-analysis) · **Live demo:** [freddricklogan.github.io/educational-policy-analysis](https://freddricklogan.github.io/educational-policy-analysis/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Doctoral students in educational leadership and policy who must write a defensible recommendation; district and university administrators asked whether a programme should continue; foundation and agency staff who fund it; and the consultants — I am one — who are brought in when the answer must survive a board. The reading list is long and good; the discipline of applying it to one decision, trade-offs named, is what the room lacks.

## 2. The problem, as a scenario

A provost asks whether to expand a peer-tutoring initiative. The evaluation says it "worked": reading scores rose. Against which comparison? What did it cost per unit of gain against the class-size alternative? Did it reach the students it was designed for, or the ones who showed up? Did the aggregate hide a widening gap for English learners? Who on the board will resist, and why? The director has a logic model on a slide and a p-value in a footnote. The provost has fifteen minutes and needs a memo that leads with the answer and is candid about the unknowns.

## 3. What it costs to leave it alone

Programmes scaled on an aggregate that concealed who lost; alternatives never costed against each other; a memo the decision-maker could not follow and therefore did not use. I will not attach a figure — programme budgets differ by orders of magnitude across districts and universities. The pattern is what matters: the analytical steps are known, and skipping any one of them is invisible until the decision has been made.

## 4. The approach, and the alternative I rejected

I wrote a sixteen-section resource that walks the whole arc — problem definition, the policy cycle, decision analysis in four strands, logic models and theories of change, evaluation frameworks, Bardach's criteria and eightfold path, policy instruments, cost-effectiveness against cost-benefit, stakeholder mapping, implementation science, equity, and the decision memo — and makes the reader commit at three points. A logic-model builder assembles a real after-school tutoring programme link by link, so the if–then chain is built rather than read. A criteria scorer weighs an option across effectiveness, efficiency, equity, feasibility and acceptability. An equity impact scorer checks the safeguards a policy has or lacks. A worked example prices two programmes under both cost-effectiveness and cost-benefit so the reader sees the same data yield converging verdicts. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was a framework catalogue — one card per model, no judgement between them. Catalogues are what students already have. What they need is the sequence and the trade-offs, ending in a memo someone can act on.

## 5. What the code does today

Real: the authored content across sixteen sections with an executive summary and glossary; four working widgets — decision-analysis tabs, the logic-model builder, the criteria scorer, the equity scorer — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: the worked cost example uses illustrative figures — $2,400 and $600 per student, +0.15 and +0.20 SD, $3,000 per 0.10 SD — chosen to make the arithmetic legible, not drawn from a study. The page says the method is Levin and McEwan's; the numbers are teaching numbers.

Worth knowing: the scorers' weights are pedagogical devices; reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 41 inline style attributes replaced by 15 classes, 26 custom properties namespaced, 6 buttons typed, 2 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; the fourth decision-analysis tab activates, the builder advances two links to Outputs, two criteria score 44% Mixed, one equity safeguard scores 13% with blind spots named; Expand all opens 16 of 16 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a programme it needs the kit's statements sent to the institution's learning record store — an endpoint, credentials, a consent notice, an identified actor and one origin added to the content-security policy — and, if grades depend on it, the questions reviewed by a second reader. Days of integration; the content does not change.

## 8. Limits and next steps

One worked cost example; scorers with fixed weights; no memo template the reader can fill; no case beyond the tutoring programme. Next: a fillable decision-memo template that exports to text, a second case from higher education, an editable cost-effectiveness calculator, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I teach the full arc from problem to memo, and package it to a standard an institution can review and adopt.
**Consulting client:** a working outline of how I structure a policy or programme review, including the equity and implementation questions that aggregate results hide.
**Engineer:** read `src/page.js` for the logic-model builder's state machine and `tests/kit.test.js` for the kit mounted against this page's real markup.
