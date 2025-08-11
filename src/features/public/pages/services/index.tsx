import { Header } from '../../layout/header'
import { ContactSection } from '../landing/contact-section'
import { Footer } from '../../layout/footer'
import { ServicesSection } from '../landing/services-section'
import { ProjectWorkflow } from './components/project-workflow'
import { TechStack } from './components/tech-section'

const Index = () => {
    return (
        <>
            <div className="bg-primary text-primary-foreground min-h-screen">
                <Header />
                <main>
                    <div>
                        <ServicesSection />
                    </div>
                    <div className='bg-white text-gray-900'>
                        <ProjectWorkflow />
                    </div>
                    <div className='bg-white text-gray-900'>
                        <TechStack />
                    </div>
                    
                    <div>
                        <ContactSection />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Index