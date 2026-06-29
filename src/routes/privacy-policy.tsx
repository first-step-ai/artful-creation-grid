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
      <h1 className="font-sans text-3xl md:text-5xl mb-2 uppercase">
          AM BATHROOMS + PROJECTS PRIVACY POLICY
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Effective date: 01 June 2026
        </p>

        <div className="font-sans text-[15px] leading-relaxed space-y-6 text-foreground/90">
          <p>
            AM Bathrooms Pty Ltd (trading as AM Bathrooms &amp; Projects) (ABN
            51 613 280 149) ("we", "us", "our") is committed to protecting your
            personal information in accordance with the Privacy Act 1988 (Cth)
            and the Australian Privacy Principles (APPs). This Privacy Policy
            explains how we collect, use, store, and disclose your personal
            information when you visit www.ambathrooms.com.au or engage with our
            services.
          </p>
          <p>
            By using our website or contacting us, you consent to the collection
            and use of your information as described in this policy.
          </p>

          <Section title="1. What Information We Collect">
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Contact details: name, email address, phone number, and residential address</li>
              <li>Project information: details about your renovation requirements, property, and preferences</li>
              <li>Communications: records of correspondence between you and our team</li>
              <li>Website usage data: IP address, browser type, pages visited, and time spent on our site (collected via cookies and analytics tools)</li>
            </ul>
            <p>
              We collect personal information directly from you when you submit
              a contact form, call us, email us, or engage our services. We may
              also collect information automatically through your use of our
              website.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Respond to your enquiries and provide renovation quotes</li>
              <li>Deliver and manage our renovation and design services</li>
              <li>Communicate with you about your project</li>
              <li>Send you relevant information about our services (only with your consent)</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with our legal and regulatory obligations</li>
            </ul>
            <p>
              We will not use your personal information for purposes other than
              those described above without your consent.
            </p>
          </Section>

          <Section title="3. Disclosure of Your Information">
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Subcontractors and tradespeople involved in delivering your renovation (e.g., plumbers, electricians, tilers, suppliers)</li>
              <li>Our sister company, Studio Jenka, for interior design services</li>
              <li>Service providers who assist us in operating our website and business (e.g., web hosting, email platforms, analytics)</li>
              <li>Government bodies or law enforcement where required by law</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
            <p>
              If we share your information with overseas recipients (for
              example, cloud storage or software providers hosted outside
              Australia), we take steps to ensure they handle your information
              in a manner consistent with the APPs.
            </p>
          </Section>

          <Section title="4. Cookies and Website Analytics">
            <p>
              Our website uses cookies to improve your browsing experience and
              to understand how our site is used. Cookies are small text files
              stored on your device.
            </p>
            <p>We currently use:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Essential cookies — required for the website to function correctly</li>
              <li>Analytics cookies — to collect anonymous data about how visitors use our site (e.g., Google Analytics)</li>
            </ul>
            <p>
              We do not currently use marketing or advertising cookies. If this
              changes in the future, we will update this policy accordingly.
            </p>
            <p>
              You can manage or disable cookies at any time through your browser
              settings. Please note that disabling essential cookies may affect
              how the website functions.
            </p>
          </Section>

          <Section title="5. How We Store and Protect Your Information">
            <p>
              We store your personal information securely using
              password-protected systems and reputable third-party platforms. We
              take reasonable steps to protect your information from misuse,
              interference, loss, and unauthorised access.
            </p>
            <p>
              We retain your personal information indefinitely to support the
              ongoing quality of our services including for reference in future
              projects, warranty matters, and to assist returning clients. If
              you would like your information removed from our records, you can
              request this by contacting us at info@ambathrooms.com.au and we
              will action your request unless we are required by law to retain
              it.
            </p>
          </Section>

          <Section title="6. Data Breaches">
            <p>
              We take data security seriously. In the event of a data breach
              that is likely to result in serious harm to any individual whose
              information is involved, we will comply with our obligations under
              the Notifiable Data Breaches (NDB) scheme, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Assessing the breach as quickly as possible</li>
              <li>Notifying the Office of the Australian Information Commissioner (OAIC)</li>
              <li>Notifying affected individuals where required</li>
            </ul>
            <p>
              If you believe your personal information held by us may have been
              compromised, please contact us immediately at
              info@ambathrooms.com.au.
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
              information, please contact us at info@ambathrooms.com.au. We will
              investigate your complaint and respond within 30 days.
            </p>
            <p>
              If you are not satisfied with our response, you can lodge a
              complaint with the Office of the Australian Information
              Commissioner (OAIC):
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
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
            <p className="italic text-muted-foreground">
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

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal obligations. The current version
              will always be available on our website. We encourage you to
              review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              For any questions about this Privacy Policy or how we handle your
              personal information, please contact:
            </p>
            <div className="not-prose">
              <p className="font-medium">AM Bathrooms Pty Ltd</p>
              <p>ABN: 51 613 280 149</p>
              <p>Email: info@ambathrooms.com.au</p>
              <p>Phone: (02) 9181 4776</p>
              <p>
                Website:{" "}
                <a
                  href="https://www.ambathrooms.com.au"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  www.ambathrooms.com.au
                </a>
              </p>
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
