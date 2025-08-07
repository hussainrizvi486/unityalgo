import { Header } from '../../layout/header'
import { ContactSection } from '../landing/contact-section'
import { Footer } from '../../layout/footer'

const ContactPage = () => {
  return (
    <div className="bg-primary text-primary-foreground min-h-screen">
      <Header />
      <div>

        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage