import React from "react"

import { Header } from "../../layout/header";
import { LandingSection } from "./main-section";
import { ServicesSection } from "./services-section";
// import { TechnologySection } from "./technologies-section";
import { ContactSection } from "./contact-section";
import { Footer } from "../../layout/footer";

const Index: React.FC = () => {
    return (
        <div className="bg-primary text-primary-foreground min-h-screen">
            <Header />
            <main>
                <LandingSection />
                <ServicesSection />
                {/* <TechnologySection /> */}
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}

export default Index;