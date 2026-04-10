import { Nav } from "@/components/nav";
import { HackathonBanner } from "@/components/landing/HackathonBanner";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { WhyStellar } from "@/components/landing/WhyStellar";
import { X402Explainer } from "@/components/landing/X402Explainer";
import { Features } from "@/components/landing/Features";
import { DemoWalkthrough } from "@/components/landing/DemoWalkthrough";
import { Roku } from "@/components/landing/Roku";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SorobanShowcase } from "@/components/landing/SorobanShowcase";
import { LiveActivity } from "@/components/landing/LiveActivity";
import { UseCases } from "@/components/landing/UseCases";
import { ReliabilityLab } from "@/components/landing/ReliabilityLab";
import { ForWho } from "@/components/landing/ForWho";
import { SocialProof } from "@/components/landing/SocialProof";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HackathonBanner />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyStellar />
        <X402Explainer />
        <Features />
        <DemoWalkthrough />
        <Roku />
        <HowItWorks />
        <SorobanShowcase />
        <LiveActivity />
        <UseCases />
        <ReliabilityLab />
        <ForWho />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
