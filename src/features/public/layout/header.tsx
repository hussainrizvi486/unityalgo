import { Link, useNavigate } from "react-router-dom";
import { MenuBar } from "./menu-bar";

export const Header = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", onClick: () => navigate('/') },
        { label: "Our Products" },
        { label: "Our Services", onClick: () => navigate('/services') },
        { label: "Contact", onClick: () => navigate('/contact') },
        { label: "Cases" },
    ]
    return (
        <header className="">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src="logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                        <div className="text-white font-bold text-xl">UnityAlgo</div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) =>
                        // <div className="cursor-pointer text-sm font-semibold " key={index}>
                        //     <a href="/" className="relative group hover:text-blue-400 transition-colors ">
                        //         <span onClick={item.onClick}>{item.link}</span>
                        //         <div className="bg-blue-400 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
                        //     </a>
                        // </div>
                        <li
                            key={index}
                            onClick={item.onClick}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer`}
                        >
                            {/* <span>{item.label}</span> */}
                            <div className="group inline-block">
                                <span className="relative cursor-pointer">
                                    {item.label}
                                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </span>
                            </div>
                        </li>
                    )}

                </div>

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