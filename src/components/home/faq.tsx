import Link from "next/link";

import { InView } from "@/components/motion/in-view";
import { Container, Eyebrow } from "@/components/site/container";
import { Ph } from "@/components/site/ph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/animated-accordion";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is Bridge a medical service?",
    a: "No. A companion keeps your parent company and helps with the practical parts of the day. They don’t give medical care, advice or diagnoses, and they don’t interpret what the doctor says. They pass it on.",
  },
  {
    q: "What if my parent doesn’t want this?",
    a: "Then we don’t go. We always talk with your parent before anything is booked, and their answer is the one that counts.",
  },
  {
    q: "Who are the companions?",
    a: (
      <>
        Local people who are patient, punctual and good company. How we choose them: <Ph k="screening" />
      </>
    ),
  },
  {
    q: "Where do you work?",
    a: (
      <>
        Omaha, Nebraska. Exact area: <Ph k="serviceArea" />
      </>
    ),
  },
  {
    q: "How does the ride work?",
    a: <Ph k="rideDetails" />,
  },
  {
    q: "What happens in an emergency?",
    a: "The companion calls 911 first, then you.",
  },
  {
    q: "What does it cost, and when do I pay?",
    a: (
      <>
        <Ph k="pilotPrice" /> per visit, covering up to <Ph k="hoursIncluded" />. Nothing is charged when you
        request. We talk with you and your parent first.
      </>
    ),
  },
  {
    q: "What happens to the information I send?",
    a: (
      <>
        Only the Bridge team sees it, and we use it to arrange your visit. We don’t ask for medical details. You can
        ask us to delete it at any time. Read the{" "}
        <Link href="/privacy" className="font-semibold text-accent underline underline-offset-4">
          privacy policy
        </Link>
        .
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <InView className="lg:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 id="faq-heading" className="text-h2 font-bold">
            Good questions to ask.
          </h2>
        </InView>

        <div className="lg:col-span-8">
          <Accordion type="multiple" className="border-t border-line">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
