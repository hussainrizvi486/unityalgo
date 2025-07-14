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
            // image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
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
            name: "",
            image: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
        },

        {
            name: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
            name: "Express.js",
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
            image: "",
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
        <div className="bg-white text-black py-12">
            <div className="max-w-6xl mx-auto px-2">
                <div className="text-3xl font-bold mb-6">
                    Technologies we use
                </div>

                <div>
                    {Object.entries(technologies).map(([category, techs]) => (
                        <div key={category} className="mt-8">
                            <h3 className="text-lg font-semibold mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-4">

                                {techs.map((tech) => (
                                    <div key={tech.name} className="flex items-center gap-2">
                                        {tech.image ? <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="w-10 h-10 rounded-full object-contain"
                                        /> : <></>}

                                        <span className="text-sm font-semibold">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}