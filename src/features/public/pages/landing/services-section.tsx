// import { motion } from "motion/react";

import { MessageSquare as MessageSquareIcon, PersonStanding as PersonStandingIcon, Zap as ZapIcon } from "lucide-react";

interface ServiceType {
    title: string;
    description: string;
    image: string;
    languages: string[];
}


const data: Array<ServiceType> = [
    {
        title: "Back-End Development",
        description: "We specialize in building robust, scalable, and high-performance back-end systems for web and mobile applications, including enterprise-grade services. Our expertise ensures reliable infrastructure that can handle complex logic and high user traffic.",
        image: "https://cdn-icons-png.flaticon.com/512/18025/18025491.png",
        languages: [
            "Python",
            "Golang",
            "JavaScript",
            "TypeScript",
            "Django"
        ]
    },
    {
        title: "Front-End Development",
        description: "We craft responsive, fast, and intuitive user interfaces using modern front-end frameworks. Our focus is on delivering seamless user experiences across devices and platforms.",
        image: "https://cdn-icons-png.flaticon.com/512/4668/4668166.png",
        languages: [
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript"
        ]
    },
    {
        title: "Web Application Development",
        description: "We develop secure, scalable, and customized web applications tailored to meet your specific business objectives, leveraging cutting-edge technologies and best practices.",
        image: "https://cdn-icons-png.flaticon.com/512/2620/2620971.png",
        languages: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Django"
        ]
    },
    {
        title: "ERP Systems Development",
        description: "We design and implement powerful ERP solutions using the Frappe framework and ERPNext, helping businesses streamline operations, improve efficiency, and gain real-time insights.",
        image: "https://cdn-icons-png.flaticon.com/512/10614/10614668.png",
        languages: [
            "Frappe",
            "ERPNext",
            "Python",
            "JavaScript"
        ]
    }
];


export const ServicesSection = () => {
    return (
        <div className="bg-white text-black min-h-screen ">
            <div className="px-2 py-12 max-w-6xl mx-auto ">
                <div className="mb-8 text-center font-bold text-2xl md:text-3xl">
                    Services we provide
                </div>

                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <a href="#contact-section">
                        <button className="text-sm text-white bg-primary px-6 py-3 rounded-md font-medium flex items-center gap-2 cursor-pointer ">
                            Request a quote
                        </button>
                    </a>
                </div>

                <div className="py-12">
                    <div className="text-center my-8">
                        <div className="font-bold text-2xl md:text-3xl">
                            Our Expertise for Your Success
                        </div>
                        <div className="mt-3 mb-6">Using powerful, industry-specific software solutions, our team can help you achieve your business goals.</div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
                        {[
                            { name: "Finance", icon: "💰" },
                            { name: "Technology", icon: "💻" },
                            { name: "Retail", icon: "🛍️" },
                            { name: "E-commerce", icon: "🛒" },
                            { name: "SaaS", icon: "☁️" },
                            { name: "Business services", icon: "📊" }
                        ].map((industry, index) => (
                            <div key={index} className="bg-gray-50 px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2">
                                <span>{industry.icon}</span>
                                <span>{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-12">

                    <div className="text-center font-bold text-3xl my-8">
                        How we helps you <br />
                        deliver the best results
                    </div>


                    <div className="md:grid md:grid-cols-3">
                        <div className="cursor-pointer bg-violet-600 text-white mb-4 px-4 py-6 md:py-12 rounded-3xl sm:px-8 lg:rotate-3 lg:hover:rotate-0 transition-transform duration-200">
                            <div className="mb-2">
                                <MessageSquareIcon className="size-10 stroke-3 lg:size-14 " />
                            </div>
                            <div className="text-lg font-bold my-4">Clear communication</div>
                            <div className="text-sm mt-2">
                                We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.
                            </div>
                        </div>

                        <div className="cursor-pointer bg-cyan-600 text-white mb-4  px-4 py-6 md:py-12 rounded-3xl sm:px-8 lg:rotate-[-3deg] lg:hover:rotate-0 transition-transform duration-200">
                            <div className="mb-2">
                                <PersonStandingIcon className="size-10 stroke-3 lg:size-14" />
                            </div>
                            <div className="text-lg font-bold my-4">Customer-Centric Approach</div>
                            <div className="text-sm mt-2">
                                We prioritize our client’s success, understand your unique needs, and deliver tailored solutions that drive your business growth.
                            </div>
                        </div>

                        <div className="cursor-pointer bg-emerald-600 text-white mb-4 px-4 py-6 md:py-12 rounded-3xl sm:px-8 lg:rotate-3 lg:hover:rotate-0 transition-transform duration-200">
                            <div className="mb-2">
                                <ZapIcon className="size-10 lg:size-14 stroke-2" />
                            </div>
                            <div className="text-lg font-bold my-4">Innovation and Excellence</div>
                            <div className="text-sm mt-2">
                                We consistently deliver innovative, high-quality solutions as a team on the cutting edge of technology trends.
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

const ServiceCard: React.FC<ServiceType> = (props) => {

    return (
        <div className="bg-white p-6 rounded-2xl cursor-pointer shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex md:flex-row-reverse md:gap-4 items-center">
                <div className="mb-2 md:shrink-0">
                    <img src={props.image} alt="" className="h-24 w-24 md:h-32 md:w-32" />
                </div>

                <div>
                    <div className="mb-2 text-lg font-bold">{props.title}</div>
                    <div className="mb-4 text-sm">
                        {props.description}
                    </div>
                </div>
            </div>

            <div className="flex gap-1 flex-wrap mb-4">
                {props.languages.map((val, index) => (<div className="rounded-full px-2 py-1 text-xs font-medium bg-gray-100" key={index}>{val}</div>))}
            </div>
            <div >
                <a href="#contact-section">

                <button className="text-xs text-white bg-primary px-4 py-2 rounded-md font-semibold cursor-pointer">
                    Let's Chat
                </button>
                </a>
            </div>

        </div>
    )
}