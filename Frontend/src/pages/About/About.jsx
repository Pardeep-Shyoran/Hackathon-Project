import Footer from "../../layout/Footer/Footer"
import AboutCard from "../../components/AboutCard/AboutCard";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>FOKUS || About</title>
      </Helmet>
      <AboutCard />

      <Footer />
    </div>
  )
}

export default About