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
                            {/* <div className="flex items-center gap-2 text-center">
                                with powerful <Typewriter
                                    options={{
                                        strings: ['Software Solutions.', 'Web Applications', 'ERP Systems'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div> */}
                        </h2>

                    </motion.div>

                    <World />
                </div>
            </div>
        </div >)
}


export { LandingSection }
