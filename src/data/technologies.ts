export type TechEffect = "Pressures the state" | "Strengthens the state" | "Cuts both ways";

export type Technology = {
  id: string;
  name: string;
  effect: TechEffect;
  horizon: string;
  changes: string;
  timeline: string;
  state: string;
  confidence: string;
};

export const technologies: Technology[] = [
  {
    id: "tech-agents",
    name: "Agentic AI, short of AGI",
    effect: "Cuts both ways",
    horizon: "Now to 2035",
    changes:
      "Systems that plan, use tools, and take a sequence of actions are already in products. ‘AGI’ is a moving label, not a lab result you can audit. The evidenced change is that the first draft of cognitive work gets cheap, and that software can hold a wallet. Reliability, liability and taste remain expensive.",
    timeline:
      "2026: useful, uneven, already paying for some API calls via rails such as x402. 2030: ordinary inside firms, with spending caps and a named owner, if insurers and regulators get their way. 2035: agent-default drafts in exposed professions, only if error rates fall enough that a human check is cheaper than doing the work. A hard takeoff is a speculation, not the base case.",
    state:
      "Agents pressure tax and consumer protection when they transact without a clean responsible person. They strengthen the state when the same tools audit returns, triage benefits and write the first pass of legislation or investigation. The chokepoint is whoever provides the model, the chips and the payment account. A wallet in a TEE is still a vendor relationship.",
    confidence:
      "High that agents are a 2026 product category. Medium that they reshape professional pricing by 2030. Low on any date for a general system that does not need a human in the loop.",
  },
  {
    id: "tech-robots",
    name: "Robotics and humanoids",
    effect: "Cuts both ways",
    horizon: "2030 to 2045",
    changes:
      "Warehouses and factories already run specialised robots. Humanoids are a bet that one body can do many physical jobs and that the AI is finally good enough to justify the hardware. Hands, batteries, and maintenance dominate the economics. A demo video is not a deployment.",
    timeline:
      "Through 2030, expect more pilot programs in logistics and a few showpiece homes, not a mass household appliance. Broader physical automation is a 2030s question and will arrive task by task. Countries with expensive labour and standardised worksites adopt first.",
    state:
      "Robots strengthen states that can manufacture, standardise and insure them, and pressure states that rely on low-wage physical work without a fiscal plan. They do not, by themselves, weaken monetary sovereignty. They do change the politics of immigration and vocational education.",
    confidence:
      "Medium that industrial robotics keeps compounding. Low that general humanoids are common in Australian homes before the 2040s.",
  },
  {
    id: "tech-quantum",
    name: "Quantum computing",
    effect: "Cuts both ways",
    horizon: "Migration now, risk window 2030s",
    changes:
      "A cryptographically relevant quantum computer would run Shor’s algorithm against public-key signatures. For Ethereum that means ECDSA account keys and BLS validator keys, not the hash of an old block. The realistic failure is theft and impersonation of keys that have revealed their public half. Finalised history stays put. ‘Harvest now, decrypt later’ is a threat to encrypted data, which is a different pile of secrets: state cables, health records, long-lived contracts.",
    timeline:
      "NIST published FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) in August 2024. Transition guidance aims to leave quantum-vulnerable public-key algorithms behind by 2035. Ethereum’s post-quantum group says the work has to start years early, and offers an internal assessment that core protocol upgrades could land around 2029, with the ecosystem lagging. Google’s 2029 internal migration deadline, as described by ethereum.org, is a corporate program, not proof a breaking machine arrives that year.",
    state:
      "States that migrate first protect their own records and gain a surveillance and military edge if quantum sensing or optimisation pays off. States and chains that wait expose high-value keys. Quantum does not ‘end crypto’. It forces a signature migration, which decentralised systems do slowly and badly if they leave it late. It can also strengthen the state against any network that fails to migrate.",
    confidence:
      "High that migration is the correct policy now. Low on the calendar date of a breaking machine. The Ethereum 2029 figure is a project assessment, not a commitment you can hold anyone to.",
  },
  {
    id: "tech-bio",
    name: "Biotech, gene editing, longevity",
    effect: "Cuts both ways",
    horizon: "Therapies now, enhancement contested",
    changes:
      "Somatic gene editing is medicine. Casgevy, for sickle cell and beta thalassemia, is the proof that CRISPR can be an approved product, not only a paper. The pipeline after that is more therapies for more diseases, unevenly priced. Germline editing, heritable enhancement, and most longevity marketing sit far ahead of the evidence and inside hard legal bans in the countries in this briefing.",
    timeline:
      "The 2020s are specific therapies and a regulatory apparatus for dual-use biology. The 2030s are a wider therapeutic list if trials hold. Population-scale enhancement is not a responsible base case for 2040. Clinics will sell it anyway.",
    state:
      "Biology strengthens the welfare state when it prevents expensive disease, and pressures it when the price tag is unbearable or when only some people can pay. It is also a security problem: synthesis screening, lab accidents, and deliberate misuse. That is state power growing, not shrinking. Crypto is almost irrelevant here, except as a way someone might try to pay around export controls.",
    confidence:
      "High that somatic therapies expand. High that germline enhancement stays prohibited in Australia and peer countries. Low that longevity products match their advertising.",
  },
  {
    id: "tech-fusion",
    name: "Fusion and energy abundance",
    effect: "Strengthens the state",
    horizon: "Not a 2030 electricity plan",
    changes:
      "Firm, cheap, clean power would reorder industry, desalination, and the cost of compute. It would not arrive as a protocol upgrade. Fission is the nearer firm-power technology. Fusion programs — public ones such as ITER, and private ones with aggressive timelines — have not put material electricity on a grid.",
    timeline:
      "2030 is too soon for fusion as a share of Australian generation. 2040 is the earliest zone where a success by a leading private program would show up as early plants somewhere, and ‘somewhere’ may not be the National Electricity Market. Renewables, transmission, gas firming and minerals processing are the decisions that actually face Australian governments.",
    state:
      "Energy abundance, if it comes, strengthens whoever can permit, fund and defend the plants. It lowers the cost of AI, which cuts both ways. It does not empower a wallet. Scarcity, in the meantime, is a geopolitical lever: gas, uranium, copper, lithium, and the processing of them. Australia is on the minerals side of that lever and the import side of the machines.",
    confidence:
      "Medium that fusion is still pre-commercial in 2035. Low on any abundance claim. High that grid politics matter more to a Sydney founder than a fusion headline.",
  },
  {
    id: "tech-bci",
    name: "Brain-computer interfaces",
    effect: "Strengthens the state",
    horizon: "Medical through the 2030s",
    changes:
      "Early human trials, including implants aimed at paralysis and communication, show that a signal can be read well enough to help a small number of patients. That is not thought-typing for the commute. The leap from a clinical device to a consumer platform is a safety, surgery and social-acceptability problem.",
    timeline:
      "2030: more clinical use, still tiny numbers. 2040: a larger medical population if infection, longevity of the implant, and decoding keep improving. Mass consumer BCIs are a speculation you should not plan a product around.",
    state:
      "A medical device is regulated like a medical device. Networked neural data is a privacy and national-security problem, which pulls the state in. It does not create a new identity system to rival a passport. The inequality question is access, as with every expensive therapy.",
    confidence:
      "Medium on slow medical progress. Low on consumer scale before 2040.",
  },
  {
    id: "tech-leo",
    name: "LEO satellite internet",
    effect: "Cuts both ways",
    horizon: "Deployed now",
    changes:
      "Low-earth-orbit constellations, Starlink foremost, already deliver broadband where the fibre does not, including rural Australia. They also make a total national internet shutdown harder, because the dish talks to a moving satellite. They do not make the user sovereign. The operator is a company with spectrum licences, ground stations, export-control exposure and a habit of geofencing.",
    timeline:
      "This is a 2020s infrastructure fact, not a 2040 surprise. Capacity, price and competition from other constellations are the variables. Integration with ordinary telco regulation is the political variable.",
    state:
      "LEO weakens the bluntest form of information control and strengthens the state that can license, sanction or buy the operator. In a conflict, service can be turned on for one side and off for a region. That is power, just not the local ISP’s power. For Australians it is also resilience: a second path when floods or distance take out terrestrial links.",
    confidence:
      "High that LEO is a permanent part of the connectivity mix. Medium that it remains a bypass in a serious confrontation with the operator’s home government. It will not, if that government leans hard.",
  },
  {
    id: "tech-media",
    name: "Synthetic media and deepfakes",
    effect: "Cuts both ways",
    horizon: "Already good enough to matter",
    changes:
      "Generated audio, image and video are cheap. Perfect detection is not a stable equilibrium, because the generator can train on the detector. Provenance — signed capture, C2PA content credentials, witnessed originals — is the institutional answer. It does not help a stranger’s clip arriving in a family chat five minutes before a vote or a market open.",
    timeline:
      "2026: good enough to hoax, scam and inflame, not good enough to abolish evidence inside a careful institution. 2030: unsigned video loses default credibility in courts, newsrooms and banks. Public opinion stays exploitable.",
    state:
      "Synthetic media pressures democratic trust and strengthens any actor, state or platform, that becomes the authenticator. Online-safety laws, including the UK’s Online Safety Act and Australia’s eSafety framework, aim at the distributors. They will not restore a world where seeing is believing. Crypto’s minor role is paying the producers and, occasionally, timestamping a file. Timestamping does not prove the file was true.",
    confidence:
      "High that provenance beats detection as a strategy. Medium that institutions actually adopt it in time for the next few election cycles.",
  },
  {
    id: "tech-av",
    name: "Autonomous vehicles",
    effect: "Cuts both ways",
    horizon: "Uneven through the 2030s",
    changes:
      "Driverless ride-hailing is a commercial fact in parts of the United States. It is not a commercial fact on Australian streets. The difference is regulation, weather, road design, mapping, and a public that has to accept the failure mode. Trucking on repeated highway routes is a cleaner problem than a mixed CBD.",
    timeline:
      "2030: more cities in countries that already started, plus freight pilots. 2035: a visible labour effect where deployment actually happened, and a policy argument everywhere else. Australia is more likely to be in the second group unless a state government decides to be a test bed and insurers agree.",
    state:
      "AVs require the state: road rules, liability, spectrum, data retention after a crash. They pressure the state that taxed fuel and licensed drivers, and that now has to fund roads with a thinner excise and answer for a machine’s fatality. They do not create a parallel jurisdiction. The vehicle still occupies a street the Crown can close.",
    confidence:
      "High that deployment stays geographically uneven. Medium on freight before urban robotaxis in Australia.",
  },
  {
    id: "tech-materials",
    name: "Advanced materials",
    effect: "Strengthens the state",
    horizon: "Incremental, then suddenly relevant to supply chains",
    changes:
      "Batteries, power electronics, high-performance alloys, and maybe one day room-temperature superconductors change what energy and weapons cost. Most of the value in the next decade is boring and physical: better cathodes, magnets, and the ability to process minerals instead of shipping concentrate. Breakthrough materials are announced more often than they are manufactured.",
    timeline:
      "Battery cost and performance keep moving through the 2020s and 2030s. Superconductors and other step-changes should be treated as options, not plans. Processing plants take years of permits. That timeline is the real one.",
    state:
      "Materials strengthen states that can permit industry, ally with whoever designs the machines, and avoid being only a quarry. Australia’s leverage is the geology. Its vulnerability is processing, capital, and a small domestic market. None of this is displaced by a token standard. A token can finance a offtake. It cannot smelt one.",
    confidence:
      "High that critical minerals stay strategic. Low that a miracle material rewrites the 2030s. Medium that processing location becomes a geopolitical fight, because it already has.",
  },
];
