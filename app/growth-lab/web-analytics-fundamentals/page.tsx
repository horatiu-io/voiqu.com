import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function WebAnalyticsFundamentals() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] text-white">
      <div className="max-w-5xl mx-auto">
        <Link href="/growth-lab" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Growth Lab
        </Link>

        <article className="bg-gray-900 rounded-xl p-8 md:p-12 shadow-2xl neon-border overflow-hidden relative">
          {/* Subtle background gradient/pattern for the article card */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            }}
          ></div>

          <header className="text-center mb-12 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 gradient-text">
              Web Analytics Fundamentals:
              <br />A Complete Guide to Implementation and Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Why Web Analytics Should Be Your First Priority
            </p>
            <div className="text-gray-500 text-sm mt-4">Published on August 3, 2025</div>
          </header>

          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg relative z-10">
            <p>
              We live in a world where documenting that something happened often matters more than how it actually
              occurred in reality. A doctor’s medical chart carries more weight than the actual treatment provided,
              because the next doctor will base their actions on that documented diagnosis and patient status. The same
              applies to police officers, lawyers, and accountants—their reports and documentation often matter more
              than the actual events.
            </p>
            <p>
              The dream scenario is having things automatically recorded the moment they happen, with minimal effort.
              This creates transparency and clarity for all stakeholders, enables decision accountability, aligns team
              members, and drives evolution and vision.
            </p>
            <p>
              Understanding web analytics isn’t rocket science—it’s simply the analysis of a website or app to
              understand user activity and behavior during their “exploration” of your digital property. When one has an
              idea, they discuss it with the project manager, who coordinates all relevant departments to implement it.
              The results, feedback loops, and user actions are then captured and recorded by analytics tools.
            </p>
            <p>
              Chip Heath and Dan Heath, in their book “Switch”, discuss the “bright spot philosophy” initiated by the
              question: “What’s working and how can we get more of it?” Identifying what works and what doesn’t helps
              improving the targeting strategies.
            </p>
            <p>
              This story matters because analytics does exactly this: it measures positive user feedback on a website or
              app. If a positive feedback is a transaction, then it’s more important to study the behavior of those who
              buy versus those who don’t. Non-buyers may have various reasons that cannot be controlled. Since something
              cannot be controlled, thinking about it will only stress unnecessarily. The idea is to focus on what can
              be controlled, giving interested people an even better experience.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 gradient-text">
              How to Correctly Collect Visitor Data from Websites and Applications
            </h2>
            <p>
              Big Data is currently a very “hip” field. Data has been compared countless times to oil or gold. If the
              Big Data market was worth $5 billion in 2012, it’s projected to reach $50 billion in the coming years.
            </p>
            <p>
              More and more companies realize that through proper data analysis, they can gain an advantage over those
              who don’t do this. Groups are currently seeing extremely high demand for Data Analysts.
            </p>
            <p>
              As things grow rapidly here, it’s important to discuss the next level: quality considerations. Quality
              helps gain an advantage even over those who do these things but not at a very high level. When discussing
              database quality, it means data that is complete, unique, non-perishable/timeless, valid, correct, and
              consistent.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text">
              GDPR Compliance and Legal Considerations
            </h3>
            <p>
              Correct data collection starts with GDPR compliance. Data used for marketing purposes is regulated by the
              European Commission. For more information on this aspect, please consult with a lawyer. Non-compliance
              with GDPR can compromise data validity and permanence through regulatory agencies.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text">Implementing Tracking Systems</h3>
            <p>
              The next step is installing a tracking system for data collection. Since there are currently many tracking
              solutions available, the first recommendation is installing a tag management tool on absolutely all
              pages/subdomains of the website or application (apps function essentially like websites, requiring virtual
              pageview hits since there are no URLs).
            </p>
            <p>
              A tag management tool is recommended because installing multiple scripts on a site decreases loading
              speed. This gives "one container to rule them all."
            </p>
            <p>
              There are several tag management tools available, and a fundamental question needs to be asked: Do we
              choose to work with Google, Adobe, Oracle, or others? (Microsoft works quite well with Google). It’s good
              to ask this question now so that future tool integrations can be implemented as harmoniously as possible.
              Let’s say Google Tag Manager is chosen because it’s the most widespread and there's no particular desire
              to be rebellious.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text">
              Installing Google Tag Manager and Google Analytics
            </h3>
            <p>
              Before installing Google Tag Manager, it is recommended to create a Gmail address (or using a personal
              domain if subscribing to G Suite and being okay paying $6/month). Once the email is obtained, installation
              follows Google’s official documentation.
            </p>
            <p>Once the tagging solution is in place, one can proceed to install the actual Analytics tool.</p>
            <p>
              Since Google was chosen, their analytics tool is called Google Analytics. If Adobe had been chosen, their
              tool is called Adobe Analytics (formerly Omniture), and Oracle’s tool is surprisingly called Oracle
              Analytics. From the lesser-known sphere, Snowplow or Woopra can be mentioned (Woopra has interesting
              features like Real-time action, though the free account only keeps data for 90 days, which relates to data
              perishability).
            </p>
            <p>Installing Google Analytics through Google Tag Manager follows the documentation.</p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text">Optimizing Data Quality</h3>
            <p>
              Many people implementing Google Analytics consider themselves satisfied when they reach this point.
              However, when discussing data quality, personal data recording needs to be addressed (initially, one tends
              to visit their own site 1000 times, and all these self-generated visits aren’t exactly consistent/unique
              and shouldn’t be counted). The same applies to data generated by internet bots (one article states that
              40% of internet traffic is bot-generated).
            </p>
            <p>Let’s discuss Google Analytics account settings that provide more qualitative views:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>View Settings:</strong>
                <ul className="list-disc list-inside ml-8 space-y-1">
                  <li>
                    Set the website URL (default is http, so if an SSL certificate is installed as recommended, verify
                    it’s https)
                  </li>
                  <li>
                    Set country and time zone (crucial for reports like conversion rate by time of day, which can
                    greatly optimize ad investment)
                  </li>
                  <li>Filter traffic from known bots and crawlers</li>
                  <li>Set currency</li>
                  <li>Segment traffic from users using internal site search</li>
                </ul>
              </li>
              <li>
                <strong>Filters:</strong>
                <ul className="list-disc list-inside ml-8 space-y-1">
                  <li>Filter traffic by source IP (companies usually pay for static IPs that can be excluded)</li>
                  <li>Filter by ISP (Internet Service Provider)</li>
                  <li>Filter by subdomain or hostname</li>
                </ul>
              </li>
              <li>
                <strong>Brand Terms:</strong>
                <p className="ml-8">
                  Set your brand name to measure PR department efforts that typically increase brand awareness and
                  brand-name searches vs. non-brand traffic (e.g., “Nike shoes” vs. “shoes”).
                </p>
              </li>
            </ul>
            <p>
              There’s also the Enhanced Ecommerce section for proper sales tracking, but documentation for that is
              recommended. If more than 10 comments are received about how to implement it, a dedicated article can be
              prepared.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 gradient-text">
              What to Track After Implementing Your Tracking Solution
            </h2>
            <p>
              The simple answer is that metrics are tracked. Google Analytics has up to 510 predefined metrics it can
              track when someone visits your site. But to avoid getting lost in so much information, it is recommended
              to focus on 7 key marketing indicators that any business should monitor.
            </p>
            <p>
              For those who want to explore metrics further, especially those trackable through Google Analytics while
              staying focused on metrics that matter, the Google Analytics Solutions Gallery can be discussed, where
              custom reports and dashboards are found. Here, reports that calculate ROI at the campaign level from
              Google Ads accounts or even average revenue generated per click from each campaign through the RPC
              (Revenue per click) metric can be found.
            </p>
            <p>
              However, many discussions have been encountered where marketers were too attached to such metrics. For a
              balanced business, tracking engagement and awareness metrics is also recommended.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text">Key Recommendations</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Focus on actionable metrics rather than vanity metrics</li>
              <li>Balance quantitative data with qualitative insights</li>
              <li>Regular monitoring and optimization based on data findings</li>
              <li>Align metrics with business objectives</li>
              <li>Ensure data quality through proper setup and filtering</li>
            </ul>
            <p className="mt-8">
              In conclusion, let me know if clarification is needed on any of the points above. These are personally
              found to be fundamental for having an overview of what’s happening on the web and essential when making
              any decision.
            </p>
            <p>Best thoughts!</p>
          </div>
        </article>
      </div>
    </div>
  )
}
