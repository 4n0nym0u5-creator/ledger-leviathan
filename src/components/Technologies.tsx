import { useMemo, useState } from "react";
import { technologies, type TechEffect } from "../data/technologies.ts";
import { Section, Tag } from "./ui.tsx";

const filters: Array<TechEffect | "All"> = [
  "All",
  "Pressures the state",
  "Strengthens the state",
  "Cuts both ways",
];

export function Technologies() {
  const [filter, setFilter] = useState<TechEffect | "All">("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(technologies[0].id);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return technologies.filter((tech) => {
      const matchesFilter = filter === "All" || tech.effect === filter;
      const matchesQuery =
        needle.length === 0 ||
        `${tech.name} ${tech.changes} ${tech.state}`.toLowerCase().includes(needle);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <Section
      id="technologies"
      index="04"
      kicker="Other technologies"
      title="The rest of the stack"
      lede="Crypto and agents are not the only forces that move state power. Most of these cut both ways. The state that can permit, insure and defend a technology usually gains from it."
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by effect on the state">
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
              {entry}
            </button>
          ))}
        </div>
        <label className="block text-sm text-muted">
          <span className="sr-only">Search technologies</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search technologies"
            className="min-h-11 w-full rounded-md border border-line bg-panel px-3 text-text placeholder:text-faint sm:w-64"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="panel mt-6 p-5 text-muted" role="status">
          No technology matches that filter and search. Reset both to see the full set.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {visible.map((tech) => {
            const expanded = open === tech.id;
            return (
              <article key={tech.id} className="panel p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag
                    tone={
                      tech.effect === "Pressures the state"
                        ? "magenta"
                        : tech.effect === "Strengthens the state"
                          ? "amber"
                          : "cyan"
                    }
                  >
                    {tech.effect}
                  </Tag>
                  <span className="font-mono text-xs text-faint">{tech.horizon}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-text">{tech.name}</h3>
                <p className="mt-2 text-sm text-muted">{tech.changes}</p>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? "" : tech.id)}
                  className="mt-4 min-h-11 text-sm text-cyan"
                >
                  {expanded ? "Hide timeline and state effect" : "Timeline and state effect"}
                </button>
                {expanded ? (
                  <div className="mt-3 space-y-3 border-t border-line pt-3 text-sm text-muted">
                    <p>
                      <span className="text-text">Timeline. </span>
                      {tech.timeline}
                    </p>
                    <p>
                      <span className="text-text">State power. </span>
                      {tech.state}
                    </p>
                    <p>
                      <span className="text-amber">Confidence. </span>
                      {tech.confidence}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </Section>
  );
}
