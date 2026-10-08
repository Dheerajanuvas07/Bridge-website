"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";

const steps = [
  {
    title: "You request",
    body: <>Tell us a little about the appointment. It’s a short form. No payment.</>,
  },
  {
    title: "We call your parent",
    body: <>We talk with your mom or dad before anything is booked. If they’d rather not, that’s the end of it.</>,
  },
  {
    title: "Door to door",
    body: (
      <>
        The companion meets them at home and stays beside them for the stairs, the parking lot and check-in.{" "}
        We’ll arrange the ride with you.
      </>
    ),
  },
  {
    title: "The visit",
    body: (
      <>
        They wait together. The companion joins the exam room only if your parent asks, and takes notes your parent
        has agreed to.
      </>
    ),
  },
  {
    title: "Home, then your update",
    body: (
      <>
        A pharmacy stop if you let us know ahead, then home. The same day, you get a written update, shared only with your
        parent’s permission.
      </>
    ),
  },
];

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  // The line fills as the steps scroll past. Scroll-linked, so it never plays on its own.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <InView className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Eyebrow>How a visit works</Eyebrow>
          <h2 id="how-heading" className="text-h2 font-bold">
            Five steps, and your parent agrees to each one.
          </h2>
        </InView>

        <ol ref={listRef} className="relative lg:col-span-7">
          {/* Track and progress line behind the step numbers. */}
          <div aria-hidden="true" className="absolute top-6 bottom-6 left-[23px] w-0.5 bg-line" />
          <motion.div
            aria-hidden="true"
            data-motion
            style={{ scaleY: scrollYProgress }}
            className="absolute top-6 bottom-6 left-[23px] w-0.5 origin-top bg-accent"
          />

          {steps.map((step, i) => (
            <InView as="li" key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-6 pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-accent bg-paper text-lead font-semibold text-accent"
              >
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="text-h3 font-semibold">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-muted">{step.body}</p>
              </div>
            </InView>
          ))}
        </ol>
      </Container>
    </section>
  );
}
