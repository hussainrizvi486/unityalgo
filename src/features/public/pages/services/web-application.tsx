// import { Header } from '../../layout/header';
import { Footer } from '../../layout/footer';
import { Link } from "react-router-dom";
import { ContactSection } from '../landing/contact-section';
import { TechStack } from './components/tech-section';
import { ProjectWorkflow } from './components/project-workflow';
import { BenefitSection } from './components/benefit';
// import { MenuBar } from "./menu-bar";


const technologies = [
  {
    image: "https://diffco.us/wp-content/uploads/2024/08/Sanity.png",
    label: "Sanity"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/08/Shopify.png",
    label: "Shopify"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/08/WP.png",
    label: "WordPress"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/08/Webflow.png",
    label: "Webflow"
  },
  {
    image: "https://diffco.us/wp-content/uploads/2024/08/iconsMagento-1.png",
    label: "Magento"
  }
]

// const data: Array<ServiceType> = [
//   {
//     title: "Front-end",
//     description: "Our team can develop the front end user interface of your website or web app and integrate it with your existing backend and API.",
//     image: "https://cdn-icons-png.flaticon.com/512/13191/13191231.png",
//   },
//   {
//     title: "Front-end + Backend",
//     description: "When you need to develop a backend solution to support your mobile app, our backend engineering team is ready to help.",
//     image: "https://cdn-icons-png.flaticon.com/512/18570/18570961.png",

//   },
//   {
//     title: "Admin Panel",
//     description: "We design and develop easy-to-use admin panels for mobile and web apps, using popular UI solutions that are reliable and easy to support and extend.",
//     image: "https://cdn-icons-png.flaticon.com/512/4237/4237641.png",
//   },
//   {
//     title: "Integrations",
//     description: "We integrate your apps with third-party services and APIs, adding features like payments, analytics, and CRMs for enhanced functionality and scalability.",
//     image: "https://cdn-icons-png.flaticon.com/512/12539/12539733.png",

//   }
// ];



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
    <div className="bg-white text-black min-h-screen" >
      <div className='block md:hidden'>
        <Header />
      </div>
      <main className=''>
        <div className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

          <div className='relative z-10'>

            <div className='hidden md:block  text-primary-foreground hover:text-black hover:bg-white transition ease-in duration-300'>
              <Header />
            </div>
            <div className='max-w-6xl mx-auto px-4 py-16'>
              <div className='mb-6'>
                <div className='text-2xl md:text-3xl font-bold mb-3 text-primary-foreground'>
                  Custom Web Development for Promo, Corporate & E-commerce
                </div>
                <div className='text-sm text-primary-foreground'>
                  Our experienced developers build flexible, custom web solutions tailored precisely to your business goals and seamlessly integrated with your existing systems.
                </div>
              </div>


              <div className='mb-16'>
                <a href="#contact-section" className="">
                  <button className='bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md cursor-pointer hover:bg-primary/90'>
                    Let's Chat
                  </button>
                </a>
              </div>


              <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                {technologies.map((i, key) => (
                  <div key={key} className='flex flex-col items-center backdrop-blur-xl  text-primary-foreground rounded-xl p-4 cursor-pointer shadow-md'>
                    <img src={i.image} alt={i.label} className="h-16 w-16" />
                    <div className='font-semibold'>{i.label}</div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>

        </div>
        
        
        <div className='mt-6'>
          <DevelopmentSolutionsSection />
        </div>

        <div className='mt-6'>
          <ProjectWorkflow />
        </div>

        <div className='mt-6 '>
          <TechStack />
        </div>

        <div className='mt-6 '>
          <BenefitSection />
        </div>


        <div className='py-16 mt-6 bg-primary text-primary-foreground'>
          <ContactSection />
        </div>

      </main>
      <Footer />
    </div>
  )
}
export default Index



type DevSolutions = {
    title: string;
    description: string;
    url: string;
};

const items: DevSolutions[] = [
    {
        title: "Responsive Website Design",
        description: "Rather than having to maintain different versions of your site, responsive web design ensures that no matter which device visitors use, your site adjusts to match their screen size.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-responsive.svg",
    },
    {
        title: "UI/UX Design Services",
        description:
            `Both UI and UX play a key role in our development process.
            UX ensures functionality and intuitive user journeys, while UI focuses on creating visually appealing, user-friendly interfaces.
            Together, they deliver a seamless, enjoyable experience that’s practical, helpful, and a joy to use.`,
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-ui-ux.svg",
    },
    {
        title: "Seamless E-commerce & Landing Page Development",
        description:
            "We create high-performance eCommerce sites and landing pages, prioritizing usability, aesthetics, and seamless user experience with intuitive navigation, responsive design, and interactive elements.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-window-search.svg",
    },
    {
        title: "Front-end modernization",
        description:
            "Front-end modernization improves performance, enhances usability, and ensures compatibility with the latest technologies, providing a fresh and engaging experience for your users.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-admin-panel.svg",
    },
];

const DevelopmentSolutionsSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Development Solutions 
                </h2>
                <div className="max-w-6xl mx-auto px-4 grid gap-2 md:grid-cols-2">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md"
                        >
                            <div className="flex flex-col-reverse md:flex-row items-start gap-0 md:gap-6">
                                <div className='flex-3/5'>
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                                </div>
                                <div className="flex-1/4 flex-shrink-0 p-3">
                                    <img src={item.url} alt={item.title} className='h-full w-full'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};