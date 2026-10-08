/**
 * A sample family update. Clearly labeled as an example: Bridge has no real
 * visits to show yet, and this must never read as one.
 */
const times = [
  { label: "Picked up", time: "9:10 am" },
  { label: "Checked in", time: "9:41 am" },
  { label: "Seen", time: "10:05 am" },
  { label: "Home", time: "11:32 am" },
];

export function ExampleUpdateCard() {
  return (
    <figure
      aria-label="Example of a family update. Not a real visit."
      className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[0_1px_2px_rgb(23_32_28/0.04),0_24px_48px_-24px_rgb(23_32_28/0.18)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-sage px-6 py-4">
        <p className="font-semibold">Visit update · Tuesday</p>
        <p className="rounded-full border-2 border-dashed border-accent bg-paper px-3 py-1 text-small font-semibold text-accent">
          Example. Not a real visit.
        </p>
      </div>

      <div className="space-y-6 px-6 py-6">
        <section aria-label="Visit times">
          <ol className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            {times.map((item) => (
              <li key={item.label}>
                <p className="text-small text-muted">{item.label}</p>
                <p className="font-semibold tabular-nums">{item.time}</p>
              </li>
            ))}
          </ol>
        </section>

        <CardBlock title="What the doctor said">
          The doctor said the knee is healing as expected. Keep doing the exercises from physical therapy, twice a day.
        </CardBlock>

        <CardBlock title="Your question">
          <span className="font-semibold">“Can she drive again yet?”</span> Not yet. The doctor wants to check
          again at the next visit.
        </CardBlock>

        <CardBlock title="Next appointment">Thursday, November 20 · 2:30 pm · same clinic</CardBlock>

        <CardBlock title="A note from Mom">
          <span className="italic">“Tell Sam not to worry. The waiting room coffee is still terrible.”</span>
        </CardBlock>
      </div>

      <figcaption className="border-t border-line px-6 py-4 text-small text-muted">
        Shared with Mom’s permission. We pass on what the doctor said. We don’t interpret it.
      </figcaption>
    </figure>
  );
}

function CardBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title} className="border-t border-line pt-5">
      <p className="text-small font-semibold tracking-[0.06em] text-accent uppercase">{title}</p>
      <p className="mt-1.5">{children}</p>
    </section>
  );
}
