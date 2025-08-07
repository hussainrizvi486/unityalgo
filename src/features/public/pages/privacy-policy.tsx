import { Footer } from "../layout/footer";
import { Header } from "../layout/header";

const Index = () => {
    return (
        <div className="bg-primary text-primary-foreground min-h-screen">
            <Header />
            <div className="mx-auto max-w-6xl py-8 px-4">
                <div className="space-y-4 py-2">
                    <h1 className="text-4xl font-semibold">Privacy Policy</h1>
                    <p className="text-privacy-foreground">This Privacy Policy outlines our policies and procedures regarding the collection, use, and disclosure of your information when you use our Service. It also informs you of your privacy rights and how the law protects you.</p>
                </div>
                <div className="space-y-4 py-2">
                    <h2 className="text-2xl font-semibold">Collecting and Using Your Personal Data</h2>
                    <h3 className="text-xl font-semibold">Types of Data Collected</h3>
                    <h5 className="text-privacy-foreground text-lg font-semibold">Personal Data</h5>
                    <div className="space-y-4">
                        <p className="text-privacy-foreground">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="px-4 text-privacy-foreground space-y-4">
                            <li className="list-disc">Email address</li>
                            <li className="list-disc">First name and last name</li>
                            <li className="list-disc">Phone number</li>
                            <li className="list-disc">Address, State, Province, ZIP/Postal code, City</li>
                            <li className="list-disc">Company name</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4 py-2">
                    <h5 className="text-xl font-semibold">Usage Data</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        <div>Usage Data is collected automatically when using the Service.</div>
                        <div>
                            Usage Data may include information such as your device’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                        </div>
                        <div>
                            When you access the Service by or through a mobile device, we may collect certain information automatically, including but not limited to the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, and other diagnostic data.
                        </div>
                        <div>
                            We may also collect information that your browser sends whenever you visit our Service or when you access the Service through a mobile device.
                        </div>
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h3 className="text-2xl font-semibold">Retention of Your Personal Data</h3>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        <div>
                            The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                        </div>
                        <div>
                            The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.
                        </div>
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h5 className="text-xl font-semibold">Transfer of Your Personal Data</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        <div>
                            Your information, including Personal Data, is processed at the Company’s operating offices and in any other locations where the parties involved in the processing are located. This means that your information may be transferred to—and maintained on—computers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction.
                        </div>
                        <div>
                            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                        </div>
                        <div>
                            The Company will take all reasonably necessary steps to ensure that your data is treated securely and in accordance with this Privacy Policy, and no transfer of your Personal Data will take place to an organization or country unless there are adequate controls in place, including the security of your data and other personal information.
                        </div>
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h3 className="text-2xl font-semibold">Disclosure of Your Personal Data</h3>
                    <h5 className="text-xl font-semibold">Business Transactions</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        If the Company is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                    <h5 className="text-xl font-semibold">Law Enforcement</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                    </p>
                    <h5 className="text-xl font-semibold">Other Legal Requirements</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        <div>The Company may disclose your Personal Data in the good faith belief that such action is necessary to:</div>
                        <ul className="px-4 text-privacy-foreground space-y-4">
                            <li className="list-disc">Comply with a legal obligation</li>
                            <li className="list-disc">Protect and defend the rights or property of the Company</li>
                            <li className="list-disc">Prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li className="list-disc">Protect the personal safety of users of the Service or the public</li>
                            <li className="list-disc">Protect against legal liability</li>
                        </ul>
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h3 className="text-2xl font-semibold">Interpretation and Definitions</h3>
                    <h5 className="text-xl font-semibold">Interpretation</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        Words with initial capital letters have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                    </p>
                    <h5 className="text-xl font-semibold">Definitions</h5>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        <div>For the purposes of this Privacy Policy:</div>
                        <ul className="px-4 text-privacy-foreground space-y-4">
                            <li className="list-disc">Account means a unique account created for you to access our Service or parts of our Service.</li>
                            <li className="list-disc">Company (referred to as either “the Company”, “we”, “us” or “our” in this Agreement) refers to UnityAlgo,a California corporation with its principal place of business at 830 Stewart Drive, Suite #212, Sunnyvale, CA, USA, 94085.</li>
                            <li className="list-disc">Cookies are small files that are placed on your computer, mobile device, or any other device by a website, containing the details of your browsing history on that website among its many uses.</li>
                            <li className="list-disc">Country refers to: California, United States</li>
                            <li className="list-disc">Device means any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
                            <li className="list-disc">Personal Data is any information that relates to an identified or identifiable individual.</li>
                            <li className="list-disc">Service refers to the Website.</li>
                            <li className="list-disc">Service Provider means any natural or legal person who processes the data on behalf of the Company. This includes third-party companies or individuals employed by the Company to facilitate the Service, provide the Service on behalf of the Company, perform services related to the Service, or assist the Company in analyzing how the Service is used.</li>
                            <li className="list-disc">Third-party Social Media Service refers to any website or social network through which a user can log in or create an account to use the Service.</li>
                            <li className="list-disc">Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (e.g., duration of a page visit).</li>
                            <li className="list-disc">Website refers to unityalgo.com, accessible at [UnityAlgo.com](https://unityalgo.com/)</li>
                            <li className="list-disc">You means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                        </ul>
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h3 className="text-2xl font-semibold">Links to Other Websites</h3>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
                    </p>
                </div>
                <div className="space-y-4 py-2">
                    <h3 className="text-2xl font-semibold">Security of Your Personal Data</h3>
                    <p className="text-privacy-foreground space-y-4 py-2">
                        The security of your Personal Data is important to us. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Index;