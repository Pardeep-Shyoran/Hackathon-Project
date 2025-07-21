import ContactForm from '../../components/ContactForm/ContactForm'
import FrequentQuestions from '../../components/FrequentQuestions/FrequentQuestions'
import Footer from '../../layout/Footer/Footer'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactPage}>
        <ContactForm />
        <FrequentQuestions />
        <Footer />
    </div>
  )
}

export default Contact