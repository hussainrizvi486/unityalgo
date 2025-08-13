interface TechnologyType {
    name: string;
    image?: string;
}

const technologies: Record<string, TechnologyType[]> = {
    "Frontend": [
        {
            name: "React JS",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
            name: "Next.js",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
            name: "JavaScript",
            image: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
        },
        {
            name: "TypeScript",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
        {
            name: "HTML",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
            name: "Tailwind CSS",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },

    ],
    "Backend": [
        {
            name: "Django",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
        },

        {
            name: "Node.js",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
            name: "Express.js",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
            name: "Golang",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        },

    ],
    "Database": [
        {
            name: "PostgreSQL",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        },
        {
            name: "MariaDB",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/MariaDB_Logo.png",
        },
        {
            name: "MongoDB",
            image: "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
        },
        {
            name: "MySQL",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
        }
    ],
    "DevOps & Cloud": [
        {
            name: "Docker",
            image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
        },
        {
            name: "DigitalOcean",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
        },
        {
            name: "AWS",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        }
    ]
};


export const TechnologySection = () => {
    return (
        <div className="bg-white text-black py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4 font-bold text-4xl">
                        Technologies We Use
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We leverage cutting-edge technologies and industry-leading tools to build robust, scalable, and innovative solutions
                    </p>
                </div>
                {/* 
                <div className="grid gap-12">
                    {Object.entries(technologies).map(([category, techs]) => (
                        <div key={category} className="group">
                            <div className="relative mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 relative inline-block">
                                    {category}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </h3>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {techs.map((tech, index) => (
                                    <div 
                                        key={tech.name || index} 
                                        className="group/item bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                        
                                        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                            {tech.image ? (
                                                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 group-hover/item:scale-110 transition-transform duration-300">
                                                    <img
                                                        src={tech.image}
                                                        alt={tech.name}
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded"></div>
                                                </div>
                                            )}
                                            
                                            {tech.name && (
                                                <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                                                    {tech.name}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div> */}


            </div>
        </div>
    );
}