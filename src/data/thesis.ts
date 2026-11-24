export type Epistemic = "Evidence" | "Inference" | "Speculation";

export type StateFunction = {
  id: string;
  title: string;
  hint: string;
  stateRole: string;
  pressure: string;
  evidenced: string;
  speculative: string;
  counter: string;
};

export const thesisLead = {
  claim:
    "Ethereum and AI do not, on the 2026 evidence, replace the state. They pressure the plumbing: who settles money, who can be identified, and who does the first draft of cognitive work. The state answers at the chokepoints it still owns — banks, chips, clouds, app stores, courts, and the power to name a legal person.",
  distinguish:
    "Crypto is mostly a monetary and contracting technology. AI is a labour, administration, and belief technology. They compound where an agent can earn, pay, and obscure who is responsible. They do not, by themselves, fund a hospital or decide a custody dispute.",
};

export const stateFunctions: StateFunction[] = [
  {
    id: "thesis-money",
    title: "Monetary sovereignty",
    hint: "Unit of account, lender of last resort",
    stateRole:
      "A state monopolises legal tender, backstops the banking system, and decides the unit in which taxes, wages and most debts are due. In Australia that unit is the dollar, and the Reserve Bank remains the settlement asset for the financial system.",
    pressure:
      "Open networks let dollar liabilities move outside bank hours and, sometimes, outside the banks. Smart contracts can escrow, margin and pay without a correspondent bank in the middle. An agent with a wallet can do that continuously.",
    evidenced:
      "The pressure is real and, so far, dollar-shaped. On 23 November 2026 DefiLlama recorded about US$281 billion of stablecoins, led by USDT (about US$175 billion) and USDC (about US$69 billion). Roughly US$129 billion sat on Ethereum. These are mostly claims on dollar assets, not a new unit of account. The GENIUS Act (Public Law 119-27, signed 18 July 2025) answers by allowing only permitted issuers, with one-to-one reserves in cash, insured deposits, short-dated Treasuries and similar assets, plus Bank Secrecy Act duties. Australia’s Project Acacia, the RBA and DFCRC wholesale tokenisation study, tested a pilot wholesale CBDC alongside tokenised deposits and stablecoins and still framed the system as two-tier: central bank money and commercial money. There is no Australian decision to issue a retail CBDC.",
    speculative:
      "A non-dollar stablecoin, or a private token, becoming the unit in which Australian wages, tax and mortgages are denominated. Nothing in the 2026 data shows that. ETH is collateral and gas, not a currency the ATO will assess you in.",
    counter:
      "Reserves, redemption at par, bank licensing and the on-ramp. GENIUS bars issuers from paying interest to holders; the Congressional Research Service notes the statute does not clearly stop exchanges paying yield, which is a live fight, not a finished one. If households keep spending balances at banks, monetary sovereignty barely notices. It notices if treasury and trade settlement migrate and the central bank only sees the edge.",
  },
  {
    id: "thesis-tax",
    title: "Taxation",
    hint: "Information, not just the statute",
    stateRole:
      "Tax power is the power to define income and to see it. Australia’s system is built on PAYG, GST, capital gains, and a superannuation regime that withholds and reports. The ATO is good at legible income.",
    pressure:
      "Self-custody and privacy tools weaken third-party reporting. Agents that invoice, subscribe and get paid in stablecoins multiply small cross-border flows. If AI shifts income from wages to intangible, hard-to-locate receipts, the wage base thins while land and consumption stay visible.",
    evidenced:
      "Public ledgers are not a tax haven by default. Once an address is tied to a person, the history is more legible than cash. The ATO already treats crypto as a CGT asset. The OECD’s Crypto-Asset Reporting Framework exists precisely because exchanges can be made to report. Thailand’s choice is instructive in the other direction: a personal income tax exemption on gains from transfers through SEC-licensed operators, from 1 January 2025 to 31 December 2029. That is a state using tax to pull activity onshore, not a state that has lost the power to tax.",
    speculative:
      "Autonomous agents earning with no human who can be assessed. Doctrine can deem the deployer, the controller, or the beneficiary the taxpayer. The hard problem is detection and collection, and only if the activity never touches a licensed venue, a bank, or a customer inside the jurisdiction.",
    counter:
      "Licensed venues, the travel rule between regulated providers, and Australia’s habit of taxing what is easy to see: wages, super, property and GST. A solo founder paid by Australian clients into an AUD account is not in a new tax universe because the tooling got smarter.",
  },
  {
    id: "thesis-capital",
    title: "Capital controls",
    hint: "Speed and the set of pipes",
    stateRole:
      "Some states cap how money leaves. Australia, Singapore, the United States and the United Kingdom do not run classic capital controls. They police sanctions, crime proceeds and, in places, retail consumer risk. Thailand allows licensed trading and restricts crypto as domestic payment.",
    pressure:
      "Where the capital account is closed, crypto is a leak: a way to move value when banks will not. Where it is open, crypto changes speed and which intermediary sits in the middle. Stablecoins can settle a trade on a Sunday without a correspondent bank that has a compliance team awake.",
    evidenced:
      "The pattern is already visible at the edges, not in Australian super. People in high-inflation or controlled-currency economies have used dollar stablecoins as a store of value. Rich, open economies have mostly seen crypto as an investment and a niche rail. Thailand’s answer is the design to study: digital assets are not legal tender, licensed operators have been barred since 2022 from offering them as a means of payment, and the TouristDigiPay sandbox converts a tourist’s crypto into baht before anything is spent.",
    speculative:
      "Australian households routing salaries around the banking system at scale. That would require employers, landlords and the ATO to accept it. Culture and debt contracts, which are written in dollars and enforced by Australian courts, are the binding constraint.",
    counter:
      "Banks can still refuse the on-ramp and the off-ramp. App stores can drop wallets. Sanctions lists still bind US persons and anyone who needs dollar clearing. Controls fail in gaps. They do not fail everywhere at once.",
  },
  {
    id: "thesis-rules",
    title: "Regulation",
    hint: "The perimeter is the business",
    stateRole:
      "States license the firms that touch the public: exchanges, custodians, advisers, payment firms. They are weaker at licensing a published smart contract with no office.",
    pressure:
      "A DEX, a self-custodied wallet, or an agent that calls a contract can offer a service that looks like a financial product without looking like a firm. DAOs try to spread authority so there is no officer to serve.",
    evidenced:
      "2025–27 is a licensing wave, not a vacuum. Australia’s Corporations Amendment (Digital Assets Framework) Act 2026 passed on 1 April 2026, received assent on 8 April 2026, and ASIC says it commences on 9 April 2027. It pulls digital asset platforms and tokenised custody platforms into the AFSL regime. Treasury described an exemption for smaller platforms holding under $5,000 per customer and facilitating under $10 million a year. Singapore already licenses digital payment token services; from 30 June 2025, providers serving only customers outside Singapore need a licence that MAS says it will generally not grant. The UK’s Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2026 were made on 4 February 2026, with the full regime expected on 25 October 2027. The US licensed payment stablecoins in GENIUS and, as of late November 2026, had not passed the broader CLARITY market-structure bill: the Senate failed to invoke cloture on 15 September 2026, 49–50.",
    speculative:
      "An AI-run DAO with no identifiable controller, doing business with Australians, that courts treat as nobody’s problem. Australian law looks for who carries on the business and who possesses assets for a client. ‘The code did it’ is a design slogan. It is not yet a defence.",
    counter:
      "The durable perimeter is custody, solicitation, fiat edges and consumer promises. Front ends, domains, founders and fee-collecting multisigs remain people. INFO 225 already pulls many digital-asset arrangements into existing financial-product law. April 2027 is not the start of regulation. It is a clearer statute for platforms.",
  },
  {
    id: "thesis-watch",
    title: "Surveillance",
    hint: "Cash was the private rail",
    stateRole:
      "States want to see flows that finance crime, sanctions evasion and tax fraud, and they are increasingly willing to use AI to do it. They also run the identity systems that make a bank account, a SIM and a tax file number connect.",
    pressure:
      "Zero-knowledge proofs can show a fact — not sanctioned, over 18, a valid vote — without showing the underlying data. Mixers and privacy pools try to break the link between deposit and withdrawal. An agent can move funds in sizes and hours that defeat manual review.",
    evidenced:
      "Public chains are surveillance-friendly once an address is clustered. That is why enforcement agencies use chain analytics as routine tooling. Tornado Cash is the careful case, not a morality play. OFAC sanctioned it in 2022, citing use by North Korean hackers among a claimed more than US$7 billion in total volume — total volume, not a finding that every dollar was illicit. On 26 November 2024 the Fifth Circuit held that the immutable contracts in the administrative record were not ‘property’ under IEEPA. Treasury delisted Tornado Cash on 21 March 2025. Separately, a New York jury on 6 August 2025 convicted developer Roman Storm of conspiracy to operate an unlicensed money-transmitting business, acquitted him on the sanctions conspiracy, and hung on money laundering. A post-trial motion was still pending in 2026, with retrial on the unresolved count adjourned to 26 April 2027. The lesson is narrow: immutable code is hard to sanction as property; people and businesses are not hard to charge.",
    speculative:
      "Zero-knowledge identity that is both private and acceptable to AUSTRAC, MAS and FinCEN at consumer scale. The cryptography is further along than the governance. Ethereum’s live zero-knowledge use is mostly rollup scaling, which does not hide balances from the sequencer in the way a privacy system would.",
    counter:
      "KYC venues, the FATF travel rule between regulated providers, device attestation, and the fact that AI makes tracing cheaper at the same time as it makes privacy tools easier to use. States will also point AI at tax, welfare and policing. The same capability cuts both ways, and the state starts with the data.",
  },
  {
    id: "thesis-courts",
    title: "Courts and contracts",
    hint: "Code executes. Courts interpret.",
    stateRole:
      "Courts handle ambiguity, fraud, duress, insolvency fairness, employment and anything a statute says cannot be contracted away. Most of commercial life is residual, not a clean if-this-then-that.",
    pressure:
      "A smart contract can settle collateral without waiting for a lawyer. Account abstraction — ERC-4337, and the delegation features in Ethereum’s 2025 Pectra upgrade — lets a wallet give an agent a session key with a spending cap. That is a real change in how a contract can be performed.",
    evidenced:
      "Atomic settlement is the honest win. Project Acacia’s use cases, across fixed income, funds, repos and other wholesale assets, pointed at shorter cycles and delivery-versus-payment, not at replacing the Supreme Court of New South Wales. A decade of DAOs has produced treasuries, voter apathy, token plutocracy and exploits. Legal wrappers exist in a few US states and other small jurisdictions. Australia has no general DAO statute. If the arrangement is a managed investment or a financial service, the Corporations Act still has a view.",
    speculative:
      "Machine-speed contracting for the ordinary economy, with AI arbitrators whose awards Australian courts defer to. Plausible for digital services under a cap. Not plausible for a building defect, a redundancy, or a family provision claim.",
    counter:
      "Statute beats a self-executing clause. Unfair terms, consumer law, sanctions and insolvency rules can undo the legal effect even when the chain has already moved tokens. Enforcing a judgement against a self-custodied key still means finding a person or an asset inside the jurisdiction. That is an old problem with a new lock.",
  },
  {
    id: "thesis-identity",
    title: "Identity",
    hint: "Keys are not citizenship",
    stateRole:
      "The state remains the root of foundational identity: passport, birth register, tax file number, and the Digital ID Act 2024 framework behind services such as myGov. Banks and telcos are obliged to know who they are dealing with.",
    pressure:
      "Wallets and verifiable credentials let a person carry a proof across apps without a single login company. Proof-of-personhood projects try to show uniqueness without showing a passport. Agents need a narrower thing: a key that can spend, with a human still accountable when it goes wrong.",
    evidenced:
      "High-value acts still snap back to state identity. You do not open an AFSL, a bank account, or a lease with a raw Ethereum address. Singapore’s Singpass and Australia’s digital ID work are the state modernising the root, not vacating it. Biometric proof-of-personhood has shown both demand and immediate regulatory conflict wherever it tried to scan a population.",
    speculative:
      "A widely accepted civil identity that is independent of any state and still good enough for credit, voting and welfare. Credit needs recourse. Voting needs a polity. Welfare needs a budget. A key has none of those.",
    counter:
      "SIM registration, device attestation, app-store accounts and director identification keep binding keys to people for anything that matters to the tax office or a plaintiff. An agent wallet with a spending limit is a tool. It is not a second passport.",
  },
  {
    id: "thesis-services",
    title: "Public services",
    hint: "Medicare is not a protocol",
    stateRole:
      "Tax pays for health, pensions, defence, courts and the unglamorous systems that fail in public when they fail. Crypto does not provide Medicare or the Age Pension. AI might make parts of service delivery cheaper, and it might automate unfair exclusion.",
    pressure:
      "The serious pressure is fiscal and administrative. If the wage base erodes, or if benefit systems start denying people at machine speed, legitimacy suffers even though the protocol layer is irrelevant. Network-state rhetoric — charter cities, tokenised membership, Balaji Srinivasan’s ‘network state’ — offers a story in which exit replaces reform.",
    evidenced:
      "No network-state experiment currently performs the functions of a mid-sized democracy. The budgets of NSW Health or Services Australia dwarf DAO treasuries. DeFi value locked on Ethereum was about US$37 billion on 23 November 2026. Australian superannuation alone was A$4.77 trillion at 30 June 2026. Scale is a fact, not a vibe. AI pilots in government are about casework drafts, fraud flags and call centres. They are implementation problems: procurement, accountability, appeal rights.",
    speculative:
      "A credible private substitute for universal health or retirement in Australia within twenty years, funded by tokens. Private insurance and super already exist inside statute. They are not an exit from the state. They are products the state mandates, taxes and backstops.",
    counter:
      "States that deploy AI well become more capable, not less: faster claims, tighter fraud control, worse outcomes only if appeal and audit are stripped out. Australia’s risk is a bad implementation, not a protocol that abolishes the budget.",
  },
  {
    id: "thesis-info",
    title: "Information control",
    hint: "AI moves belief. Crypto moves money.",
    stateRole:
      "States and platforms shape what most people see, through broadcasting law, online-safety duties, school curriculum, and the practical power of a handful of feeds. Shutting a whole population off the internet is blunt and incomplete.",
    pressure:
      "Synthetic media makes provenance the scarce good. Censorship-resistant publishing exists and has a small audience. LEO satellite constellations complicate a national shutdown because the antenna talks to a satellite, not only to a local ISP. Crypto’s role is mostly funding and payment, not the feed itself.",
    evidenced:
      "The audience still lives on a few platforms. Those companies have offices, advertisers, app-store accounts and, in some countries, local staff who can be pressured. Satellite operators are companies too: they geofence, they take spectrum licences, and they have complied with state demands in conflict zones even while making total blackouts harder. The UK Online Safety Act already gives Ofcom a role over online services, including AI chatbots. Australia’s eSafety regime is the local version of the same instinct: regulate the service, not the physics.",
    speculative:
      "A public sphere that routes around both states and platforms because content is on a chain and access is via satellite. Storage and access are not attention. Attention is still aggregated by whoever ranks the feed. That is an editorial power, and it will belong to someone.",
    counter:
      "Payment processors, app stores, ISPs, cloud hosts and satellite licences remain levers. Provenance standards such as C2PA help institutions. They will not settle an argument in a group chat. The information shock of this decade is AI, not Ethereum.",
  },
];

export const synthesis = [
  "The evidenced contest is over chokepoints. States are licensing custodians and stablecoin issuers, not ‘banning blockchain’. The United States folded payment stablecoins into a banking-style perimeter and then failed, at least through the September 2026 cloture vote, to legislate the rest of market structure. That is absorption of the piece that touches the dollar, and a fight over everything else.",
  "AI changes the payoff. A wallet that a person uses on weekends is a hobby next to super and a mortgage. An agent that can buy compute, data and ads, all week, in sizes too small to invoice, is a new kind of economic actor sitting on top of those rails. The USENIX Security 2026 study of the x402 payment flow — HTTP 402, then a stablecoin payment, often on Base — found authorisation flaws in all 15 major facilitators it tested. The pipes are already carrying agent payments, and they are already a fraud surface.",
  "What would change the thesis: a non-dollar unit of account in ordinary Australian contracts; licensed venues losing, rather than gaining, share of stablecoin float; courts refusing to name a controller; or a retail CBDC used as a programmable restriction on spending, not as wholesale plumbing. None of those is the 2026 baseline.",
  "A different challenge is already measured, and it is not a protocol. Four hyperscalers’ 2026 capex guidance is on the order of US$730 billion. That pressures the state as a customer, a host and a tax authority. It is the subject of the next section. Ethereum matters there only if the agents settle outside those firms’ own ledgers.",
];
