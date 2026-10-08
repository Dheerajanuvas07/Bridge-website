import Link from "next/link";

import { Container } from "./container";
import { Logo } from "./logo";
import { Ph } from "./ph";

const links = [
  { href: "/request", label: "Request a visit" },
  { href: "/for-parents", label: "For parents" },
  { href: "/companions", label: "Become a companion" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sage">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-muted">
            A non-medical appointment companion service. Omaha, Nebraska · small local pilot.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:text-accent hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-small font-semibold tracking-[0.08em] text-accent uppercase">Talk to a person</h2>
          <p className="mt-3">
            Phone: <Ph k="phone" />
          </p>
          <p>
            Email: <Ph k="email" />
          </p>
        </div>
      </Container>

      <Container className="border-t border-line py-8">
        <p className="text-small text-muted">
          Bridge companions do not provide medical care, advice or diagnosis. In an emergency, call 911.
        </p>
        <p className="mt-2 text-small text-muted">© {new Date().getFullYear()} Bridge</p>
      </Container>
    </footer>
  );
}
