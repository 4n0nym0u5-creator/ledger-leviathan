import { useState } from "react";
import { heatYears, societyTopics, type Heat } from "../data/society.ts";
import { Section, Tag } from "./ui.tsx";

const heatTone: Record<Heat, string> = {
  Limited: "bg-panel-2 text-faint border-line",
  Uneven: "bg-cyan/10 text-cyan border-cyan/30",
  Material: "bg-magenta/10 text-magenta border-magenta/30",
  Structural: "bg-amber/15 text-amber border-amber/40",
};

export function Society() {
  const [active, setActive] = useState(societyTopics[0].id);
  const topic = societyTopics.find((entry) => entry.id === active) ?? societyTopics[0];

  return (
    <Section
      id="society"
      index="05"
      kicker="Society"
      title="What actually changes for people"
      lede="The grid is an editorial judgement of when each pressure becomes hard to ignore. It is not a dataset. Select a row to read the argument, including the Australian cut."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-1 text-left text-sm">
          <caption className="sr-only">
            Editorial judgement of social pressure by topic and year. Choose a topic to read the analysis.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="px-2 py-2 font-mono text-xs tracking-wide text-faint">
                Topic
              </th>
              {heatYears.map((year) => (
                <th key={year} scope="col" className="px-2 py-2 font-mono text-xs text-faint">
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {societyTopics.map((entry) => (
              <tr key={entry.id}>
                <th scope="row" className="w-[34%] p-0 font-normal">
                  <button
                    type="button"
                    aria-pressed={entry.id === topic.id}
                    onClick={() => setActive(entry.id)}
                    className={`min-h-11 w-full rounded-md border px-3 text-left ${
                      entry.id === topic.id ? "border-cyan text-text" : "border-line text-muted"
                    }`}
                  >
                    {entry.title}
                  </button>
                </th>
                {entry.heat.map((level, index) => (
                  <td key={heatYears[index]} className="p-0">
                    <span
                      className={`flex min-h-11 items-center justify-center rounded-md border px-2 text-center text-xs ${heatTone[level]}`}
                    >
                      {level}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-faint">
        Limited: visible in niches. Uneven: some occupations or places. Material: shows up in prices, trust or policy.
        Structural: hard to route around if the capability assumption holds. 2035 and 2040 are conditional.
      </p>
      <article className="panel panel-tick mt-6 p-5 sm:p-7" aria-live="polite">
        <h3 className="font-display text-3xl text-text">{topic.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.heat.map((level, index) => (
            <Tag key={heatYears[index]} tone={level === "Structural" ? "amber" : level === "Material" ? "magenta" : "cyan"}>
              {heatYears[index]} · {level}
            </Tag>
          ))}
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <Pane kicker="Now" body={topic.now} />
          <Pane kicker="If capability holds" body={topic.later} />
          <Pane kicker="Australia" body={topic.australia} />
        </div>
      </article>
    </Section>
  );
}

function Pane({ kicker, body }: { kicker: string; body: string }) {
  return (
    <div>
      <p className="kicker">{kicker}</p>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </div>
  );
}
