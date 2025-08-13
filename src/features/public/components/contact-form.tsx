import supabase from "../../../supabase";
import toast from 'react-hot-toast';

interface LeadPayload {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    company_name: string;
    details: string;
}


const ContactForm = () => {
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const form = new FormData(event.target as HTMLFormElement);

        const payload: LeadPayload = {
            first_name: form.get("first_name") as string,
            last_name: form.get("last_name") as string,
            email: form.get("email") as string,
            phone_number: form.get("phone_number") as string,
            company_name: form.get("company_name")?.toString() || "",
            details: form.get("details")?.toString() || "",
        };

        toast.success('our details have been successfully submitted.');


        const { data, error } = await supabase
            .from("leads")
            .insert([payload]); // must be an array

        if (error) {
            console.error("Error inserting lead:", error);
        } else {
            console.log("Lead saved:", data);
        }
    };
    return (
        <div className="md:w-[40rem]">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 mb-6">
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">First name</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" name="first_name" required />
                    </div>
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Last name</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" name="last_name" required />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Company name <span className="text-xs">(optional)</span></div>
                    <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="" name="company_name" />
                </div>


                <div className="flex items-center gap-2 mb-6">
                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Work email</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="example@domain.com" name="email" required />
                    </div>

                    <div className="basis-full">
                        <div className="text-sm font-medium mb-2">Phone number</div>
                        <input type="text" className="border px-2 py-2 rounded-sm w-full text-sm" placeholder="+1 (123) 456-7890" name="phone_number" required />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Tell us about your project <span className="text-xs">(optional)</span></div>
                    <textarea className="border px-2 py-2 rounded-sm w-full" placeholder="" rows={6} name="details" />
                </div>

                <div>
                    <button type="submit" className="w-full bg-white text-primary font-semibold py-3 rounded-md cursor-pointer">Send Request</button>
                </div>



            </form>



        </div>
    )
}

export { ContactForm };