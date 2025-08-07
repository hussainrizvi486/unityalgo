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
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
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
    name: "Golang",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
  },
]

const data: Array<ServiceType> = [
  {
    title: "Custom ERP Systems Development",
    description:
      "We develop customized ERP solutions tailored to streamline your business operations, including finance, HR, inventory, procurement, and sales. Our ERP systems ensure better data integration, improved productivity, and real-time insights for smarter decision-making.",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149656.png",
  },
  {
    title: "Integrated HR & Payroll Module",
    description:
      "Our ERP includes a powerful HR and payroll module to manage employee records, attendance, salary processing, and compliance—all in one centralized system, improving HR efficiency and accuracy.",
    image: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
  },
  {
    title: "Inventory & Supply Chain Management",
    description:
      "Track inventory levels, automate reordering, and manage suppliers with ease. Our ERP solutions offer real-time insights into your supply chain to reduce waste and optimize stock control.",
    image: "https://cdn-icons-png.flaticon.com/512/10407/10407411.png",
  },
  {
    title: "Sales & Customer Relationship Management",
    description:
      "Boost sales performance and manage customer data with integrated CRM and sales modules. From lead tracking to post-sale support, everything is unified to enhance customer satisfaction.",
    image: "https://cdn-icons-png.flaticon.com/512/10407/10407401.png",
  }
];


const ERPDetailPage = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-primary text-primary-foreground min-h-screen">
      <Header />
      <div>
        <div className="flex flex-col items-center py-20 h-screen md:h-auto max-w-7xl mx-auto px-4  lg:px-8">
          <div className="relative overflow-auto h-full md:h-[30rem] px-4 sm:min-w-[40] space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Custom Web Development for Promo, Corporate & E-commerce
            </h2>
            <p>Our experienced developers build flexible, custom web solutions tailored precisely to your business goals and seamlessly integrated with your existing systems.</p>
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

export default ERPDetailPage

