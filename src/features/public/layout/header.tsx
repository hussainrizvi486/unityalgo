import { Link } from "react-router-dom";
import { MenuBar } from "./menu-bar";

export const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/services" },
    { label: "Our Services", url: "/services" },
    { label: "Contact", url: "/contact" },
]


export const Header = () => {

    return (
        <header className="">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
                {/* <div className="flex items-center"> */}
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src="logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                        <div className="text-white font-bold text-xl">UnityAlgo</div>
                    </div>
                </Link>

                <div className="hidden md:flex md:items-center gap-3 ">
                    {navItems.map((item, index) =>
                        <Link
                            key={index}
                            to={item.url}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer font-medium`}
                        >
                            {/* <span>{item.label}</span> */}
                            <div className="group inline-block">
                                <span className="relative cursor-pointer">
                                    {item.label}
                                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </span>
                            </div>
                        </Link>
                    )}
                </div>

                {/* </div> */}
                <div className="hidden md:flex">
                    <a href="#contact-section" className="">
                        <button
                            className="py-2 px-6 text-sm rounded-md font-semibold border-2 hover:text-blue-400 transition-colors cursor-pointer">
                            Let's Chat
                        </button>
                    </a>
                </div>

                <div className="md:hidden">
                    <MenuBar />
                </div>
            </div>
        </header>
    )
}