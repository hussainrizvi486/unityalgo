const ContactForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const form = new FormData(event.target as HTMLFormElement);
        const values: Record<string, string> = {};

        for (const [key, value] of form.entries()) {
            console.log(key, value)
            values[key] = value as string;
        }

        console.log(values);
        return
    }
    return (
        <div className="md:w-[40rem]">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 mb-6">
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">First name</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" />
                    </div>
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Last name</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Company name</div>
                    <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" />
                </div>


                <div className="flex items-center gap-2 mb-6">
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Work email</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="example@domain.com" />
                    </div>

                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Phone number</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="+1 (123) 456-7890" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Tell us about your project (optional)</div>
                    <textarea className="border px-2 py-2 rounded-sm w-full" placeholder="" rows={6} />
                </div>

                <div>
                    <button className="w-full bg-white text-primary font-semibold py-3 rounded-md cursor-pointer">Send Request</button>
                </div>



            </form>



        </div>
    )
}

export { ContactForm };