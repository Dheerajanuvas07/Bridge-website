import Link from "next/link";

import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { ExampleUpdateCard } from "./example-update-card";
import { HeroHeadline } from "./hero-headline";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[url(/backgrounds/hero-waves.svg)] bg-[length:100%_100%] bg-bottom bg-no-repeat"
    >
      <Container className="grid gap-14 pt-14 pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-12 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-7 lg:pr-6">
          <HeroHeadline id="hero-heading" text="When you can’t be there, someone steady is." />

          <p className="mt-8 max-w-[38rem] text-lead text-ink">
            A Bridge companion goes with your mom or dad to a medical appointment: from their front door, through
            the waiting room, and home again. Afterwards, you hear what the doctor said, in plain words, with your
            parent’s permission.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href="/request">Request a visit</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#how-it-works">See how a visit works</Link>
            </Button>
          </div>

          <p className="mt-8 max-w-[34rem] border-l-2 border-accent pl-4 text-muted">
            A small local pilot, taking a few founding families. A real person reads every request.
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <ExampleUpdateCard />
        </div>
      </Container>
    </section>
  );
}
