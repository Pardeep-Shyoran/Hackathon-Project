import ContactForm from '../../components/ContactForm/ContactForm'
import FrequentQuestions from '../../components/FrequentQuestions/FrequentQuestions'
import Footer from '../../layout/Footer/Footer'
import styles from './Contact.module.css'
import { Helmet } from 'react-helmet'; // Importing Helmet for SEO purposes

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <Helmet>
        <title>FOKUS || Contact</title>
      </Helmet>
        <ContactForm />
        <FrequentQuestions />
        <Footer />
    </div>
  )
}

export default Contact