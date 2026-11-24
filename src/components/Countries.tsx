import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { countries, meansForYou, rubric, type CountryId } from "../data/countries.ts";
import { Section, Tag } from "./ui.tsx";

export function Countries() {
  const [active, setActive] = useState<CountryId>("au");
  const country = countries.find((entry) => entry.id === active) ?? countries[0];
  const chart = countries.map((entry) => ({
    id: entry.id,
    name: entry.name === "United States" ? "US" : entry.name === "United Kingdom" ? "UK" : entry.name,
    Resilience: entry.resilience,
    Pressure: entry.pressure,
  }));

  return (
    <Section
      id="countries"
      index="07"
      kicker="Country deep dives"
      title="Five jurisdictions, not a world tour"
      lede="Australia, Singapore, the United States, the United Kingdom and Thailand are writing different perimeters in the same decade. Scores are judgements. The prose is the evidence."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel relative h-[280px] overflow-hidden sm:h-[380px]" role="group" aria-label="Choose a country by city">
          <svg viewBox="0 0 800 440" className="pointer-events-none absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="glow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#9af6ff" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#9af6ff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="440" fill="url(#glow)" />
            {Array.from({ length: 8 }).map((_, index) => (
              <line
                key={`v-${index}`}
                x1={100 * index}
                y1="0"
                x2={100 * index}
                y2="440"
                stroke="#9af6ff"
                strokeOpacity="0.08"
              />
            ))}
            {Array.from({ length: 5 }).map((_, index) => (
              <line
                key={`h-${index}`}
                x1="0"
                y1={88 * index}
                x2="800"
                y2={88 * index}
                stroke="#9af6ff"
                strokeOpacity="0.08"
              />
            ))}
            <path
              d="M70 150 C 180 80, 260 190, 300 170 S 390 250, 470 280"
              fill="none"
              stroke="#ff8ad4"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <text x="24" y="28" fill="#7f8da3" fontSize="12" fontFamily="IBM Plex Mono, monospace">
              PACIFIC-CENTRED SELECTOR · NOT A PROJECTION
            </text>
          </svg>
          {countries.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => setActive(entry.id)}
              aria-pressed={entry.id === country.id}
              aria-label={entry.city}
              className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ left: entry.pin.left, top: entry.pin.top }}
            >
              <span
                className={`pointer-events-none absolute whitespace-nowrap text-sm ${entry.label} ${
                  entry.id === country.id ? "text-text" : "text-muted"
                }`}
              >
                {entry.city}
              </span>
              <span
                className={`h-3.5 w-3.5 rounded-full ${
                  entry.id === country.id ? "bg-magenta shadow-[0_0_12px_#ff8ad4]" : "bg-cyan"
                }`}
              />
            </button>
          ))}
        </div>
        <div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Countries">
            {countries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={entry.id === country.id}
                onClick={() => setActive(entry.id)}
                className={`min-h-11 rounded-full border px-4 text-sm ${
                  entry.id === country.id ? "border-magenta text-magenta" : "border-line text-muted"
                }`}
              >
                {entry.name}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-faint">
            Pins and tabs select the same country. The drawing is a selector, not a map projection.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-cyan" /> Resilience
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-magenta" /> Pressure
            </span>
            <span className="text-faint">Selected country is brighter</span>
          </div>
          <div className="mt-2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chart} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid stroke="#2a384e" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#a9b6c8", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "#7f8da3", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#10151f",
                    border: "1px solid #2a384e",
                    borderRadius: 8,
                    color: "#e7eef8",
                  }}
                />
                <Bar dataKey="Resilience" radius={4}>
                  {chart.map((entry) => (
                    <Cell
                      key={entry.id}
                      fill="#9af6ff"
                      fillOpacity={entry.id === country.id ? 1 : 0.35}
                    />
                  ))}
                </Bar>
                <Bar dataKey="Pressure" radius={4}>
                  {chart.map((entry) => (
                    <Cell
                      key={entry.id}
                      fill="#ff8ad4"
                      fillOpacity={entry.id === country.id ? 1 : 0.35}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <article className="panel panel-tick mt-6 p-5 sm:p-7" aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="kicker">{country.city}</p>
            <h3 className="font-display text-4xl text-text">{country.name}</h3>
          </div>
          <Tag tone="amber">{country.posture}</Tag>
        </div>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <Score label="Institutional resilience" value={country.resilience} tone="bg-cyan" />
          <Score label="Disruption pressure" value={country.pressure} tone="bg-magenta" />
        </dl>
        <p className="mt-3 text-xs text-faint">
          {rubric.resilience} {rubric.pressure}
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Field title="Crypto and money, 2025–26" body={country.crypto} />
          <Field title="AI stance, 2025–26" body={country.ai} />
        </div>
        <Field title="Where the capital sits" body={country.capital} />
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <List title="Strengths" items={country.strengths} />
          <List title="Vulnerabilities" items={country.vulnerabilities} />
        </div>
        <Field title="Likely trajectory" body={country.trajectory} />
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <Field title="Citizens" body={country.citizens} />
          <Field title="Jobs" body={country.jobs} />
          <Field title="Economy" body={country.economy} />
        </div>
      </article>

      {country.id === "au" ? (
        <div id="for-you" className="scroll-mt-24 mt-6">
          <h3 className="font-display text-3xl text-text">What it means if you are building from Sydney</h3>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Written for a solo founder around 50, technically literate, with super, possibly a mortgage, and a company
            that invoices in dollars. Structure, not a personal plan.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {meansForYou.map((item) => (
              <article key={item.title} className="panel p-5">
                <h4 className="font-display text-2xl text-cyan">{item.title}</h4>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-faint">
          The Sydney founder note sits on the Australia tab.
        </p>
      )}
    </Section>
  );
}

function Score({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <dt className="text-muted">{label}</dt>
        <dd className="font-mono text-text">{value}</dd>
      </div>
      <div className="mt-2 h-2 rounded-full bg-panel-2" role="presentation">
        <div className={`h-2 rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Field({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-medium text-text">{title}</h4>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-text">{title}</h4>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
