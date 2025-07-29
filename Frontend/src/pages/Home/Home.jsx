import FlavorSection from "../../HomeSections/FlavoursSection/FlavourSection"
import HeroSection from "../../HomeSections/HeroSections/HeroSections"
import MessageSection from "../../HomeSections/MessageSection/MessageSection"
import Footer from "../../layout/Footer/Footer"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FOKUS || Home</title>
      </Helmet>
      <HeroSection />
      <MessageSection />
      <FlavorSection />


      <Footer />
    </div>
  )
}

export default Home