import Link from "next/link";

import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/site/container";
import { Ph } from "@/components/site/ph";
import { Button } from "@/components/ui/button";

/** Closing section. Phase 3/4 embeds the multi-step request form here. */
export function RequestCta() {
  return (
    <section
      id="request"
      aria-labelledby="request-heading"
      className="border-t border-line bg-paper bg-[url(/backgrounds/soft-blob.svg)] bg-cover bg-center"
    >
      <Container className="py-24 sm:py-32">
        <InView className="mx-auto max-w-2xl rounded-[var(--radius-card)] border border-line bg-paper p-6 text-center sm:p-14">
          <h2 id="request-heading" className="text-h2 font-bold">
            Request a visit
          </h2>
          <p className="mt-6 text-lead">
            Tell us about the appointment. We’ll call you within <Ph k="responseTime" />, then your parent, before
            anything is booked.
          </p>
          <p className="mt-3 font-semibold">No payment now.</p>
          <Button asChild size="lg" className="mt-10 w-full sm:w-auto">
            <Link href="/request">Start your request</Link>
          </Button>
          <p className="mt-6 text-muted">
            Rather talk? Call <Ph k="phone" />
          </p>
        </InView>
      </Container>
    </section>
  );
}
