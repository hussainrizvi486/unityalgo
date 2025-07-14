import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../../../components/ui/sheet";

import { AlignJustify as MenuIcon, X as CloseIcon } from "lucide-react";
import { Brand } from "../../../components/brand";

const MenuItems = [
    {
        "label": "Home",
        "url": "/",
    },
    {
        "label": "About Us",
        "url": "/about",
    }, {

        "label": "Services",
        "url": "/services",
    },

    {
        "Contact Us": "Contact Us",
        "url": "/contact",
    }
]
const MenuBar: React.FC = () => {

    return (
        <Sheet >

            <SheetTrigger asChild>
                <MenuIcon className="size-7" />
            </SheetTrigger>

            <SheetContent side="top" className="bg-primary text-primary-foreground">
                <div className="px-2">
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

                    <div >
                        {
                            MenuItems.map((item, index) => (
                                <div key={index} className="text-sm mb-2">
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>
                </div>


            </SheetContent>

        </Sheet>
    )
}

export { MenuBar };