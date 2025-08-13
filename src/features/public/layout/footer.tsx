import { Link, NavLink } from "react-router-dom";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";
import { contactEmail, contactPhone } from "../../../global";

export const Footer = () => {
    return (
        <footer className="bg-white text-black border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="md:flex md:justify-between">
                    <div className="hidden md:block md:mr-16 md:max-w-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                            <div className="font-bold text-2xl bg-gradient-to-r text-black bg-clip-text ">UnityAlgo</div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions and innovative software development services.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                                    <MailIcon className="size-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                                </div>
                                <div className="text-sm">
                                    <a 
                                        href={`mailto:${contactEmail}`} 
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                                    <PhoneIcon className="size-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                                </div>
                                <div className="text-sm">
                                    <a 
                                        href={`tel:${contactPhone}`} 
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {contactPhone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 md:mb-0 md:grid md:grid-cols-3 md:gap-12 md:flex-auto">
                        <div className="mb-8 md:mb-0">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    Our Services
                                </h3>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full md:hidden shadow-lg">
                                    <ArrowRightIcon className="size-4 text-white" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Team Augmentation
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Mobile Development
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Back-end Development
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Frontend Development
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Web Development
                                </a>
                            </div>
                        </div>

                        <div className="mb-8 md:mb-0">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    Cases
                                    {/* <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-gray-700 via-gray-800  mt-1"></div> */}
                                </h3>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full md:hidden shadow-lg">
                                    <ArrowRightIcon className="size-4 text-white" />
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    E-commerce Platform
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Healthcare App
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Fintech Solutions
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Enterprise Software
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    AI Integration
                                </a>
                            </div>
                        </div>

                        <div className="mb-8 md:mb-0">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    Company
                                </h3>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full md:hidden shadow-lg">
                                    <ArrowRightIcon className="size-4 text-white" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link 
                                    to="/" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Home
                                </Link>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Contact Us
                                </a>
                                <a 
                                    href="#" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    About Us
                                </a>
                                <NavLink 
                                    to="/privacy-policy" 
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 hover:font-medium"
                                >
                                    Privacy Policy
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="border-t border-gray-100 pt-6 mt-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="text-sm text-gray-600 text-center md:text-left">
                            &copy; {new Date().getFullYear()} 
                            <Link 
                                to="/" 
                                className="ml-1 font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                            >
                                UnityAlgo
                            </Link>
                            . All rights reserved.
                        </div>
                        
                        <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-6">
                            <a 
                                href="#" 
                                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                            <span className="text-gray-300">•</span>
                            <NavLink 
                                to="/privacy-policy" 
                                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Privacy Policy
                            </NavLink>
                            <span className="text-gray-300">•</span>
                            <a 
                                href="#" 
                                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}