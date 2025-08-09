import { Header } from '../../layout/header'
import { Footer } from '../../layout/footer'
import { ContactSection } from '../landing/contact-section'
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TechStack } from './components/tech-section';

interface ServiceType {
  title: string;
  description: string;
  image: string;
}

interface TechnologyType {
  name: string;
  image?: string;
}

const techs: Array<TechnologyType> = [
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
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
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



const FrontendServiceCard = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-primary text-primary-foreground min-h-screen">
      <Header />
      <div>
        <div className="flex flex-col items-center py-20 h-screen md:h-auto max-w-7xl mx-auto px-4  lg:px-8">
          <div className="relative overflow-auto h-full md:h-[30rem] px-4 sm:min-w-[40] space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Web App and Front-end Development services
            </h2>
            <p>We build high-quality web applications for corporate clients and startups, using modern tech stacks to create responsive interfaces with advanced UI components, animations, and data visualizations for a seamless user experience.</p>
            <button onClick={() => navigate('/contact')} className="relative overflow-hidden text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover/button:shadow-purple-500/25">
              <span className="relative z-10 flex items-center gap-2">Let's Chat <ArrowRight className='h-5 w-5' /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 md:gap-4">
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
        </div>
        <div className='bg-white text-black min-h-screen w-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 max-w-7xl mx-auto lg:px-8">
            {data.map((props, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl cursor-pointer shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50/30"
              >
                <div className="md:flex md:flex-row-reverse md:gap-6 items-start">
                  <div className="md:shrink-0 flex justify-center md:justify-end">
                    <div className="relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      <img
                        src={props.image}
                        alt={props.title}
                        className="h-18 w-18 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-2xl"></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-3 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {props.title}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {props.description}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mb-20">
            <a href="#contact-section" className="group">
              <button className="relative overflow-hidden text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:shadow-purple-500/25">
                <span className="relative z-10">Request a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>
          </div>
          <TechStack />
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
export default FrontendServiceCard
