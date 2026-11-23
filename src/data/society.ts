export type Heat = "Limited" | "Uneven" | "Material" | "Structural";

export type SocietyTopic = {
  id: string;
  title: string;
  now: string;
  later: string;
  australia: string;
  heat: [Heat, Heat, Heat, Heat];
};

export const heatYears = ["2026", "2030", "2035", "2040"] as const;

export const societyTopics: SocietyTopic[] = [
  {
    id: "society-jobs",
    title: "Jobs and the labour market",
    now: "The evidenced effect is task-shaped. Models draft, summarise, code and answer customers. They do not reliably run a matter, a ward or a building site. Occupations built from a stack of exposed tasks — junior analysis, routine bookkeeping, first-line support, commodity copy — are already repricing. Occupations built from liability, physical presence and relationships are not.",
    later: "If reliability improves, the 2030s argument is about how many checking-jobs replace doing-jobs. History says the task mix changes before the headcount does, and that new tasks appear. It does not say the transition is painless or that the new tasks pay the old mortgage. A forecast that names a single percentage of jobs ‘lost’ is theatre.",
    australia:
      "Sydney’s exposed belt is professional services, software, finance operations, marketing and parts of the public service. Care, construction, nursing and skilled trades are later. A founder at 50 is in the exposed belt on the production side and, if the clients are local, protected by trust and by the fact that someone still has to be sued. Price the judgement. The draft is leaving the invoice.",
    heat: ["Uneven", "Material", "Structural", "Structural"],
  },
  {
    id: "society-inequality",
    title: "Inequality",
    now: "Model rents, chip rents and housing rents accrue to people who already own capital or a scarce licence to practise. Crypto wealth is concentrated and volatile; it is a poor picture of Australian inequality next to housing and super. AI tools are unusually cheap at the point of use, which cuts against a simple ‘only the rich get the tech’ story, and the gains still pool where distribution and capital sit.",
    later: "The open question is whether a solo operator with agents can take surplus that used to require a firm, or whether distribution platforms take it instead. Both can be true in different markets. Token incentives do not fix a housing market.",
    australia:
      "The binding Australian inequality machine is housing and the tax treatment around it, plus who captures super contributions. Technology adds a wedge inside cognitive work. It does not replace the wedge between a household that owns a Sydney dwelling and one that rents one.",
    heat: ["Uneven", "Material", "Material", "Structural"],
  },
  {
    id: "society-trust",
    title: "Trust and misinformation",
    now: "Synthetic media is already good enough for scams, non-consensual imagery and a political hoax. It is not good enough to make careful institutions throw out every recording. Public blockchains did not fix this. An on-chain hash of a lie is a well-timestamped lie.",
    later: "Institutions that adopt signed capture and slow down before amplifying will cope. Feeds optimised for reaction will not. The social damage is cumulative: more time spent verifying, more refusal to believe real evidence, more room for whoever offers a simple authenticator. That authenticator will often be a state or a platform.",
    australia:
      "eSafety, defamation law and the ordinary scepticism of a small, urbanised media market are the local tools. They are uneven. A founder’s practical problem is impersonation of you, your clients, or your invoices. Out-of-band verification beats a watermark you hope the other person checks.",
    heat: ["Material", "Material", "Structural", "Structural"],
  },
  {
    id: "society-democracy",
    title: "Democracy",
    now: "Elections are still won in the old places: seats, preferences, turnout, and in Australia compulsory voting, which is a genuine stabiliser. AI changes campaign production costs and micro-targeting. Crypto changes almost nothing about a preferential ballot. DAO voting is not a rehearsal for the House of Representatives. It is plutocratic by coin and thin by turnout.",
    later: "The democratic risk is administrative, not electoral theatre. If benefits, policing and migration decisions become model outputs without a real appeal, you can keep holding elections and hollow out the experience of being governed. The fortress scenario is this risk plus a security rationale. Hybrid pluralism is the same tools with appeal rights kept on purpose.",
    australia:
      "Compulsory voting, preferential counts and a professional electoral commission are strengths. The weakness to watch is automated administration in services people cannot exit: Centrelink-style decisions, visa processing, policing tools. The remedy is administrative law, not a governance token.",
    heat: ["Uneven", "Uneven", "Material", "Material"],
  },
  {
    id: "society-privacy",
    title: "Privacy",
    now: "Two opposite facts. Public chains make money more legible than cash once an identity sticks to an address. AI makes it cheaper to infer sensitive facts from ordinary data. Zero-knowledge proofs are a real technical answer to the first problem and are not, in 2026, how Australians get paid. The 2024 Privacy Act reforms push transparency around automated decisions. They do not stop a foreign model training on data it should not have had.",
    later: "Device-bound identity plus cheap inference is the privacy loss that does not need a conspiracy. It needs defaults. Privacy-preserving credentials could reverse part of it if banks and governments accept them. That is a standards fight, and the state is one of the parties, not the enemy of all standards.",
    australia:
      "Your practical exposure is cloud vendors, data brokers, health apps, and any agent you give a mailbox to. A hardware wallet does not answer that. An agent with read access to your inbox is a larger privacy decision than which chain you experiment on.",
    heat: ["Material", "Material", "Structural", "Structural"],
  },
  {
    id: "society-education",
    title: "Education",
    now: "Assessment that marks a take-home essay as proof of authorship is already broken. Oral defence, in-class work, portfolios and supervised practicals are the boring repairs. Banning the tools fails in any course whose graduates will use them the following Monday. Schools also have a duty not to outsource a child’s record to a vendor that cannot explain itself.",
    later: "The credential that survives is the one that still means ‘this person can do the thing when it counts’. Universities and professions that keep a supervised gate — admission, articles, clinical placement, a licence exam — keep their signal. Those that sell unproctored content degrees will find the content is free.",
    australia:
      "For a founder hiring, the degree sorts less and the trial task sorts more, with the usual bias risk of informal hiring. For a parent, the question is whether the school teaches verification, statistics and a trade, or only the production of fluent text. Fluency is now the cheap part.",
    heat: ["Uneven", "Material", "Structural", "Structural"],
  },
  {
    id: "society-health",
    title: "Healthcare",
    now: "Models are already used for documentation, imaging support and patient messages. The clinical win is time given back to scarce staff, if the tool is accurate and the workflow is redesigned. The clinical failure is a confident wrong answer in a system too busy to check. Biotech’s separate track, specific gene therapies, is real and narrow.",
    later: "Triage and paperwork are the 2030s surface. Nursing, surgery and emergency care remain physical and local. A public system that uses AI to stretch clinicians can get more care per dollar. A system that uses it to deny care faster will be hated, correctly. Longevity marketing will keep running ahead of trials.",
    australia:
      "Medicare, public hospitals and the PBS are the story. A model does not replace them. It might make a GP’s notes faster and a hospital’s discharge summary less awful. The political fight will be data leaving the public system for a US vendor, and who is liable when the suggestion is wrong. That is a procurement and tort question.",
    heat: ["Uneven", "Uneven", "Material", "Material"],
  },
  {
    id: "society-meaning",
    title: "Meaning and identity",
    now: "Most people do not derive their identity from a protocol. They derive it from work, family, place, faith, sport and competence. AI nibbles at the competence part for people whose status was ‘I produce the draft’. Crypto offers a strong identity to a small subculture and a speculative asset to a larger one. Neither is a substitute for a reason to be needed.",
    later: "If drafts are cheap, status shifts toward people who decide, care, build physical things, or hold a licence. That can be a healthier mix. It can also be a status shock for the professionally educated, which is a political fact, not a self-help line. Countries that moralise the shock will handle it worse than countries that keep income and recognition attached to useful work.",
    australia:
      "A fifty-year-old founder already knows that identity can outlive a job title. The risk is quieter: clients who still like you and no longer need the hours. The response that fits the evidence is to move up the decision, keep a regulated or trusted role, and not to look for meaning in a portfolio of tokens.",
    heat: ["Limited", "Uneven", "Material", "Material"],
  },
  {
    id: "society-generations",
    title: "Intergenerational effects",
    now: "The generational split in Australia is already about housing and super, which are pre-AI institutions. Older cohorts hold dwellings and accumulating retirement balances. Younger cohorts face the entry price and a labour market that now includes cheap cognitive tools. Crypto does not unwind that. A bull market in a token is not a housing policy.",
    later: "If agentic AI compresses starting salaries in professional jobs, the deposit gap gets worse, unless prices, migration or building rates move. Education credentials may weaken at the same time, which hurts the ladder that university was supposed to be. The political coalition that protects asset prices and under-invests in skills will transfer the technology dividend upward.",
    australia:
      "You are on the asset side of this split if you own a dwelling and have two decades of super, and on the income side if your practice is the exposed kind of work. Both can be true. The honest use of that position is not a lecture to people locked out of housing. It is to avoid business models that assume young customers have the discretionary income of 2005.",
    heat: ["Material", "Material", "Structural", "Structural"],
  },
];
