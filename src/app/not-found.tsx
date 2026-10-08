import Link from "next/link";

import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="max-w-3xl py-24 sm:py-32">
      <p className="text-small font-semibold tracking-[0.08em] text-accent uppercase">Page not found</p>
      <h1 className="mt-5 text-h1 font-bold">We couldn’t find that page.</h1>
      <p className="mt-6 text-lead">It may have moved. These are the places most people are looking for:</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/request">Request a visit</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/">Home page</Link>
        </Button>
      </div>
    </Container>
  );
}
