import { useMemo, useState } from "react";
import { sources } from "../data/sources.ts";
import { Section } from "./ui.tsx";

export function Sources() {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return sources;
    return sources.filter((source) =>
      `${source.title} ${source.publisher} ${source.usedFor}`.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <Section
      id="sources"
      index="09"
      kicker="Sources"
      title="What the claims are hanging from"
      lede="Primary pages where they exist. Market figures are a single day. A law firm note is used only where it reports a published Thai tax measure. Nothing here is a recommendation to buy, sell, or structure a business a particular way."
    >
      <label className="block max-w-md text-sm text-muted">
        Search sources
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-1 min-h-11 w-full rounded-md border border-line bg-panel px-3 text-text"
          placeholder="Try GENIUS, Acacia, super, Thailand"
        />
      </label>
      {visible.length === 0 ? (
        <p className="panel mt-6 p-5 text-muted" role="status">
          No source matches that search.
        </p>
      ) : (
        <ol className="mt-6 space-y-3">
          {visible.map((source) => (
            <li key={source.id} className="panel p-4">
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-cyan underline-offset-4 hover:underline"
              >
                {source.title}
              </a>
              <p className="mt-1 font-mono text-xs text-faint">
                {source.publisher} · {source.year}
              </p>
              <p className="mt-2 text-sm text-muted">{source.usedFor}</p>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
