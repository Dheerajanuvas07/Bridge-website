import { Check, Minus } from "lucide-react";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";

const included = [
  "Visit times: pickup, check-in, seen, home",
  "What the doctor said, written plainly, in the doctor’s own terms",
  "Answers to the questions you sent us ahead of time",
  "The next appointment, and any follow-ups the office gave",
  "A note from your parent, if they’d like to add one",
];

const excluded = [
  "Our opinion of what the doctor said",
  "Medical advice, a diagnosis, or an interpretation of results",
  "Anything your parent asked us to keep private",
];

export function TheUpdate() {
  return (
    <section aria-labelledby="update-heading" className="border-t border-line py-24 sm:py-32">
      <Container>
        <InView className="max-w-3xl">
          <Eyebrow>The update</Eyebrow>
          <h2 id="update-heading" className="text-h2 font-bold">
            The same day, in plain words.
          </h2>
          <p className="mt-6 text-lead text-muted">
            We relay what was said. We never interpret, advise or diagnose. Your parent sees what we send, and
            decides what we may share.
          </p>
        </InView>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <InView className="rounded-[var(--radius-card)] border border-line p-6 sm:p-10">
            <h3 className="text-h3 font-semibold">What’s in it</h3>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-3">
                  <Check aria-hidden="true" className="mt-1 size-6 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InView>

          <InView delay={0.08} className="rounded-[var(--radius-card)] border border-line bg-sage p-6 sm:p-10">
            <h3 className="text-h3 font-semibold">What’s not</h3>
            <ul className="mt-6 space-y-4">
              {excluded.map((item) => (
                <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-3">
                  <Minus aria-hidden="true" className="mt-1 size-6 text-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InView>
        </div>
      </Container>
    </section>
  );
}
