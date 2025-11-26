import React from 'react';

interface PolicyListItemProps {
    title: string;
    children: React.ReactNode;
}

export default function Portfolio(): JSX.Element {
    const PolicyListItem: React.FC<PolicyListItemProps> = ({ title, children }) => (
        <li className="mb-2 pl-4 relative before:content-['\2022'] before:absolute before:left-0 before:text-indigo-600 before:font-bold">
            <span className="font-medium text-gray-900">{title}:</span> {children}
        </li>
    );

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-12 font-inter antialiased bg-gray-50">
            {/* Privacy Policy Container */}
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10">

                {/* Title Section */}
                <header className="pb-6 border-b border-gray-200 mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        Privacy Policy for Data Folder
                    </h1>
                    <p className="mt-2 text-lg text-gray-500">
                        Provided by [Your Developer Name/Company Name, e.g., Independent Developer, Inc.]
                    </p>
                </header>

                <section className="text-gray-700 space-y-6">
                    <p className="leading-relaxed">
                        This page is used to inform users regarding our policies with the collection, use, and disclosure of Personal Information for anyone deciding to use our Service.
                    </p>
                    <p className="font-semibold text-lg text-indigo-700 border-l-4 border-indigo-300 pl-3 py-1">
                        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy.
                    </p>

                    {/* Section 1: Information Collection and Use */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        1. Information Collection and Use
                    </h2>
                    <p className="leading-relaxed">
                        The <strong className="font-extrabold">Data Folder</strong> app is designed to be a local-first mobile application and <strong className="text-red-600">does not collect, transmit, or store any Personal Information</strong> outside of your device.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3">
                        We do not require an account, and we do not collect:
                    </h3>

                    {/* Using a standard unordered list with custom bullets simulated via the ListItem component */}
                    <ul className="policy-list ml-4 space-y-2 text-gray-700">
                        <PolicyListItem title="Personal Identifiable Information (PII)">
                            We do not collect names, email addresses, phone numbers, location data, or unique device identifiers.
                        </PolicyListItem>
                        <PolicyListItem title="User Content">
                            Any data you save, store, or organize within the Data Folder app (your files, notes, or categorization preferences) remains exclusively on your own device.
                        </PolicyListItem>
                        <PolicyListItem title="Financial Information">
                            We do not process or store any financial or payment information.
                        </PolicyListItem>
                    </ul>

                    {/* Sub-section: Data Storage */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-2">
                        Data Storage
                    </h3>
                    <p className="leading-relaxed">
                        The App is a <strong className="font-extrabold">Flutter mobile application</strong>. All data that the app processes or stores is saved securely on the local storage of the user's mobile device. This data is not accessible to us.
                    </p>

                    {/* Sub-section: No Advertisements */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-2">
                        No Advertisements
                    </h3>
                    <p className="leading-relaxed">
                        The App <strong className="text-green-600">does not use any third-party advertisement services</strong> or tracking technologies for advertising purposes. Accordingly, no data is collected or shared for ad personalization or measurement.
                    </p>


                    {/* Section 2: Log Data */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        2. Log Data
                    </h2>
                    <p className="leading-relaxed">
                        The App does not log or collect diagnostic, usage, or analytics data.
                    </p>
                    <p className="leading-relaxed">
                        However, in the event of an error or crash, information may be collected by <strong className="font-semibold">Flutter’s underlying platform mechanisms</strong> (iOS or Android). This Log Data may include information such as your device's Internet Protocol (“IP”) address, device name, operating system version, the configuration of the App when utilizing our Service, the time and date of your use of the Service, and other statistics. This information is typically only generated and sent to the platform provider (Apple or Google) after a user explicitly consents to share crash reports with the developer.
                    </p>

                    {/* Section 3: Cookies */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        3. Cookies
                    </h2>
                    <p className="leading-relaxed">
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. The <strong className="font-extrabold">Data Folder</strong> App <strong className="font-semibold">does not use "cookies"</strong> or similar tracking technologies.
                    </p>

                    {/* Section 4: Service Providers */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        4. Service Providers
                    </h2>
                    <p className="leading-relaxed">
                        We do not employ third-party companies or individuals to facilitate our Service or perform Service-related functions that require access to your personal data, as we do not collect such data.
                    </p>
                    <p className="leading-relaxed">
                        The App does rely on the core functionality provided by the Google (for Android) and Apple (for iOS) platforms for basic operation, distribution, and in-app purchase processing. These platform providers operate under their own privacy policies.
                    </p>

                    {/* Section 5: Security */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        5. Security
                    </h2>
                    <p className="leading-relaxed">
                        We value your trust in choosing to use a data-local application. While we do not collect user data, we strive to use commercially acceptable means to protect your local data from unauthorized access or accidental loss, relying on the security features provided by the mobile operating systems (iOS and Android).
                    </p>

                    {/* Section 6: Links to Other Sites */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        6. Links to Other Sites
                    </h2>
                    <p className="leading-relaxed">
                        This Service may contain links to other sites (such as links to our developer website or a support page). If you click on a third-party link, you will be directed to that site. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>

                    {/* Section 7: Children’s Privacy */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        7. Children’s Privacy
                    </h2>
                    <p className="leading-relaxed">
                        The <strong className="font-extrabold">Data Folder</strong> App is not intended for use by anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will take immediate steps to delete this from our records.
                    </p>

                    {/* Section 8: Changes to This Privacy Policy */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        8. Changes to This Privacy Policy
                    </h2>
                    <p className="leading-relaxed">
                        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.
                    </p>

                    {/* Section 9: Contact Us */}
                    <h2 className="text-2xl font-bold text-indigo-700 pt-6 mt-8 border-t border-gray-100">
                        9. Contact Us
                    </h2>
                    <p className="leading-relaxed">
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
                    </p>

                    <div className="mt-4 p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded-md">
                        <p className="font-bold text-indigo-800">Email:</p>
                        <p className="text-indigo-900">kworkshere@gmail.com</p>
                    </div>
                </section>

                {/* Footer / Last Updated */}
                <footer className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                        Last updated: November 26, 2025
                    </p>
                </footer>

            </div>
        </div>
    );
}