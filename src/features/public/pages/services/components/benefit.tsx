import { Users, ClipboardList, CreditCard, BarChart3 } from "lucide-react";

type Benefit = {
    title: string;
    description: string;
    url: string;
};

const benefits: Benefit[] = [
    {
        title: "Dedicated and Experienced Teams",
        description: "With UnityAlgo, you can expect senior expert: 🧑‍💻Developers, 🧑‍🎨Designers, 👩🏽‍💼Project managers. These teams are not only leaders in their field but are already attuned to working together.When you work with us, you can leverage this synergy to your advantage.",
        url:"https://diffco.us/wp-content/uploads/2024/08/ic-dedicated.svg",
    },
    {
        title: "Streamlined Development Process",
        description:
            "Agile project management will keep you in the loop, providing useful feedback during every iteration of your project.",
        url:"https://diffco.us/wp-content/uploads/2024/08/ic-transparent.svg",
    },
    {
        title: "Transparent Billing",
        description:
            "With Diffco, you will always know what to expect and never face any surprises in the billing department. Understand your charges, both what you’re paying for and why.",
        url:"https://diffco.us/wp-content/uploads/2024/08/ic-streamlined.svg",
    },
    {
        title: "Clear Communication and Detailed Reporting",
        description:
            "From the moment we first connect to the moment we deliver exactly what you need, you’ll have all the information you need to keep your finger on the pulse of your project.",
        url:"https://diffco.us/wp-content/uploads/2024/08/ic-frequent.svg",
    },
];

export const BenefitSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Benefits of Working with UnityAlgo
                </h2>
                <div className="max-w-6xl mx-auto px-4 grid gap-2 md:grid-cols-2">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-4">
                                <div className='flex-3/5 space-y-2'>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </div>
                                <div className="flex-1/4 flex-shrink-0 p-3">
                                    <img src={benefit.url} alt={benefit.title} className='h-full w-full'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};