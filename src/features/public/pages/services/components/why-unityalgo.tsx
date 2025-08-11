
type WhyUs = {
    title: string;
    description: string;
    url: string;
};

const items: WhyUs[] = [
    {
        title: "Flexibility",
        description: "Our backend development strategies can adapt to suit you. Our teams utilize flexible development processes and procedures. We can provide as much or as little support as you need, adjusting our approach to suit your specific solution requirements.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-ui-ux.svg",
    },
    {
        title: "Expertise",
        description:
            "With extensive design and development expertise, Diffco ensures the best results with the right approach. You need a company you can trust and rely on—choosing Diffco unlocks trusted expertise for every backend development project.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-adherence.svg",
    },
    {
        title: "Scalability",
        description:
            "Our backend systems are designed to scale and grow alongside your business. As your company evolves, your backend solutions will change with it and enable your business to operate at its best.",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-scalability.svg",
    },
    {
        title: "Out-of-the-box thinking",
        description:
            "We don’t just create—we innovate. Our team uses creativity to develop standout features. With immense knowledge and unique ideas, we deliver custom, cutting-edge solutions that help our clients achieve their goals",
        url: "https://diffco.us/wp-content/uploads/2024/08/ic-thinking.svg",
    },
];

export const WhyUnityAlgoSection: React.FC = () => {
    return (
        <section className="">
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Why UnityAlgo
                </h2>
                <div className="max-w-6xl mx-auto px-4 grid gap-2 md:grid-cols-2">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
                        >
                            <div className="flex flex-col-reverse md:flex-row items-start gap-4">
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