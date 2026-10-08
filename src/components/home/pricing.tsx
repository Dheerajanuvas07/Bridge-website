import Link from "next/link";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";
import { Ph } from "@/components/site/ph";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <InView className="lg:col-span-5">
          <Eyebrow>Pilot pricing</Eyebrow>
          <h2 id="pricing-heading" className="text-h2 font-bold">
            One visit, one price.
          </h2>
          <p className="mt-6 text-lead text-muted">
            Bridge is a small pilot. Founding families help us learn what works, and we’ll ask you for honest
            feedback after each visit.
          </p>
        </InView>

        <InView delay={0.08} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[var(--radius-card)] border-2 border-ink p-6 sm:p-10">
            <p className="text-small font-semibold tracking-[0.08em] text-accent uppercase">Per visit</p>
            <p className="mt-3 text-h2 font-bold">
              <Ph k="pilotPrice" />
            </p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                <dt>Time included</dt>
                <dd className="font-semibold">
                  Up to <Ph k="hoursIncluded" />, door to door
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                <dt>If the visit runs long</dt>
                <dd className="font-semibold">
                  <Ph k="extraRate" />
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                <dt>When you request</dt>
                <dd className="font-semibold">No payment. We talk first.</dd>
              </div>
            </dl>
            <Button asChild size="lg" className="mt-8 w-full">
              <Link href="/request">Request a visit</Link>
            </Button>
          </div>
        </InView>
      </Container>
    </section>
  );
}
