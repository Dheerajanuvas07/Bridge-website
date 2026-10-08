import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-12 items-center gap-2.5 text-[1.5rem] font-bold tracking-tight text-ink"
      aria-label="Bridge, home"
    >
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path d="M3 24 C 9 12, 23 12, 29 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
        <path d="M3 27 H29" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      Bridge
    </Link>
  );
}
