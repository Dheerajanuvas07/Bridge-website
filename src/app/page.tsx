import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Moments } from "@/components/home/moments";
import { NotANurse } from "@/components/home/not-a-nurse";
import { ParentInCharge } from "@/components/home/parent-in-charge";
import { Pricing } from "@/components/home/pricing";
import { RequestCta } from "@/components/home/request-cta";
import { TheUpdate } from "@/components/home/the-update";
import { Who } from "@/components/home/who";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Moments />
      <ParentInCharge />
      <HowItWorks />
      <TheUpdate />
      <NotANurse />
      <Pricing />
      <Who />
      <Faq />
      <RequestCta />
    </>
  );
}
