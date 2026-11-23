import { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { stateFunctions, synthesis, thesisLead } from "../data/thesis.ts";
import { ChoiceList, Section, Tag } from "./ui.tsx";

const snapshot = [
  { name: "USDT", value: 174.6, fill: "#9af6ff" },
  { name: "USDC", value: 68.7, fill: "#ff8ad4" },
  { name: "USDe", value: 4.9, fill: "#ffd27a" },
  { name: "DAI", value: 4.5, fill: "#7dface" },
  { name: "Other", value: 27.9, fill: "#7f8da3" },
];

export function Thesis() {
  const [active, setActive] = useState(stateFunctions[0].id);
  const item = stateFunctions.find((entry) => entry.id === active) ?? stateFunctions[0];

  return (
    <Section
      id="thesis"
      index="01"
      kicker="Core thesis"
      title="Pressure, not replacement"
      lede="Nine state functions, and what crypto plus agents can and cannot do to each. The tags are the point. Do not promote an inference into a fact because it sounds cleaner."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <p className="text-lg text-text">{thesisLead.claim}</p>
          <p className="text-muted">{thesisLead.distinguish}</p>
        </div>
        <figure className="panel p-4">
          <figcaption className="flex items-baseline justify-between gap-3">
            <span className="kicker">Snapshot, not a forecast</span>
            <span className="font-mono text-xs text-faint">US$ bn · 23 Nov 2026</span>
          </figcaption>
          <div className="mt-2 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={snapshot} layout="vertical" margin={{ left: 8, right: 12, top: 8, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={52}
                  tick={{ fill: "#a9b6c8", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "rgba(154,246,255,0.06)" }}
                  contentStyle={{
                    background: "#10151f",
                    border: "1px solid #2a384e",
                    borderRadius: 8,
                    color: "#e7eef8",
                  }}
                  formatter={(value) => [`US$${value}bn`, "Float"]}
                />
                <Bar dataKey="value" radius={4} barSize={14}>
                  {snapshot.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-faint">
            Stablecoins recorded by DefiLlama. About half the float was on Ethereum. Combined, they are large for
            crypto and small next to Australian super (A$4.77tn).
          </p>
        </figure>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <ChoiceList
          label="State functions"
          options={stateFunctions.map((entry) => ({ id: entry.id, label: entry.title, hint: entry.hint }))}
          value={item.id}
          onChange={setActive}
        />
        <article
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          className="panel panel-tick p-5 sm:p-7"
        >
          <h3 className="font-display text-3xl text-text">{item.title}</h3>
          <div className="mt-5 space-y-5">
            <Block tone="muted" label="What the state does" body={item.stateRole} />
            <Block tone="cyan" label="Where crypto and agents press" body={item.pressure} />
            <Block tone="mint" label="Evidence" body={item.evidenced} />
            <Block tone="amber" label="Speculation" body={item.speculative} />
            <Block tone="magenta" label="Counter-force" body={item.counter} />
          </div>
        </article>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {synthesis.map((paragraph, index) => (
          <p key={paragraph.slice(0, 24)} className="panel p-5 text-sm text-muted">
            <span className="kicker mb-2 block">Reading {index + 1}</span>
            <span className="text-text/95">{paragraph}</span>
          </p>
        ))}
      </div>
    </Section>
  );
}

function Block({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "muted" | "cyan" | "mint" | "amber" | "magenta";
}) {
  return (
    <div>
      <Tag tone={tone}>{label}</Tag>
      <p className="mt-2 text-[0.98rem] text-muted">{body}</p>
    </div>
  );
}
