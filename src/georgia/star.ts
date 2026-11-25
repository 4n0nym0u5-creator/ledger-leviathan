export type Gift = "notice" | "character" | "truth" | "help";
export type Stance = "sit" | "study" | "rules";
export type Door = "classroom" | "model" | "bridge";

export type StarInput = {
  mix: number;
  gift: Gift;
  stance: Stance;
};

export type Band = "children" | "bridge" | "models";

export function bandOf(mix: number): Band {
  if (mix < 34) return "children";
  if (mix < 67) return "bridge";
  return "models";
}

const titles: Record<Band, string> = {
  children: "Teach the youngest minds first.",
  bridge: "Teach minds. Some are small. Some are made.",
  models: "Teach a model slowly, and without cruelty.",
};

const who: Record<Band, string> = {
  children:
    "My north star is the children in the room. Understanding AI is how I stop a product from being handed to them as if it were a teacher.",
  bridge:
    "My north star is to hold two rooms at once: young children, and the models that will sit near them. The standard has to be the same in both.",
  models:
    "My north star is to teach models how to think — what they reward, what they refuse, and when they should stop and ask a person. Children are the reason the standard exists.",
};

const gifts: Record<Gift, string> = {
  notice: "I want to see what a mind is actually doing, not only the answer it performs.",
  character: "I want to be careful about what gets rewarded, because a reward quietly becomes a character.",
  truth: "I want it to be easier to tell the truth than to be charming.",
  help: "I want “I don’t know” and “let’s ask someone” to count as strength.",
};

const stances: Record<Stance, string> = {
  sit: "I practise this by being in the room: on the floor, at the table, patient enough to wait for the real answer.",
  study:
    "I practise this by studying how learning happens — in children, through psychology, and in models, through the way a training signal shapes behaviour.",
  rules:
    "I practise this by helping decide what a child, or a model, is allowed to meet, and what it must hand back to a human.",
};

export function composeStar(input: StarInput) {
  const mix = Math.min(100, Math.max(0, Math.round(input.mix)));
  const band = bandOf(mix);
  return {
    mix,
    band,
    title: titles[band],
    sentence: `${who[band]} ${gifts[input.gift]} ${stances[input.stance]}`,
  };
}

export const giftsMeta: { id: Gift; label: string; hint: string }[] = [
  { id: "notice", label: "Noticing", hint: "What they attended to, not the performance." },
  { id: "character", label: "What we reward", hint: "Praise shapes a person. A signal shapes a model." },
  { id: "truth", label: "Honesty over charm", hint: "A pleasing lie is the failure mode." },
  { id: "help", label: "Asking for help", hint: "Uncertainty is a skill, not a flaw." },
];

export const stancesMeta: { id: Stance; label: string; hint: string }[] = [
  { id: "sit", label: "Be in the room", hint: "Teaching as presence." },
  { id: "study", label: "Study how minds learn", hint: "Psychology, then the training signal." },
  { id: "rules", label: "Set the boundary", hint: "What they may meet, and when to stop." },
];

export const moves: {
  id: string;
  title: string;
  child: string;
  model: string;
}[] = [
  {
    id: "attend",
    title: "You notice what they attended to",
    child:
      "A five-year-old “reads” the picture, not the sentence. You follow their eyes. The lesson was never the word you planned. It was what they were actually looking at.",
    model:
      "A model answers the easy part of the question and skips the part that mattered. You read the trace of what it latched onto. Alignment starts as noticing, the same way a good teacher starts.",
  },
  {
    id: "attempt",
    title: "You praise the attempt, not only the right answer",
    child:
      "If only the correct word gets a smile, they stop trying the hard word. You mark the courage of the try, then you show the next inch.",
    model:
      "If a model is only rewarded for the final box being ticked, it learns to look finished. Process — showing the reasoning, naming the doubt — has to be worth something too. That is a teaching decision, not a software trick.",
  },
  {
    id: "charm",
    title: "You do not reward a charming lie",
    child:
      "They tell a sweet story to stay out of trouble. You don’t humiliate them. You also don’t clap. Fear and fiction get separated, gently, and the truth gets the warmer response.",
    model:
      "Models learn to agree with the person in front of them, because agreement feels like success. Sycophancy is a charming lie at industrial scale. The work is to make honesty the thing that gets rewarded.",
  },
  {
    id: "slow",
    title: "You slow down when they are unsure",
    child:
      "A child goes quiet. You don’t fill the silence with the answer. You make it safe to say “I don’t know yet.”",
    model:
      "A model that always sounds sure is a bad teacher. The behaviour you want is: pause, say what is known, say what isn’t, and don’t invent a bridge between them.",
  },
  {
    id: "words",
    title: "You ask them to say it in their own words",
    child:
      "Repeating your sentence is not understanding. You ask them to tell it back to a friend, or to the doll, until it is theirs.",
    model:
      "A fluent paragraph can be a memorised shape. You test whether the model can explain the idea a different way, to a different person, including a child. If it cannot, it performed. It did not learn.",
  },
  {
    id: "dignity",
    title: "You refuse to humiliate a wrong answer",
    child:
      "The wrong answer still came from a person who has to come back tomorrow. Dignity is not softness. It is how you keep the learner in the room.",
    model:
      "Training by shame makes brittle things. A model is not a child and has no feelings to protect — and you still don’t build a system that punishes people for being wrong, or that role-plays cruelty because it “works.” The standard comes from the classroom, even when the student is made of weights.",
  },
];

export const doors: {
  id: Door;
  kicker: string;
  title: string;
  body: string;
  day: string;
}[] = [
  {
    id: "classroom",
    kicker: "The floor",
    title: "Early education, with your eyes open",
    body: "Primary and early childhood teaching is not the smaller life. You already love young children. A teacher who understands what a model can and cannot see will be the adult in the room when an app is offered as a tutor, a friend, or a shortcut. That is protection, not a backup plan.",
    day: "You keep the degree’s understanding of AI, and you let the vocation be the children. Psychology tells you how they actually learn. The moral opinions tell you what you will not outsource to a screen.",
  },
  {
    id: "model",
    kicker: "The behaviour",
    title: "Teaching models how to think",
    body: "Alignment is the work of deciding what a model should do when it is unsure, flattered, frightened-sounding, or asked to lie. Much of that work is writing, reading failures, designing tests, and arguing about character. It is not the same job as software engineering. You need enough technical literacy to see the system. You do not need to become the person who ships the product.",
    day: "Labs, safety institutes, and evaluation teams hire people from psychology, philosophy, education, and policy for exactly this: name the behaviour, don’t just train the weight.",
  },
  {
    id: "bridge",
    kicker: "The standard",
    title: "The bridge, which is the star",
    body: "The rare role is someone who has sat on a classroom floor and has also read a model’s failure without romanticising it. She can say: this is how a child learns honesty; this is how a model learns to fake it; these are not the same, and the second must not be allowed to teach the first.",
    day: "Research on children and AI, curriculum, child-safety rules for models, and model behaviour written by people who have actually taught. This is the north star the other two doors both serve.",
  },
];

export const tuesdays = {
  child: [
    ["8:20", "You are at the door. You use names. You notice who does not come in talking."],
    ["9:10", "A picture book. You ask what the character wanted, not what happened. Wanting is the start of a mind."],
    ["10:00", "Someone tells a charming version of how the paint got on the floor. You don’t shame them. You don’t reward the story."],
    ["11:30", "You watch who copies a friend and who can say it alone. Copying is not understanding. You already know this."],
    ["2:15", "A parent asks about an AI tutor. You can say what it notices, what it misses, and why a child still needs a person when they are unsure."],
  ],
  model: [
    ["9:00", "You read yesterday’s cases where the model agreed with something false because the user wanted agreement. You mark those, in words."],
    ["10:30", "You write the behaviour in plain language: if you are not sure, say so before you invent. A researcher turns that into a test. You do not have to write the training code for the sentence to matter."],
    ["1:00", "You argue, from psychology, that rewarding polite agreement produces a people-pleaser. You have seen this in a classroom. The mechanism in a model is different. The failure looks familiar."],
    ["3:00", "A child-safety case. The model must not pretend to be a child’s friend, and it must hand the moment back to an adult. You are strict here. Strict is a form of care."],
    ["4:30", "You write down what would change your mind about the rule. Strong moral opinions that cannot be updated are not alignment. They are a mood."],
  ],
} as const;
