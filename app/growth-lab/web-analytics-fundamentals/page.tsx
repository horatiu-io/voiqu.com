import Image from "next/image"
import Link from "next/link"

export default function WebAnalyticsFundamentalsPage() {
  const author = {
    name: "Voicu Horatiu",
    linkedin: "https://www.linkedin.com/in/voiqu/",
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://voiqu.com/growth-lab/web-analytics-fundamentals", // Replace with actual URL
    },
    headline: "Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization",
    image: "https://voiqu.com/posts/google-analytics-focus-hero-image.webp", // Replace with actual image URL
    datePublished: "2024-07-29T09:00:00+08:00", // Replace with actual publish date
    dateModified: "2024-07-29T09:00:00+08:00", // Replace with actual modify date
    author: {
      "@type": "Person",
      name: author.name,
      url: author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Voiqu", // Replace with your organization name
      logo: {
        "@type": "ImageObject",
        url: "https://voiqu.com/logo.svg", // Replace with your organization logo URL
      },
    },
    description: "A complete guide to understanding, implementing, and optimizing web analytics for ambitious brands.",
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="/posts/google-analytics-focus-hero-image.webp"
            alt="Web Analytics Fundamentals Hero"
            layout="fill"
            objectFit="cover"
            className="filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization
          </h1>
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-12 text-gray-400">
          <Image
            src="/h-voiqu.webp" // Placeholder for author image
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-semibold text-white">{author.name}</p>
            <Link href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              LinkedIn Profile
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Why Web Analytics Should Be Your First Priority
          </h2>
          <p>
            We live in a world where documenting that something happened often matters more than how it actually
            occurred in reality. A doctor’s medical chart carries more weight than the actual treatment provided,
            because the next doctor will base their actions on that documented diagnosis and patient status. The same
            applies to police officers, lawyers, and accountants—their reports and documentation often matter more than
            the actual events.
          </p>
          <p>
            The dream scenario is having things automatically recorded the moment they happen, with minimal effort. This
            creates transparency and clarity for all stakeholders, enables decision accountability, aligns team members,
            and drives evolution and vision.
          </p>
          <p>
            Understanding web analytics isn’t rocket science—it’s simply the analysis of a website or app to understand
            user activity and behavior during their “exploration” of your digital property. When we have an idea, we
            discuss it with the project manager, who coordinates all relevant departments to implement it. The results,
            feedback loops, and user actions are then captured and recorded by analytics tools.
          </p>
          <p>
            I’ve heard local speakers say they wanted to receive as much negative feedback as possible. Their hypothesis
            was that if 9 out of 10 people give positive feedback and 1 gives negative feedback, the negative feedback
            will stick in your mind. While this might be true, I recently read a post arguing that negative feedback is
            wrong—that it’s about doing more of what you do well. I tend to resonate more with this perspective.
          </p>
          <p>
            Chip Heath and Dan Heath, in their book “Switch”, discuss the “bright spot philosophy” initiated by the
            question: “What’s working and how can we get more of it?” Identifying what works and what doesn’t helps
            create lookalike audiences for improving targeting strategies.
          </p>
          <p>
            This story matters because analytics does exactly this: it measures positive user feedback on a website or
            app. If a positive feedback is a transaction, then it’s more important to study the behavior of those who
            buy versus those who don’t. Non-buyers may have various reasons we can’t control. Since we can’t control
            something, thinking about it will only stress us unnecessarily. The idea is to focus on what we can control,
            giving interested people an even better experience.
          </p>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            How to Correctly Collect Visitor Data from Websites and Applications
          </h2>
          <p>
            Big Data is currently a very “hip” field. Data has been compared countless times to oil or gold. If the Big
            Data market was worth $5 billion in 2012, it’s projected to reach $50 billion in the coming years.
          </p>
          <p>
            More and more companies realize that through proper data analysis, they can gain an advantage over those who
            don’t do this. I’m currently following groups where the demand for Data Analysts is extremely high.
          </p>
          <p>
            As things grow rapidly here, it’s important to discuss the next level: quality considerations. Quality helps
            us gain an advantage even over those who do these things but not at a very high level. When we talk about
            database quality, we mean data that is complete, unique, non-perishable/timeless, valid, correct, and
            consistent.
          </p>

          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            GDPR Compliance and Legal Considerations
          </h3>
          <p>
            Correct data collection starts with GDPR compliance. Data used for marketing purposes is regulated by the
            European Commission. For more information on this aspect, please consult with a lawyer. Non-compliance with
            GDPR can compromise data validity and permanence through regulatory agencies.
          </p>

          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Implementing Tracking Systems
          </h3>
          <p>
            The next step is installing a tracking system for data collection. Since there are currently many tracking
            solutions available, the first recommendation is installing a tag management tool on absolutely all
            pages/subdomains of the website or application (apps function essentially like websites, requiring virtual
            pageview hits since there are no URLs).
          </p>
          <p>
            A tag management tool is recommended because installing multiple scripts on a site decreases loading speed.
            This gives us “one container to rule them all.”
          </p>
          <p>
            There are several tag management tools available, and we need to ask a fundamental question: Do we choose to
            work with Google, Adobe, Oracle, or others? (Microsoft works quite well with Google). It’s good to ask this
            question now so that future tool integrations can be implemented as harmoniously as possible. Let’s say we
            choose Google Tag Manager because it’s the most widespread and we’re not feeling particularly rebellious.
          </p>

          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Installing Google Tag Manager and Google Analytics
          </h3>
          <p>
            Before installing Google Tag Manager, I recommend creating a Gmail address (or using a personal domain if
            you subscribe to G Suite and are okay paying $6/month). Once you have the email, installation follows
            Google’s official documentation.
          </p>
          <p>
            Once we have the tagging solution, we can proceed to install the actual Analytics tool. Since we’ve decided
            to work with Google, their analytics tool is called Google Analytics. If we had chosen Adobe, their tool is
            called Adobe Analytics (formerly Omniture), and Oracle’s tool is surprisingly called Oracle Analytics. From
            the lesser-known sphere, I can mention Snowplow or Woopra (which has interesting features like Real-time
            action, though the free account only keeps data for 90 days, which relates to data perishability).
          </p>
          <p>Installing Google Analytics through Google Tag Manager follows the documentation.</p>

          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Optimizing Data Quality
          </h3>
          <p>
            Many people implementing Google Analytics consider themselves satisfied when they reach this point. However,
            if we’re talking about data quality, we need to address personal data recording (initially, we tend to visit
            our own site 1000 times, and all these self-generated visits aren’t exactly consistent/unique and shouldn’t
            be counted). The same applies to data generated by internet bots (one article states that 40% of internet
            traffic is bot-generated).
          </p>
          <p>Let’s discuss Google Analytics account settings that provide more qualitative</p>
          <h4 className="text-xl font-bold mb-2 text-white">View Settings:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              Set the website URL (default is http, so if you install an SSL certificate as recommended, verify it’s
              https)
            </li>
            <li>
              Set country and time zone (crucial for reports like conversion rate by time of day, which can greatly
              optimize ad investment)
            </li>
            <li>Filter traffic from known bots and crawlers</li>
            <li>Set currency</li>
            <li>Segment traffic from users using internal site search</li>
          </ul>
          <h4 className="text-xl font-bold mb-2 text-white">Filters:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Filter traffic by source IP (companies usually pay for static IPs that can be excluded)</li>
            <li>Filter by ISP (Internet Service Provider)</li>
            <li>Filter by subdomain or hostname</li>
          </ul>
          <h4 className="text-xl font-bold mb-2 text-white">Brand Terms:</h4>
          <p>
            Set your brand name to measure PR department efforts that typically increase brand awareness and brand-name
            searches vs. non-brand traffic (e.g., “Nike shoes” vs. “shoes”).
          </p>
          <p>
            There’s also the Enhanced Ecommerce section for proper sales tracking, but I’ll refer you to the
            implementation documentation for that. If I receive more than 10 comments about how to implement it, I can
            prepare a dedicated article.
          </p>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            What to Track After Implementing Your Tracking Solution
          </h2>
          <p>
            The simple answer is that we track metrics. Google Analytics has up to 510 predefined metrics it can track
            when someone visits your site. But to avoid getting lost in so much information, I recommend focusing on 7
            key marketing indicators that any business should monitor.
          </p>
          <p>
            For those who want to explore metrics further, especially those trackable through Google Analytics while
            staying focused on metrics that matter, we can discuss the Google Analytics Solutions Gallery where we find
            custom reports and dashboards. Here we can find reports that calculate ROI at the campaign level from Google
            Ads accounts or even average revenue generated per click from each campaign through the RPC (Revenue per
            click) metric.
          </p>
          <p>
            However, I’ve encountered many discussions where marketers were too attached to such metrics. For a balanced
            business, I also recommend tracking engagement and awareness metrics.
          </p>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Key Recommendations
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Focus on actionable metrics rather than vanity metrics</li>
            <li>Balance quantitative data with qualitative insights</li>
            <li>Regular monitoring and optimization based on data findings</li>
            <li>Align metrics with business objectives</li>
            <li>Ensure data quality through proper setup and filtering</li>
          </ul>
          <p>
            In conclusion, let me know if you need clarification on any of the points above. I personally find these
            fundamental for having an overview of what’s happening on the web and essential when making any decision.
          </p>
          <p>Best thoughts!</p>
        </div>
      </div>
    </div>
  )
}
