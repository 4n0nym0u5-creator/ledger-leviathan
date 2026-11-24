import { useEffect, useState } from "react";

const links = [
  { href: "#thesis", id: "thesis", label: "Thesis" },
  { href: "#capital", id: "capital", label: "Capital" },
  { href: "#scenarios", id: "scenarios", label: "Scenarios" },
  { href: "#timeline", id: "timeline", label: "Timeline" },
  { href: "#technologies", id: "technologies", label: "Technologies" },
  { href: "#society", id: "society", label: "Society" },
  { href: "#countries", id: "countries", label: "Countries" },
  { href: "#signals", id: "signals", label: "Signals" },
  { href: "#sources", id: "sources", label: "Sources" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("thesis");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const marker = 128;
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
      let current = links[0].id;
      for (const link of links) {
        const node = document.getElementById(link.id);
        if (node && node.getBoundingClientRect().top <= marker) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace("#", "");
      const node = id ? document.getElementById(id) : null;
      if (!node) return;
      node.scrollIntoView();
    };
    const frame = window.requestAnimationFrame(go);
    window.addEventListener("hashchange", go);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#thesis">
        Skip to briefing
      </a>
      <div className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
        <div
          className="h-0.5 bg-magenta"
          style={{ width: `${Math.round(progress * 100)}%` }}
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-lg tracking-tight text-text">
            Ledger <span className="text-cyan">&</span> Leviathan
          </a>
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Sections">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-full px-2.5 py-1.5 text-sm ${
                  active === link.id ? "bg-cyan/15 text-cyan" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line px-3 text-sm text-text xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Sections"}
          </button>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-line px-4 py-3 xl:hidden" aria-label="Sections">
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-md border border-line px-3 text-sm text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
