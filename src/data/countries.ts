export type CountryId = "au" | "sg" | "us" | "uk" | "th";

export type Country = {
  id: CountryId;
  name: string;
  city: string;
  pin: { left: string; top: string };
  label: string;
  posture: string;
  resilience: number;
  pressure: number;
  crypto: string;
  ai: string;
  strengths: string[];
  vulnerabilities: string[];
  trajectory: string;
  citizens: string;
  jobs: string;
  economy: string;
  capital: string;
};

export const rubric = {
  resilience:
    "Institutional resilience is a judgement about courts, regulators, payment reliability, fiscal capacity, skills, and whether the state can implement a rule. It is not a credit rating.",
  pressure:
    "Disruption pressure is a judgement about platform dependence, how exposed the labour market is to agents, how easily money can leak onto crypto rails, and where the country sits in a chip-and-cloud rivalry. It is not a prediction that the pressure wins.",
};

export const countries: Country[] = [
  {
    id: "au",
    name: "Australia",
    city: "Sydney",
    pin: { left: "58%", top: "78%" },
    label: "top-full mt-1 left-1/2 -translate-x-1/2",
    posture: "Absorb, with a lag",
    resilience: 76,
    pressure: 55,
    crypto:
      "The Corporations Amendment (Digital Assets Framework) Act 2026 passed on 1 April 2026, assent 8 April 2026. ASIC says it commences on 9 April 2027 and then runs an 18-month implementation: standards, licensing guidance, applications with transitional relief, then full supervision. Digital asset platforms and tokenised custody platforms need an AFSL unless an exemption applies. Treasury described a low-value exemption under $5,000 per customer and $10 million in annual transactions. AUSTRAC already registers digital currency exchanges, and ASIC’s INFO 225 has been pulling many arrangements into existing financial-product law. Do not treat 2027 as the year regulation begins. The RBA and DFCRC’s Project Acacia tested wholesale tokenisation, including a pilot wholesale CBDC, and did not recommend a retail CBDC. The two-tier monetary system stayed the frame.",
    ai:
      "Guidance for AI Adoption (October 2025) sets six voluntary practices and says it creates no new legal duty. Existing law still applies: privacy, including the 2024 automated-decision reforms, consumer law, discrimination, copyright, and sector rules. On 10 November 2026 the government announced mandatory safety and security duties for frontier AI companies, a targeted regulator, and a role for the Australian AI Safety Institute. That is a direction, not a commenced statute, and it is aimed at frontier developers rather than at a Sydney business using a model.",
    strengths: [
      "A competent ATO, ASIC, APRA and RBA, and courts that enforce judgements.",
      "Superannuation of A$4.77 trillion at 30 June 2026, with the guarantee at 12% since 1 July 2025 and Payday Super from 1 July 2026. It is a legible, mandatory savings system.",
      "English-language skills, alliance access to US and allied technology, and time zones that overlap Asia.",
      "Critical minerals and energy optionality, if processing and permits are real and not only a strategy document.",
    ],
    vulnerabilities: [
      "Household wealth is concentrated in housing. A labour shock that hits professional incomes hits mortgage service, even if the banks are fine.",
      "The productive stack — models, chips, app stores, clouds — is imported. Sydney regions of US hyperscalers are still someone else’s platform.",
      "A small domestic market. Global firms can geofence Australia if licensing looks costly relative to revenue.",
      "Implementation lag. Australia often writes a careful regime after the market structure has been set in Washington.",
    ],
    trajectory:
      "The likely path is absorption. Platforms that hold client assets get licensed. Wholesale tokenisation grows inside the CFR agencies. Retail CBDCs stay a research topic. AI in government and finance spreads under existing law first, with a frontier statute later if the November 2026 announcement survives contact with drafting. A parallel system large enough to matter for wages would require the banks and the ATO to lose the on-ramp. That is not the base case. The lag is the risk: rules that are clear on paper and slow in the licensing queue, while US platforms set the defaults.",
    citizens:
      "Day to day, little changes in how you are paid and how you pay tax. Scams and synthetic impersonation get worse. Government services may get faster notes and worse appeal experiences if automation is bolted on without a redesign. Privacy depends more on which vendor holds the mailbox than on which chain is fashionable.",
    jobs:
      "Professional services, software, finance operations and parts of the public service feel price pressure first. Care, trades and on-site work later. Migration settings and the university sector matter as much as the model, because they decide who is in the labour pool while the task mix shifts.",
    economy:
      "The macro exposure is terms of trade, housing credit and whether minerals are processed here. Crypto is a market-conduct issue, not a GDP issue, at 2026 scale. AI is a productivity maybe, and a distributional certainty: some margins compress. A national plan that waits for fusion, a retail CBDC, or a sovereign model is a plan that is not choosing.",
    capital:
      "Australia does not own the models. It is being paid to host them. Amazon said in June 2025 it would invest A$20 billion in local data-centre infrastructure from 2025 to 2029. Microsoft said in April 2026 it would put A$25 billion of capital and operating expenditure into Australian digital infrastructure by the end of 2029, beside a memorandum on the government’s data-centre expectations. NEXTDC, the listed landlord, reported FY26 revenue of A$497 million and capital expenditure of A$3.4 billion, with a 565 MW forward order book. The buildings can be Australian. The chips, the weights and most of the profit are not. Super, A$4.77 trillion, and the Future Fund, A$289.7 billion at 30 June 2026, are how the public balance sheet can hold the foreign equity. That hedges a falling labour share. It does not collect company tax on profit booked somewhere else, and electricity is the political constraint.",
  },
  {
    id: "sg",
    name: "Singapore",
    city: "Singapore",
    pin: { left: "48%", top: "58%" },
    label: "left-full ml-2 top-1/2 -translate-y-1/2",
    posture: "Hub that has to pick corridors",
    resilience: 84,
    pressure: 61,
    crypto:
      "MAS licenses digital payment token services under the Payment Services Act. From 30 June 2025, firms that serve only customers outside Singapore in digital payment tokens or capital-markets tokens need a licence MAS says it will generally not grant, because the money-laundering risk is high and the activity is hard to supervise. Firms that serve customers in Singapore were already inside the PS Act, Securities and Futures Act or Financial Advisers Act. Project Guardian is the tokenisation sandbox: funds, bonds, FX and deposits, with other regulators in the room. In September 2026 MAS consulted on PS Act amendments for a selective stablecoin issuance licence. The design is a label, ‘MAS-regulated stablecoin’, reserves at least at par, redemption at par, and an expectation of few approvals. Other stablecoins stay in the broader digital-payment-token bucket. Fiat-pegged stablecoins are not to be treated as e-money.",
    ai:
      "IMDA’s Model AI Governance Framework for generative AI sets out nine dimensions, and the national digital gateway also points to a framework for agentic AI. None of that is a European-style AI Act. For finance, MAS issued Guidelines on AI Risk Management on 7 October 2026. They take effect on 7 October 2027 for the core expectations, with further sections by 7 October 2028. They explicitly cover generative AI and agents, and they are commensurate with the firm’s size. The older FEAT principles — fairness, ethics, accountability, transparency — still sit underneath. A named institution remains responsible.",
    strengths: [
      "MAS is fast, technical, and credible with global banks. That is a rare combination.",
      "A city-state can actually implement a rule: identity, payments and licensing sit in a small number of systems.",
      "Project Guardian gives it a role in cross-border tokenisation rather than a domestic consumer casino.",
      "Talent density and a legal system international firms will sign.",
    ],
    vulnerabilities: [
      "No domestic market to fall back on. If a corridor closes, the business leaves.",
      "Caught between US dollar rails, US chip controls, and a Chinese economy it cannot ignore.",
      "Energy, water, food and people are imported. Technical capacity is not the same as autarky.",
      "A high bar that pushes grey activity to other jurisdictions also means some innovation never books the ticket.",
    ],
    trajectory:
      "Singapore keeps trying to be the place where tokenised funds and regulated stablecoins are dull and supervised. It will not be the place that hosts an offshore casino serving only foreigners; MAS has said as much. AI in banks becomes a supervisory expectation, not a sandbox novelty. The risk is geopolitical, not drafting quality: a hub works if both sides of a trade can still clear. Hybrid pluralism with a strict local edge is the path. A bloc split is the threat.",
    citizens:
      "Residents get competent payments, strong identity, and a state that is not confused by technology. They also get a state that can see a lot. Consumer crypto is available through licensed firms, with the usual loss of the ‘no one is in charge’ story. Public services are where agentic AI will be tried carefully, because the political cost of a visible failure is high in a small polity.",
    jobs:
      "Finance, compliance, and the professional services around a hub do well if the hub keeps the corridors. Routine operations inside banks are exposed to agents. The city still needs people who can be responsible managers under the MAS guidelines. That is a labour market for judgement and for people who will sign.",
    economy:
      "The bet is intermediation: tokenised assets, wealth, trade finance, and a clean regulatory brand. It pays while the world is fragmented but not broken. It pays less if US and Chinese stacks stop touching, or if a scandal makes ‘licensed in Singapore’ look like a rubber stamp. The September 2026 stablecoin paper is written to avoid the rubber stamp.",
    capital:
      "Singapore is a price-maker in licensing and a price-taker in compute. Wealth managed in the city already owns the US equity. The city does not own a frontier lab, a chip fab, or the power a training run consumes. Its risk is a corridor: export controls or a China split that decides which clouds may train, while the legal brand stays excellent and the megawatts do not. Being the hub next to the build is not the same as being the build.",
  },
  {
    id: "us",
    name: "United States",
    city: "Washington",
    pin: { left: "78%", top: "30%" },
    label: "right-full mr-2 top-1/2 -translate-y-1/2",
    posture: "Source of the tools, and of the fight",
    resilience: 74,
    pressure: 84,
    crypto:
      "GENIUS, Public Law 119-27, signed 18 July 2025, is the stablecoin regime: permitted issuers only, one-to-one reserves in cash, insured deposits, short-dated Treasuries, government money-market funds and similar assets, monthly disclosures, and Bank Secrecy Act programs. Issuers over US$50 billion outstanding face audited annual financials. A state regime is available to smaller nonbank issuers if it is substantially similar. Issuers may not pay interest to holders; CRS notes that exchanges paying yield is not clearly banned. The CLARITY Act, the broader market-structure bill, passed the House on 17 July 2025, 294–134, and failed Senate cloture on 15 September 2026, 49–50. It was not law in late November 2026. Tornado Cash was delisted on 21 March 2025 after the Fifth Circuit said immutable contracts were not sanctionable property. Roman Storm was still convicted in August 2025 of the unlicensed money-transmitting conspiracy. Code is hard to list. A business is not.",
    ai:
      "Executive Order 14179, in January 2025, revoked the previous administration’s AI order. America’s AI Action Plan, July 2025, frames regulation as something to thin out, and floats funding pressure on states with ‘burdensome’ AI rules. A December 2025 executive order sets up a Department of Justice task force to challenge state AI laws and asks Congress for a national framework. An executive order does not itself preempt state law. The result in 2026 is a federal tilt toward speed, a live state-law patchwork, and the world’s densest concentration of labs, chips and clouds. Export controls on advanced chips remain the external face of US AI policy.",
    strengths: [
      "The dollar, the Treasury market, and the banks that GENIUS plugs stablecoins into.",
      "NVIDIA, the hyperscalers, the labs, and the capital markets that fund them.",
      "A court system that just demonstrated it will strike a sanctions theory it thinks is ultra vires, and a Justice Department that will still charge the operator.",
      "Scale. A US rule becomes a global product default because the users and the app stores are there.",
    ],
    vulnerabilities: [
      "Polarisation. Market structure stalled once it was no longer only a stablecoin bill. The next Congress can rewrite the mood.",
      "State–federal conflict on AI. Companies face both a deregulatory White House and state statutes the White House may not be able to erase.",
      "Conflict risk around the President’s business interests became part of why Democrats, and some Republicans, balked at CLARITY. That is a governance vulnerability, not a tech one.",
      "Concentration. If three firms provide the models and two provide the clouds, domestic political capacity does not equal resilience for everyone else.",
    ],
    trajectory:
      "Dollar stablecoins get more legitimate and more supervised. The rest of crypto stays in agency rulemaking and litigation until Congress can count to sixty. AI proceeds quickly, with a fight over state law that lasts years. The US is the most likely place where agentic commerce becomes normal, and the most likely place a scandal forces a sudden clamp. Both the absorb scenario and the fortress scenario have an American version. Parallel systems in the rest of the world will still be denominated in its currency.",
    citizens:
      "Americans get the tools first and the scams first. Stablecoin holdings become more like a shadow cash product, with the protections GENIUS actually wrote and the gaps it left, including the yield question. Privacy depends on state law and on platform policy more than on a single federal AI Act, because there isn’t one. Chip controls are invisible in daily life until they define which model a person can use.",
    jobs:
      "The labour shock is earliest here, because adoption is earliest. It is also where the new firms hire. Net effects will be argued with statistics for a decade. The distributional pattern to expect is strong demand for people who can evaluate and be liable, and weaker pricing for undifferentiated production.",
    economy:
      "The US captures the rents: chips, models, app stores, dollar stablecoin reserves parked in Treasuries. GENIUS, if it works, deepens that by turning a crypto product into demand for US government debt. The risk to the model is political dysfunction large enough to scare the Treasury market, which would dwarf anything Ethereum can do.",
    capital:
      "This is where the capital is incorporated. The 2026 capex guidance of Amazon, Alphabet, Microsoft and Meta, at the midpoint, is about US$730 billion in one year — near three-quarters of SIPRI’s US$954 billion US military figure for 2025, and more than a third of Australia’s entire projected GDP. Nvidia’s fiscal-2026 revenue was US$216 billion. SpaceX’s June 2026 listing, at a US$1.78 trillion offer value, put launch, Starlink, xAI and X in one public company. The US state is the home regulator, the export-control authority, and a customer. Antitrust and procurement are the tools. As of this briefing they have not reversed the build. Concentration is the American vulnerability that the rest of the world then imports.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    city: "London",
    pin: { left: "18%", top: "22%" },
    label: "left-full ml-2 top-1/2 -translate-y-1/2",
    posture: "Common-law adapter, short on scale",
    resilience: 70,
    pressure: 58,
    crypto:
      "The Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2026 were made on 4 February 2026. The FCA’s new regime is expected to start on 25 October 2027. On 30 June 2026 the FCA published final rules, including admissions and disclosures and a market-abuse regime for cryptoassets, after several years of discussion papers. Until then the live perimeter is anti-money-laundering registration and the financial-promotions rules. The design intent is ‘same risk, same regulatory outcome’, with the FCA candid that crypto markets will remain higher risk than established markets. This is absorption by the conduct regulator, on a published clock.",
    ai:
      "There is still no UK AI Act. The Commons Library describes a sector-by-sector approach: existing regulators apply five cross-cutting principles from the 2023 white paper — safety, transparency, fairness, accountability, contestability. The Labour government signalled binding duties for the most powerful models and had not, by late 2026, introduced that bill. The January 2025 AI Opportunities Action Plan is an adoption and capacity plan. The FCA has been explicit: it will not write extra AI rules, and will use the Consumer Duty, the Senior Managers and Certification Regime, and operational resilience instead. The Online Safety Act gives Ofcom a role over online services, including AI chatbots. The AI Security Institute — renamed from the AI Safety Institute on 14 February 2025 — remains the technical body. It evaluates. It does not own a hyperscaler.",
    strengths: [
      "London’s markets, English law, and a regulator that publishes a clock.",
      "The AI Security Institute’s evaluation role, which is influence without a giant domestic lab sector.",
      "Common-law flexibility. Duties can be hung on senior managers without a new omnibus statute.",
      "A political consensus, so far, that consumer crypto needs conduct rules rather than a ban.",
    ],
    vulnerabilities: [
      "Scale. The UK does not set the chip stack or the dollar. It implements, and it hosts.",
      "Sterling is not the stablecoin people are minting. Dollar products will be used in London under UK rules.",
      "A delayed frontier-AI bill leaves a gap the government itself said it cared about.",
      "Talent and listings leak toward the US when the work is the model rather than the market.",
    ],
    trajectory:
      "The UK looks like hybrid pluralism with a strong conduct regulator. By late 2027 crypto firms that deal with the UK should be inside FSMA authorisation. AI stays principles-based unless a narrow frontier bill finally appears. The City will tokenise what it can supervise. It will not become a network state, and it does not need to. The risk is irrelevance: careful rules for a market whose liquidity and models are decided elsewhere.",
    citizens:
      "Consumer protection around crypto promotions is already tighter than the old ‘it’s not our remit’ era. People still lose money. AI shows up as workplace tooling and as online-safety arguments, not as a new social contract. Public services will adopt slowly, which is both a protection against bad automation and a way to miss the productivity.",
    jobs:
      "Legal, financial and creative work in London is exposed to the same draft-compression as Sydney, with a deeper market and more global clients. The senior-manager regime creates a compliance labour demand that pure technology firms sometimes underestimate. Being the person who signs is a job.",
    economy:
      "The economic upside is keeping listings, tokenised funds and dispute resolution. The downside is a rentier financial sector plus an AI productivity disappointment if adoption stays a pilot. Nothing in the UK crypto regime changes the country’s growth problem by itself. It stops one kind of scandal.",
    capital:
      "The UK writes rules and evaluations for rents that accrue in the United States. The AI Security Institute is influence without the balance sheet: it can test a model Anthropic or another lab agrees to show it, and it cannot order a gigawatt. London can list a firm, sue a firm, and still watch the next laboratory leave. Sterling is not the unit the capex is funded in. The risk is careful irrelevance.",
  },
  {
    id: "th",
    name: "Thailand",
    city: "Bangkok",
    pin: { left: "32%", top: "42%" },
    label: "left-full ml-2 top-1/2 -translate-y-1/2",
    posture: "Sandbox state, thinner buffers",
    resilience: 48,
    pressure: 67,
    crypto:
      "The Emergency Decree on Digital Asset Businesses B.E. 2561 (2018) requires a Securities and Exchange Commission licence for exchanges, brokers and dealers. Crypto is not legal tender. Since 2022, licensed operators have generally been barred from facilitating digital assets as a means of payment. The exception to study is TouristDigiPay, announced on 18 August 2025 with the Ministry of Finance, AMLO and the tourism ministry. Foreign tourists convert crypto to baht through a licensed operator and spend via regulated e-money and Thai QR. Cash-out is not the point. Thai nationals are excluded. The SEC hearing paper capped small-merchant QR spend at 50,000 baht a person a month and know-your-merchant spend at 500,000. Operators can set tighter limits: Bitazza’s November 2026 terms use 100,000 baht a transaction and 300,000 a month. WORPT’s approval was reported by the Bangkok Post on 16 November 2026. Separately, gains on transfers through licensed venues are exempt from personal income tax from 1 January 2025 to 31 December 2029. That is an onshore incentive, not a free zone.",
    ai:
      "The National AI Strategy and Action Plan (2022–2027) has five pillars, starting with social, ethical and legal readiness. NSTDA and ETDA have issued ethics guidance. There is no comprehensive AI statute of the EU kind. The SEC has published an AI/ML governance guideline for capital-market operators and describes itself as moving toward an ‘AI-powered’ supervisor. Capacity is the constraint: strategy documents are ahead of a single empowered regulator with technical depth.",
    strengths: [
      "PromptPay and a population that already pays by QR. The tourist sandbox plugs crypto into that, instead of asking merchants to take a token.",
      "A tourism economy that gives the sandbox a real user, the foreign visitor, without opening domestic payments.",
      "A tax exemption with an end date, which is a measurable experiment.",
      "A regulator willing to put AMLO in the design, which is the correct instinct given regional fraud.",
    ],
    vulnerabilities: [
      "Enforcement capacity, political turnover, and a region with an industrialised scam problem. A sandbox next door to that industry has to be narrow or it becomes a laundering story.",
      "The baht is managed. A large crypto leak into domestic payments was judged unacceptable, which is why the 2022 ban and the convert-first sandbox exist.",
      "AI policy is fragmented across agencies. Ethics guides do not investigate a model.",
      "External dependence: dollar stablecoins in, baht out, global platforms underneath.",
    ],
    trajectory:
      "Thailand will keep courting licensed digital-asset business with tax carrots and keep crypto out of ordinary domestic payments. TouristDigiPay either becomes a small, supervised tourism feature or it is tightened after the first abuse. It is not a step toward bitcoin as legal tender. AI adoption in firms and in the SEC runs ahead of any omnibus law. In the scenario model, Thailand sits toward pressure: willing to experiment, less able to absorb a shock than Singapore or Australia. A fortress outcome would come from a security crackdown, not from a retail CBDC masterplan.",
    citizens:
      "Thai residents are not the sandbox user. They can trade on licensed venues, with a temporary tax exemption on gains, and they cannot pay for dinner in ETH. The citizen-facing technology shock is scams, deepfakes and cheap language tools, plus whatever public-service automation ministries actually deploy. Trust in official information is the asset to protect.",
    jobs:
      "Tourism, hospitality and back-office services are the exposed and the benefiting sectors. Agent tools in English and Chinese change call centres and content shops. The licensed crypto industry is a small employer next to tourism. A payment sandbox does not employ a generation. An education system that can produce engineers and supervisors would.",
    economy:
      "The economic logic of the sandbox is visitor spend, recorded in baht, inside AMLO’s field of view. The tax exemption is meant to pull trading onshore and, on the government’s own telling, still raise other revenue. The macro risk is reputational: one laundering case can shut the experiment and tax the rest of the digital economy with it. That is a higher-stakes sandbox than Project Acacia, which used wholesale participants who already had regulators.",
    capital:
      "Microsoft said on 31 March 2026 it plans more than US$1 billion in Thai cloud and AI infrastructure and operations from 2026 to 2028, with Gulf, AIS, CP and True, after a meeting with the prime minister. Against an IMF-projected GDP of about US$599 billion, that is visible capital and still a customer relationship. Thailand gets a region, a skills promise and a dependency. It does not get a vote on the weights. The pattern matches the crypto sandbox: plug into someone else’s rail, and keep the ministry in the room.",
  },
];

export const meansForYou = [
  {
    title: "Super",
    body: "The system, not the token, is the retirement plan. APRA measured A$4.77 trillion in super at 30 June 2026, including A$1.11 trillion in SMSFs. The guarantee has been 12% since 1 July 2025, and from 1 July 2026 employers pay it with payday, not as a quarterly afterthought. The Future Fund, a different pool, stood at A$289.7 billion the same day. Both already hold global equity, which is how Australian savings own a slice of the firms spending the AI capex. That is a hedge if wages compress and profits do not. It is not a reason to concentrate a fund in one laboratory, and it is not a contribution strategy. APRA funds will touch tokenisation only inside custody, mandate and liquidity rules. An SMSF can hold crypto, and concentration plus ATO compliance is the actual risk. Nothing in the agent stack changes preservation age.",
  },
  {
    title: "Property",
    body: "Sydney household wealth is a dwelling with a mortgage attached. A smart-contract standard does not rezone land or replace the bank that holds the security. The technology channel into property is income. If professional fees compress, serviceability compresses, and the asset you thought was separate from your labour turns out to be funded by it. The other channel is boring and physical: materials, energy, migration and how many homes get built. Those dominate any crypto narrative about ‘digital land’.",
  },
  {
    title: "The work",
    body: "At about 50, in a technically literate solo practice, the near risk is not a humanoid. It is a client who uses an agent for the first draft and a younger competitor who ships the same draft the same day. Work that remains priced is work where you are the person who can be wrong in public and still be trusted: the recommendation, the regulated sign-off, the ugly exception, the relationship when the tool has hallucinated. If a client can check the output without you, stop charging as if they cannot start without you.",
  },
  {
    title: "The company",
    body: "If you only sell your own software or advice and get paid in Australian dollars on an invoice, the digital-asset licensing regime is mostly not your problem. If you hold client tokens, or the product possesses digital assets for someone else, you are walking toward an AFSL from 9 April 2027 unless you truly sit inside the low-value exemption Treasury described. Check INFO 225 before that date. Existing financial-product law did not take a holiday. An agent that spends from a wallet you control is you, for tax, sanctions and consumer law. A key sitting in a vendor’s TEE does not incorporate a subsidiary. Keep the AUD bank account. Treat on-chain experiments as money you can lose. Watch de-banking and the fact that your production stack runs on a US cloud, probably in a Sydney region, under a contract you did not write.",
  },
];
