import { useMemo, useState } from "react";
import {
  capexRows,
  capitalLead,
  counterForces,
  ethColumns,
  ethVerdict,
  flowBars,
  mechanisms,
  postures,
  worlds,
} from "../data/capital.ts";
import { evaluateCapital, type Posture, type WorldId } from "../lib/capitalModel.ts";
import { ChoiceList, Section, Tag } from "./ui.tsx";

const toneForStance = {
  Evidence: "cyan",
  Inference: "magenta",
  Speculation: "amber",
} as const;

export function Capital() {
  const [concentration, setConcentration] = useState(70);
  const [capability, setCapability] = useState(15);
  const [posture, setPosture] = useState<Posture>("referee");
  const [mechanism, setMechanism] = useState(mechanisms[0].id);
  const active = mechanisms.find((item) => item.id === mechanism) ?? mechanisms[0];
  const result = useMemo(
    () => evaluateCapital({ concentration, capability, posture }),
    [concentration, capability, posture],
  );
  const leading = worlds.find((world) => world.id === result.leader) ?? worlds[0];

  const applyWorld = (id: WorldId) => {
    const world = worlds.find((item) => item.id === id);
    if (!world) return;
    setConcentration(world.concentration);
    setCapability(world.capability);
    setPosture(world.posture);
  };

  return (
    <Section
      id="capital"
      index="02"
      kicker="Material capital"
      title="When the firm is the stack"
      lede="Could a few AI-centric companies accumulate enough capital to rival the state — and does Ethereum constrain them, or extend them? The figures are dated. The sliders are a toy."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <p className="text-lg text-text">{capitalLead.claim}</p>
          <p className="text-muted">{capitalLead.distinguish}</p>
        </div>
        <aside className="panel p-5">
          <p className="kicker">How this section is tagged</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <strong className="text-cyan">Evidence.</strong> Company guidance, a fund report, SIPRI, the ILO, the OECD.
            </li>
            <li>
              <strong className="text-magenta">Inference.</strong> What follows if those balance sheets keep compounding.
            </li>
            <li>
              <strong className="text-amber">Speculation.</strong> AGI regimes. The dials below are in this class on purpose.
            </li>
          </ul>
        </aside>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <figure className="panel p-4 sm:p-5">
          <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="kicker">Flows, not market caps</span>
            <span className="font-mono text-xs text-muted">US$ billions</span>
          </figcaption>
          <ul className="mt-4 space-y-3">
            {flowBars.map((bar) => (
              <li key={bar.name}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-text">{bar.name}</span>
                  <span className="font-mono text-cyan">{bar.value}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-panel-2" role="presentation">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${Math.max(1.5, (bar.value / 954) * 100)}%`, background: bar.fill }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-cyan" /> Company plan or revenue
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-amber" /> SIPRI military expenditure, 2025
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Australia and Singapore are short on purpose. The number is the reading; the bar is only the scale against
            US$954bn.
          </p>
        </figure>
        <div className="space-y-3 text-sm text-muted">
          <p>
            The midpoint of the four 2026 plans — Amazon about US$220bn, Alphabet US$200bn, Microsoft US$170bn, Meta
            US$140bn — is about <strong className="text-text">US$730 billion</strong>. The published ranges sum to
            roughly US$720–740 billion. The accounting is not identical: Amazon is cash capex net of incentives,
            Microsoft includes finance leases, Meta includes lease principal. None of them publishes a clean “AI only”
            line. Oracle’s separate forecast, US$90–95bn for its fiscal year ending May 2027, is not in the bar.
          </p>
          <p>
            Set next to the IMF’s October 2026 projections, that one-year plan is about a third of Australia’s GDP
            (US$2.11 trillion), about a sixth of the United Kingdom’s (US$4.27 trillion), and larger than the projected
            GDP of Singapore (US$668 billion) or Thailand (US$599 billion). SIPRI’s 2025 military expenditure was
            US$954 billion for the United States, US$89 billion for the UK, US$35.3 billion for Australia and US$17.4
            billion for Singapore. The four-firm plan is in the neighbourhood of three-quarters of the US defence
            figure, and about twenty times Australia’s.
          </p>
          <p>
            Nvidia’s own fiscal year, ended 25 January 2026, was US$215.9 billion of revenue and US$193.7 billion of
            that in the data centre. Its equity value on 23 November 2026 was about US$4.0 trillion. SpaceX listed on
            12 June 2026 at a US$1.78 trillion offer valuation, having absorbed xAI. Those are stocks of expected
            profit. They do not collect income tax.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {capexRows.map((row) => (
          <article key={row.firm} className="panel px-4 py-3">
            <h3 className="font-display text-xl text-text">{row.firm}</h3>
            <p className="text-sm text-cyan">{row.plan}</p>
            <p className="mt-1 text-xs text-muted">{row.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <ChoiceList
          label="How the balance sheet presses on the state"
          options={mechanisms.map((item) => ({ id: item.id, label: item.title }))}
          value={active.id}
          onChange={setMechanism}
        />
        <article className="panel panel-tick p-5 sm:p-6" aria-live="polite">
          <Tag tone={toneForStance[active.stance]}>{active.stance}</Tag>
          <h3 className="font-display mt-3 text-3xl text-text">{active.title}</h3>
          <p className="mt-3 text-muted">{active.body}</p>
        </article>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {counterForces.map((item) => (
          <article key={item.title} className="panel p-5">
            <h3 className="font-display text-2xl text-cyan">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-3xl text-text">An illustrative dial, not a forecast</h3>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Two sliders and a posture. Labour and tax are indexes set to 100 at today’s mix. They are not the ILO’s
          52.4%, and they are not a prediction of 2040. Power shares are forced to add to 100. Below a capability of
          40 the picture is still a build-out: the nearest world is a rhyme, not a regime.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Jump to an illustrated world">
          <button
            type="button"
            className="min-h-11 rounded-full border border-line px-4 text-sm text-muted hover:text-text"
            onClick={() => {
              setConcentration(70);
              setCapability(15);
              setPosture("referee");
            }}
          >
            2026 scale
          </button>
          {worlds.map((world) => (
            <button
              key={world.id}
              type="button"
              aria-pressed={result.regime && result.leader === world.id && concentration === world.concentration}
              className={`min-h-11 rounded-full border px-4 text-sm ${
                result.leader === world.id && result.regime
                  ? "border-cyan text-cyan"
                  : "border-line text-muted hover:text-text"
              }`}
              onClick={() => applyWorld(world.id)}
            >
              {world.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-5">
            <Slider
              label="Market concentration"
              low="Many rivals"
              high="A handful own the stack"
              value={concentration}
              onChange={setConcentration}
              help="Chips, clouds, models, energy contracts and distribution in fewer hands."
            />
            <Slider
              label="Cognitive automation"
              low="Today’s tools"
              high="Most drafting is machine work"
              value={capability}
              onChange={setCapability}
              help="Not a calendar. A dial from current copilots toward work that used to be a wage."
            />
            <p className="kicker mt-2">State posture</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="State posture">
              {postures.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={posture === item.id}
                  onClick={() => setPosture(item.id)}
                  className={`min-h-11 rounded-lg border px-3 py-2 text-left ${
                    posture === item.id ? "border-cyan/70 bg-cyan/10 text-text" : "border-line text-muted"
                  }`}
                >
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="mt-0.5 block text-xs text-faint">{item.hint}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="panel panel-tick p-5" aria-live="polite">
            <Tag tone={result.regime ? (result.contested ? "amber" : "magenta") : "cyan"}>
              {result.regime ? (result.contested ? "Contested regime" : "Nearest regime") : "Build-out, not a regime"}
            </Tag>
            <h3 className="font-display mt-3 text-4xl text-text">{result.regime ? leading.name : "The build, unfinished"}</h3>
            <p className="mt-2 text-sm text-muted">
              {result.regime
                ? leading.line
                : "Capability is still in the tool era. Firms can already outspend a defence budget without being a government. The world cards are what this posture would rhyme with if the second slider were a real substitution of wages."}
            </p>
            <div className="mt-5 space-y-4">
              <Meter label="Labour-income index" value={result.labourIndex} hint="100 means today’s share. Lower means surplus shifts to owners." tone="bg-cyan" />
              <Meter label="State tax-capacity index" value={result.taxIndex} hint="100 means today’s wage-and-profit mix still funds the budget. Posture matters." tone="bg-amber" />
            </div>
            <p className="kicker mt-5">Power balance, illustrative shares</p>
            <div className="mt-3 space-y-3">
              <Meter label="State" value={result.power.state} tone="bg-amber" />
              <Meter label="AI-centric firms" value={result.power.firms} tone="bg-magenta" />
              <Meter label="Open rails, including public chains" value={result.power.open} tone="bg-mint" />
            </div>
            <p className="mt-4 text-xs text-faint">
              World weights in this setting:{" "}
              {result.worlds.map((world) => `${worlds.find((item) => item.id === world.id)?.name} ${world.share}%`).join(" · ")}
              . Margin {result.margin} points.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {worlds.map((world) => {
          const share = result.worlds.find((item) => item.id === world.id)?.share ?? 0;
          const on = result.regime && world.id === result.leader;
          return (
            <article key={world.id} className={`panel p-5 ${on ? "border-cyan/60" : ""}`}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-text">{world.name}</h3>
                <span className="font-mono text-sm text-cyan">{share}%</span>
              </div>
              <p className="mt-2 text-sm text-cyan">{world.line}</p>
              <p className="mt-3 text-sm text-muted">{world.body}</p>
              <p className="mt-3 text-sm text-text/90">
                <span className="text-magenta">ETH in this picture. </span>
                {world.eth}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-3xl text-text">Is ETH a counterweight or an amplifier?</h3>
        <p className="mt-2 max-w-3xl text-muted">
          Both, depending on who owns the agents. The chain does not get a vote in that. The split below is the
          argument, not a score.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {ethColumns.map((column) => (
            <article key={column.title} className="panel p-5">
              <Tag tone={column.tone}>{column.title}</Tag>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-muted">
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="prose-measure mt-5 text-text/90">{ethVerdict}</p>
      </div>
    </Section>
  );
}

function Slider({
  label,
  low,
  high,
  value,
  help,
  onChange,
}: {
  label: string;
  low: string;
  high: string;
  value: number;
  help: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mb-4 block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-text">{label}</span>
        <span className="font-mono text-sm text-cyan">{value}</span>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={`${value} out of 100. ${help}`}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="flex justify-between font-mono text-[0.7rem] text-faint">
        <span>{low}</span>
        <span>{high}</span>
      </span>
      <span className="mt-1 block text-xs text-muted">{help}</span>
    </label>
  );
}

function Meter({ label, value, hint, tone }: { label: string; value: number; hint?: string; tone: string }) {
  return (
    <div>
      <div className="flex justify-between gap-3 text-sm">
        <span className="text-muted">{label}</span>
        <span className="font-mono text-text">{value}</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-panel-2" role="presentation">
        <div className={`h-2 rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
