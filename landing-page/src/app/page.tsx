import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { WhatWeDo } from '@/components/what-we-do'
import { EvalStack } from '@/components/eval-stack'
import { Benchmarks } from '@/components/benchmarks'
import { DevEx } from '@/components/dev-ex'
import { SocialProof } from '@/components/social-proof'
import { Pricing } from '@/components/pricing'
import { FooterCta } from '@/components/footer-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <EvalStack />
        <Benchmarks />
        <DevEx />
        <SocialProof />
        <Pricing />
        <FooterCta />
      </main>
      <Footer />
    </>
  )
}
