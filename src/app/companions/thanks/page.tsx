import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Application received",
  robots: { index: false },
};

export default function CompanionThanksPage() {
  return (
    <>
      <PageHeader eyebrow="Application received" title="Thank you for applying.">
        <p>DJ reads every application and will get back to you.</p>
      </PageHeader>
      <Container className="py-16 sm:py-20">
        <Button asChild size="lg" variant="secondary">
          <Link href="/">Back to the home page</Link>
        </Button>
      </Container>
    </>
  );
}
