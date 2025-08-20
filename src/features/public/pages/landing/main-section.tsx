import { motion } from "motion/react";
import React from "react";
// import { World } from "./globe/world";
const World = React.lazy(() => import("./globe/world"))


const LandingSection = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto">
                <div className="relative overflow-hidden h-full md:h-[40rem] px-4 sm:min-w-[40] ">
                    <motion.div
                        className="relative z-10 h-full "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
                            Elevate your business <br /> with powerful Software Solutions.
                        </h2>

                        <World />
                    </motion.div>

                </div>
                <div className="absolute z-20 block h-[80vh] w-full md:hidden">
                </div>

            </div>
        </div>
    )
}

export { LandingSection }