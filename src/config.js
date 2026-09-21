/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Educational Policy Analysis & Program Evaluation',
  tagline: 'A graduate-level guide to policy analysis and program evaluation: the policy cycle, decision analysis, logic models and theories of change, evaluation frameworks, Bardach’s criteria, cost-effectiveness, equity and implementation, with a logic-model builder and two scorers.',
  repo: 'https://github.com/Freddricklogan/educational-policy-analysis',
  pagesUrl: 'https://freddricklogan.github.io/educational-policy-analysis/',
  quizTitle: 'Five questions on policy analysis and evaluation',
  quiz: [
    {
      id: 'crafts',
      prompt: 'How does the resource distinguish policy analysis from program evaluation?',
      options: ['Analysis is quantitative; evaluation is qualitative', 'Analysis reasons toward a choice before acting; evaluation judges merit and worth after acting', 'Analysis is done by legislators; evaluation by researchers', 'They are the same craft under two names'],
      answer: 1,
      explanation: 'Policy analysis asks which course of action best serves a public purpose before we act; program evaluation asks whether what we did worked, for whom and at what cost. Together they form a loop of reasoned decision-making under uncertainty.'
    },
    {
      id: 'toc',
      prompt: 'What is the difference between a logic model and a theory of change?',
      options: ['A logic model is the causal argument; a theory of change is the operational map', 'A logic model is the operational inputs-to-impact map; a theory of change is the causal argument behind it', 'A theory of change is only used in summative evaluation', 'There is no difference'],
      answer: 1,
      explanation: 'The logic model is the linear inputs → activities → outputs → outcomes → impact chain; the theory of change names why each link should hold, the preconditions and the assumptions the whole edifice rests on (Weiss, 1995).'
    },
    {
      id: 'cea',
      prompt: 'In the worked example, peer tutoring costs $600 per student for +0.20 SD and class-size reduction $2,400 for +0.15 SD. What does cost-effectiveness analysis report?',
      options: ['Net benefit in dollars for each programme', 'Cost per 0.10 SD: $300 for tutoring versus $1,600 for class-size reduction', 'That the two programmes cannot be compared', 'A benefit-cost ratio of 10.0 for tutoring'],
      answer: 1,
      explanation: 'CEA divides cost by units of a single outcome, so outcomes need not be dollar-valued: $600 ÷ 2.0 = $300 and $2,400 ÷ 1.5 = $1,600. Net benefit and the benefit-cost ratio belong to cost-benefit analysis, which converts effects to money.'
    },
    {
      id: 'fidelity',
      prompt: 'Why does the resource say an evaluation must measure implementation fidelity and dosage?',
      options: ['To reduce the sample size needed', 'Because without them a null result cannot distinguish a bad idea from a good idea poorly delivered', 'Because funders require it', 'To replace the need for a comparison group'],
      answer: 1,
      explanation: 'Implementation science studies the gap between the programme on paper and the programme students receive. Low fidelity confounds every outcome claim, and a treatment nobody received cannot show an effect, so exposure must be measured, not just offered.'
    },
    {
      id: 'equity',
      prompt: 'An aggregate result says the policy "worked." What does the equity lens require before accepting that?',
      options: ['A larger sample', 'Disaggregation by race, income, disability, language and gender', 'A cost-benefit ratio above 1', 'Endorsement by high-power stakeholders'],
      answer: 1,
      explanation: 'Averages hide gaps: an improved mean can mask a widening disparity beneath it. The equity lens treats disaggregation as part of what counts as success, alongside vertical equity and attention to unintended consequences.'
    }
  ]
};
