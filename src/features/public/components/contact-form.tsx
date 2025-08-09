const ContactForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        return
    }
    return (
        <div>

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
                        // disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-1"
                    >
                        {/* {isSubmitting ? "Sending..." : "Send Message"} */}
                    </button>
                </div>
            </form>
        </div>
    )
}

export { ContactForm };