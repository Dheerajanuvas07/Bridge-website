import { Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container, Eyebrow } from "@/components/site/container";
import { Ph } from "@/components/site/ph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For parents",
  description:
    "Written for you, the person with the appointment. What a Bridge companion does, what we share, and how you stay in charge.",
};

const steps = [
  { title: "We call you first.", body: "We explain everything and answer your questions. You can say no." },
  { title: "Your companion meets you at home.", body: "We’ll arrange the ride with you." },
  { title: "They stay with you.", body: "The walk in, check-in, and the waiting room." },
  { title: "The exam room is your choice.", body: "They come in only if you ask. Otherwise they wait outside." },
  { title: "Then home.", body: "With a pharmacy stop on the way, if you need one." },
];

const inCharge = [
  "You decide if we come. If you say no, we don’t go.",
  "You decide if the companion comes into the exam room.",
  "You decide what we tell your family. Anything private stays private.",
  "You can change your mind at any time.",
];

/** Extra-large type throughout: this page is written for older readers. */
export default function ForParentsPage() {
  return (
    <div className="text-[1.5rem] leading-[1.55]">
      <section className="border-b border-line bg-[url(/backgrounds/soft-blob.svg)] bg-cover bg-center">
        <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="max-w-3xl">
            <Eyebrow className="text-[1.125rem]">For parents</Eyebrow>
            <h1 className="text-h1 font-bold">This page is for you.</h1>
            <p className="mt-8">
              Your son or daughter may have sent it to you. It explains Bridge in plain words.
            </p>
            <p className="mt-4 font-semibold">You decide whether we come.</p>
          </div>
        </Container>
      </section>

      <Container className="max-w-4xl space-y-20 py-20 sm:space-y-28 sm:py-28">
        <section aria-labelledby="happens-heading">
          <h2 id="happens-heading" className="text-h2 font-bold">
            What happens
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-5">
                <span
                  aria-hidden="true"
                  className="flex size-14 items-center justify-center rounded-full bg-accent text-[1.5rem] font-bold text-paper"
                >
                  {i + 1}
                </span>
                <div className="pt-2">
                  <p className="font-bold">{step.title}</p>
                  <p className="mt-1">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="charge-heading" className="rounded-[var(--radius-card)] border-2 border-accent p-6 sm:p-12">
          <h2 id="charge-heading" className="text-h2 font-bold">
            You’re in charge.
          </h2>
          <ul className="mt-8 space-y-6">
            {inCharge.map((line) => (
              <li key={line} className="border-l-4 border-accent pl-5">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="share-heading">
          <h2 id="share-heading" className="text-h2 font-bold">
            What we tell your family
          </h2>
          <p className="mt-8">
            After the visit, your family gets a short written note. It has the visit times, what the doctor said, and
            your next appointment.
          </p>
          <p className="mt-5">Only what you agree to. You can see it too.</p>
          <p className="mt-5">We pass on what the doctor said. We don’t give medical advice.</p>
        </section>

        <section aria-labelledby="nurse-heading" className="rounded-[var(--radius-card)] bg-sage p-6 sm:p-12">
          <h2 id="nurse-heading" className="text-h2 font-bold">
            A companion, not a nurse
          </h2>
          <p className="mt-8">They don’t give medical care or medicine.</p>
          <p className="mt-5">
            No nursing, and no personal care like bathing or toileting. A steady arm and help with a walker, always.
          </p>
          <p className="mt-5 font-semibold">In an emergency, they call 911 first, then your family.</p>
        </section>

        <section aria-labelledby="questions-heading">
          <h2 id="questions-heading" className="text-h2 font-bold">
            Questions?
          </h2>
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Phone aria-hidden="true" className="size-8 text-accent" />
            <span>
              Call <Ph k="phone" />
            </span>
          </p>
          <p className="mt-5">Ask anything. There’s no pressure, and no cost to ask.</p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-h-16 text-[1.375rem]">
              <Link href="/request">Have your family request a visit</Link>
            </Button>
            <Link
              href="/request"
              className="inline-flex min-h-14 items-center text-[1.25rem] font-semibold text-accent underline underline-offset-[6px]"
            >
              Or request one yourself
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
