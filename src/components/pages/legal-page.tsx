import type { ReactNode } from "react";

import { Container } from "@/components/site/container";

/** Shared layout for the privacy policy and terms. Both are drafts until reviewed. */
export function LegalPage({ title, intro, children }: { title: string; intro: ReactNode; children: ReactNode }) {
  return (
    <Container className="max-w-3xl py-14 sm:py-20">
      <p
        role="note"
        className="rounded-[var(--radius-control)] border-2 border-dashed border-accent bg-accent-soft px-5 py-4 font-semibold"
      >
        DRAFT — needs review. Not yet in effect.
      </p>
      <h1 className="mt-10 text-h1 font-bold">{title}</h1>
      <div className="mt-6 text-lead">{intro}</div>
      <div className="mt-6 [&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-14 [&_h2]:text-h3 [&_h2]:font-bold [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </Container>
  );
}
