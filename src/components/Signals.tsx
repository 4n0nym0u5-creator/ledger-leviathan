import { useState } from "react";
import { doNotWatch, signals } from "../data/signals.ts";
import { SCENARIO_META, type ScenarioId } from "../lib/scenarioModel.ts";
import { Section, Tag } from "./ui.tsx";

const filters: Array<ScenarioId | "all"> = ["all", "absorb", "parallel", "fortress", "hybrid"];

export function Signals() {
  const [filter, setFilter] = useState<ScenarioId | "all">("all");
  const visible = signals.filter((signal) => filter === "all" || signal.scenario === filter);

  return (
    <Section
      id="signals"
      index="08"
      kicker="What to watch"
      title="Indicators, not oracles"
      lede="Each signal has a late-2026 reading and the move that would actually change the scenario weights. Prices are not on the list."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter signals by scenario">
        {filters.map((entry) => (
          <button
            key={entry}
            type="button"
            aria-pressed={filter === entry}
            onClick={() => setFilter(entry)}
            className={`min-h-11 rounded-full border px-3 text-sm ${
              filter === entry ? "border-cyan text-cyan" : "border-line text-muted"
            }`}
          >
            {entry === "all" ? "All signals" : SCENARIO_META[entry].name}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4">
        {visible.map((signal) => (
          <article key={signal.id} className="panel p-5">
            <Tag tone="cyan">{SCENARIO_META[signal.scenario].name}</Tag>
            <h3 className="mt-3 font-display text-2xl text-text">{signal.title}</h3>
            <p className="mt-2 text-sm text-muted">
              <span className="text-text">Reading now. </span>
              {signal.reading}
            </p>
            <p className="mt-2 text-sm text-muted">
              <span className="text-amber">If it moves. </span>
              {signal.ifItMoves}
            </p>
          </article>
        ))}
      </div>
      <aside className="panel mt-6 p-5">
        <h3 className="font-display text-2xl text-text">Do not watch</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          {doNotWatch.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </Section>
  );
}
