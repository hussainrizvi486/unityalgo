import React, { useState } from "react";
import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";
import { contactEmail, contactPhone } from "../../../../global";
import { ThankYouModal } from "../../../../components";

export const ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/hussainrizvi486@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    first_name: formData.get('first_name'),
                    last_name: formData.get('last_name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message'),
                    _captcha: false,
                    _autoresponse: "Thank you for contacting us! We'll get back to you soon."
                }),
            });

            if (res.ok) {
                const result = await res.json();
                if (result.success) {
                    // Reset form
                    form.reset();
                    // Show thank you modal
                    setIsModalOpen(true);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            alert("An error occurred while sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <div className="py-40 mx-auto max-w-6xl px-6" id="contact-section">
            <div className="md:flex md:gap-12 md:items-start">

                <div className="mb-12 md:mb-0 md:basis-[45%]">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Collaborate with us to build greatness.
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We believe in turning ideas into reality and we're ready to join your journey. Reach out to us and let's start discussing your project.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/15 transition-all">
                                <MailIcon className="size-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Email us at</p>
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="text-lg text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                                >
                                    {contactEmail}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/15 transition-all">
                                <PhoneIcon className="size-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Call us at</p>
                                <a
                                    href={`tel:${contactPhone}`}
                                    className="text-lg text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                                >
                                    {contactPhone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="md:flex md:gap-4">
                                <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
                                    <label htmlFor="first_name" className="text-sm font-medium text-gray-300 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder="John"
                                        required
                                        className="text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-1 focus:ring-blue-900 focus:ring-offset-1 focus:border-transparent outline-none transition-all duration-200 hover:bg-white/15"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-1">
                                    <label htmlFor="last_name" className="text-sm font-medium text-gray-300 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Doe"
                                        required
                                        className="text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-1 focus:ring-blue-900 focus:ring-offset-1 focus:border-transparent outline-none transition-all duration-200 hover:bg-white/15"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    required
                                    className="text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-1 focus:ring-blue-900 focus:ring-offset-1 focus:border-transparent outline-none transition-all duration-200 hover:bg-white/15"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 (555) 123-4567"
                                    className="text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-1 focus:ring-blue-900 focus:ring-offset-1 focus:border-transparent outline-none transition-all duration-200 hover:bg-white/15"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Tell us about your project and how we can help you..."
                                    className="text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-1 focus:ring-blue-900 focus:ring-offset-1 focus:border-transparent outline-none resize-none transition-all duration-200 hover:bg-white/15"
                                />
                            </div>

                            <div className="pt-2">
                                {/* <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent outline-none"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button> */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-1"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/* Thank You Modal */}
            <ThankYouModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}