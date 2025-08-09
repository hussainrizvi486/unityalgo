import { Header } from '../../layout/header';
import { Footer } from '../../layout/footer';
import { } from '../../layout/footer'
import { Link, useNavigate } from "react-router-dom";
// import { MenuBar } from "./menu-bar";


interface ServiceType {
  title: string;
  description: string;
  image: string;
}

interface TechnologyType {
  name: string;
  image?: string;
}

const technologies = [
  {
    image: "https://diffco.us/wp-content/uploads/2024/04/1-1.svg",
    label: "JavaScript"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/04/1-2.svg",
    label: "React"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/04/1-3.svg",
    label: "Next.js"
  },
  // {
  //   image: "https://diffco.us/wp-content/uploads/2024/04/1-4.svg",
  //   label: "Angular"
  // },
  // {
  //   image: "https://diffco.us/wp-content/uploads/2024/04/1-5.svg",
  //   label: "Vue.js"
  // },
  {
    image: "https://diffco.us/wp-content/uploads/2024/07/Typescript.png",
    label: "Typescript"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/07/Tailwind-1.png",
    label: "Tailwind"
  }
]

const data: Array<ServiceType> = [
  {
    title: "Front-end",
    description: "Our team can develop the front end user interface of your website or web app and integrate it with your existing backend and API.",
    image: "https://cdn-icons-png.flaticon.com/512/13191/13191231.png",
  },
  {
    title: "Front-end + Backend",
    description: "When you need to develop a backend solution to support your mobile app, our backend engineering team is ready to help.",
    image: "https://cdn-icons-png.flaticon.com/512/18570/18570961.png",

  },
  {
    title: "Admin Panel",
    description: "We design and develop easy-to-use admin panels for mobile and web apps, using popular UI solutions that are reliable and easy to support and extend.",
    image: "https://cdn-icons-png.flaticon.com/512/4237/4237641.png",
  },
  {
    title: "Integrations",
    description: "We integrate your apps with third-party services and APIs, adding features like payments, analytics, and CRMs for enhanced functionality and scalability.",
    image: "https://cdn-icons-png.flaticon.com/512/12539/12539733.png",

  }
];



const Header = () => {

  const navItems = [
    { label: "Home", "url": "/" },
    { label: "Our Products", "url": "/products" },
    { label: "Our Services", "url": "/services" },
    { label: "Contact", "url": "/contact" },
    { label: "Cases", "url": "/cases" },
  ]
  return (
    <header className="">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="font-bold text-xl">UnityAlgo</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) =>

            <Link to={item.url}
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer`}
            >
              <span>{item.label}</span>
            </Link>
          )}

        </div>

        <div className="hidden md:flex">
          <a href="#contact-section" className="">
            <button
              className="py-2 px-6 text-sm font-semibold bg-primary text-primary-foreground rounded-2xl cursor-pointer overflow-hidden" >

              <span className="block transition-transform duration-300 transform hover:-translate-y-1">
                Hover Me
              </span>
            </button>
          </a>
        </div>

        {/* <div className="md:hidden">
          <MenuBar />
        </div> */}
      </div>
    </header>
  )
}


const Index = () => {
  return (
    //  bg-[url(https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
    <div className="min-h-screen" >
      <Header />
      <main className='max-w-6xl mx-auto px-4 py-8'>
        <div>
          <div className='mb-6'>
            <div className='text-3xl font-bold mb-3'>
              Web App and Front-end Development services
            </div>
            <div>
              We build high-quality web applications for corporate clients and startups, using modern tech stacks to create responsive interfaces with advanced UI components, animations, and data visualizations for a seamless user experience.
            </div>
          </div>


          <div className='mb-8'>
            <button className='bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold'>
              Let's Chat
            </button>
          </div>


          <div className='grid grid-cols-5 gap-4 '>
            {technologies.map((i, key) => (
              <div key={key} className='flex flex-col items-center bg-gray-50 rounded-md p-4 cursor-pointer shadow-sm'>
                <img src={i.image} alt={i.label} className="h-20 w-20 mr-2" />
                <div className='font-semibold'>{i.label}</div>
              </div>
            ))
            }
          </div>


        </div>

        <div className='py-16 mt-6'>
          <div className='text-3xl font-bold'>
            Project Stages and Flow
          </div>


          <div>
            <ProjectWorkflow />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
export default Index



const ProjectWorkflow = () => {
  const steps = [
    {
      number: "01",
      title: "Initial stage",
      description:
        "We ensure your project’s success with careful planning. During the initial stage, we collaborate with you to align functionality, performance, and design. We define strategy, set priorities, and establish your budget and deadlines before starting work.",
    },
    {
      number: "02",
      title: "Design stage",
      description:
        "After developing a clear plan of action for your project, our product design process begins. Using a collection of industry-proven techniques and tools, we work to optimize your application’s usability, success, and efficiency, without compromising on scalability.",
    },
    {
      number: "03",
      title: "Development stage",
      description:
        "Product development progresses through multiple releases, including an MVP. We use Agile sprints to speed up the process, running development alongside wireframes, documentation, and mockups.",
    },
    {
      number: "04",
      title: "Ongoing development, support, and maintenance stage",
      description:
        "After the MVP launch, we run sprints to enhance the user interface, optimize performance, and implement new features. We support and maintain your front-end system, delivering a smooth user experience, so you can focus on growing your business.",
    },
  ];

  return (
    <section className="relative bg-cover bg-center py-20 px-4 md:px-12"
      style={{ backgroundImage: "url('/your-blurred-background.jpg')" }} // Replace with your image path
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 backdrop-blur-md rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-yellow-400 text-2xl font-bold">
                  {step.number}
                </span>
                <div className="flex-grow h-px bg-yellow-400 relative">
                  {index < steps.length - 1 && (
                    <span className="absolute right-0 -top-[6px] text-yellow-400 text-xl">
                      →
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}