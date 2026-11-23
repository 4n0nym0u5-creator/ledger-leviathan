import type { ScenarioId } from "../lib/scenarioModel.ts";

export type ScenarioEssay = {
  id: ScenarioId;
  name: string;
  line: string;
  path: string;
  how: string[];
  fails: string;
  watch: string;
};

export const essays: ScenarioEssay[] = [
  {
    id: "absorb",
    name: "State Absorbs",
    line: "Governments co-opt the rails and put the agents to work inside the perimeter.",
    path: "Stablecoins become a regulated dollar product. Tokenised deposits and, in places, a wholesale CBDC do the settlement work that crypto marketing claimed for itself. Exchanges and custodians hold AFSL-style licences or their local equivalent. AI agents draft, reconcile and monitor inside banks, the ATO, insurers and large firms, with a named senior manager still on the hook. Self-custody stays legal and culturally loud, and economically small next to super, deposits and wages.",
    how: [
      "Licensing is enforced against custodians and fiat edges, and the major venues stay onshore rather than geofencing the country away.",
      "Banks ship tokenised deposits that are good enough for treasurers, so open stablecoins do not become the default business rail.",
      "Blocs still share sanctions lists and tax information. Fragmentation stays a rivalry, not a split stack.",
      "AI is capable, and procurement eventually absorbs it. The state gets more legible, not weaker.",
    ],
    fails:
      "If enforcement is theatrical — acts passed, no licences processed, banks quietly debanking the sector — activity moves to venues the state cannot see, and this scenario decays into a messy parallel system. Absorption requires engineers and supervisors, not only ministers.",
    watch:
      "AFSL applications that are actually decided; MAS issuing only a short list of stablecoin licences, as its consultation said it expected; GENIUS rulemaking that offshore issuers comply with or exit; agent payments that clear through licensed firms.",
  },
  {
    id: "parallel",
    name: "Network States & Parallel Systems",
    line: "A second stack settles, pays and organises, without becoming a country.",
    path: "Regulated finance continues for mortgages, super and payroll. Beside it, a meaningful layer of stablecoin settlement and agent-to-agent payment serves cross-border trade, online services and people who do not trust local banks. ‘Network state’ is the slogan. The substance is narrower: clubs, companies and protocols with money and membership, still dependent on some state’s fibre, courts and food. A few charter-city or special-zone experiments matter as policy labs. They do not field a navy.",
    how: [
      "Open crypto use rises after licensing, instead of being domesticated by it.",
      "Agents pay for APIs, ads and compute in stablecoins as a normal business practice, not a demo.",
      "Geopolitics blocks a single travel-rule and sanctions regime, so corridors appear where compliance is optional.",
      "States are slow to offer a public alternative that treasurers prefer.",
    ],
    fails:
      "Parallel systems still need an on-ramp, a cloud bill and a legal wrapper the moment they touch staff, customers or land. A crisis — a stablecoin break, a facilitator hack of the kind USENIX already sketched, a sanctions scandal — sends volume back to banks. Exit is a fair-weather strategy.",
    watch:
      "Self-custody and on-chain settlement growing as a share of cross-border SME trade; more than one jurisdiction openly competing to be the place that will not follow the travel rule; agent payment volume that is not just exchange wash trading.",
  },
  {
    id: "fortress",
    name: "Digital Authoritarian Fortress",
    line: "Blocs treat compute, identity and money as security infrastructure.",
    path: "AI is licensed, logged and aimed at administration and security. Identity is device-bound. Money inside the bloc is a supervised pipe: a CBDC or a permitted stablecoin with holding limits and a kill switch available, whether or not it is used every day. Open wallets and privacy tools are pushed out of app stores. Cross-border model access is limited by chip export rules, cloud regions and procurement bans. Liberal democracies can build a softer version of the same fortress without calling it that: safety duties, client-side scanning, and banking exclusion.",
    how: [
      "AI becomes good enough to review everyone, not just to draft emails.",
      "Fragmentation gives each bloc a reason to stop recognising the other’s identity and money.",
      "State capacity is high. The laws are implemented in the switch, not only in the gazette.",
      "Open crypto is treated as a sanctions and capital-flight problem and squeezed to the edge.",
    ],
    fails:
      "Fortresses are expensive and they leak through travel, dual nationals, and any firm that needs foreign customers. A democratic fortress also faces courts. The Tornado Cash delisting is a reminder that some legal systems will not call immutable code ‘property’, even while they jail or fine the people who run a business around it.",
    watch:
      "Retail CBDCs with programmability used for control, not wholesale efficiency pilots like Acacia; mandatory client-side scanning; app-store removal of self-custody in major democracies; chip and cloud rules that actually split model access.",
  },
  {
    id: "hybrid",
    name: "Hybrid Pluralism",
    line: "No stack wins. The boring middle is the live one.",
    path: "Banks issue tokenised deposits. A short list of regulated stablecoins handles part of cross-border and on-chain settlement. Agents work inside spending limits, and a human or a company is still the legal person when money moves. Self-custody remains a real subculture and a real tool for dissidents, treasurers in weak-currency countries, and a minority of investors. Courts keep enforcing against people. Published code is mostly left alone. Welfare and schools creak under the labour shock and do not collapse. This is not a utopia. It is a pile of compromises that all remain visible at once.",
    how: [
      "AI improves fast enough to change work, and not so fast that institutions cannot rewrite job design, tax and professional duty.",
      "Crypto is large enough to regulate and too useful to ban, and not large enough to replace deposits.",
      "Regulation is strict at the consumer edge and looser for experiments with caps, the way Project Guardian, Project Acacia and TouristDigiPay already work.",
      "Rivalry is real — chips, clouds, standards — without a clean break into non-interoperable blocs.",
    ],
    fails:
      "The middle is unstable if one driver runs away. A sudden capability jump, a major sanction-evasion scandal, or a great-power split in chip supply can tip the same institutions toward absorption, a parallel grey market, or a fortress. Hybrid pluralism is a corridor, not a law of history.",
    watch:
      "Sandboxes that graduate into ordinary licences; open and closed models both widely used; no single bloc controlling chips, clouds and app stores; professional sign-off still meaning something in law, medicine and finance.",
  },
];

export const modelNote =
  "This is a toy weighting, not a probability and not a forecast. Each scenario has five transparent terms. Hybrid scores how close the sliders sit to a ‘governed but not closed’ band. The percentages are shares of the combined score, forced to add to 100. A margin under 5 points is called contested on purpose: false precision is the failure mode of this kind of widget.";
