import { useNavigate, Link } from "react-router-dom";
import { MessageSquare as MessageSquareIcon, PersonStanding as PersonStandingIcon, Zap as ZapIcon } from "lucide-react";

interface ServiceType {
    title: string;
    description: string;
    image: string;
    languages: string[];
    link?: string;
}

const data: Array<ServiceType> = [
    {
        title: "Front-End Development",
        description: "We craft responsive, fast, and intuitive user interfaces using modern front-end frameworks. Our focus is on delivering seamless user experiences across devices and platforms.",
        image: "https://cdn-icons-png.flaticon.com/512/4668/4668166.png",
        languages: [
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
        ],
        // link: "/services/frontend"
    },
    {
        title: "Back-End Development",
        description: "We specialize in building robust, scalable, and high-performance back-end systems for web and mobile applications, including enterprise-grade services. Our expertise ensures reliable infrastructure that can handle complex logic and high user traffic.",
        image: "https://cdn-icons-png.flaticon.com/512/5432/5432506.png",
        languages: [
            "Python",
            "Go",
            "JavaScript",
            "TypeScript",
            "Django"
        ],
        // link: "/services/backend"
    },
    {
        title: "Web Application Development",
        description: "We develop secure, scalable, and customized web applications tailored to meet your specific business objectives, leveraging cutting-edge technologies and best practices.",
        image: "https://cdn-icons-png.flaticon.com/512/5044/5044729.png",
        languages: [
            "Python",
            "JavaScript",
            "TypeScript",
            "React JS",
            "Next.js",
            "Django"
        ],
        // link: "/services/web-application"
    },
    {
        title: "ERP Systems Development",
        description: "We design and implement powerful ERP solutions using the Frappe framework and ERPNext, helping businesses streamline operations, improve efficiency, and gain real-time insights.",
        image: "https://cdn-icons-png.flaticon.com/512/10614/10614668.png",
        languages: [
            "Frappe",
            "ERPNext",
            "Python",
            "Typescript",
            "Go"
        ],
        link: "/services/erp"
    }
];


export const ServicesSection = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <div className="px-4 py-16 max-w-7xl mx-auto lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-bold text-2xl md:text-4xl ">
                        Our Services
                    </h2>
                </div>

                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {data.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>


                <div className="py-16">
                    <div className="text-center mb-12">
                        <h3 className="font-bold text-2xl md:text-4xl ">
                            Our Expertise for Your Success
                        </h3>
                        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Using powerful, industry-specific software solutions, our team can help you achieve your business goals.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
                        {[
                            { name: "Finance", icon: "💰", color: "hover:bg-yellow-50 hover:border-yellow-200" },
                            { name: "Technology", icon: "💻", color: "hover:bg-blue-50 hover:border-blue-200" },
                            { name: "Retail", icon: "🛍️", color: "hover:bg-pink-50 hover:border-pink-200" },
                            { name: "E-commerce", icon: "🛒", color: "hover:bg-green-50 hover:border-green-200" },
                            { name: "SaaS", icon: "☁️", color: "hover:bg-cyan-50 hover:border-cyan-200" },
                            { name: "Business services", icon: "📊", color: "hover:bg-purple-50 hover:border-purple-200" }
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className={`bg-white border-2 border-gray-100 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-sm hover:shadow-md transform hover:-translate-y-1 ${industry.color}`}
                            >
                                <span className="text-xl">{industry.icon}</span>
                                <span className="text-gray-700">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-16">

                    <div className="text-center mb-16">
                        <h3 className="font-bold text-3xl">
                            How We Help You <br />
                            Deliver the Best Results
                        </h3>
                    </div>


                    <div className="md:grid md:grid-cols-3">
                        <div className="group cursor-pointer bg-[#2563EB] text-white mb-4 px-6 py-8 md:py-12 rounded-3xl hover:shadow-2xl hover:shadow-violet-500/25 lg:rotate-2 lg:hover:rotate-0 transition-all duration-300 transform hover:scale-105">
                            <div className="mb-6">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                    <MessageSquareIcon className="size-8 lg:size-10 stroke-2" />
                                </div>
                            </div>
                            <div className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-violet-100 transition-colors">
                                Transparent Communication
                            </div>
                            <div className="text-sm lg:text-base leading-relaxed text-violet-100">
                                We foster trust through openness, uphold our commitments, and ensure every interaction is clear and straightforward.
                            </div>
                        </div>

                        <div className="cursor-pointer bg-[#F97316] text-white mb-4  px-4 py-6 md:py-12 rounded-3xl sm:px-8 lg:rotate-[-3deg] lg:hover:rotate-0 transition-transform duration-200">
                            <div className="mb-2">
                                <PersonStandingIcon className="size-10 stroke-3 lg:size-14" />
                            </div>
                            <div className="text-lg font-bold my-4">Customer-First Mindset</div>
                            <div className="text-sm mt-2">
                                We focus on your success by understanding your goals and delivering customized solutions that drive lasting growth.

                            </div>
                        </div>

                        <div className="cursor-pointer bg-[#7C3AED] text-white mb-4 px-4 py-6 md:py-12 rounded-3xl sm:px-8 lg:rotate-3 lg:hover:rotate-0 transition-transform duration-200">
                            <div className="mb-2">
                                <ZapIcon className="size-10 lg:size-14 stroke-2" />
                            </div>
                            <div className="text-lg font-bold my-4">Innovation with Excellence
                            </div>
                            <div className="text-sm mt-2">
                                Our team delivers creative, high-quality solutions while staying ahead of emerging technology trends.

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

const ServiceCard: React.FC<ServiceType> = (props) => {
    const navigate = useNavigate();

    return (
        <div className="group bg-white p-4 md:p-8 rounded-lg cursor-pointer shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-500 transform  bg-gradient-to-br from-white to-gray-50/30">
            <div className="md:flex md:flex-row-reverse md:gap-6 items-start">

                <div className="mb-4 md:mb-0 md:shrink-0 flex justify-center md:justify-end">
                    <img
                        src={props.image}
                        alt={props.title}
                        className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain"
                    />
                </div>

                <div className="flex-1">
                    <div className="mb-3 text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {props.title}
                    </div>
                    <div className="mb-6 text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {props.description}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap mb-6">
                {props.languages.map((val, index) => (
                    <div
                        key={index}
                        className="rounded-full px-3 py-2 text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-100 hover:to-purple-100 hover:text-gray-800 transition-all duration-200 transform hover:scale-105"
                    >
                        {val}
                    </div>
                ))}
            </div>

            <div className="space-x-2 pt-2">
                <button onClick={() => navigate('/contact')} className="text-xs text-white bg-primary px-4 py-2 rounded-md font-semibold cursor-pointer border-1 border-primary">
                    Let's Chat
                </button>
                {
                    props.link &&
                    <Link to={props.link}>
                        <button className="text-xs border border-gray-400 text-gray-600 px-4 py-2 rounded-md font-semibold">
                            Learn more
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}