import { useEffect, useState } from "react";

const jumps = [
  { href: "#thesis", label: "The thesis" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#countries", label: "Five countries" },
  { href: "#for-you", label: "If you are in Sydney" },
];

function sydneyStamp(date = new Date()) {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

export function Hero() {
  const [stamp, setStamp] = useState(sydneyStamp);

  useEffect(() => {
    const id = window.setInterval(() => setStamp(sydneyStamp()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="relative overflow-hidden border-b border-line/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="kicker flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-magenta" aria-hidden="true" />
            Field briefing · Sydney {stamp ? `· ${stamp}` : ""}
          </p>
          <h1 className="display mt-4 text-5xl text-text sm:text-7xl">
            Ledger &
            <span className="block text-cyan">Leviathan</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-muted">
            Could Ethereum and AI agents pressure governments — and which other technologies actually reshape the
            state? A briefing for a technically literate founder, not a pitch deck.
          </p>
          <p className="prose-measure mt-4 text-text/90">
            The short answer: they pressure the plumbing of money, identity and cognitive work. They do not, on the
            2026 evidence, replace taxation, courts or the welfare state. The contest is over chokepoints, and states
            are already using the same tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {jumps.map((jump) => (
              <a
                key={jump.href}
                href={jump.href}
                className="inline-flex min-h-11 items-center rounded-full border border-cyan/40 bg-cyan/10 px-4 text-sm font-medium text-cyan hover:bg-cyan/20"
              >
                {jump.label}
              </a>
            ))}
          </div>
        </div>
        <aside className="panel panel-tick p-5 sm:p-6" aria-label="How to read this briefing">
          <p className="kicker">How to read it</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <strong className="text-cyan">Evidence</strong> is a statute, a market snapshot, or a dated official
              document.
            </li>
            <li>
              <strong className="text-magenta">Inference</strong> is what follows if those facts keep going. It can be
              wrong.
            </li>
            <li>
              <strong className="text-amber">Speculation</strong> is a branch, labelled as one. The scenario sliders are
              a toy model, not a forecast.
            </li>
          </ul>
          <p className="mt-4 border-t border-line pt-4 text-sm text-faint">
            Not financial, legal or tax advice. Sources checked 23 November 2026. Stablecoin figures move daily.
          </p>
        </aside>
      </div>
    </header>
  );
}
