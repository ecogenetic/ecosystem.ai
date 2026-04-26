import { Hero } from './Hero'
import Feature from './feature'
import { EcosystemCTA } from './EcosystemCTA'

export const Home = () => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero />
      <Feature locate={''} />
      <EcosystemCTA />
    </main>
  </>
)
