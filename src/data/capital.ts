import type { Posture, WorldId } from "../lib/capitalModel.ts";

export const capitalLead = {
  claim:
    "The nearer challenge to the state is not a wallet. It is a balance sheet. A handful of firms are spending, in a single year, sums that sit next to national defence budgets and, for smaller countries, next to a year of GDP. They are spending it on the computers, power, satellites and models that everyone else will rent.",
  distinguish:
    "A market capitalisation is not a GDP, and a valuation round is not cash in a treasury. The comparisons below are scale, with the units labelled. They are not a ranking of who can tax, conscript, or imprison.",
};

export const capexRows = [
  { firm: "Amazon", plan: "About US$220bn cash capex for 2026", note: "Company guidance, 29 Oct 2026. Predominantly AWS, and not only AI. Includes fulfilment and satellites." },
  { firm: "Alphabet", plan: "US$195–205bn for 2026", note: "Unchanged guidance, 28 Oct 2026. The company said the vast majority was technical infrastructure for AI." },
  { firm: "Microsoft", plan: "About US$170bn for calendar 2026", note: "CFO guidance, 28 Oct 2026, cut from US$175bn. Includes finance leases. GPU delays pushed some capacity into 2027." },
  { firm: "Meta", plan: "US$135–145bn for 2026", note: "Guidance, 21 Oct 2026, including principal on finance leases. The floor was raised from US$130bn." },
];

export const flowBars = [
  { name: "US military 2025", value: 954, fill: "#ffd27a" },
  { name: "Four-firm capex, mid", value: 730, fill: "#9af6ff" },
  { name: "Nvidia FY26 revenue", value: 216, fill: "#ff8ad4" },
  { name: "UK military 2025", value: 89, fill: "#ffd27a" },
  { name: "Australia military 2025", value: 35, fill: "#ffd27a" },
  { name: "Singapore military 2025", value: 17, fill: "#ffd27a" },
];

export const mechanisms: {
  id: string;
  title: string;
  stance: "Evidence" | "Inference" | "Speculation";
  body: string;
}[] = [
  {
    id: "mech-infra",
    title: "Infrastructure the state rents",
    stance: "Evidence",
    body: "Cloud regions, launch, and satellite internet are already public functions run by contractors. Ukraine’s forces use Starlink and a militarised Starshield service bought through US Space Force contracts. On 14 October 2026 a speed cap above about 160 km/h disrupted drone operations; service was reported restored by 24 October. Kyiv, the White House, the State Department and SpaceX did not give one account of who ordered the cap. The network was not Ukrainian. That is the dependency, observed, before any claim about AGI.",
  },
  {
    id: "mech-customer",
    title: "The state as dependent customer",
    stance: "Inference",
    body: "Once a ministry’s mail, maps, models and battlefield communications sit on one vendor’s contract, switching costs do the work that sovereignty language cannot. Procurement can still set terms — security standards, data residency, audit rights. It cannot invent a second launch provider or a second advanced-chip supply on a political timetable. Dependence is a spectrum. Australia hosting Azure and AWS regions is not Ukraine depending on one constellation. The direction is the same.",
  },
  {
    id: "mech-tax",
    title: "A tax base built on wages",
    stance: "Evidence",
    body: "The ILO estimates the global labour income share of GDP at 52.4% in 2024, down from 53.0% in 2014. That is a slow erosion, not a collapse. Australia’s tax mix makes the next step sharper if the erosion speeds up: in 2023, OECD figures put taxes on personal income at 42.6% of Australian tax revenue and taxes on corporate income at 19.5%. Income and profits together were 62.1%. A shock that shifts surplus from wages to rents booked in another country hits the part of the budget that is already the largest.",
  },
  {
    id: "mech-capture",
    title: "Lobbying and private diplomacy",
    stance: "Inference",
    body: "Firms that spend on this scale hire the people who used to write the rules, and they negotiate with heads of government as counterparties. Microsoft’s 2026 announcements in Canberra and Bangkok were made with the prime minister in the room. That is ordinary for a strategic investment. It is also a channel that does not run through a legislature. Capture is not proven by a photograph. It is the hypothesis to test when the statute that emerges matches the vendor’s licensing preference and not the competition authority’s.",
  },
  {
    id: "mech-info",
    title: "Information and the feed",
    stance: "Inference",
    body: "The same conglomerates that train models also rank what people see. SpaceX’s 2026 listing folded xAI and X into a company that already flies Starlink. A platform that is the public square, the model, and the satellite is a private ministry of information whether or not it asks to be one. States answer with online-safety law, public broadcasters and classification. They rarely own a substitute feed.",
  },
  {
    id: "mech-talent",
    title: "Talent, towns, and charter zones",
    stance: "Speculation",
    body: "The historical analogues are real and easy to overdraw. The East India Company governed territory because a crown chartered it to. Standard Oil concentrated a fuel the state then broke up, in 1911. AT&T was a regulated monopoly and was split in 1984. None of those is a model lab. What repeats is the pattern: a firm becomes the infrastructure, then the political fight is about whether to regulate it, break it, or nationalise it. Company towns and charter cities are the speculative extension. They need land law, which still belongs to a state.",
  },
];

export const counterForces = [
  {
    title: "Already in use",
    body: "US export controls on advanced chips. Antitrust and European competition law against parts of this stack. Australia’s announced frontier-AI duties, not yet a commenced Act. The UK AI Security Institute, renamed from the AI Safety Institute on 14 February 2025, evaluates models it does not own. Procurement contracts with audit clauses. None of these has stopped the 2026 build.",
  },
  {
    title: "Proposed, not in force here",
    body: "A compute tax, a windfall tax on model rents, a ‘robot tax’, public compute as a utility, and nationalisation of a frontier lab. No country in this briefing has enacted a robot tax. Universal basic income remains a proposal, not an Australian program. Treating any of these as the likely answer is speculation. Treating them as the menu is the point.",
  },
  {
    title: "What public wealth can actually do",
    body: "Australia will not train the leading model. It can own the equity. Superannuation was A$4.77 trillion at 30 June 2026. The Future Fund stood at A$289.7 billion the same day, with drawdowns deferred to at least 2032–33. Global equity mandates already hold US technology. That is a hedge if labour’s share falls and profits rise. It is not a company-tax receipt if the profit is booked elsewhere, and it is not advice to concentrate a fund in one ticker.",
  },
];

export const postures: { id: Posture; label: string; hint: string }[] = [
  { id: "referee", label: "Referee", hint: "Antitrust, export rules, procurement. The firm stays private." },
  { id: "partner", label: "Partner", hint: "The state co-invests, buys, and defers. Fusion, if capability arrives." },
  { id: "client", label: "Client", hint: "The state rents and cannot switch. The firm sets the practical terms." },
  { id: "owner", label: "Owner", hint: "Nationalisation, public compute, or a state lab with the weights." },
];

export const worlds: {
  id: WorldId;
  name: string;
  line: string;
  body: string;
  eth: string;
  concentration: number;
  capability: number;
  posture: Posture;
}[] = [
  {
    id: "fusion",
    name: "Corporate-state fusion",
    line: "The leading firms and the leading states become one procurement system.",
    body: "Government is a shareholder, an anchor tenant and a regulator that does not want the tenant to leave. National security is the reason the contract is sole-source. Elections continue. The practical veto on a model’s availability sits in a joint committee that is half contractor. This is the East India Company analogy with a modern treasury: chartered power, not a coup.",
    eth: "Ethereum is tolerated as a settlement side-rail and starved as a rival governance system. Stablecoins are the contractor’s dollar, or a licensed bank’s. Public chains survive where they do not touch the mission stack.",
    concentration: 82,
    capability: 78,
    posture: "partner",
  },
  {
    id: "feudal",
    name: "Techno-feudal",
    line: "Users, workers and smaller states become tenants of a stack they do not vote on.",
    body: "A few firms own the models, the chips, the energy contracts and the distribution. Income arrives as a platform payment, a licence, or a stipend the firm can revise. States still have police and borders. They do not have a credible alternative computer. The word ‘feudal’ is an analogy for dependence and for taking rents off other people’s work. It is not a claim that a CEO is a lord, and it is not a forecast.",
    eth: "ETH is either captured — the firm runs the validators that matter and the stablecoin everyone uses — or irrelevant, because agents settle inside the firm’s ledger. Credible neutrality is a slogan if the agents, the identity and the app store are the same company.",
    concentration: 90,
    capability: 82,
    posture: "client",
  },
  {
    id: "national",
    name: "Nationalised AGI",
    line: "The state treats the model as it once treated the telegraph or the central bank.",
    body: "A crisis — a model used in a war, a labour shock that empties income tax, a single vendor refusing a lawful order — produces public ownership or a public utility obligation. Capability stays concentrated, because the machines are expensive. The owner changes. This path needs state capacity of the kind that can run a grid, not only write a strategy. Many states that would want it cannot operate it.",
    eth: "A state-owned model does not need a public chain, and may ban one. ETH’s role shrinks to whatever cross-border settlement the bloc still allows. Open weights, if they exist, are a security problem in this world, not a civil liberty.",
    concentration: 75,
    capability: 80,
    posture: "owner",
  },
  {
    id: "open",
    name: "Distributed and open",
    line: "Capable models exist in more than one pair of hands, and some of the surplus is ownable in small lots.",
    body: "Open weights, rival clouds and exportable chips keep a market. No single firm is the state. Labour’s share still falls if the machines do the work — competition among vendors does not by itself pay wages — but the rents are contestable and harder to park in one jurisdiction. This is the world in which a public chain is a useful institution rather than a hobby.",
    eth: "ETH is a candidate for the neutral cash and cap-table: agent payments, tokenised claims on compute, and organisations that are not a Delaware subsidiary of the lab. It only works if the chain stays credibly neutral, the fees stay payable, and a court somewhere will still enforce against a person when the code is abused.",
    concentration: 22,
    capability: 70,
    posture: "referee",
  },
];

export const ethColumns = [
  {
    title: "Counterweight",
    tone: "mint" as const,
    points: [
      "A public chain is not a company’s ledger. Settlement and a record of ownership can exist outside Microsoft, Amazon, or SpaceX, which is the property those firms cannot offer even when they offer a stablecoin.",
      "Agents that pay each other need a rail with a spending cap and a counterparty who is not their employer. Account abstraction and a dollar stablecoin on Ethereum are a live, flawed attempt. The USENIX 2026 paper is why ‘flawed’ stays in the sentence.",
      "Tokenised claims are a way for a super fund, a Future Fund, or a person to hold a slice of compute or a model’s revenue without a seat on a board in California. The plumbing is ahead of the product. The product is not, in 2026, how Australians save.",
      "A DAO is a coordination tool with a terrible voting record. It is still a way to own a shared computer without incorporating as a subsidiary of the lab. That is a narrow usefulness, and it is real.",
    ],
  },
  {
    title: "Amplifier",
    tone: "magenta" as const,
    points: [
      "If a few firms own the agents, they choose the rail. They can settle on Ethereum because it is convenient and still capture the customer, the data and the spread. Using ETH is not the same as being constrained by it.",
      "The stablecoin that wins can be issued by a bank, a fintech, or a platform inside the same conglomerate. GENIUS already points dollar stablecoins at Treasuries and permitted issuers. A big-tech coin, if one is allowed, deepens the firm rather than balancing it.",
      "Decentralised compute networks have not bid the hyperscalers’ 2026 capex down. Training at the frontier is a power-and-chip problem. A token does not smelt a GPU.",
      "Credible neutrality fails if the stake, the clients, or the client software concentrate. A chain whose economic majority sits inside the same three custodians as the stock market is a database with extra steps.",
    ],
  },
];

export const ethVerdict =
  "On the 2026 evidence Ethereum is a possible constraint and a possible tool, and it is not yet either at the scale of this capex. It becomes a counterweight only in the distributed world, and only for settlement, ownership and exit — not for energy, chips, or the vote. It becomes an amplifier if the firms that own the agents also become the issuers, the custodians and the governors of the chain. Both are open. Pretending the protocol has already chosen is marketing.";
