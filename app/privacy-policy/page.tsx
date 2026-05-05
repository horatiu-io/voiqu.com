export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-base mb-12">
          Last updated: May 5, 2025
        </p>

        <section className="mb-12">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Voiqu</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by
            Horațiu Voicu. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website{" "}
            <a href="https://voiqu.com" target="_blank" rel="noopener noreferrer">
              voiqu.com
            </a>{" "}
            and use any related services or applications that connect to third-party
            platforms, including Google APIs such as Google Analytics 4 (GA4) and Google
            Search Console (GSC).
          </p>
          <p>
            By using our services, you agree to the collection and use of information in
            accordance with this Privacy Policy. If you do not agree with our policies,
            please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li>
              <strong>Contact information:</strong> Name, email address, phone number, and
              company name when you submit our contact form.
            </li>
            <li>
              <strong>Account credentials:</strong> When you authorize our application to
              connect to your Google account via OAuth 2.0.
            </li>
          </ul>

          <h3>2.2 Information Collected via Google APIs</h3>
          <p>
            When you grant access to your Google account, our application may access the
            following data through authorized Google API scopes:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4 (GA4):</strong> Website traffic data, user
              behavior metrics, conversion data, audience demographics, and reporting
              data associated with your GA4 properties.
            </li>
            <li>
              <strong>Google Search Console (GSC):</strong> Search performance data
              (clicks, impressions, CTR, average position), index coverage reports, URL
              inspection data, and sitemap information.
            </li>
          </ul>
          <p>
            We only request the minimum scopes necessary to provide the services you have
            requested. You can review and revoke access at any time through your{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Account permissions page
            </a>
            .
          </p>

          <h3>2.3 Automatically Collected Information</h3>
          <ul>
            <li>
              <strong>Usage data:</strong> Pages visited, time spent on pages, browser
              type, device type, and referring URLs via Google Analytics.
            </li>
            <li>
              <strong>Cookies:</strong> We use essential and analytical cookies. You can
              manage your cookie preferences through our cookie consent banner.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services and applications.</li>
            <li>
              Generate analytics reports, insights, and recommendations based on your
              GA4 and GSC data.
            </li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Monitor and analyze usage trends to improve user experience.</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>4. Google API Services User Data Policy</h2>
          <p>
            Our use and transfer of information received from Google APIs adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. Specifically:
          </p>
          <ul>
            <li>
              We <strong>only use</strong> Google user data to provide and improve the
              services you explicitly requested.
            </li>
            <li>
              We <strong>do not</strong> transfer Google user data to third parties
              except as necessary to provide the service, as required by law, or with
              your explicit consent.
            </li>
            <li>
              We <strong>do not</strong> use Google user data for serving advertisements.
            </li>
            <li>
              We <strong>do not</strong> allow humans to read Google user data unless we
              have your affirmative agreement, it is necessary for security purposes, it
              is required by law, or the data has been aggregated and anonymized for
              internal operations.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>5. Data Storage and Security</h2>
          <ul>
            <li>
              Google API data accessed by our application is processed{" "}
              <strong>in real-time</strong> and is <strong>not persistently stored</strong>{" "}
              on our servers unless explicitly required for the functionality you
              requested (e.g., cached reports).
            </li>
            <li>
              Any cached data is stored using industry-standard encryption (AES-256 at
              rest, TLS 1.2+ in transit).
            </li>
            <li>
              Access to data is restricted to authorized personnel on a need-to-know
              basis.
            </li>
            <li>
              We conduct regular security reviews of our data handling practices.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>6. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data. We may share information only in the following circumstances:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Trusted third-party services that assist
              us in operating our website and applications (e.g., hosting providers,
              analytics tools), bound by confidentiality obligations.
            </li>
            <li>
              <strong>Legal requirements:</strong> When required by law, regulation, legal
              process, or governmental request.
            </li>
            <li>
              <strong>Business transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, with appropriate notice.
            </li>
            <li>
              <strong>With your consent:</strong> When you explicitly authorize us to
              share data with a specific third party.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>7. Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal data we hold about
              you.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate data.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data, subject
              to legal retention requirements.
            </li>
            <li>
              <strong>Revoke Google access:</strong> You can revoke our application&apos;s
              access to your Google data at any time via your{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Account settings
              </a>
              .
            </li>
            <li>
              <strong>Cookie preferences:</strong> Manage cookies through our consent
              banner or your browser settings.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:h@voiqu.com">h@voiqu.com</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy, unless a longer retention
            period is required or permitted by law. Google API data that is cached is
            automatically purged after a maximum of 30 days.
          </p>
        </section>

        <section className="mb-12">
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than
            your own. We ensure that appropriate safeguards are in place when
            transferring personal data across borders, in accordance with GDPR and other
            applicable regulations.
          </p>
        </section>

        <section className="mb-12">
          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not
            knowingly collect personal information from children. If you become aware
            that a child has provided us with personal data, please contact us at{" "}
            <a href="mailto:h@voiqu.com">h@voiqu.com</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of
            any material changes by posting the updated policy on this page with a
            revised &quot;Last updated&quot; date. Your continued use of our services after any
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-12">
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:h@voiqu.com">h@voiqu.com</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://voiqu.com/contact">voiqu.com/contact</a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}
