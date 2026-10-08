import type { Metadata } from "next";

import { RequestForm } from "@/components/forms/request-form";
import { NextSteps } from "@/components/pages/next-steps";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "Request a visit",
  description:
    "Ask for a Bridge companion for your parent’s next medical appointment. A short form, no payment. We talk with you and your parent before anything is booked.",
};

export default function RequestPage() {
  return (
    <>
      <PageHeader eyebrow="Request a visit" title="Tell us about the appointment.">
        <p>
          A short form, about four steps. A real person reads every request. No payment now, and nothing is booked
          until we’ve talked with you and your parent.
        </p>
      </PageHeader>

      <Container className="grid gap-16 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <RequestForm headingLevel={2} />
        </div>

        <aside aria-labelledby="after-heading" className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-[var(--radius-card)] bg-sage p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 id="after-heading" className="text-h3 font-bold">
              What happens next
            </h2>
            <div className="mt-6">
              <NextSteps />
            </div>
            <p className="mt-8 border-t border-line pt-6">
              Rather talk? Call <Ph k="phone" />
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
