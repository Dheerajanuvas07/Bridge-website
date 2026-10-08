import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";

const questions = [
  {
    q: "In the exam room, or waiting outside?",
    note: "Some people want company with the doctor. Some don’t. Either is fine.",
  },
  {
    q: "What may I share with your family?",
    note: "We only pass on what your parent agrees to. They can change their mind at any time.",
  },
  {
    q: "Anything private?",
    note: "If something stays between your parent and their doctor, it stays there.",
  },
];

export function ParentInCharge() {
  return (
    <section aria-labelledby="in-charge-heading" className="relative bg-sage">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[59px] h-[60px] bg-[url(/backgrounds/divider-wave.svg)] bg-[length:100%_100%] bg-no-repeat"
      />
      <Container className="grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <InView>
            <Eyebrow>Consent first</Eyebrow>
            <h2 id="in-charge-heading" className="text-h2 font-bold">
              Your mom or dad stays in charge.
            </h2>
            <p className="mt-6 max-w-[36rem] text-lead">
              Before every visit, the companion asks your parent, not you, three questions. Their answers decide how
              the day goes.
            </p>
          </InView>

          <ol className="mt-12 space-y-8">
            {questions.map((item, i) => (
              <InView as="li" key={item.q} delay={i * 0.08} className="grid grid-cols-[3rem_1fr] gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full bg-paper text-lead font-semibold text-accent"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-h3 font-semibold">“{item.q}”</p>
                  <p className="mt-2 text-muted">{item.note}</p>
                </div>
              </InView>
            ))}
          </ol>
        </div>

        <InView className="lg:col-span-5 lg:pt-28">
          <aside
            aria-labelledby="to-parent-heading"
            className="rounded-[var(--radius-card)] border-2 border-accent bg-paper p-6 sm:p-10"
          >
            <h3 id="to-parent-heading" className="text-h3 font-bold">
              If your son or daughter sent you this page:
            </h3>
            <p className="mt-5 text-lead">
              You decide. You choose whether we come, how close we stay, and what your family hears afterwards.
            </p>
            <p className="mt-4 text-lead font-semibold">If you say no, we don’t go.</p>
            <p className="mt-8">
              <Link
                href="/for-parents"
                className="py-2 leading-loose font-semibold text-accent underline decoration-2 underline-offset-[6px] hover:decoration-accent/40"
              >
                Read the page written for you
                <ArrowRight aria-hidden="true" className="ml-1.5 inline size-5 align-[-0.2em]" />
              </Link>
            </p>
          </aside>
        </InView>
      </Container>
    </section>
  );
}
