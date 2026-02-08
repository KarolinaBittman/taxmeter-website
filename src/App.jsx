import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark min-h-screen text-text">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Privacy />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
