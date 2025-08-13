import { ChevronRight} from "lucide-react";

export const ProjectWorkflow = () => {
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
    <section className="relative bg-cover bg-center py-20 px-4 md:px-8"
      style={{ backgroundImage: "url('https://diffco.us/wp-content/uploads/2024/08/psf-bg@2x-scaled.webp')" }} // Replace with your image path
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className='space-y-2 mb-12 text-primary-foreground'>
          <h2 className="text-3xl font-bold">
            Project Stages and Flow
          </h2>
          <p className='text-xs lg:text-sm leading-relaxed text-primary-foreground'>
            Depending on your current project stage Diffco can work-out and suggest the most effective plan to achieve your goals, and launch or release a new version that your users will love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 backdrop-blur-lg rounded-xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-yellow-400 text-2xl font-bold">
                  {step.number}
                </span>
                <div className="w-[150px] h-px bg-yellow-400 relative">
                  {index < steps.length - 1 && (
                    <span className="absolute left-35 -top-[7.01px] text-yellow-400 text-xl">
                      <ChevronRight className='stroke-1 h-4 w-4' />
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-md lg:text-lg font-semibold mb-2 text-primary-foreground">{step.title}</h3>
              <p className="text-xs lg:text-sm leading-relaxed text-primary-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


