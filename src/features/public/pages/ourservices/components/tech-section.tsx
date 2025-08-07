import { useState } from "react";

type TechnologyType = {
    name: string;
    image?: string;
};

type TechGroup = {
    title: string;
    techs: TechnologyType[];
};

const allSections: TechGroup[] = [
    {
        title: "Web",
        techs: [
            {
                name: "React JS",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            },
            {
                name: "JavaScript",
                image: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
            },
            {
                name: "WordPress",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
            },
            {
                name: "Next.js",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
            },
            {
                name: "TypeScript",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
            },
            {
                name: "Tailwind CSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            },
            {
                name: "HTML",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            },
        ],
    },
    {
        title: "Back-end",
        techs: [
            {
                name: "Node.js",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            },
            {
                name: "Nest.js",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
            },
            {
                name: "Express",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            },
            {
                name: "PHP",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            },
            {
                name: "Python",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            },
            {
                name: "Django",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
            },
            {
                name: "Flask",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
            },
            {
                name: "Ruby on Rails",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
            },
            {
                name: "Go",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
            },
            {
                name: "Rust",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
            },
            {
                name: "Erlang",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Erlang_logo.svg",
            },
            {
                name: "Julia",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
            },
            {
                name: "C/C++",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
            },
            {
                name: "C#",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
            },
            {
                name: "R",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
            },
            {
                name: "Laravel",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
            },
        ],
    },
    {
        title: "Database",
        techs: [
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

    },
    {
        title: "DevOps & Cloud",
        techs: [
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
    }
]

const TechCard = ({ tech }: { tech: TechnologyType }) => (
    <div
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

            <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                {tech.name}
            </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300"></div>
    </div>
);

export const TechStack = () => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggleSection = (title: string) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <section className="mx-auto max-w-6xl py-8 px-4 space-y-10">
            <h2 className="text-2xl font-bold text-gray-900">Technical Stack</h2>

            {allSections.map((section) => {
                const isExpanded = expanded[section.title];
                const visibleTechs = isExpanded ? section.techs : section.techs.slice(0, 5);

                return (
                    <div key={section.title}>
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {visibleTechs.map((tech, index) => (
                                <TechCard key={`${tech.name}-${index}`} tech={tech} />
                            ))}

                            {section.techs.length > 5 && (
                                <div
                                    onClick={() => toggleSection(section.title)}
                                    className="flex flex-col items-center justify-center text-center cursor-pointer border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/item"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10 space-y-2 flex flex-col items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                                            <span className="text-2xl text-gray-700">
                                                {isExpanded ? "←" : "→"}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                                            {isExpanded ? "Show less" : "Show more"}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
