import type { ReactNode } from "react";

export function Tag({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "magenta" | "amber" | "mint" | "muted";
}) {
  const tones = {
    cyan: "text-cyan border-cyan/40 bg-cyan/10",
    magenta: "text-magenta border-magenta/40 bg-magenta/10",
    amber: "text-amber border-amber/40 bg-amber/10",
    mint: "text-mint border-mint/40 bg-mint/10",
    muted: "text-muted border-line bg-panel-2",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Section({
  id,
  index,
  kicker,
  title,
  lede,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line/80 py-16 sm:py-20" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-8 max-w-3xl">
          <p className="kicker">
            {index} / {kicker}
          </p>
          <h2 id={`${id}-title`} className="display mt-3 text-4xl text-text sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted">{lede}</p>
        </header>
        {children}
      </div>
    </section>
  );
}

export function ChoiceList<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string; hint?: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  const focusId = (id: T) => {
    onChange(id);
    requestAnimationFrame(() => {
      document.getElementById(`tab-${id}`)?.focus();
    });
  };

  const move = (current: number, direction: number) => {
    const next = (current + direction + options.length) % options.length;
    focusId(options[next].id);
  };

  return (
    <div role="tablist" aria-label={label} aria-orientation="vertical" className="flex flex-col gap-2">
      {options.map((option, index) => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            id={`tab-${option.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();
                move(index, 1);
              }
              if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();
                move(index, -1);
              }
              if (event.key === "Home") {
                event.preventDefault();
                focusId(options[0].id);
              }
              if (event.key === "End") {
                event.preventDefault();
                focusId(options[options.length - 1].id);
              }
            }}
            className={`min-h-11 rounded-lg border px-3 py-2 text-left transition-colors ${
              selected
                ? "border-cyan/70 bg-cyan/10 text-text"
                : "border-line bg-panel/60 text-muted hover:border-cyan/40 hover:text-text"
            }`}
          >
            <span className="block text-sm font-medium">{option.label}</span>
            {option.hint ? <span className="mt-0.5 block text-xs text-faint">{option.hint}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
