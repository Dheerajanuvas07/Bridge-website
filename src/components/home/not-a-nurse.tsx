import { Phone } from "lucide-react";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";

const will = [
  "Keep your parent company, from the front door and back",
  "Offer a steady arm on stairs, curbs and long hallways",
  "Help with check-in and the waiting",
  "Take notes, if your parent wants them",
  "Stop at the pharmacy on the way home",
];

const wont = [
  "Give medical advice, diagnose, or interpret results",
  "Give or manage medications",
  "No nursing, and no personal care like bathing or toileting. A steady arm and help with a walker, always.",
  "Make decisions for your parent",
  "Share anything your parent hasn’t agreed to",
];

export function NotANurse() {
  return (
    <section aria-labelledby="nurse-heading" className="bg-sage py-24 sm:py-32">
      <Container>
        <InView className="max-w-3xl">
          <Eyebrow>What we do, and don’t</Eyebrow>
          <h2 id="nurse-heading" className="text-h2 font-bold">
            A companion, not a nurse.
          </h2>
        </InView>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <InView>
            <h3 className="border-b-2 border-ink pb-4 text-h3 font-semibold">A companion will</h3>
            <ul className="divide-y divide-line">
              {will.map((item) => (
                <li key={item} className="py-4">
                  {item}
                </li>
              ))}
            </ul>
          </InView>
          <InView delay={0.08}>
            <h3 className="border-b-2 border-ink pb-4 text-h3 font-semibold">A companion won’t</h3>
            <ul className="divide-y divide-line">
              {wont.map((item) => (
                <li key={item} className="py-4">
                  {item}
                </li>
              ))}
            </ul>
          </InView>
        </div>

        <InView className="mt-14 flex flex-col gap-5 rounded-[var(--radius-card)] bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
          <Phone aria-hidden="true" className="size-8 shrink-0" />
          <p className="text-lead">
            <span className="font-bold">In an emergency,</span> the companion calls 911 first, then you.
          </p>
        </InView>
      </Container>
    </section>
  );
}
