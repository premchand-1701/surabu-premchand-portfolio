'use client';

import {useMemo,useState} from 'react';
import {ArrowUpRight, Github, Linkedin, Mail, Terminal, X, Menu, ExternalLink, Phone} from 'lucide-react';
import {profile,projects,dsaTopics,skills,timeline,certifications} from '@/data/portfolio';

const tags=['ALL','SOFTWARE','AI / ML','PYTHON','EXPERIMENTS'];

export default function Portfolio(){
  const [filter,setFilter]=useState('ALL');
  const [recruiter,setRecruiter]=useState(false);
  const [workbench,setWorkbench]=useState(false);
  const [menu,setMenu]=useState(false);
  const visible=useMemo(()=>filter==='ALL'?projects:projects.filter(p=>p.category===filter),[filter]);
  const nav=(id:string)=><a href={'#'+id} onClick={()=>setMenu(false)}>{id.replaceAll('-',' ')}</a>;

  return <div className="grain min-h-screen">
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(244,242,236,.92)] backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight">SP<span className="text-xs align-top ml-1 mono">/26</span></a>
        <nav className="hidden md:flex gap-7 text-xs uppercase tracking-[.18em] font-semibold">{nav('work')}{nav('thinking')}{nav('credentials')}{nav('contact')}</nav>
        <div className="flex items-center gap-2">
          <button onClick={()=>setRecruiter(true)} className="hidden sm:block border border-[var(--ink)] px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[var(--ink)] hover:text-white">Recruiter mode</button>
          <button className="md:hidden" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?<X/>:<Menu/>}</button>
        </div>
      </div>
      {menu&&<div className="md:hidden border-t border-[var(--line)] p-5 flex flex-col gap-5 text-sm uppercase">{nav('work')}{nav('thinking')}{nav('credentials')}{nav('contact')}</div>}
    </header>

    <main id="top">
      <section className="container min-h-[78vh] grid-bg grid items-end py-16 md:py-24">
        <div className="max-w-6xl reveal">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-end justify-between">
            <div className="max-w-5xl">
              <div className="mono text-xs uppercase tracking-[.22em] mb-7">Computer Science Student / Builder / 2026</div>
              <h1 className="text-[clamp(3.8rem,10vw,9rem)] leading-[.82] tracking-[-.07em] font-extrabold">SURABU<br/>PREMCHAND<span className="text-3xl md:text-5xl align-top ml-2">↗</span></h1>
            </div>
            <div className="shrink-0 profile-visual">
              <div className="profile-glow" aria-hidden="true"></div>
              <div className="profile-photo">
                <img src="/profile.jpg" alt="Professional portrait of SURABU PREMCHAND" />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-2xl max-w-xl leading-snug">{profile.statement}</p>
            <div className="flex gap-3 flex-wrap">
              <a className="accent px-5 py-3 font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition" href="#work">VIEW MY WORK <ArrowUpRight size={17}/></a>
              <a className="border border-[var(--ink)] px-5 py-3 font-bold text-sm flex items-center gap-2" href={profile.github} target="_blank" rel="noreferrer">GITHUB <Github size={17}/></a>
              <a className="border border-[var(--ink)] px-5 py-3 font-bold text-sm flex items-center gap-2" href={'tel:'+profile.phone}>CALL ME <Phone size={17}/></a>
              <a className="border border-[var(--ink)] px-5 py-3 font-bold text-sm flex items-center gap-2" href={'mailto:'+profile.email}>EMAIL ME <Mail size={17}/></a>
              <a className="border border-[var(--line)] px-5 py-3 font-bold text-sm" href="#contact">CONTACT</a>
            </div>
          </div>
          <div className="mt-14 border-y border-[var(--line)] py-3 flex flex-wrap gap-x-10 gap-y-2 mono text-xs uppercase">
            <span>Currently building</span><span>Python</span><span>• DSA</span><span>• AI / Deep Learning</span><span>• Software</span>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="mono text-xs uppercase tracking-[.18em] mb-10">01 / The short version</div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12">If you only remember<br/><span className="text-[var(--muted)]">3 things...</span></h2>
        <div className="grid md:grid-cols-3 border-t border-[var(--ink)]">
          {[['01','I build.','Projects'],['02','I solve problems.','DSA / Algorithms'],['03','I keep learning.','The Lab']].map(([n,t,e])=><div key={n} className="py-7 md:p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[var(--line)]"><div className="mono text-xs">{n}</div><div className="text-3xl font-extrabold mt-10">{t}</div><div className="mt-3 text-sm text-[var(--muted)]">→ {e}</div></div>)}
        </div>
      </section>

      <section className="bg-[var(--dark)] text-white py-24" id="about">
        <div className="container">
          <div className="mono text-xs text-neutral-400 uppercase tracking-[.18em] mb-10">02 / Developer profile</div>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
            <div><h2 className="text-5xl md:text-7xl font-extrabold tracking-[-.05em]">Still<br/>becoming.</h2><p className="mt-8 text-neutral-400 max-w-md leading-7">I’m a CSE student at SR University, building a foundation in software engineering through projects, problem solving, AI experiments, and consistent practice.</p></div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[['EDUCATION',profile.degree+'\n'+profile.university+'\n'+profile.location],['CURRENT FOCUS','Python\nDSA\nAI / Deep Learning\nSoftware Development'],['WORKING TOWARDS','Becoming a strong software engineer capable of building reliable, useful products.'],['NOW','3rd Year · 3-1\n2026']].map(([a,b])=><div key={a} className="border border-neutral-700 p-6"><div className="mono text-xs text-neutral-500">{a}</div><div className="mt-8 whitespace-pre-line leading-7">{b}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div><div className="mono text-xs uppercase tracking-[.18em] mb-4">03 / Proof of work</div><h2 className="text-5xl md:text-7xl font-extrabold tracking-[-.05em]">Selected<br/>builds.</h2></div>
          <button onClick={()=>setWorkbench(true)} className="accent px-5 py-3 font-bold text-sm flex items-center gap-2 self-start">OPEN MY WORKBENCH <Terminal size={17}/></button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">{tags.map(t=><button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 border text-xs font-bold ${filter===t?'bg-[var(--ink)] text-white border-[var(--ink)]':'border-[var(--line)]'}`}>{t}</button>)}</div>
        <div className="space-y-8">
          {visible.map((p,i)=><article key={p.title} className={`border border-[var(--line)] bg-white/30 p-6 md:p-10 hover-lift ${p.featured?'md:p-12':''}`}>
            <div className="flex flex-wrap justify-between gap-4 mono text-xs uppercase"><span>{String(i+1).padStart(2,'0')} / {p.category}</span><span>{p.year} · {p.status} · {p.difficulty}</span></div>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 mt-8">
              <div><h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">{p.title}</h3><p className="mt-5 text-lg text-[var(--muted)] max-w-lg">{p.description}</p><div className="flex gap-3 mt-8">{p.github&&<a href={p.github} target="_blank" rel="noreferrer" className="border border-[var(--ink)] px-4 py-2 text-sm font-bold flex items-center gap-2">SOURCE <Github size={15}/></a>}{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer" className="accent px-4 py-2 text-sm font-bold">LIVE DEMO ↗</a>}</div></div>
              <div><div className="border border-[var(--line)] p-5 mono text-xs leading-7 mb-6">{p.how}</div><div className="grid sm:grid-cols-2 gap-5 text-sm">{[['WHY I BUILT IT',p.why],['MY CONTRIBUTION',p.contribution],['CHALLENGE',p.challenge],['SOLUTION',p.solution],['RESULT',p.result],['WHAT I LEARNED',p.learned]].map(([a,b])=><div key={a}><div className="mono text-[10px] text-[var(--muted)] mb-2">{a}</div><p className="leading-6">{b}</p></div>)}</div><div className="flex flex-wrap gap-2 mt-7">{p.technologies.map(x=><span key={x} className="border border-[var(--line)] px-2 py-1 text-xs">{x}</span>)}</div></div>
            </div>
          </article>)}
        </div>
      </section>

      <section id="thinking" className="border-y border-[var(--line)] bg-[var(--panel)] py-24">
        <div className="container"><div className="mono text-xs uppercase tracking-[.18em] mb-5">04 / Engineering thinking</div><div className="grid md:grid-cols-[.8fr_1.5fr] gap-14"><h2 className="text-5xl md:text-7xl font-extrabold tracking-[-.05em]">How I<br/>approach a<br/>problem.</h2><div>{['Understand','Break Down','Research','Design','Build','Test','Improve'].map((x,i)=><div key={x} className="flex items-center border-t border-[var(--line)] py-5"><span className="mono text-xs w-12">0{i+1}</span><span className="text-2xl font-bold">{x}</span><span className="ml-auto text-sm text-[var(--muted)] hidden sm:block">{['Define the actual problem.','Turn complexity into smaller pieces.','Find evidence before assumptions.','Choose a simple workable approach.','Choose a simple workable approach.','Check behavior against expectations.','Keep the useful parts, change the weak ones.'][i]}</span></div>)}</div></div></div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-[.7fr_1.3fr] gap-14"><div><div className="mono text-xs uppercase tracking-[.18em] mb-5">05 / Problem solving</div><h2 className="text-5xl md:text-6xl font-extrabold">DSA is<br/>practice.</h2><p className="text-[var(--muted)] mt-6 leading-7">No inflated counters. Topics are shown here so progress can be connected to real solutions as they are added.</p></div><div><div className="flex flex-wrap gap-2">{dsaTopics.map(x=><span key={x} className="border border-[var(--line)] px-3 py-2 text-sm bg-white/20">{x}</span>)}</div><div className="mt-10 border-t border-[var(--ink)] pt-6 flex justify-between mono text-xs"><span>PROBLEMS SOLVED</span><span>CONFIGURE WITH REAL DATA</span></div></div></div>
      </section>

      <section id="lab" className="bg-[var(--dark)] text-white py-24">
        <div className="container"><div className="mono text-xs text-neutral-500 uppercase tracking-[.18em] mb-5">06 / The lab</div><div className="grid md:grid-cols-[1fr_1.5fr] gap-14"><div><h2 className="text-5xl md:text-7xl font-extrabold tracking-[-.05em]">Questions<br/>worth<br/>building.</h2></div><div className="space-y-4">{[['Python experiment','How can a small implementation become simpler or more robust?'],['ML experiment','What changes when preprocessing, features, or model choices change?'],['Algorithm implementation','Can I explain the trade-offs instead of only writing the code?'],['UI experiment','Can an interface make technical work easier to understand?']].map(([a,b],i)=><div key={a} className="border border-neutral-800 p-6 hover:bg-neutral-900 transition"><div className="mono text-xs text-neutral-500">EXPERIMENT 0{i+1}</div><div className="text-xl font-bold mt-5">{a}</div><p className="text-neutral-400 mt-2">{b}</p><div className="mt-5 text-xs mono text-neutral-600">QUESTION → EXPERIMENT → RESULT → LESSON</div></div>)}</div></div></div>
      </section>

      <section className="container py-24">
        <div className="grid md:grid-cols-2 gap-14"><div><div className="mono text-xs uppercase tracking-[.18em] mb-5">07 / Stack & trajectory</div><h2 className="text-5xl font-extrabold">What I use,<br/>what I’m learning.</h2>{Object.entries(skills).map(([k,v])=><div key={k} className="mt-8"><div className="mono text-xs uppercase text-[var(--muted)]">{k}</div><div className="flex flex-wrap gap-2 mt-3">{v.map(x=><span key={x} className="border border-[var(--line)] px-3 py-2 text-sm">{x}</span>)}</div></div>)}</div><div><div className="mono text-xs uppercase text-[var(--muted)] mb-4">Build log</div>{timeline.map(t=><div key={t.year} className="border-t border-[var(--ink)] pt-5"><div className="text-4xl font-extrabold">{t.year}</div><ul className="mt-5 space-y-3">{t.items.map(x=><li key={x} className="text-[var(--muted)]">→ {x}</li>)}</ul></div>)}</div></div>
      </section>

      <section id="credentials" className="border-y border-[var(--line)] bg-[var(--panel)] py-24">
        <div className="container">
          <div className="mono text-xs uppercase tracking-[.18em] mb-5">08 / Credentials</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"><h2 className="text-5xl md:text-7xl font-extrabold tracking-[-.05em]">Learning<br/>evidence.</h2><p className="max-w-md text-[var(--muted)]">Real certificates only. Duplicate uploads have been removed, and every listed credential can be opened from this portfolio.</p></div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c,i)=><article key={c.title} className="border border-[var(--line)] bg-white/50 p-6 hover-lift"><div className="flex justify-between gap-4"><span className="mono text-xs">0{i+1}</span><span className="mono text-xs text-[var(--muted)]">{c.date}</span></div><h3 className="text-2xl font-extrabold mt-8">{c.title}</h3><p className="mt-2 text-sm font-semibold">{c.issuer}</p><p className="mt-4 text-sm text-[var(--muted)]">{c.detail}</p><div className="mt-7 flex gap-3 flex-wrap"><a className="border border-[var(--ink)] px-4 py-2 text-xs font-bold flex items-center gap-2" href={c.file} target="_blank" rel="noreferrer">VIEW CERTIFICATE <ExternalLink size={14}/></a>{c.verify&&<a className="accent px-4 py-2 text-xs font-bold" href={c.verify} target="_blank" rel="noreferrer">VERIFY ↗</a>}</div></article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--accent)] py-24">
        <div className="container"><div className="mono text-xs uppercase tracking-[.18em] mb-6">09 / Contact</div><h2 className="text-[clamp(3.5rem,9vw,8rem)] leading-[.82] font-extrabold tracking-[-.07em]">LET’S BUILD<br/>SOMETHING.</h2><div className="mt-12 flex flex-wrap gap-3"><a className="bg-[var(--ink)] text-white px-5 py-3 font-bold flex items-center gap-2" href={'mailto:'+profile.email}><Mail size={17}/> EMAIL</a><a className="border border-[var(--ink)] px-5 py-3 font-bold flex items-center gap-2" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GITHUB</a><a className="border border-[var(--ink)] px-5 py-3 font-bold flex items-center gap-2" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN</a><a className="border border-[var(--ink)] px-5 py-3 font-bold flex items-center gap-2" href={'tel:'+profile.phone}><Phone size={17}/> CALL</a></div><div className="mt-10 text-sm"><span className="font-bold">{profile.email}</span> · <span>{profile.location}</span></div><p className="mono text-xs mt-16">SURABU PREMCHAND / CSE / SR UNIVERSITY / WARANGAL</p></div>
      </section>
    </main>

    {workbench&&<Modal title="MY WORKBENCH" close={()=>setWorkbench(false)}><div className="grid sm:grid-cols-2 gap-3">{['PROJECTS','DSA','EXPERIMENTS','CURRENTLY LEARNING','GITHUB','CREDENTIALS'].map((x,i)=><div key={x} className="border border-[var(--line)] p-5 bg-white"><div className="mono text-xs">0{i+1}</div><div className="font-extrabold text-xl mt-7">{x}</div><div className="text-xs text-[var(--muted)] mt-2">Open section →</div></div>)}</div></Modal>}
    {recruiter&&<Modal title="RECRUITER MODE" close={()=>setRecruiter(false)}><div className="mono text-xs text-[var(--muted)] mb-5">60-SECOND PROFILE</div><div className="flex items-start gap-5"><img src="/profile.jpg" alt="" className="w-20 h-24 object-cover object-top rounded-xl"/><div><h3 className="text-4xl font-extrabold">{profile.name}</h3><p className="mt-2 text-[var(--muted)]">{profile.role}</p></div></div><div className="grid sm:grid-cols-2 gap-4 mt-8"><div className="border border-[var(--line)] p-5"><b>WHAT I KNOW</b><p className="mt-3 text-sm">Python · DSA · AI/ML · Deep Learning · Software Development</p></div><div className="border border-[var(--line)] p-5"><b>BEST PROOF</b><p className="mt-3 text-sm">Medical Insurance Cost Prediction + AI Wildfire Detection + practical software builds.</p></div></div><div className="flex flex-wrap gap-3 mt-8"><a href="#work" onClick={()=>setRecruiter(false)} className="accent px-4 py-2 font-bold">VIEW PROJECTS</a><a href={profile.github} target="_blank" rel="noreferrer" className="border px-4 py-2 font-bold">GITHUB</a><a href="#contact" onClick={()=>setRecruiter(false)} className="border px-4 py-2 font-bold">CONTACT</a></div></Modal>}
  </div>
}

function Modal({title,close,children}:{title:string,close:()=>void,children:React.ReactNode}){
  return <div className="fixed inset-0 z-50 bg-black/60 p-4 md:p-10 flex items-center justify-center" onClick={close}><div className="bg-[var(--bg)] border-2 border-[var(--ink)] w-full max-w-3xl max-h-[90vh] overflow-auto p-6 md:p-10" onClick={e=>e.stopPropagation()}><div className="flex justify-between items-center mb-10"><div className="mono text-xs">{title}</div><button onClick={close} aria-label="Close"><X/></button></div>{children}</div></div>
}
