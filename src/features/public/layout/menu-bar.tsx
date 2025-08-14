import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../../../components/ui/sheet";

import { AlignJustify as MenuIcon, X as CloseIcon } from "lucide-react";
import { Brand } from "../../../components/brand";
import { useNavigate } from "react-router-dom";

// const MenuItems = [
//     {
//         "label": "Home",
//         "url": "/",
//     },
//     {
//         "label": "About Us",
//         "url": "/about",
//     }, {

//         "label": "Services",
//         "url": "/services",
//     },

//     {
//         "Contact Us": "Contact Us",
//         "url": "/contact",
//     }
// ]
const MenuBar: React.FC = () => {
    const navigate = useNavigate();

    const MenuItems = [
        { label: "Home", onClick: () => navigate('/') },
        { label: "Services", onClick: () => navigate('/services') },
        { label: "About Us" },
        { label: "Contact Us", onClick: () => navigate('/contact') },
    ]

    return (
        <Sheet >

            <SheetTrigger asChild>
                <MenuIcon className="size-7" />
            </SheetTrigger>

            <SheetContent side="top" className="bg-primary text-primary-foreground">
                <div className="px-2">
                    <div className="flex items-center justify-between mb-6">
                        <div onClick={() => navigate('/')}>
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

                    {/* <div className="space-y-2"> */}
                    <div className="flex justify-between py-2">
                        {
                            MenuItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={item.onClick}
                                    className="text-sm"
                                >
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