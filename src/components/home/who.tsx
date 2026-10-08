import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";
import { Ph } from "@/components/site/ph";

export function Who() {
  return (
    <section aria-labelledby="who-heading" className="border-t border-line py-24 sm:py-32">
      <Container className="grid items-start gap-12 md:grid-cols-12">
        <InView className="md:col-span-4">
          {/* Replace with a real photo of DJ. No stock images. */}
          <div
            role="img"
            aria-label="Photo of DJ coming soon"
            className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-[var(--radius-card)] border-2 border-dashed border-line bg-sage text-center text-muted"
          >
            <span className="placeholder">[Founder photo]</span>
          </div>
        </InView>

        <InView delay={0.08} className="md:col-span-7 md:col-start-6">
          <Eyebrow>Who’s behind Bridge</Eyebrow>
          <h2 id="who-heading" className="text-h2 font-bold">
            A real person reads every request.
          </h2>
          <p className="mt-6 text-lead">
            Bridge is a small pilot in Omaha, Nebraska, started by DJ. <Ph k="founderBio" />
          </p>
          <p className="mt-4 text-lead text-muted">
            Right now, when you send a request, DJ reads it and calls you back. There is no call center.
          </p>
        </InView>
      </Container>
    </section>
  );
}
