import type { ReactNode } from "react";

import { Container, Eyebrow } from "./container";

/** Top of an inner page: eyebrow, h1, short intro. */
export function PageHeader({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={className ?? "border-b border-line bg-[url(/backgrounds/hero-waves.svg)] bg-[length:100%_100%] bg-bottom bg-no-repeat"}>
      <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-h1 font-bold">{title}</h1>
          {children ? <div className="mt-6 space-y-4 text-lead">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
