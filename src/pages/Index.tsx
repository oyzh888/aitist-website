import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import WhyAitist from '../components/sections/WhyAitist'
import EmployeesTeaser from '../components/sections/EmployeesTeaser'
import CaseStudies from '../components/sections/CaseStudies'
import TechArch from '../components/sections/TechArch'
import Pricing from '../components/sections/Pricing'
import Footer from '../components/sections/Footer'

export default function Index() {
  return (
    <div className="bg-[#09090b] min-h-screen">
      <Hero />
      <Stats />
      <WhyAitist />
      <EmployeesTeaser />
      <CaseStudies />
      <TechArch />
      <Pricing />
      <Footer />
    </div>
  )
}
