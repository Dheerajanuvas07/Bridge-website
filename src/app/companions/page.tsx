import { Check, Minus } from "lucide-react";
import type { Metadata } from "next";

import { CompanionForm } from "@/components/forms/companion-form";
import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "Become a companion",
  description:
    "Bridge is looking for a few steady, kind people in Omaha to go with older adults to their medical appointments. Not nursing: company, a steady arm, and a clear note for the family.",
};

const does = [
  "Meets the older adult at home and goes with them to the appointment",
  "Offers a steady arm on stairs, curbs and long hallways, and help with a walker",
  "Helps with check-in and keeps them company while they wait",
  "Joins the exam room only if they ask",
  "Takes notes they’ve agreed to, and writes a short, plain update for the family",
  "Stops at the pharmacy if asked ahead, then sees them home",
];

const doesnt = [
  "Give medical advice, diagnose, or interpret results",
  "Give or manage medications",
  "Nursing, or personal care like bathing or toileting",
  "Make decisions for the older adult",
  "Share anything they haven’t agreed to",
];

const fit = [
  "You’re patient, and you’re on time.",
  "You listen more than you talk.",
  "You’re comfortable with older adults, and you treat them as adults.",
  "You can write a clear, short note about what was said.",
  "You keep private things private.",
];

export default function CompanionsPage() {
  return (
    <>
      <PageHeader eyebrow="Become a companion" title="Go with someone to their appointment.">
        <p>
          Bridge is a small pilot in Omaha, Nebraska. We’re looking for a few steady, kind people to go with older
          adults to their medical appointments, and to tell their families what the doctor said, with permission.
        </p>
      </PageHeader>

      <section aria-labelledby="role-heading" className="py-20 sm:py-28">
        <Container>
          <InView className="max-w-3xl">
            <Eyebrow>The role</Eyebrow>
            <h2 id="role-heading" className="text-h2 font-bold">
              Company and a steady arm. Not nursing.
            </h2>
          </InView>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <InView className="rounded-[var(--radius-card)] border border-line p-6 sm:p-10">
              <h3 className="text-h3 font-semibold">A companion</h3>
              <ul className="mt-6 space-y-4">
                {does.map((item) => (
                  <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-3">
                    <Check aria-hidden="true" className="mt-1 size-6 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InView>
            <InView delay={0.08} className="rounded-[var(--radius-card)] border border-line bg-sage p-6 sm:p-10">
              <h3 className="text-h3 font-semibold">A companion doesn’t</h3>
              <ul className="mt-6 space-y-4">
                {doesnt.map((item) => (
                  <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-3">
                    <Minus aria-hidden="true" className="mt-1 size-6 text-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line pt-6 font-semibold">
                In an emergency: call 911 first, then the family.
              </p>
            </InView>
          </div>
        </Container>
      </section>

      <section aria-labelledby="fit-heading" className="border-t border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <InView className="lg:col-span-5">
            <Eyebrow>Who we’re looking for</Eyebrow>
            <h2 id="fit-heading" className="text-h2 font-bold">
              You might be a good fit if…
            </h2>
          </InView>
          <InView delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {fit.map((line) => (
                <li key={line} className="py-5 text-lead">
                  {line}
                </li>
              ))}
            </ul>
            <dl className="mt-12 space-y-6">
              <div>
                <dt className="font-semibold">Pay</dt>
                <dd className="mt-1 text-muted">
                  <Ph k="companionPay" />
                </dd>
              </div>
              <div>
                <dt className="font-semibold">How we choose companions</dt>
                <dd className="mt-1 text-muted">
                  <Ph k="screening" />
                </dd>
              </div>
            </dl>
          </InView>
        </Container>
      </section>

      <section id="apply" aria-labelledby="apply-heading" className="bg-sage py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Apply</Eyebrow>
            <h2 id="apply-heading" className="text-h2 font-bold">
              Tell us about yourself.
            </h2>
            <p className="mt-6 text-lead">DJ reads every application and will get back to you.</p>
          </div>
          <div className="rounded-[var(--radius-card)] bg-paper p-6 sm:p-10 lg:col-span-7 lg:col-start-6">
            <CompanionForm />
          </div>
        </Container>
      </section>
    </>
  );
}
