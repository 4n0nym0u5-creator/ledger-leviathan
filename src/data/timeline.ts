export type Confidence = "High" | "Medium" | "Low";
export type Stance = "Observed" | "Scheduled" | "Inference" | "Speculation";
export type Domain = "Crypto" | "AI" | "State" | "Other";

export type Milestone = {
  id: string;
  domain: Domain;
  title: string;
  body: string;
  impact: string;
  confidence: Confidence;
  stance: Stance;
};

export type TimelineYear = {
  id: string;
  label: string;
  summary: string;
  items: Milestone[];
};

export const years: TimelineYear[] = [
  {
    id: "2026",
    label: "2026",
    summary:
      "The baseline year. Most of this column is statute, market structure and early agent payments. Treat it as the evidence the later years have to beat.",
    items: [
      {
        id: "y26-genius",
        domain: "State",
        title: "Dollar stablecoins get a US statute; market structure does not",
        body: "The GENIUS Act was signed on 18 July 2025. It limits US payment-stablecoin issuance to permitted issuers, requires one-to-one reserves, and applies anti-money-laundering duties. The broader CLARITY market-structure bill passed the House in July 2025 and then failed a Senate cloture vote on 15 September 2026, 49–50. As of 19 November 2026 it was not on the Senate’s immediate agenda.",
        impact:
          "The piece of crypto that touches the dollar is being absorbed. Tokens that are not stablecoins remain in a regulatory argument. That split matters more than a price chart.",
        confidence: "High",
        stance: "Observed",
      },
      {
        id: "y26-daf",
        domain: "State",
        title: "Australia legislates platforms, with commencement in 2027",
        body: "The Corporations Amendment (Digital Assets Framework) Act 2026 passed on 1 April 2026 and received assent on 8 April 2026. ASIC states it commences on 9 April 2027 and describes an 18-month implementation path: standards and guidance, then licence applications with transitional relief, then full supervision. Treasury’s design exempts smaller platforms under $5,000 per customer and $10 million in annual transactions.",
        impact:
          "If you hold client digital assets in Australia, the question is already ‘which licence’, not ‘whether the state has noticed’.",
        confidence: "High",
        stance: "Scheduled",
      },
      {
        id: "y26-ai-au",
        domain: "AI",
        title: "Australian AI guardrails are voluntary; a frontier law is announced",
        body: "Guidance for AI Adoption, published in October 2025, condenses the earlier voluntary standard into six practices. It does not create new legal duties. On 10 November 2026 the Prime Minister announced that mandatory safety and security duties for frontier AI companies would be legislated, enforced by a new targeted regulator working with the Australian AI Safety Institute. That was a policy announcement, not a commenced Act.",
        impact:
          "Ordinary deployers are still under existing law: privacy, consumer, discrimination, copyright, sector rules. Frontier developers are the intended new target.",
        confidence: "High",
        stance: "Observed",
      },
      {
        id: "y26-agents",
        domain: "Crypto",
        title: "Agent payments exist, and so do the bugs",
        body: "Coinbase’s x402 flow, announced in May 2025, uses HTTP 402 plus a stablecoin payment so software can pay for a request. In February 2026 Coinbase shipped agent wallets with spending limits and keys kept in a trusted execution environment, and said x402 had processed over 50 million transactions — a company figure, not an audit. A paper at USENIX Security 2026 found authorisation flaws in all 15 major facilitators it tested, used by over 60,000 sellers and 360,000 buyers in the study’s scope.",
        impact:
          "Machine-to-machine payment is no longer speculative. It is also not safe infrastructure. Do not point an unsupervised agent at a treasury.",
        confidence: "High",
        stance: "Observed",
      },
      {
        id: "y26-scale",
        domain: "Crypto",
        title: "Stablecoins are large. They are still small next to the state.",
        body: "About US$281 billion of stablecoins were recorded by DefiLlama on 23 November 2026, with about US$129 billion on Ethereum. Ethereum DeFi value locked was about US$37 billion. Australian superannuation was A$4.77 trillion at 30 June 2026, of which SMSFs were A$1.11 trillion.",
        impact:
          "Crypto can move markets and still be a rounding error in household wealth. Both facts are true. Arguments that ignore either one are selling something.",
        confidence: "High",
        stance: "Observed",
      },
      {
        id: "y26-hubs",
        domain: "State",
        title: "Singapore, the UK and Thailand write different perimeters",
        body: "Singapore’s MAS, from 30 June 2025, generally will not license digital-token providers who serve only overseas customers. Its September 2026 consultation proposes a selective ‘MAS-regulated stablecoin’ licence. The FCA published final cryptoasset rules on 30 June 2026 for a regime starting 25 October 2027, and says it will not write a separate AI rulebook. Thailand’s TouristDigiPay sandbox, announced in August 2025, lets foreign tourists convert crypto to baht and spend via QR. Thai nationals are out. Crypto is not the means of payment.",
        impact:
          "The live models are ‘license the venue’, ‘license the stablecoin’, and ‘convert back to fiat before the real economy’. None of them is laissez-faire.",
        confidence: "High",
        stance: "Observed",
      },
    ],
  },
  {
    id: "2030",
    label: "2030",
    summary:
      "A planning horizon, not a prophecy. These are the moves that follow if today’s statutes and roadmaps are implemented roughly on time, and if agent reliability improves without a break in the politics.",
    items: [
      {
        id: "y30-rails",
        domain: "Crypto",
        title: "Regulated stablecoins become a normal cross-border rail",
        body: "GENIUS-style rules, Singapore’s stablecoin licence, and the UK and Australian platform regimes should be in force, including the long Australian implementation tail. The plausible result is a short list of supervised dollar and, in some places, local-currency stablecoins used for treasury and platform payouts.",
        impact:
          "Faster settlement for firms that already wire money. Little change to how a Sydney salary lands, unless your clients are offshore and pay you as if you were an API.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y30-agents",
        domain: "AI",
        title: "Agents with caps become ordinary inside companies",
        body: "The 2026 pattern — session limits, allow-lists, a human owner — is the one that survives contact with insurers and regulators. Fully unsupervised agents remain a niche because liability has not been repealed. The FCA has already said senior managers stay accountable for AI. MAS AI guidelines, effective from October 2027, say the same thing in supervisory language.",
        impact:
          "A solo founder produces more. So does every competitor, and so does the client who used to pay for the first draft. The scarce work is the sign-off.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y30-pq",
        domain: "Other",
        title: "Post-quantum migration is a program, not a headline",
        body: "NIST finalised the first post-quantum standards in August 2024 (FIPS 203, 204 and 205) and its transition guidance points federal systems off quantum-vulnerable public-key algorithms by 2035, with deprecation earlier in the window. Ethereum’s own post-quantum group says a cryptographically relevant machine is not imminent, and that an L1 upgrade could be done around 2029 on their assessment, with the wider ecosystem taking longer. That date is their assessment, not a shipped upgrade.",
        impact:
          "The risk to Ethereum is stolen keys, not a rewritten history. Finalised blocks stay final. Anyone holding a visible high-value key has a migration problem that starts years before the machine exists.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y30-cbdc",
        domain: "State",
        title: "Wholesale tokenisation matters more than retail CBDCs in open economies",
        body: "Project Acacia’s finding was that tokenised assets plus digital money can tighten wholesale settlement, and that a lot of the gain does not even require a new public token. Retail CBDCs remain politically hard in Australia, the US and the UK because deposits and card schemes already work and privacy fears are sticky.",
        impact:
          "Cheaper market plumbing is a productivity story. It is not a story about the government programming your grocery spend, unless a later design chooses that.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y30-robots",
        domain: "Other",
        title: "Humanoids are in sheds, not in most homes",
        body: "Factory and warehouse pilots are the honest 2030 use. General household robots need cheap hardware, reliable hands, and a liability regime. None of those is a software patch.",
        impact:
          "Pressure shows up first in logistics margins and some trades, not in a robot replacing a household. Professional services feel AI long before they feel a humanoid.",
        confidence: "Medium",
        stance: "Inference",
      },
    ],
  },
  {
    id: "2035",
    label: "2035",
    summary:
      "The first year in this briefing where the labour and cryptography questions can become structural. Confidence drops, and the scenario slider starts to matter more than the statute book.",
    items: [
      {
        id: "y35-work",
        domain: "AI",
        title: "Professional first drafts are agent-default, if reliability holds",
        body: "Code, bookkeeping, customer operations, and the opening memo in law and consulting are the exposed tasks. Judgement, client trust, and the regulated signature are not. This is conditional on capability, and on firms being willing to carry the liability. It is not a headcount forecast.",
        impact:
          "Sydney’s professional economy feels it as price pressure. Less ‘a robot took the job’, more ‘the client will not pay yesterday’s rate for a draft’.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y35-quantum",
        domain: "Other",
        title: "A cryptographically relevant quantum computer is a risk window, not a date",
        body: "Some engineering roadmaps put a machine that threatens elliptic-curve signatures in the early-to-mid 2030s. NIST’s disallowance horizon for vulnerable algorithms is 2035. Ethereum.org, citing a March 2026 Google Quantum AI estimate, puts breaking 256-bit curves near 1,200 logical qubits — far from today’s noisy physical devices. Harvest-now-decrypt-later attacks encrypted data. It does not let an attacker rewrite old Bitcoin or Ethereum history.",
        impact:
          "Banks, governments and chains either migrated high-value keys or they are gambling. For a holder, the action is key hygiene and a migration plan, not a change of politics.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y35-bio",
        domain: "Other",
        title: "More therapies, same prohibition on germline editing",
        body: "CRISPR therapies are already real for specific diseases, starting with sickle cell. By 2035 a longer list of somatic treatments is a reasonable inference. Germline editing and enhancement stay tightly restricted in Australia, the UK, the US and Singapore. Longevity clinics will market ahead of the trials. They already do.",
        impact:
          "Health systems face cost and access fights. States face dual-use screening. Neither is a crypto story, and both can dwarf it.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y35-media",
        domain: "AI",
        title: "Unsigned media is discounted in high-stakes settings",
        body: "Detection loses an arms race against generation. Institutions shift toward signed capture, witnessed records and C2PA-style provenance. Group chats do not. Elections and markets get more noisy at the margin; the institutions that adapt are the ones that stop treating a video as self-authenticating.",
        impact:
          "Trust becomes a procedure. That helps states and large firms more than it helps a person arguing in public.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y35-av",
        domain: "Other",
        title: "Autonomy diverges by country, because streets and insurers differ",
        body: "Driverless ride-hailing already exists in some US cities. Australia in 2026 does not have that deployment. By 2035 freight on defined routes is more plausible here than a robotaxi on a wet Sydney arterial. The constraint is regulation, mapping, and who pays when it fails.",
        impact:
          "A labour shock for driving jobs is geographically uneven. It is not a single global switch in 2035.",
        confidence: "Medium",
        stance: "Inference",
      },
    ],
  },
  {
    id: "2040",
    label: "2040",
    summary:
      "Scenario territory. The useful question is which state functions got stronger, and which tax bases got thinner. Point forecasts for 2040 are costume jewellery.",
    items: [
      {
        id: "y40-capacity",
        domain: "State",
        title: "State capacity splits",
        body: "Some governments run competent AI administration with appeal rights and audits. Others automate denial, or outsource judgement to a vendor they cannot inspect. The technology does not decide which. Procurement, administrative law and politics do.",
        impact:
          "Two countries with the same models can produce opposite governments. That is the fortress-versus-hybrid fork in institutional form.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y40-energy",
        domain: "Other",
        title: "Energy abundance is still a hope, not the Australian plan",
        body: "Advanced fission may be commercially real in some grids if current builds succeed. Fusion, on public roadmaps, is at best early plants, not cheap electrons everywhere. Australia’s material exposure is renewables, gas, transmission, and critical-minerals processing. A fusion miracle is not a strategy.",
        impact:
          "Cheap firm power would lower the cost of compute and desalination and would reorder geopolitics. Waiting for it is not an energy policy.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y40-bci",
        domain: "Other",
        title: "Brain-computer interfaces stay medical",
        body: "Implants that restore communication or movement for a small number of patients are the credible line from today’s human trials. Consumer thought-typing as a mass interface needs a safety record no 2026 trial has produced.",
        impact:
          "The state-power issue is medical regulation and inequality of access, plus a security problem if a device is networked. It is not a new electorate.",
        confidence: "Medium",
        stance: "Inference",
      },
      {
        id: "y40-money",
        domain: "Crypto",
        title: "Crypto is either boring infrastructure or a corridor product",
        body: "In the absorb and hybrid scenarios, the surviving pieces are tokenised deposits, a few stablecoins, and atomic settlement in wholesale markets. In the parallel scenario, a grey rail remains large in fragmented corridors. In the fortress scenario, the open rail is pushed outside the bloc. 2026 cannot tell you which label sticks.",
        impact:
          "The personal implication is the same until the branch is visible: do not build a life plan that requires self-custody to become the pension system.",
        confidence: "Low",
        stance: "Speculation",
      },
    ],
  },
  {
    id: "2050",
    label: "2050",
    summary:
      "Use this column as a set of conditionals. If you want a single picture of 2050, the slider section is the honest toy. This timeline will not pretend to be sharper than that.",
    items: [
      {
        id: "y50-tax",
        domain: "State",
        title: "Wage-only tax states have the harder problem",
        body: "If agents do a large share of cognitive work and energy is cheaper, states that can tax land, consumption and resource rents are more resilient than states that only tax wages. Australia is structurally in the first group. It is socially exposed in the second sense: a lot of status and mortgage service still depends on professional wages.",
        impact:
          "The intergenerational fight is about who owns the assets that throw off the surplus, not about who ‘adopted Web3’.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y50-oligopoly",
        domain: "AI",
        title: "Concentration is the risk that ages well",
        body: "Quantum, foundation models, advanced biotech and autonomous weapons each have a tendency to concentrate: capital, chips, data, regulation. A world in which three firms and two governments hold those levers is compatible with every scenario except a romantic reading of parallel systems. DAOs do not smelt chips.",
        impact:
          "The political question is antitrust, alliances and public capability. Exit to a wallet does not answer it.",
        confidence: "Low",
        stance: "Speculation",
      },
      {
        id: "y50-meaning",
        domain: "Other",
        title: "Meaning tracks work only if policy does nothing",
        body: "People do not need a job to have a life. They do need income, status and a reason to be needed. Those are institutional choices — wage subsidies, public work, professional duty, care economies — not properties of a model. Countries that treat the labour shock as a morality play will govern it worse than countries that treat it as a tax and education problem.",
        impact:
          "For someone mid-career in 2026, 2050 is about whether institutions bought time. The technology will not supply the purpose.",
        confidence: "Low",
        stance: "Speculation",
      },
    ],
  },
];
