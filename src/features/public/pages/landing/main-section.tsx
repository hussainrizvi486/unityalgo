import { motion } from "motion/react";
import { World } from "./globe/world";

const LandingSection = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto">
                <div className="relative overflow-hidden h-full md:h-[40rem] px-4 sm:min-w-[40] ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-center text-2xl md:text-4xl font-extrabold">
                            Elevate your business <br /> with powerful Software Solutions.
                        </h2>

                    </motion.div>
                    <World />
                </div>
                <div className="block md:hidden h-[80vh] w-[80vh] absolute">
                </div>
            </div>
        </div >
    )
}

export { LandingSection }