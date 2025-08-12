import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";
import { contactEmail, contactPhone } from "../../../../global";
import { ContactForm } from "../../components/contact-form";

const ContactSection = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 py-16" id="contact-section">
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="basis-1/2">
                    <div className="mb-8">
                        <div className="text-2xl md:text-3xl font-bold mb-4">
                            Collaborate with us to build greatness.
                        </div>
                        <div className="text-sm">
                            We believe in turning ideas into reality and we're ready to join your journey. <br />
                            Reach out to us and let's start discussing your project.
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 text-white mb-2 text-sm">
                            <MailIcon className="size-5 " />
                            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        </div>
                        <div className="flex items-center gap-4 text-white text-sm">
                            <PhoneIcon className="size-5 text-white" />
                            <a href={`tel:${contactPhone}`}>{contactPhone}</a>
                        </div>
                    </div>
                </div>
                <div >
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export { ContactSection };
