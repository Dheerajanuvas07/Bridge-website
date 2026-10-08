import { Ph } from "@/components/site/ph";

/** The three things that happen after a request. Used on /request and /thanks. */
export function NextSteps({ them = "your parent" }: { them?: string }) {
  const steps = [
    <>We call you within <Ph k="responseTime" /> to talk it through.</>,
    <>Then we call {them}. Nothing is booked until they say yes.</>,
    <>If they’d like to go ahead, we set up the visit together. No payment now.</>,
  ];
  return (
    <ol className="space-y-5">
      {steps.map((step, i) => (
        <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full border-2 border-accent font-semibold text-accent"
          >
            {i + 1}
          </span>
          <p className="pt-1.5">{step}</p>
        </li>
      ))}
    </ol>
  );
}
