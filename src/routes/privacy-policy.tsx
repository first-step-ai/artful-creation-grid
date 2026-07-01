import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "How AM Bathrooms + Projects collects, uses, stores, and protects your personal information in accordance with the Australian Privacy Principles.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 mx-auto w-full max-w-3xl px-6 md:px-10 pt-28 md:pt-36 pb-20">
        <h1 className="font-sans text-lg md:text-2xl mb-2 uppercase">
          <span className="whitespace-nowrap">AM BATHROOMS + PROJECTS</span> PRIVACY POLICY
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Effective date: 01 July 2026
        </p>

        <div className="font-sans text-[15px] leading-relaxed space-y-6 text-foreground/90">
          <p>
            AM Bathrooms Pty Ltd (trading as AM Bathrooms &amp; Projects) (ABN
            51 613 280 149) ("we", "us", "our") is committed to protecting your
            personal information in accordance with the Privacy Act 1988 (Cth)
            and the Australian Privacy Principles (APPs). This Privacy Policy
            explains how we collect, use, store, and disclose your personal
            information when you visit www.ambathrooms.com.au or engage with
            our services.
          </p>
          <p>
            By using our website or contacting us, you consent to the
            collection and use of your information as described in this policy.
          </p>

          <Section title="1. What Information We Collect">
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Your name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Residential or project address</li>
              <li>Information about your renovation project, design preferences and budget</li>
              <li>Records of communications with our team</li>
              <li>Payment or invoicing information where required</li>
              <li>Website usage information, including your IP address, browser type, pages visited and time spent on our website through cookies and analytics technologies.</li>
            </ul>
            <p>We generally collect personal information directly from you when you:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Complete a contact or enquiry form</li>
              <li>Book a consultation</li>
              <li>Request a quotation or proposal</li>
              <li>Contact us by phone or email</li>
              <li>Engage our design or construction services.</li>
            </ul>
            <p>
              We may also collect information automatically when you visit our
              website through cookies and analytics tools.
            </p>
            <h3 className="font-sans text-base md:text-lg mt-4 font-medium">Sensitive Information</h3>
            <p>
              We generally do not collect sensitive information. If it becomes
              necessary to collect sensitive information (for example,
              information relating to accessibility requirements for your
              renovation), we will only do so with your consent or where
              otherwise permitted by law.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Respond to your enquiries</li>
              <li>Prepare quotations and renovation proposals</li>
              <li>Schedule consultations and site visits</li>
              <li>Deliver our renovation and interior design services</li>
              <li>Coordinate trades, suppliers and consultants</li>
              <li>Manage your project from commencement through to completion</li>
              <li>Process invoices and payments</li>
              <li>Manage warranties, maintenance requests and post-completion support</li>
              <li>Improve our website and customer experience</li>
              <li>Send you information about our services where you have consented or where otherwise permitted by law</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
            <p>
              Where you have opted in to receive marketing communications from
              us, you may opt out at any time by using the unsubscribe link in
              our emails or by contacting us directly. We will not send you
              marketing communications unless you have given us your consent.
            </p>
          </Section>

          <Section title="3. Disclosure of Your Information">
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Contractors and trades involved in your renovation</li>
              <li>Suppliers and manufacturers</li>
              <li>Studio Jenka, our interior design partner, who is engaged on all projects prior to commencement</li>
              <li>Professional advisers including accountants, lawyers and insurers</li>
              <li>Payment processors</li>
              <li>Information technology providers</li>
              <li>Website hosting providers</li>
              <li>Cloud software providers</li>
              <li>Analytics providers</li>
              <li>Government authorities or regulatory bodies where required by law.</li>
            </ul>
            <p>
              We do not sell, rent or trade your personal information to third
              parties for marketing purposes.
            </p>
            <p>
              Some of our service providers may store or process your personal
              information outside Australia, including in the United States.
              This may occur through third-party platforms we use to operate
              our business, such as cloud software, analytics, and website
              hosting providers. Where this occurs, we take reasonable steps
              to ensure your personal information is handled in accordance
              with the Australian Privacy Principles.
            </p>
            <p>
              By using our website or engaging our services, you consent to
              your personal information being transferred to and processed in
              countries outside Australia where our service providers operate.
            </p>
          </Section>

          <Section title="4. Cookies and Website Analytics">
            <p>
              Cookies are small text files that are stored on your computer,
              tablet or mobile device when you visit a website. They help
              websites function efficiently, remember your preferences and
              provide information about how visitors use the site.
            </p>
            <p>
              Cookies do not typically identify you personally, but they may be
              linked with personal information we collect.
            </p>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Ensure our website functions correctly</li>
              <li>Improve website performance and user experience</li>
              <li>Analyse website traffic and visitor behaviour</li>
              <li>Remember your preferences where applicable</li>
              <li>Help us improve our website and services over time</li>
            </ul>

            <h3 className="font-sans text-base md:text-lg mt-4 font-medium">Types of Cookies We Use</h3>

            <h4 className="font-sans text-[15px] mt-3 font-medium">Essential Cookies</h4>
            <p>
              These cookies are necessary for the operation of our website and
              cannot be switched off. They enable core website functionality
              such as page navigation and security.
            </p>

            <h4 className="font-sans text-[15px] mt-3 font-medium">Analytics Cookies</h4>
            <p>
              We use analytics tools, such as Google Analytics, to understand
              how visitors use our website. These cookies collect aggregated
              and anonymous information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Pages viewed</li>
              <li>Time spent on pages</li>
              <li>Device type</li>
              <li>Browser type</li>
              <li>General geographic location</li>
              <li>Referral source</li>
            </ul>
            <p>
              This information helps us improve the performance and usability
              of our website.
            </p>

            <h4 className="font-sans text-[15px] mt-3 font-medium">Marketing Cookies</h4>
            <p>We do not currently use advertising or marketing cookies.</p>
            <p>
              If we introduce marketing technologies such as Meta Pixel or
              Google Ads Conversion Tracking in the future, this Cookie Policy
              will be updated accordingly.
            </p>

            <h3 className="font-sans text-base md:text-lg mt-4 font-medium">Managing Cookies</h3>
            <p>Most web browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies</li>
              <li>Receive notifications before cookies are stored</li>
            </ul>
            <p>
              Please note that disabling some cookies may affect the
              functionality and performance of our website.
            </p>
            <p>
              For more information about managing cookies, visit your browser's
              support pages.
            </p>

            <h3 className="font-sans text-base md:text-lg mt-4 font-medium">Third-Party Services</h3>
            <p>
              Our website may use trusted third-party providers, including
              website hosting, analytics platforms and embedded content
              providers. These providers may also place cookies in accordance
              with their own privacy policies.
            </p>

            <h3 className="font-sans text-base md:text-lg mt-4 font-medium">Changes to this Cookie Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Any updates
              will be published on this page with the revised effective date.
            </p>
          </Section>

          <Section title="5. How We Store and Protect Your Information">
            <p>
              We take reasonable technical and organisational measures to
              safeguard your personal information against misuse, interference,
              loss, unauthorised access, modification and disclosure.
            </p>
            <p>
              Your information may be stored using secure password-protected
              systems and reputable third-party business platforms used to
              operate our business.
            </p>
            <p>
              We retain your personal information for as long as reasonably
              necessary to support the ongoing quality of our services,
              including for reference in future projects and to assist
              returning clients, and to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Deliver our services</li>
              <li>Manage warranties and aftercare</li>
              <li>Maintain appropriate business records</li>
              <li>Resolve disputes</li>
              <li>Comply with our legal obligations.</li>
            </ul>
            <p>
              If you would like your information removed from our records, you
              can request this by contacting us at info@ambathrooms.com.au and
              we will action your request unless we are required by law to
              retain it.
            </p>
          </Section>

          <Section title="6. Data Breaches">
            <p>
              We take data security seriously. In the event of a data breach
              that is likely to result in serious harm to any individual whose
              information is involved, we will comply with our obligations
              under the Notifiable Data Breaches (NDB) scheme, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Assessing the breach as quickly as possible</li>
              <li>Taking steps to contain the breach where possible</li>
              <li>Notifying the Office of the Australian Information Commissioner (OAIC)</li>
              <li>Notifying affected individuals where required by law.</li>
            </ul>
            <p>
              If you believe your personal information held by us may have been
              compromised, please contact us immediately at{" "}
              <a href="mailto:info@ambathrooms.com.au" className="underline">
                info@ambathrooms.com.au
              </a>
              .
            </p>
          </Section>

          <Section title="7. Access and Correction">
            <p>
              You have the right to request access to the personal information
              we hold about you, and to request that we correct any inaccurate
              or out-of-date information.
            </p>
            <p>
              To make a request, please contact us at info@ambathrooms.com.au.
              We will respond within 30 days. In some circumstances, we may
              decline a request for access or correction and will explain our
              reasons in writing.
            </p>
          </Section>

          <Section title="8. Complaints">
            <p>
              If you have a concern about how we have handled your personal
              information, please contact us at info@ambathrooms.com.au. We
              will investigate your complaint and respond within 30 days.
            </p>
            <p>
              If you are not satisfied with our response, you can lodge a
              complaint with the:
            </p>
            <div>
              <p className="font-medium">Office of the Australian Information Commissioner (OAIC)</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>
                  Website:{" "}
                  <a
                    href="https://www.oaic.gov.au/privacy/privacy-complaints"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    www.oaic.gov.au/privacy/privacy-complaints
                  </a>
                </li>
                <li>Enquiries: 1300 363 992</li>
                <li>Email: oaicintake@oaic.gov.au</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Note: Privacy complaints must be submitted in writing via the
              OAIC's online complaint form or by email.
            </p>
          </Section>

          <Section title="9. Third-Party Websites">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of those websites and
              encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our website and services are not directed towards children under
              16 years of age, and we do not knowingly collect personal
              information from children.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal obligations. The current
              version will always be available on our website. We encourage
              you to review this policy periodically.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              For any questions about this Privacy Policy or how we handle your
              personal information, please contact:
            </p>
            <div>
              <p className="font-medium">AM Bathrooms Pty Ltd</p>
              <p>ABN: 51 613 280 149</p>
              <p>Email: info@ambathrooms.com.au</p>
              <p>Phone: (02) 9181 4776</p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-sans text-xl md:text-2xl mt-8">{title}</h2>
      {children}
    </section>
  );
}
