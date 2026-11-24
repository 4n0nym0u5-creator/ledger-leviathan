import { useMemo, useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { essays, modelNote } from "../data/scenarios.ts";
import {
  DRIVER_META,
  PRESETS,
  SCENARIO_META,
  evaluate,
  type Drivers,
} from "../lib/scenarioModel.ts";
import { Section, Tag } from "./ui.tsx";

export function Scenarios() {
  const [drivers, setDrivers] = useState<Drivers>(PRESETS[0].drivers);
  const [presetId, setPresetId] = useState(PRESETS[0].id);
  const result = useMemo(() => evaluate(drivers), [drivers]);
  const leader = essays.find((essay) => essay.id === result.leader) ?? essays[0];
  const runner = essays.find((essay) => essay.id === result.runnerUp) ?? essays[1];
  const leaderScore = result.scores.find((score) => score.id === result.leader) ?? result.scores[0];
  const chart = result.scores.map((score) => ({
    name: SCENARIO_META[score.id].name,
    share: score.share,
    fill: SCENARIO_META[score.id].hue,
  }));

  const setDriver = (key: keyof Drivers, value: number) => {
    setPresetId("custom");
    setDrivers((current) => ({ ...current, [key]: value }));
  };

  return (
    <Section
      id="scenarios"
      index="03"
      kicker="Scenario explorer"
      title="Four futures, one toy model"
      lede="Move the drivers. The leading scenario changes because the weights change, not because the future has been revealed. A margin under five points is marked contested."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Presets">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            aria-pressed={presetId === preset.id}
            onClick={() => {
              setDrivers(preset.drivers);
              setPresetId(preset.id);
            }}
            className={`min-h-11 rounded-full border px-4 text-sm ${
              presetId === preset.id
                ? "border-cyan bg-cyan/15 text-cyan"
                : "border-line text-muted hover:text-text"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-faint">
        {PRESETS.find((preset) => preset.id === presetId)?.blurb ??
          "Custom mix. The presets are illustrations of the weights, not historical cases."}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel p-5">
          {DRIVER_META.map((driver) => (
            <label key={driver.key} className="mb-5 block last:mb-0">
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium text-text">{driver.label}</span>
                <span className="font-mono text-sm text-cyan">{drivers[driver.key]}</span>
              </span>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={drivers[driver.key]}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={drivers[driver.key]}
                aria-valuetext={`${drivers[driver.key]} out of 100. ${driver.help}`}
                onChange={(event) => setDriver(driver.key, Number(event.target.value))}
              />
              <span className="flex justify-between font-mono text-[0.7rem] text-faint">
                <span>{driver.low}</span>
                <span>{driver.high}</span>
              </span>
              <span className="mt-1 block text-xs text-muted">{driver.help}</span>
            </label>
          ))}
        </div>

        <div>
          <div className="panel panel-tick p-5" aria-live="polite">
            <div className="flex flex-wrap items-center gap-2">
              <Tag tone={result.contested ? "amber" : "cyan"}>
                {result.contested ? "Contested" : "Leading weight"}
              </Tag>
              <span className="font-mono text-xs text-faint">Margin {result.margin} pts</span>
            </div>
            <h3 className="font-display mt-3 text-4xl" style={{ color: SCENARIO_META[leader.id].hue }}>
              {leader.name}
            </h3>
            <p className="mt-2 text-muted">{leader.line}</p>
            <p className="mt-3 text-sm text-text/90">
              {result.contested
                ? `${SCENARIO_META[runner.id].name} is within ${result.margin} points. Treat this setting as a fight, not a winner.`
                : `${leader.name} leads ${SCENARIO_META[runner.id].name} by ${result.margin} points in this weighting.`}
            </p>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chart} layout="vertical" margin={{ left: 8, right: 16, top: 8, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={148}
                    tick={{ fill: "#e7eef8", fontSize: 12 }}
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
                    formatter={(value) => [`${value}% of model weight`, "Share"]}
                  />
                  <Bar dataKey="share" radius={4} barSize={16}>
                    {chart.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <ol className="mt-4 space-y-2">
            {leaderScore.terms.slice(0, 3).map((term) => (
              <li key={term.label} className="panel flex items-center justify-between gap-3 px-4 py-3 text-sm">
                <span className="text-muted">{term.label}</span>
                <span className="font-mono text-cyan">{term.value.toFixed(1)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {essays.map((essay) => {
          const score = result.scores.find((item) => item.id === essay.id);
          const leading = essay.id === result.leader;
          return (
            <article
              key={essay.id}
              className={`panel p-5 ${leading ? "border-cyan/60" : ""}`}
              aria-current={leading ? "true" : undefined}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-text">{essay.name}</h3>
                <span className="font-mono text-sm" style={{ color: SCENARIO_META[essay.id].hue }}>
                  {score?.share ?? 0}%
                </span>
              </div>
              <p className="mt-2 text-sm text-cyan">{essay.line}</p>
              <p className="mt-3 text-sm text-muted">{essay.path}</p>
              <p className="mt-3 text-sm text-text/90">
                <span className="text-cyan">The balance sheet. </span>
                {essay.capital}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {essay.how.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-text/90">
                <span className="text-amber">Where it fails. </span>
                {essay.fails}
              </p>
            </article>
          );
        })}
      </div>

      <details className="panel mt-6 p-5 text-sm text-muted">
        <summary className="cursor-pointer text-text">How the score is built</summary>
        <p className="mt-3">{modelNote}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>State Absorbs rises with enforcement, state capacity and cross-border cooperation.</li>
          <li>Parallel Systems rises with open crypto, fragmentation, capable agents and a loose perimeter.</li>
          <li>Authoritarian Fortress rises with fragmentation, strict control, capable AI and little open crypto.</li>
          <li>
            Hybrid Pluralism is highest when the sliders sit near a governed-but-not-closed band, not when they are
            maxed.
          </li>
        </ul>
      </details>
    </Section>
  );
}
