import React, { useState } from "react";
import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";
import { contactEmail, contactPhone } from "../../../../global";
import { ContactForm } from "../../components/contact-form";
// import { ThankYouModal } from "../../../../components";

export const ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setIsSubmitting(true);

        // const form = e.currentTarget;
        // const formData = new FormData(form);

        // try {
        //     const res = await fetch("https://formsubmit.co/ajax/hussainrizvi486@gmail.com", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             first_name: formData.get('first_name'),
        //             last_name: formData.get('last_name'),
        //             email: formData.get('email'),
        //             phone: formData.get('phone'),
        //             message: formData.get('message'),
        //             _captcha: false,
        //             _autoresponse: "Thank you for contacting us! We'll get back to you soon."
        //         }),
        //     });

        //     if (res.ok) {
        //         const result = await res.json();
        //         if (result.success) {
        //             // Reset form
        //             form.reset();
        //             // Show thank you modal
        //             setIsModalOpen(true);
        //         } else {
        //             alert("Something went wrong. Please try again.");
        //         }
        //     } else {
        //         alert("Something went wrong. Please try again.");
        //     }
        // } catch (err) {
        //     console.error("Error submitting form:", err);
        //     alert("An error occurred while sending your message. Please try again.");
        // } finally {
        //     setIsSubmitting(false);
        // }
    };



    return (
        <div className="mx-auto max-w-6xl px-2 py-16" id="contact-section">
            <div className="flex">
                <div className="basis-1/3">
                    <div className="mb-4">
                        <div className="text-3xl font-bold">
                            Collaborate with us to build greatness.
                        </div>
                        <div>
                            We believe in turning ideas into reality and we're ready to join your journey. <br />
                            Reach out to us and let's start discussing your project.
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-white mb-2">
                        <MailIcon className="size-5 " />
                        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <PhoneIcon className="size-5 text-white" />
                        <a href={`tel:${contactPhone}`}>{contactPhone}</a>
                    </div>
                </div>



                <div className="basis-2/3">
                    <ContactForm />
                </div>
            </div>

            <div className="md:flex md:gap-12 md:items-start">

                <div className="md:flex-auto">

                    {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"> */}
                    {/* <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3> */}
                    {/* </div> */}
                </div>
            </div>

            {/* Thank You Modal */}
            {/* <ThankYouModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            /> */}
        </div>
    )
}
