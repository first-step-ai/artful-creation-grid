import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUse,
  head: () => ({
    meta: [
      { title: "Terms of Use | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "The terms governing access to and use of the AM Bathrooms + Projects website.",
      },
    ],
  }),
});

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 mx-auto w-full max-w-3xl px-6 md:px-10 pt-28 md:pt-36 pb-20">
        <h1 className="font-serif text-3xl md:text-5xl mb-2">
          AM Bathrooms + Projects Website Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Effective date: 26 June 2026
        </p>

        <div className="font-sans text-[15px] leading-relaxed space-y-6 text-foreground/90">
          <p>
            These Terms of Use govern your access to and use of the website
            located at www.ambathrooms.com.au, operated by AM Bathrooms Pty
            Ltd (trading as AM Bathrooms &amp; Projects) (ABN 51 613 280 149)
            ("we", "us", "our").
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms. If you do not agree, please do not use our website.
          </p>

          <Section title="1. Use of This Website">
            <p>You may use this website for lawful purposes only. You must not:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Use this website in any way that breaches applicable Australian laws or regulations</li>
              <li>Submit any harmful, offensive, or unlawful content via our contact form or any other communication channel on this website</li>
              <li>Attempt to gain unauthorised access to any part of our website or its systems</li>
              <li>Use any automated tool, bot, scraper, crawler, spider, or similar technology to access, extract, copy, or monitor any content or data from this website without our prior written permission</li>
              <li>Use any content from this website for the purpose of training, developing, or improving any artificial intelligence or machine learning model or system, without our prior written permission. This clause does not prohibit search engines or AI assistants from indexing or referencing this website for the purpose of returning results to users</li>
              <li>Reproduce, distribute, or exploit any content from this website without our prior written permission</li>
            </ul>
          </Section>

          <Section title="2. Intellectual Property">
            <p>
              All content on this website, including text, images, photographs,
              graphics, logos, and portfolio work, is owned by or licensed to AM
              Bathrooms Pty Ltd and is protected by Australian copyright law.
            </p>
            <p>
              You must not copy, reproduce, modify, distribute, download, print,
              or use any content from this website in any form without our
              express prior written permission. This applies regardless of
              whether the intended use is personal, commercial, or otherwise.
            </p>
            <p>
              Our portfolio images are produced by professional photographers
              and may be separately protected by third-party intellectual
              property rights. Unauthorised use of these images may therefore
              constitute an infringement of both our rights and those of the
              photographer.
            </p>
          </Section>

          <Section title="3. Accuracy of Information">
            <p>
              We take care to ensure the information on our website is accurate
              and up to date. However, we do not guarantee the completeness or
              accuracy of any content on this website.
            </p>
            <p>
              Information about our services is provided for general guidance
              only. Specific project details, costs, timelines, and
              specifications are determined through our formal quoting and
              contract process. Nothing on this website constitutes a binding
              offer or contract.
            </p>
          </Section>

          <Section title="4. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, AM Bathrooms Pty Ltd
              excludes all liability for any loss or damage arising from your
              use of this website or reliance on its content, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Errors, omissions, or inaccuracies in website content</li>
              <li>Interruptions to website availability</li>
              <li>Viruses or harmful code that may be transmitted through the website</li>
              <li>Any decisions made based on content published on this website</li>
            </ul>
            <p>
              Nothing in these Terms limits any rights you may have under the
              Australian Consumer Law.
            </p>
          </Section>

          <Section title="5. Third-Party Links">
            <p>
              Our website may contain links to third-party websites, including
              suppliers, industry bodies, award organisations, and online
              publications or magazines. These links are provided for
              convenience only.
            </p>
            <p>
              We do not endorse, control, or take responsibility for the content
              or practices of any third-party websites. We encourage you to
              review the terms and privacy policies of any external sites you
              visit.
            </p>
          </Section>

          <Section title="6. Reviews and Testimonials">
            <p>
              Our website features client testimonials and reviews. These
              reflect the genuine experiences of individual clients and results
              may vary. We do not guarantee that your experience or project
              outcome will be the same.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Your use of this website is also governed by our{" "}
              <Link to="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              , which is available at www.ambathrooms.com.au/privacy-policy.
              The Privacy Policy explains how we collect and handle your
              personal information.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Our website uses essential and analytics cookies to improve
              functionality and understand how our site is used. We do not
              currently use marketing or advertising cookies. You can manage or
              disable cookies at any time through your browser settings. For
              more information, please refer to our Privacy Policy.
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We may update these Terms of Use at any time. The current version
              will be published on this website with an updated effective date.
              Your continued use of our website after changes are published
              constitutes your acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of New South Wales,
              Australia. Any disputes arising from your use of this website are
              subject to the exclusive jurisdiction of the courts of New South
              Wales.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about these Terms of Use, please
              contact:
            </p>
            <div>
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
      <h2 className="font-serif text-xl md:text-2xl mt-8">{title}</h2>
      {children}
    </section>
  );
}
