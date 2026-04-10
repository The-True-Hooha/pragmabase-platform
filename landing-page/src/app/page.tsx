import { Nav } from '@/components/nav'
import { Hero } from '@/components/landing/Hero'
import { Problem } from '@/components/landing/Problem'
import { Solution } from '@/components/landing/Solution'
import { Features } from '@/components/landing/Features'
import { ForWho } from '@/components/landing/ForWho'
import { Roku } from '@/components/landing/Roku'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { UseCases } from '@/components/landing/UseCases'
import { ReliabilityLab } from '@/components/landing/ReliabilityLab'
import { SocialProof } from '@/components/landing/SocialProof'
import { CTA } from '@/components/landing/CTA'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <ForWho />
        <Roku />
        <HowItWorks />
        <UseCases />
        <ReliabilityLab />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
