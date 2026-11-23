import type { ScenarioId } from "../lib/scenarioModel.ts";

export type Signal = {
  id: string;
  scenario: ScenarioId;
  title: string;
  reading: string;
  ifItMoves: string;
};

export const signals: Signal[] = [
  {
    id: "sig-licences",
    scenario: "absorb",
    title: "Licences are decided, not only legislated",
    reading:
      "Late 2026: Australia’s platform regime is enacted and not yet commenced. The UK’s starts 25 October 2027. Singapore already licenses the firms that face its residents and is consulting on a short stablecoin list. The US has a stablecoin statute and no market-structure statute.",
    ifItMoves:
      "Absorption strengthens when applications are approved or refused in volume and the large venues stay, under licence. It weakens if the Acts sit there while business geofences the country or moves to firms the regulator will not name.",
  },
  {
    id: "sig-deposits",
    scenario: "absorb",
    title: "Tokenised deposits outcompete open stablecoins for treasurers",
    reading:
      "Project Acacia and Project Guardian are wholesale experiments. Bank deposit tokens are not yet how an Australian SME pays a supplier. Dollar stablecoins are how parts of crypto already settle.",
    ifItMoves:
      "If corporate treasurers prefer a bank token because of hours, atomic settlement and a balance sheet they understand, the open rail stays a satellite. If they prefer USDT because the bank product never arrives, you are not in absorption.",
  },
  {
    id: "sig-genius-rules",
    scenario: "absorb",
    title: "GENIUS rulemaking bites offshore issuers",
    reading:
      "The Act is law. The detailed capital, liquidity and AML rules are the part that decides whether the perimeter is a logo or a constraint. The yield-at-the-exchange question is unresolved in the statute.",
    ifItMoves:
      "Compliance, or a clean exit from US persons, is absorption. A large offshore float that US venues still distribute, plus exchange ‘rewards’ that mimic interest, is the gap staying open.",
  },
  {
    id: "sig-self-custody",
    scenario: "parallel",
    title: "Self-custody share rises after licensing, not before it",
    reading:
      "Most economic crypto value that touches ordinary people still passes a custodial venue at least once. Self-custody is real and, in rich countries, a minority habit.",
    ifItMoves:
      "Parallel systems strengthen if, once the licensed venues exist, a growing share of settlement never returns to them. A bull market inside a licensed exchange is not that signal.",
  },
  {
    id: "sig-agent-pay",
    scenario: "parallel",
    title: "Agent payments that are not a demo",
    reading:
      "x402 and agent wallets are live. A 2026 USENIX paper found serious facilitator bugs and measured a real, still early, seller and buyer population. Coinbase’s ‘50 million transactions’ is a company claim.",
    ifItMoves:
      "Watch the share of API and cloud spend settled by agents under a cap, at named firms, versus a slide at a conference. Growth plus repeated fraud losses tells you the rail is real and not yet a public utility.",
  },
  {
    id: "sig-corridor",
    scenario: "parallel",
    title: "A jurisdiction competes by not following the travel rule",
    reading:
      "No country in this briefing is that jurisdiction. Thailand’s sandbox converts to baht and involves AMLO. Singapore has raised the bar for offshore-only firms. The FATF travel-rule standard is the thing a grey hub would have to reject in public.",
    ifItMoves:
      "One credible financial centre marketing itself as the non-reporting venue would be a stronger parallel-system signal than any price. Do not misread a tourism QR pilot as that signal.",
  },
  {
    id: "sig-retail-cbdc",
    scenario: "fortress",
    title: "Retail digital currency with a control surface",
    reading:
      "Australia’s live work is wholesale and explicitly not a decision to issue a retail CBDC. Several other countries have retail pilots. Holding limits and offline design can be about bank disintermediation and resilience. Programmability aimed at what you may buy is a different product.",
    ifItMoves:
      "A retail instrument that can expire, geofence, or block categories of spend, used that way in normal times, is fortress behaviour. A wholesale settlement token used by banks is not.",
  },
  {
    id: "sig-appstores",
    scenario: "fortress",
    title: "App stores drop self-custody and privacy tools in open countries",
    reading:
      "Distribution is already a chokepoint. Removal has been episodic, usually under sanctions or fraud rules. It is not yet a general ban on wallets in Australia, the US or the UK.",
    ifItMoves:
      "A standing ban on non-custodial wallets or privacy-preserving messaging, in democracies, is the soft fortress. It does not need a retail CBDC to work.",
  },
  {
    id: "sig-chips",
    scenario: "fortress",
    title: "Chip and cloud rules split who can call a frontier model",
    reading:
      "US export controls on advanced chips are already policy. Allied clouds still interoperate. Most Australian firms can call the major models.",
    ifItMoves:
      "Fortress pressure rises when a normal firm in a US-allied country cannot legally use a leading model, or when China-aligned and US-aligned stacks stop accepting each other’s identity and payments. Rivalry is not yet that split.",
  },
  {
    id: "sig-identity",
    scenario: "fortress",
    title: "Internet access bound to a state identity document",
    reading:
      "SIM registration, digital ID for government services, and bank KYC are normal. A general duty to present a passport to read or publish is not the Australian, US or UK rule.",
    ifItMoves:
      "Mandatory, real-name, device-attested access for ordinary publishing is the information-control version of this scenario. Age checks on a narrow set of sites are not the same thing. Do not flatten them.",
  },
  {
    id: "sig-sandboxes",
    scenario: "hybrid",
    title: "Sandboxes graduate, and the failures get shut",
    reading:
      "Project Guardian, Project Acacia and TouristDigiPay are bounded tests with regulators in the room. That is the hybrid method. It is only real if successful pieces become ordinary licences and abusive pieces end.",
    ifItMoves:
      "Graduation plus closure is pluralism. Endless pilots with no licence, or a pilot that continues after a laundering failure, means the word ‘sandbox’ is doing public relations.",
  },
  {
    id: "sig-models-coexist",
    scenario: "hybrid",
    title: "Open and closed models both remain widely usable",
    reading:
      "In 2026 a developer can call a frontier API and can also run a smaller open model. Export controls nibble at the top. They have not produced one legal model for allies and none for anyone else.",
    ifItMoves:
      "Hybrid holds while both paths exist and serious work can move between them. A world with only one licensed model provider, or only unpaid open weights and no support, is a different political economy.",
  },
  {
    id: "sig-signoff",
    scenario: "hybrid",
    title: "Professional sign-off still attaches to a person",
    reading:
      "The FCA’s Senior Managers regime, MAS’s AI guidelines and Australia’s AFSL duties all assume a human or a firm is accountable. Courts have not accepted ‘the model did it’ as a complete answer.",
    ifItMoves:
      "Hybrid holds while a named person still signs audits, financial advice, prescriptions and court documents. It slips if insurers and statutes start treating the vendor as the only defendant and the practitioner as a bystander.",
  },
  {
    id: "sig-courts",
    scenario: "hybrid",
    title: "Courts punish the business and leave the protocol",
    reading:
      "The Tornado Cash sequence is the current template: the Fifth Circuit rejected sanctioning immutable contracts as property, Treasury delisted, and a criminal case against a developer continued. That is an uncomfortable distinction. It is also a rule of law.",
    ifItMoves:
      "If that distinction holds in more than one jurisdiction, parallel code can exist while harmful businesses stay chargeable. If legislatures close the distinction by making publication itself the offence, the fortress score should rise.",
  },
];

export const doNotWatch = [
  "Token prices. They move for reasons that do not tell you which scenario is forming.",
  "A minister’s adjective. ‘World-leading’ and ‘crackdown’ have described the same bill.",
  "A demo of an agent buying a coffee. Look for repeat spend, a legal entity, and a loss when the payment bugs hit.",
  "Follower counts of anyone selling a network state. Look for who provides the water, the court and the fibre.",
];
