import TastyTalkCard from "../../components/TastyTalkCard/TastyTalkCard"
import Footer from "../../layout/Footer/Footer"
import { Helmet } from 'react-helmet'

const TastyTalks = () => {
  return (
    <div>
      <Helmet>
        <title>FOKUS || Tasty Talks</title>
      </Helmet>
        <TastyTalkCard />
        <Footer />
    </div>
  )
}

export default TastyTalks