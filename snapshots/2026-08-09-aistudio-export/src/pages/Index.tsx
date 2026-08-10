import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import WhyAitist from '../components/sections/WhyAitist'
import Workflow from '../components/sections/Workflow'
import EmployeesTeaser from '../components/sections/EmployeesTeaser'
import CaseStudies from '../components/sections/CaseStudies'
import Pricing from '../components/sections/Pricing'
import Footer from '../components/sections/Footer'

export default function Index() {
  return (
    <div className="bg-[#09090b] min-h-screen selection:bg-emerald-500/30">
      <Hero />
      <Stats />
      <WhyAitist />
      <Workflow />
      <EmployeesTeaser />
      <CaseStudies />
      <Pricing />
      <Footer />
    </div>
  )
}
