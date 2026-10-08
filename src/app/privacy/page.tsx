import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/pages/legal-page";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "Privacy policy (draft)",
  description: "What Bridge collects, why, who sees it, and how to have it deleted. Draft, needs review.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro={<p>Plain English: what we collect, why, who sees it, and how to have it deleted.</p>}
    >
      <h2>Who we are</h2>
      <p>
        Bridge is a small, non-medical appointment companion pilot in Omaha, Nebraska, run by DJ. You can reach us
        at <Ph k="phone" /> or <Ph k="email" />.
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>When you request a visit:</strong> your name, phone and/or email, how you’re related to the person
        with the appointment, their first name if you give it, the city, the appointment date and kind (for example
        “specialist visit”), whether they’ve agreed, what help would be useful, and anything you choose to add in the
        optional questions and notes.
      </p>
      <p>
        <strong>When you apply to be a companion:</strong> your name, phone and/or email, where you live, when
        you’re free, whether you have a car, and why you’d like to do this.
      </p>
      <p>
        <strong>We don’t ask for medical details.</strong> No diagnoses, conditions, medications or insurance
        information. Please don’t include them in the free-text boxes.
      </p>
      <p>
        <strong>Automatically:</strong> which link or poster brought you to the site (for example a church
        bulletin), and the website you came from, if any. To stop spam, we keep a scrambled, one-way version of your
        internet (IP) address that can’t be turned back into the address. We don’t use advertising cookies or
        tracking pixels.
      </p>
      <p>
        <strong>On your own device:</strong> while you fill in the request form, your browser keeps an unsent copy so
        you don’t lose your place. It stays on your device and is deleted when you send the form.
      </p>

      <h2>Why we collect it</h2>
      <ul>
        <li>To call you back, talk with your parent, and arrange a visit if they agree.</li>
        <li>To review companion applications.</li>
        <li>To learn which posters, groups and posts reach people, so we can spend our time well.</li>
        <li>To keep the forms free of spam.</li>
      </ul>

      <h2>Who sees it</h2>
      <ul>
        <li>DJ, who runs Bridge. Anyone who helps later sees only what they need.</li>
        <li>
          A companion assigned to a visit sees only what they need for that visit, such as a first name and the
          appointment time.
        </li>
        <li>
          Companies that run the website for us: Supabase (where the information is stored), Resend (which sends our
          emails) and Netlify (which hosts the site). They store or process it on our behalf.
        </li>
      </ul>
      <p>We don’t sell your information, and we don’t share it for advertising.</p>

      <h2>About the person with the appointment</h2>
      <p>
        After a visit, we share what the doctor said only with the people your parent agrees to, and only what they
        agree to. Anything they ask us to keep private stays private.
      </p>

      <h2>How long we keep it</h2>
      <p>If a request doesn’t become a visit, we delete it 12 months after it was sent.</p>
      <p>
        Visit records and companion applications: <Ph k="retention" />
      </p>

      <h2>Seeing, fixing or deleting your information</h2>
      <p>
        Ask us at <Ph k="phone" /> or <Ph k="email" />. We’ll tell you what we have, correct it, or delete it, and
        let you know when it’s done.
      </p>

      <h2>Keeping it safe</h2>
      <p>
        Only Bridge’s admin account can read the information, and it’s protected by a login. No system is perfect;
        if something goes wrong, we’ll tell the people affected.
      </p>

      <h2>Children</h2>
      <p>Bridge is for adults. We don’t knowingly collect information from anyone under 18.</p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we’ll update this page and say what changed. See also our{" "}
        <Link href="/terms">terms</Link>.
      </p>
    </LegalPage>
  );
}
