import { ServicesSection } from '../landing/services-section'
import { Header } from '../../layout/header'
import { ContactSection } from '../landing/contact-section'
import { Footer } from '../../layout/footer'

const ServicePage = () => {
    return (
        <>
            <div className="bg-primary text-primary-foreground min-h-screen">
                <Header />
                <div>
                    <ServicesSection />
                    <ContactSection />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ServicePage