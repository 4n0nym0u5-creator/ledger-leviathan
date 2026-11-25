import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  composeStar,
  doors,
  giftsMeta,
  moves,
  stancesMeta,
  tuesdays,
  type Door,
  type Gift,
  type Stance,
} from "./star.ts";
import "./georgia.css";

const STORAGE = "georgia-north-star";

type Saved = { mix: number; gift: Gift; stance: Stance; door: Door };

const initial: Saved = { mix: 42, gift: "character", stance: "study", door: "bridge" };

function readSaved(): Saved {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (!raw) return initial;
    const parsed = JSON.parse(raw) as Partial<Saved>;
    if (
      typeof parsed.mix === "number" &&
      giftsMeta.some((item) => item.id === parsed.gift) &&
      stancesMeta.some((item) => item.id === parsed.stance) &&
      doors.some((item) => item.id === parsed.door)
    ) {
      return parsed as Saved;
    }
  } catch {
    /* keep the default star */
  }
  return initial;
}

export function GeorgiaPage() {
  const [saved, setSaved] = useState<Saved>(readSaved);
  const [moveId, setMoveId] = useState(moves[0].id);
  const [tuesday, setTuesday] = useState<"child" | "model">("child");
  const star = useMemo(() => composeStar(saved), [saved]);
  const move = moves.find((item) => item.id === moveId) ?? moves[0];
  const held = doors.find((item) => item.id === saved.door) ?? doors[1];

  useLayoutEffect(() => {
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href =
      "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,620;1,9..144,520&display=swap";
    document.head.appendChild(font);
    document.title = "A north star for Georgia";
    document.body.classList.add("georgia-body");
    return () => {
      font.remove();
      document.body.classList.remove("georgia-body");
      document.title = "Ledger & Leviathan — crypto, AI, and the state";
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(saved));
    } catch {
      /* private mode */
    }
  }, [saved]);

  const patch = (next: Partial<Saved>) => setSaved((current) => ({ ...current, ...next }));

  return (
    <div className="georgia">
      <a className="skip-link" href="#star">
        Skip to the north star
      </a>
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5">
        <p className="serif text-lg text-[var(--paper)]">
          For Georgia <span className="text-[var(--apricot)]">·</span> UTS
        </p>
        <a
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-[var(--muted)] no-underline hover:text-[var(--paper)]"
        >
          Back to the briefing
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-5xl gap-10 px-5 pb-16 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="kicker">Class of 2026 · Sydney · A north star, not a job title</p>
            <h1 className="serif mt-4 text-5xl leading-[1.05] text-[var(--paper)] sm:text-7xl">
              You do not have to become a software engineer to take intelligence seriously.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
              You are going to UTS to understand AI. You think hard, you have moral opinions, and psychology already
              interests you. You were the student other people could look at. You love young children. Those are not
              side notes. They are the work.
            </p>
          </div>
          <aside className="panel p-6" aria-label="What this page is">
            <p className="kicker">How to use this</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Move the star until the sentence sounds like you. It stays on this browser. Nothing here is a
              prediction, and nothing closes the other doors.
            </p>
            <p className="mt-4 text-sm text-[var(--paper)]">
              A model is not a child. It has no childhood. The skill that transfers is teaching: what you notice,
              what you reward, and what you refuse.
            </p>
          </aside>
        </section>

        <section id="star" className="scroll-mt-8 border-t border-[var(--line)] py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="kicker">01 — Compose it</p>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">The sentence you can keep</h2>
              <label className="mt-8 block">
                <span className="flex items-baseline justify-between gap-3 text-sm">
                  <span>Where the work sits</span>
                  <span className="font-mono text-[var(--apricot)]">
                    {saved.mix < 34 ? "With children" : saved.mix < 67 ? "In both rooms" : "With models"}
                  </span>
                </span>
                <input
                  className="range mt-3 w-full"
                  type="range"
                  min={0}
                  max={100}
                  value={saved.mix}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={saved.mix}
                  aria-valuetext={
                    saved.mix < 34
                      ? "Mostly with young children"
                      : saved.mix < 67
                        ? "Between children and models"
                        : "Mostly with models"
                  }
                  onChange={(event) => patch({ mix: Number(event.target.value) })}
                />
                <span className="mt-1 flex justify-between text-xs text-[var(--faint)]">
                  <span>Young children</span>
                  <span>Models</span>
                </span>
              </label>

              <fieldset className="mt-6">
                <legend className="text-sm text-[var(--paper)]">What you are teaching</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {giftsMeta.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="choice"
                      aria-pressed={saved.gift === item.id}
                      onClick={() => patch({ gift: item.id })}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {giftsMeta.find((item) => item.id === saved.gift)?.hint}
                </p>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-sm text-[var(--paper)]">How you practise</legend>
                <div className="mt-3 flex flex-col gap-2">
                  {stancesMeta.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="choice stack"
                      aria-pressed={saved.stance === item.id}
                      onClick={() => patch({ stance: item.id })}
                    >
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="mt-0.5 block text-xs opacity-80">{item.hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <article className="panel flex flex-col justify-between p-6 sm:p-8" aria-live="polite">
              <div>
                <p className="kicker">Your north star, today</p>
                <h3 className="serif mt-4 text-4xl leading-tight text-[var(--apricot)]">{star.title}</h3>
                <p className="mt-5 text-lg text-[var(--paper)]">{star.sentence}</p>
              </div>
              <p className="mt-8 text-sm text-[var(--muted)]">
                Held door: <span className="text-[var(--paper)]">{held.title}</span>. Change it below. The sentence
                updates as you move. It is a compass, not a contract.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-5">
            <p className="kicker">02 — The same gesture</p>
            <h2 className="serif mt-3 max-w-3xl text-4xl sm:text-5xl">
              Teaching a child and teaching a model use the same attention.
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Not the same student. A child is a person. A model is a trained system. Confusing them is how both get
              hurt. The gesture — notice, reward, refuse — is what you already know how to do.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              <div role="tablist" aria-label="Teaching moves" className="flex flex-col gap-2">
                {moves.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={item.id === move.id}
                    className="choice"
                    onClick={() => setMoveId(item.id)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2" role="tabpanel">
                <article className="panel p-5">
                  <p className="kicker">With a child</p>
                  <p className="mt-3 text-sm text-[var(--muted)]">{move.child}</p>
                </article>
                <article className="panel p-5">
                  <p className="kicker">With a model</p>
                  <p className="mt-3 text-sm text-[var(--muted)]">{move.model}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-5">
            <p className="kicker">03 — Two Tuesdays</p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">The same questions, different rooms.</h2>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Which Tuesday">
              <button
                type="button"
                className="choice"
                aria-pressed={tuesday === "child"}
                onClick={() => setTuesday("child")}
              >
                A Tuesday with children
              </button>
              <button
                type="button"
                className="choice"
                aria-pressed={tuesday === "model"}
                onClick={() => setTuesday("model")}
              >
                A Tuesday with a model
              </button>
            </div>
            <ol className="panel mt-6 divide-y divide-[var(--line)] px-5 sm:px-7">
              {tuesdays[tuesday].map(([time, text]) => (
                <li key={time} className="grid gap-2 py-4 sm:grid-cols-[5rem_1fr] sm:gap-6">
                  <span className="serif text-[var(--apricot)]">{time}</span>
                  <p className="text-[var(--muted)]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="doors" className="scroll-mt-8 border-t border-[var(--line)] py-16">
          <div className="mx-auto max-w-5xl px-5">
            <p className="kicker">04 — Three doors, one standard</p>
            <h2 className="serif mt-3 max-w-3xl text-4xl sm:text-5xl">Hold one for now. Leave the others open.</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              The Bachelor of Artificial Intelligence is the understanding. It will ask you to read code, the way a
              serious reader of poetry learns enough of the language to see how the line is built. Literacy is not
              the vocation. Software engineering can be someone else’s craft.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {doors.map((door) => {
                const on = saved.door === door.id;
                return (
                  <article key={door.id} className={`panel flex flex-col p-5 ${on ? "ring-1 ring-[var(--apricot)]" : ""}`}>
                    <p className="kicker">{door.kicker}</p>
                    <h3 className="serif mt-3 text-2xl">{door.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-[var(--muted)]">{door.body}</p>
                    <p className="mt-4 text-sm text-[var(--paper)]">{door.day}</p>
                    <button
                      type="button"
                      className="choice mt-5"
                      aria-pressed={on}
                      onClick={() => patch({ door: door.id })}
                    >
                      {on ? "Holding this" : "Hold this for now"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 lg:grid-cols-3">
            <article>
              <p className="kicker">The prize</p>
              <h2 className="serif mt-3 text-3xl">You were already the person in the room.</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                The school prize for being a role model is not a soft extra on a record. It means other students
                became braver or clearer around you. Alignment fails when it is only clever. It needs someone who
                can hold a standard in public without becoming cruel.
              </p>
            </article>
            <article>
              <p className="kicker">Psychology</p>
              <h2 className="serif mt-3 text-3xl">Keep it as the lens, not a detour.</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Psychology stops the metaphor from lying. Children develop. Models are trained. Those are different
                mechanisms. Knowing both is how you avoid treating a product as a person, or a child as a product.
                Your interest is the qualification.
              </p>
            </article>
            <article>
              <p className="kicker">Moral opinions</p>
              <h2 className="serif mt-3 text-3xl">Keep them. Make them answerable.</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Strong opinions are an asset when you can say what would change your mind. The field is full of
                people who are sure. The useful ones can sit with a child who is wrong, and with a model that is
                fluent and false, and tell those apart.
              </p>
            </article>
          </div>
          <div className="mx-auto mt-12 max-w-3xl px-5">
            <p className="serif text-2xl leading-snug text-[var(--paper)] sm:text-3xl">
              The decade map can show you many buildings. This is the reason you would walk into any of them: to
              teach a mind what is worth becoming, and to refuse the shortcut that only looks like care.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-[var(--line)] py-8">
        <p className="mx-auto max-w-5xl px-5 text-sm text-[var(--muted)]">
          Written for Georgia as she starts the Bachelor of Artificial Intelligence at UTS. Not a career guarantee,
          not a ranking of lives, and not a claim that a model is a child.
        </p>
      </footer>
    </div>
  );
}
