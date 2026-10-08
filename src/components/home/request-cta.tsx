import { RequestForm } from "@/components/forms/request-form";
import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";
import { Ph } from "@/components/site/ph";

/** Closing section: the full request form, right on the home page. */
export function RequestCta() {
  return (
    <section
      id="request"
      aria-labelledby="request-heading"
      className="border-t border-line bg-paper bg-[url(/backgrounds/soft-blob.svg)] bg-cover bg-center"
    >
      <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
        <InView className="lg:col-span-4">
          <Eyebrow>Request a visit</Eyebrow>
          <h2 id="request-heading" className="text-h2 font-bold">
            Tell us about the appointment.
          </h2>
          <p className="mt-6 text-lead">
            We’ll call you within <Ph k="responseTime" />, then your parent, before anything is booked.
          </p>
          <p className="mt-3 font-semibold">No payment now.</p>
          <p className="mt-6 text-muted">
            Rather talk? Call <Ph k="phone" />
          </p>
        </InView>

        <div className="rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:p-10 lg:col-span-7 lg:col-start-6">
          <RequestForm headingLevel={3} />
        </div>
      </Container>
    </section>
  );
}
