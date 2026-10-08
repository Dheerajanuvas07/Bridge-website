import type { Metadata } from "next";
import Link from "next/link";

import { NextSteps } from "@/components/pages/next-steps";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Ph } from "@/components/site/ph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank you",
  description: "What happens after you request a Bridge visit.",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <>
      <PageHeader eyebrow="Request received" title="Thank you. We’ve got it.">
        <p>
          We’ll call you within <Ph k="responseTime" />, then your parent, before anything is booked. No payment now.
        </p>
      </PageHeader>

      <Container className="grid gap-16 py-16 sm:py-20 lg:grid-cols-12">
        <section aria-labelledby="next-heading" className="lg:col-span-6">
          <h2 id="next-heading" className="text-h3 font-bold">
            What happens next
          </h2>
          <div className="mt-8">
            <NextSteps />
          </div>
        </section>

        <section aria-labelledby="share-heading" className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-[var(--radius-card)] border-2 border-accent p-6 sm:p-8">
            <h2 id="share-heading" className="text-h3 font-bold">
              Before we call your parent
            </h2>
            <p className="mt-4">
              There’s a short page written for them, in plain words and large type. It explains what happens and
              that they’re in charge. You might like to send it to them, or read it together.
            </p>
            <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
              <Link href="/for-parents">Read the page for parents</Link>
            </Button>
          </div>
          <p className="mt-8 text-muted">
            Something to add or change? Call <Ph k="phone" />.
          </p>
        </section>
      </Container>
    </>
  );
}
