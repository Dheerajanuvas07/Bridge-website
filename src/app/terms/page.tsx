import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/pages/legal-page";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "Terms (draft)",
  description: "The plain-English terms for Bridge visits during the pilot. Draft, needs review.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      intro={<p>The plain-English terms for Bridge visits during the pilot.</p>}
    >
      <h2>What Bridge is</h2>
      <p>
        Bridge is a non-medical companion service, run as a small pilot in Omaha, Nebraska. A companion goes with an
        older adult to a medical appointment and, with their permission, tells their family what the doctor said.
      </p>

      <h2>What Bridge is not</h2>
      <ul>
        <li>Not a medical, nursing or home-care service.</li>
        <li>Companions don’t give medical advice, diagnose, interpret results, or give or manage medications.</li>
        <li>No nursing, and no personal care like bathing or toileting. A steady arm and help with a walker, always.</li>
        <li>Not an emergency service. In an emergency, the companion calls 911 first, then the family.</li>
      </ul>

      <h2>The older adult decides</h2>
      <p>
        We talk with the person who has the appointment before anything is booked. If they say no, we don’t go. They
        decide whether the companion joins the exam room and what is shared with their family, and they can change
        their mind at any time.
      </p>

      <h2>The update</h2>
      <p>
        The written update relays what the doctor or office said, as closely as we can. It isn’t medical advice and
        it isn’t a medical record. For anything medical, ask the doctor’s office directly.
      </p>

      <h2>Getting there</h2>
      <p>We’ll arrange the ride with you.</p>

      <h2>Price and payment</h2>
      <p>
        Pilot price: <Ph k="pilotPrice" /> per visit, covering up to <Ph k="hoursIncluded" />. If a visit runs
        longer: <Ph k="extraRate" />. Nothing is charged when you request a visit; we talk it through first.
      </p>

      <h2>Changing or cancelling</h2>
      <p>
        <Ph k="cancellationPolicy" />
      </p>

      <h2>Safety</h2>
      <p>
        A companion may end a visit if it becomes unsafe, or if they’re asked to do something outside these terms,
        such as medical care.
      </p>

      <h2>Limits of responsibility</h2>
      <p>
        <span className="placeholder">[Liability terms: needs legal review]</span>
      </p>

      <h2>Privacy</h2>
      <p>
        See our <Link href="/privacy">privacy policy</Link> for what we collect and how to have it deleted.
      </p>

      <h2>The law that applies</h2>
      <p>These terms are governed by the laws of the State of Nebraska.</p>

      <h2>Questions</h2>
      <p>
        Call <Ph k="phone" /> or write to <Ph k="email" />.
      </p>
    </LegalPage>
  );
}
