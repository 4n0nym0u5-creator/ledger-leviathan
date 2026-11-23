import { useState } from "react";
import { years, type Domain } from "../data/timeline.ts";
import { Section, Tag } from "./ui.tsx";

const domains: Array<Domain | "All"> = ["All", "Crypto", "AI", "State", "Other"];

const stanceTone = {
  Observed: "mint",
  Scheduled: "cyan",
  Inference: "magenta",
  Speculation: "amber",
} as const;

export function Timeline() {
  const [yearId, setYearId] = useState(years[0].id);
  const [domain, setDomain] = useState<Domain | "All">("All");
  const year = years.find((entry) => entry.id === yearId) ?? years[0];
  const items = year.items.filter((item) => domain === "All" || item.domain === domain);

  return (
    <Section
      id="timeline"
      index="03"
      kicker="Timeline"
      title="2026 to 2050, with the confidence attached"
      lede="The early years are mostly statutes and market structure. Confidence falls on purpose. A milestone tagged speculation is a conditional, not a plan."
    >
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Years">
        {years.map((entry) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={entry.id === year.id}
            onClick={() => setYearId(entry.id)}
            className={`min-h-11 shrink-0 rounded-full border px-4 font-display text-lg ${
              entry.id === year.id ? "border-cyan bg-cyan/15 text-cyan" : "border-line text-muted"
            }`}
          >
            {entry.label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by domain">
        {domains.map((entry) => (
          <button
            key={entry}
            type="button"
            aria-pressed={domain === entry}
            onClick={() => setDomain(entry)}
            className={`min-h-11 rounded-full border px-3 text-sm ${
              domain === entry ? "border-magenta/70 text-magenta" : "border-line text-muted"
            }`}
          >
            {entry}
          </button>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-muted">{year.summary}</p>
      {items.length === 0 ? (
        <p className="panel mt-6 p-5 text-muted" role="status">
          Nothing in {year.label} is tagged {domain}. Clear the filter to see the year.
        </p>
      ) : (
        <ol className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.id} className="panel p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="muted">{item.domain}</Tag>
                <Tag tone={stanceTone[item.stance]}>{item.stance}</Tag>
                <Tag tone={item.confidence === "High" ? "mint" : item.confidence === "Medium" ? "cyan" : "amber"}>
                  {item.confidence} confidence
                </Tag>
              </div>
              <h3 className="mt-3 font-display text-2xl text-text">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
              <p className="mt-3 text-sm text-text/90">
                <span className="text-cyan">Society and market effect. </span>
                {item.impact}
              </p>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
