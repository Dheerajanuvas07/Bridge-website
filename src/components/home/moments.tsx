import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";

const scenes = [
  {
    title: "The meeting you can’t move.",
    body: "Mom’s appointment is Tuesday at ten. So is the meeting you can’t miss. You spend the week trying to make both work.",
  },
  {
    title: "Hearing about it days later.",
    body: "You call to ask how it went. “Fine.” On Sunday you find out the doctor changed something, and nobody wrote it down.",
  },
  {
    title: "“I’m fine to go alone.”",
    body: "Maybe they are. But the parking, the forms, the waiting, and remembering everything the doctor said is a lot for anyone.",
  },
];

export function Moments() {
  return (
    <section aria-labelledby="moments-heading" className="py-24 sm:py-32">
      <Container>
        <InView className="max-w-3xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 id="moments-heading" className="text-h2 font-bold">
            You probably know this moment.
          </h2>
        </InView>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-3">
          {scenes.map((scene, i) => (
            <InView as="li" key={scene.title} delay={i * 0.08} className="bg-paper p-6 sm:p-10">
              <p className="text-small font-semibold text-accent tabular-nums" aria-hidden="true">
                0{i + 1}
              </p>
              <h3 className="mt-6 text-h3 font-semibold">{scene.title}</h3>
              <p className="mt-4 text-muted">{scene.body}</p>
            </InView>
          ))}
        </ol>
      </Container>
    </section>
  );
}
