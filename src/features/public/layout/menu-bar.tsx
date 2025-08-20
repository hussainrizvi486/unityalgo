import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../../../components/ui/sheet";

import { AlignJustify as MenuIcon, X as CloseIcon } from "lucide-react";
import { Brand } from "../../../components/brand";
import { navItems } from "./header";
import { Link } from "react-router-dom";


const MenuBar: React.FC = () => {

    return (
        <Sheet>

            <SheetTrigger asChild >
                <MenuIcon className="size-6" />
            </SheetTrigger>

            <SheetContent side="top" className="bg-primary text-primary-foreground px-2 py-4 border-none shadow-none">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <Brand />
                        </div>
                        <div>
                            <SheetClose asChild>
                                <div className="cursor-pointer">
                                    <CloseIcon />
                                </div>
                            </SheetClose>
                        </div>
                    </div>

                    <div className="px-2">
                        {
                            navItems.map((item, index) => (
                                <Link to={item.url} key={index} >
                                    <div className="text-sm mb-3 font-medium">
                                        {item.label}
                                        {/* <div className="group inline-block">
                                            <span className="relative cursor-pointer">
                                                {item.label}
                                                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-active:w-full"></span>
                                            </span>
                                        </div> */}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


            </SheetContent>

        </Sheet>
    )
}

export { MenuBar };