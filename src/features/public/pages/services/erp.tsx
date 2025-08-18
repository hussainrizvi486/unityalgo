import { useState } from 'react';
import { Footer } from '../../layout/footer';
import { MenuBar } from "../../layout/menu-bar";
import { Link } from "react-router-dom";
import {
  Check,
  Users,
  ShoppingCart,
  Server,
  ShoppingBag,
  Package,
  DollarSign,
  CircleDollarSign,
  CheckCircle,
  LifeBuoy,
  UserCheck
} from "lucide-react";
import { ContactSection } from '../landing/contact-section';
// import { ProjectWorkflow } from './components/project-workflow';
import { BenefitSection } from './components/benefit';




// const data: Array<ServiceType> = [
//   {
//     title: "Custom ERP Systems Development",
//     description:
//       "We develop customized ERP solutions tailored to streamline your business operations, including finance, HR, inventory, procurement, and sales. Our ERP systems ensure better data integration, improved productivity, and real-time insights for smarter decision-making.",
//     image: "https://cdn-icons-png.flaticon.com/512/4149/4149656.png",
//   },
//   {
//     title: "Integrated HR & Payroll Module",
//     description:
//       "Our ERP includes a powerful HR and payroll module to manage employee records, attendance, salary processing, and compliance—all in one centralized system, improving HR efficiency and accuracy.",
//     image: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
//   },
//   {
//     title: "Inventory & Supply Chain Management",
//     description:
//       "Track inventory levels, automate reordering, and manage suppliers with ease. Our ERP solutions offer real-time insights into your supply chain to reduce waste and optimize stock control.",
//     image: "https://cdn-icons-png.flaticon.com/512/10407/10407411.png",
//   },
//   {
//     title: "Sales & Customer Relationship Management",
//     description:
//       "Boost sales performance and manage customer data with integrated CRM and sales modules. From lead tracking to post-sale support, everything is unified to enhance customer satisfaction.",
//     image: "https://cdn-icons-png.flaticon.com/512/10407/10407401.png",
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
              {/* <span>{item.label}</span> */}
              <div className="group inline-block">
                <span className="relative cursor-pointer">
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </div>
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

        <div className="md:hidden">
          <MenuBar />
        </div>
      </div>
    </header>
  )
}

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/5979/5979577.png",
    title: "Custom ERP Development",
    description:
      "Tailored ERP solutions built from scratch to meet your unique business requirements. We develop scalable, secure, and user-friendly systems that grow with your business.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/18706/18706141.png",
    title: "ERPNext Implementation",
    description:
      "Professional ERPNext setup, customization, and deployment. We configure ERPNext to match your workflows and provide comprehensive training to your team.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1651/1651654.png",
    title: "ERP Consultation",
    description:
      "Strategic guidance on ERP selection, implementation planning, and digital transformation. Our experts help you choose the right solution for your business needs.",
  },
];

const Index = () => {
  return (
    <div className="bg-white text-black  min-h-screen" >
      <div className='block md:hidden'>
        <Header />
      </div>
      <main className=''>
        <div className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

          <div className='relative z-10'>

            <div className='hidden md:block  text-black bg-white transition ease-in duration-300'>
              <Header />
            </div>


            <div className='max-w-6xl mx-auto px-4 py-16'>
              <div className='mb-6'>
                <div className='text-2xl md:text-3xl font-bold mb-3 text-primary-foreground'>
                  Enterprise Resource Planning Transform Your Business with Powerful ERP Solutions
                </div>
                <div className='text-sm text-primary-foreground'>
                  We deliver end-to-end ERP systems tailored to your operations, integrating ERPNext
                  and custom-built modules to streamline workflows, improve efficiency, and give you
                  real-time insights for smarter decisions.Custom ERP Development, ERPNext Implementation & Expert Consultation.
                </div>
              </div>


              <div className='mb-12'>
                <a href="#contact-section" className="">
                  <button className='bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md cursor-pointer hover:bg-primary/90'>
                    Let's Chat
                  </button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="text-center bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-1 hover:shadow-md transition duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4">
                      <img src={service.image} alt="" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-shadow-accent">
                      {service.title}
                    </h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        <div className='mt-6' >
          <ERPModules />
        </div>

        <div className='mt-6'>
          {/* <ProjectWorkflow /> */}
        </div>

        {/* <div className='mt-6'>
          <TechStack />
        </div> */}


        <div className='mt-6 '>
          <BenefitSection />
        </div>

        <div className='py-16 mt-6 bg-primary text-primary-foreground'>
          <ContactSection />
        </div>

      </main >
      <Footer />
    </div >
  )
}
export default Index


// type Service = {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// };

// const ERPServices: React.FC = () => {
//   const services: Service[] = [
//     {
//       icon: <Wrench  />,
//       title: "Custom ERP Development",
//       description:
//         "Tailored ERP solutions built from scratch to meet your unique business requirements. We develop scalable, secure, and user-friendly systems that grow with your business.",
//     },
//     {
//       icon: <Zap  />,
//       title: "ERPNext Implementation",
//       description:
//         "Professional ERPNext setup, customization, and deployment. We configure ERPNext to match your workflows and provide comprehensive training to your team.",
//     },
//     {
//       icon: <Lightbulb  />,
//       title: "ERP Consultation",
//       description:
//         "Strategic guidance on ERP selection, implementation planning, and digital transformation. Our experts help you choose the right solution for your business needs.",
//     },
//   ];

//   return (
//     <section className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Our ERP Services
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-white border-gray-200 rounded-lg shadow-sm hover:shadow-md p-6 text-center">
//               <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mx-auto mb-4">
//                 {service.icon}
//               </div>
//               <h3 className="text-lg font-semibold mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

type Module = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const modules: Module[] = [
  {
    title: "Accounting",
    icon: <DollarSign />,
    points: [
      "General Ledger & Chart of Accounts",
      "Accounts Payable & Receivable",
      "Budget Planning & Control",
      "Financial Reporting & Analytics",
      "Multi-currency Support",
    ],
  },
  {
    title: "Stock",
    icon: <Package />,
    points: [
      "Real-time Stock Tracking",
      "Warehouse Management",
      "Serial Number & Batch Tracking",
      "Automatic Reorder Points",
      "Barcode & RFID Integration",
    ],
  },
  {
    title: "Sales & CRM",
    icon: <ShoppingBag />,
    points: [
      "Lead & Opportunity Management",
      "Sales Order Processing",
      "Customer Relationship Management",
      "Quotation & Pricing Management",
      "Sales Analytics & Forecasting",
    ],
  },
  {
    title: "Manufacturing",
    icon: <Server />,
    points: [
      "Production Planning & Scheduling",
      "Bill of Materials (BOM)",
      "Work Order Management",
      "Quality Control & Testing",
      "Shop Floor Control",
    ],
  },
  {
    title: "Procurement",
    icon: <ShoppingCart />,
    points: [
      "Purchase Requisitions & Orders",
      "Supplier Management",
      "RFQ & Tender Management",
      "Goods Receipt & Inspection",
      "Vendor Performance Analytics",
    ],
  },
  {
    title: "Assets",
    icon: <CircleDollarSign />,
    points: [
      "Asset Registration & Categorization",
      "Depreciation Tracking",
      "Maintenance Scheduling",
      "Asset Transfer & Disposal",
      "Asset Audit & Reporting",
    ],
  },
  {
    title: "Point of Sale",
    icon: <Users />,
    points: [
      "Real-time Sales Processing",
      "Barcode & QR Code Scanning",
      "Multiple Payment Methods",
      "Discounts & Promotions Management",
      "Sales Reports & Analytics",
    ],
  },
  {
    title: "Quality",
    icon: <CheckCircle />,
    points: [
      "Quality Inspection & Testing",
      "Defect Tracking & Resolution",
      "Compliance & Standards Management",
      "Audit Trails & Documentation",
      "Continuous Improvement Tracking",
    ],
  },
  {
    title: "Support",
    icon: <LifeBuoy />,
    points: [
      "Customer Query Management",
      "Ticketing & Issue Tracking",
      "Live Chat & Communication Tools",
      "Knowledge Base & Self-Service Portal",
      "Service Level Agreement (SLA) Monitoring",
    ],
  },
  {
    title: "HR & Payroll",
    icon: <UserCheck />,
    points: [
      "Employee Information Management",
      "Attendance & Leave Tracking",
      "Payroll Processing & Salary Slips",
      "Tax & Compliance Management",
      "Performance Reviews & Appraisals",
    ],
  },
];

const ERPModules: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedModules = showAll ? modules : modules.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Core ERP Modules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedModules.map((module, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition cursor-pointer"
            >
              <div className='flex items-center gap-2'>
                <div className="flex justify-center mb-4 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-emerald-600">{module.icon}</div>
                <h3 className="text-lg font-bold text-center text-gray-900 mb-4">
                  {module.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {module.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-primary hover:bg-primary/90 cursor-pointer text-white px-6 py-2 rounded-md font-semibold transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

