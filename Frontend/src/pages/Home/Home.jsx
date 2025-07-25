import FlavorSection from "../../HomeSections/FlavoursSection/FlavourSection"
import HeroSection from "../../HomeSections/HeroSections/HeroSections"
import MessageSection from "../../HomeSections/MessageSection/MessageSection"
import Footer from "../../layout/Footer/Footer"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MessageSection />
      <FlavorSection />


      <Footer />
    </div>
  )
}

export default Home