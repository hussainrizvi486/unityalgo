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
        title: "Frontend",
        techs: [
            {
                name: "React JS",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            },
            {
                name: "TypeScript",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
            },
            {
                name: "Next.js",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
            },
            {
                name: "Tailwind CSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            },
            {
                name: "HTML5",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            },
            {
                name: "CSS3",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            },
            {
                name: "JavaScript",
                image: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
            },
            {
                name: "WordPress",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
            },
        ],
    },
    {
        title: "Backend",
        techs: [
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
                name: "Node.js",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            },
            {
                name: "Express",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            },
            {
                name: "PHP",
                image: "https://diffco.us/wp-content/uploads/2024/04/3-11.svg",
            },
            {
                name: "Ruby on Rails",
                // image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
                image: "	https://diffco.us/wp-content/uploads/2024/04/3-9.svg",
            },
            {
                name: "Go",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
            },
        ],
    },
    {
        title: "Databases",
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
    },
    {
        title: "Platforms",
        techs: [
            {
                name: "ERPNext",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Erpnext_logo.svg",
            },
            {
                name: "Odoo",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
            },
        ],

    },
]

const TechCard = ({ tech }: { tech: TechnologyType }) => (
    <div
        className="group/item bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-100 cursor-pointer relative overflow-hidden"
    >
        <div className="absolute opacity-0 group-hover/item:opacity-100 transition-opacity"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            {tech.image ? (
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100">
                    <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                    />
                </div>
            ) : (
                <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                    <div className="w-6 h-6 rounded"></div>
                </div>
            )}

            <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                {tech.name}
            </span>
        </div>

        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-primary/80 to-blue-600 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300"></div> */}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Technical Stack</h2>

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
                                    className="flex flex-col items-center justify-center text-center cursor-pointer bg-gray-50/10 border border-gray-100 rounded-lg p-6 hover:shadow-md hover:border-blue-200 overflow-hidden group/item"
                                >
                                    <div className="space-y-2 flex flex-col items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg group-hover/item:scale-105 transition-transform duration-300">
                                            <span className="text-2xl text-gray-700">
                                                {isExpanded ? "←" : "→"}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                                            {isExpanded ? "Show less" : "Show more"}
                                        </span>
                                    </div>

                                </div>  
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
