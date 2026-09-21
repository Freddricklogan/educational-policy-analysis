/* Page widgets for educational-policy-analysis, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Tabs: Decision Analysis I-IV ----
document.querySelectorAll('#databs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#databs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#decision .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- Logic Model Builder ----
const LM={
  vals:[
    'Trained student tutors · a faculty coordinator · curriculum materials · funding · room &amp; scheduled time',
    'Recruit &amp; train tutors · match tutors to tutees · run two 45-min sessions/week · monitor attendance',
    '24 tutors trained · 60 students served · ~1,900 tutoring hours delivered · weekly progress logs',
    'Short: reading/math skill gains · Medium: course grades &amp; attendance rise · Long: on-track to graduate',
    'Higher graduation &amp; postsecondary readiness; a narrowed achievement gap for participating students'
  ],
  defs:[
    '<b>Inputs</b> — the resources invested in the program: people, funding, materials, facilities, and time. They are what you commit before anything happens.',
    '<b>Activities</b> — what the program actually does with its inputs: the processes, actions, and services delivered to participants.',
    '<b>Outputs</b> — the direct, countable products of activities (people served, sessions held, hours delivered). Outputs measure effort and reach, <em>not</em> change.',
    '<b>Outcomes</b> — the changes in participants that the program is meant to cause, sequenced over time: <b>short-term</b> (knowledge, skills, attitudes), <b>medium-term</b> (behavior, grades), and <b>long-term</b> (status, achievement).',
    '<b>Impact</b> — the ultimate, often system-level change the program contributes to over the long run, typically shared with other causes and hardest to attribute.'
  ],
  hints:[
    'Start with what you put in. Inputs are the resources committed before the program can run.',
    'Inputs enable activities — the concrete things the program does with those resources.',
    'Activities generate outputs: the countable products of effort. Note these describe doing, not changing.',
    'Outputs are meant to produce outcomes — the actual changes in participants, unfolding short to long term.',
    'Outcomes, if the theory holds, accumulate into impact: the broad, long-run change the program serves.'
  ]
};
let lm=0;
function renderLM(){
  for(let i=0;i<5;i++){
    document.getElementById('r'+i).innerHTML = i<=lm ? LM.vals[i] : '';
    document.querySelectorAll('#logicmodel .rung')[i].classList.toggle('on', i<=lm);
  }
  document.getElementById('lmHint').textContent=LM.hints[lm];
  document.getElementById('lmDef').innerHTML=LM.defs[lm];
  document.getElementById('lmPrev').disabled = lm===0;
  document.getElementById('lmNext').textContent = lm===4 ? 'Restart' : 'Next stage →';
}
document.getElementById('lmNext').onclick=()=>{ lm = lm===4 ? 0 : lm+1; renderLM(); };
document.getElementById('lmPrev').onclick=()=>{ if(lm>0){lm--;renderLM();} };
document.querySelectorAll('#logicmodel .rung').forEach(r=>{
  r.onclick=()=>{ lm=parseInt(r.dataset.r,10); renderLM(); };
});
renderLM();

// ---- Policy criteria scorer ----
const cks=document.querySelectorAll('#checklist .ck');
function scoreCriteria(){
  let s=0; cks.forEach(c=>{ if(c.classList.contains('on')) s+=parseInt(c.dataset.w,10); });
  s=Math.min(100,s);
  document.getElementById('critFill').style.width=s+'%';
  const v=document.getElementById('critVerdict');
  if(s===0){v.textContent='Check the criteria this option meets';v.style.color='var(--lr-muted)';}
  else if(s<40){v.textContent=s+'% — Weak option: it fails key criteria; reconsider or redesign';v.style.color='var(--lr-bad)';}
  else if(s<75){v.textContent=s+'% — Mixed: viable but with real trade-offs to confront explicitly';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Strong option: defensible across effectiveness, equity, and feasibility';v.style.color='var(--lr-good)';}
}
cks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreCriteria();});
scoreCriteria();

// ---- Equity impact assessment scorer ----
const eqCks=document.querySelectorAll('#eqcheck .ck');
function scoreEquity(){
  let n=0; eqCks.forEach(c=>{ if(c.classList.contains('on')) n++; });
  const s=Math.round(n/eqCks.length*100);
  document.getElementById('eqFill').style.width=s+'%';
  const v=document.getElementById('eqVerdict');
  if(n===0){v.textContent='Tick each safeguard your analysis has addressed';v.style.color='var(--lr-muted)';}
  else if(s<50){v.textContent=s+'% — Equity blind spots remain; several safeguards are unaddressed';v.style.color='var(--lr-bad)';}
  else if(s<85){v.textContent=s+'% — Partial: strengthen the unchecked safeguards before deciding';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Robust: the analysis takes distributional effects seriously';v.style.color='var(--lr-good)';}
}
eqCks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreEquity();});
scoreEquity();

