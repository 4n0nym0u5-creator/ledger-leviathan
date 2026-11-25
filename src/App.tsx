import { Capital } from "./components/Capital.tsx";
import { Countries } from "./components/Countries.tsx";
import { Hero } from "./components/Hero.tsx";
import { Scenarios } from "./components/Scenarios.tsx";
import { Signals } from "./components/Signals.tsx";
import { SiteNav } from "./components/SiteNav.tsx";
import { Society } from "./components/Society.tsx";
import { Sources } from "./components/Sources.tsx";
import { Technologies } from "./components/Technologies.tsx";
import { Thesis } from "./components/Thesis.tsx";
import { Timeline } from "./components/Timeline.tsx";
import { GeorgiaPage } from "./georgia/GeorgiaPage.tsx";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/georgia") return <GeorgiaPage />;

  return (
    <div id="top">
      <SiteNav />
      <main>
        <Hero />
        <Thesis />
        <Capital />
        <Scenarios />
        <Timeline />
        <Technologies />
        <Society />
        <Countries />
        <Signals />
        <Sources />
      </main>
      <footer className="border-t border-line/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-faint sm:px-6">
          <p className="font-display text-xl text-text">
            Ledger <span className="text-cyan">&</span> Leviathan
          </p>
          <p>
            A static briefing. Evidence is dated November 2026. The scenario weights are illustrative. This is not
            financial, legal, tax, or immigration advice, and it is not a prediction.
          </p>
          <p>Built as a single-page React app. No account, no tracker, no backend.</p>
        </div>
      </footer>
    </div>
  );
}
