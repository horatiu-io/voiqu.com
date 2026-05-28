"use client"

import Image from "next/image"
import Link from "next/link"
import { calculateReadingTime } from "@/lib/utils"

export default function WhereDoesChatGPTGetItsInformation() {
  const author = {
    name: "Horațiu Voicu",
    linkedin: "https://www.linkedin.com/in/voiqu/",
  }

  const articleContent = `
    Across 25,417 simulated ChatGPT conversations about UK retail and commercial banking in 2026, the model cited 143,010 sources, drawn from 4,125 distinct domains. Only 2.57% of those citations pointed to a bank's own website. The other 97.43% came from places most banks have never optimized for, and in many cases have never even audited.
    When a customer asks ChatGPT "which UK bank should I open an account with," "which app is best for mobile banking," or "is NatWest better than Lloyds," the model is not reading the bank's homepage. It is reading Finder, Forbes, Which?, MoneySavingExpert, Wikipedia, and a long tail of comparison sites and aggregators. That is where ChatGPT gets its information about UK banking. The answer has direct consequences for any brand that still treats AI search as a content strategy problem rather than an external authority problem.
    Most marketing teams still picture ChatGPT as a kind of fixed encyclopedia trained on the open web up to a cutoff date. That mental model is two years out of date. In current production, ChatGPT routes most live queries through a retrieval layer: a web index it consults in real time before generating an answer. The model decides what to retrieve. The retrieval layer decides which pages get surfaced. The answer is then composed from those retrieved pages, with citations that the user may or may not click.
    Three patterns are immediately visible.
    Comparison sites dominate by category, not by brand. Finder, Which?, MoneySavingExpert, MoneyToTheMasses, MoneyWeek, MoneyFactsCompare, Moneyzine, Monito, NerdWallet, and GoodMoneyGuide together account for 28,261 of the 48,436 top-16 citations, nearly half of all major sourcing. Add aggregators like comparebanks.co.uk, MoneySuperMarket, and the share rises to roughly 60% of the top-tier source pool.
    First-party sources are 2.57% of citations. Of 143,010 total citations, only 3,670 pointed to a bank's own owned domain. Even when you include large bank-owned corporate sites that are not strictly customer-facing, the first-party share stays in the low single digits.
    Wikipedia and gov.uk carry institutional weight. Wikipedia alone accounts for 5,355 citations. Gov.uk adds another 1,863. Together, these reference and regulatory sources make up about 11% of top-16 citations.
    GA4 will not show you any of this because GA4 measures clicks on outbound links. ChatGPT citations are mostly not clicked. The model has already synthesized the answer for the user. The user reads the answer, makes a decision, and either goes directly to the bank's app, walks into a branch, or moves on.
  `

  const readingTime = calculateReadingTime(articleContent)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://voiqu.com/growth-lab/where-does-chatgpt-get-its-information",
    },
    headline: "Where Does ChatGPT Get Its Information? Inside 143,010 Citations From UK Banking Conversations",
    image: "https://voiqu.com/posts/where-does-chatgpt-get-its-information.webp",
    datePublished: "2026-05-28T15:34:59+03:00",
    dateModified: "2026-05-28T15:34:59+03:00",
    author: {
      "@type": "Person",
      name: author.name,
      url: author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Voiqu",
      logo: {
        "@type": "ImageObject",
        url: "https://voiqu.com/logo.svg",
      },
    },
    description: "Across 25,417 simulated ChatGPT conversations about UK banking in 2026, the model cited 143,010 sources. Only 2.57% pointed to a bank's own website.",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where does ChatGPT get its information about UK banking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT retrieves information in real-time using a retrieval layer that queries search indexes. For UK banking, around 60% of citations point to comparison sites (like Finder, Which?, and MoneySavingExpert) and aggregators, while only 2.57% point to the banks' own websites. Editorial sites, Wikipedia, and government pages (like gov.uk) make up the rest.",
        },
      },
      {
        "@type": "Question",
        name: "Why are bank homepages rarely cited by ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When users ask ChatGPT for banking recommendations, comparisons, or reviews, the retrieval layer is optimized to pull from third-party authority sites, comparison tables, and review platforms rather than promotional brand homepages. This makes external mentions and reviews much more influential for AI visibility than a brand's own content.",
        },
      },
      {
        "@type": "Question",
        name: "Can traditional SEO strategies improve AI engine visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Traditional SEO focuses on ranking pages on Google's search result pages. AI engines (like ChatGPT's search feature) prioritize synthesized answers pulled from a curated set of authoritative hubs. To optimize for AI search (GEO/Generative Engine Optimization), brands must focus on being featured in these third-party comparison sites, aggregators, and reference sources like Wikipedia.",
        },
      },
      {
        "@type": "Question",
        name: "Why doesn't Google Analytics (GA4) show the traffic from these AI queries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most users read the synthesized answers directly within ChatGPT and do not click on the citation links. Because GA4 only tracks sessions initiated by direct link clicks (referrals), it misses the massive volume of conversations where the brand is recommended or discussed without generating a click.",
        },
      },
      {
        "@type": "Question",
        name: "How can Wikipedia and gov.uk affect ChatGPT responses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wikipedia and gov.uk carry immense authority and shape the factual structural details (e.g., leadership, regulatory status, parent groups) that the model reproduces. Errors or outdated details on these pages propagate directly into ChatGPT's customer-facing answers.",
        },
      },
    ],
  }

  const postDate = new Date(articleSchema.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const lastModified = new Date(articleSchema.dateModified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="/posts/where-does-chatgpt-get-its-information.webp"
            alt="Where Does ChatGPT Get Its Information? Inside 143,010 Citations From UK Banking Conversations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <h1 className="absolute bottom-8 left-8 right-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent leading-tight drop-shadow-lg drop-shadow-black">
            Where Does ChatGPT Get Its Information? Inside 143,010 Citations From UK Banking Conversations
          </h1>
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-12 text-gray-400">
          <Image
            src="/h-voiqu.webp"
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <Link
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:underline"
            >
              {author.name}
            </Link>
            <div className="text-sm mt-1">
              <p>Post Date: {postDate}</p>
              <p>Last Modified: {lastModified}</p>
              <p>Reading Time: {readingTime}</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl prose prose-invert max-w-none [content-visibility:auto]">
          <p className="text-lg leading-relaxed mb-6">
            Across 25,417 simulated ChatGPT conversations about UK retail and commercial banking in 2026, the model cited <strong>143,010 sources</strong>, drawn from <strong>4,125 distinct domains</strong>. Only <strong>2.57% of those citations</strong> pointed to a bank&apos;s own website. The other 97.43% came from places most banks have never optimized for, and in many cases have never even audited.
          </p>

          <p className="mb-6">
            When a customer asks ChatGPT &quot;which UK bank should I open an account with,&quot; &quot;which app is best for mobile banking,&quot; or &quot;is NatWest better than Lloyds,&quot; the model is not reading the bank&apos;s homepage. It is reading Finder, Forbes, Which?, MoneySavingExpert, Wikipedia, and a long tail of comparison sites and aggregators. That is where ChatGPT gets its information about UK banking. The answer has direct consequences for any brand that still treats AI search as a content strategy problem rather than an external authority problem.
          </p>

          <p className="mb-6">
            The data below is drawn from the <Link href="https://genezio.com/industry-leaderboards/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Genezio platform</Link> (specifically from their industry leaderboards), which simulates full multi-turn ChatGPT conversations as configured customer personas and tracks every source the model cites. The 2026 UK banking dataset is the basis for everything in this piece.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            What &quot;ChatGPT&apos;s sources&quot; actually means
          </h2>

          <p className="mb-6">
            Most marketing teams still picture ChatGPT as a kind of fixed encyclopedia trained on the open web up to a cutoff date. That mental model is two years out of date. In current production, ChatGPT routes most live queries through a retrieval layer: a web index it consults in real time before generating an answer. The model decides what to retrieve. The retrieval layer decides which pages get surfaced. The answer is then composed from those retrieved pages, with citations that the user may or may not click.
          </p>

          <p className="mb-4">
            So when we ask &quot;where does ChatGPT get its information,&quot; we are really asking three separate questions:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-2 mb-6">
            <li>Which domains does ChatGPT pull from when answering a given question?</li>
            <li>How are those domains weighted against each other?</li>
            <li>How does the answer change based on which domains rank for the underlying retrieval?</li>
          </ol>

          <p className="mb-6">
            For UK banking in 2026, the answers are surprisingly stable across thousands of conversations. The same handful of domains dominate. The same comparison-site listicles get cited hundreds of times. And the same handful of editorial titles set the tone of how the model talks about specific banks.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Where ChatGPT gets its information: the top 16 domains for UK banking
          </h2>

          <p className="mb-6">
            Across 143,010 citations from January through May 2026, here is what ChatGPT actually drew from when answering banking questions:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-700 text-left">
              <thead className="bg-gray-800">
                <tr>
                  <th className="border border-gray-700 p-3">Rank</th>
                  <th className="border border-gray-700 p-3">Domain</th>
                  <th className="border border-gray-700 p-3">Citations</th>
                  <th className="border border-gray-700 p-3">Ownership type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 p-3">1</td>
                  <td className="border border-gray-700 p-3 font-semibold">finder.com</td>
                  <td className="border border-gray-700 p-3">6,647</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">2</td>
                  <td className="border border-gray-700 p-3 font-semibold">forbes.com</td>
                  <td className="border border-gray-700 p-3">5,595</td>
                  <td className="border border-gray-700 p-3">Editorial</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">3</td>
                  <td className="border border-gray-700 p-3 font-semibold">en.wikipedia.org</td>
                  <td className="border border-gray-700 p-3">5,355</td>
                  <td className="border border-gray-700 p-3">Reference encyclopedia</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">4</td>
                  <td className="border border-gray-700 p-3 font-semibold">which.co.uk</td>
                  <td className="border border-gray-700 p-3">4,772</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">5</td>
                  <td className="border border-gray-700 p-3 font-semibold">comparebanks.co.uk</td>
                  <td className="border border-gray-700 p-3">4,228</td>
                  <td className="border border-gray-700 p-3">Aggregator / marketplace</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">6</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneysavingexpert.com</td>
                  <td className="border border-gray-700 p-3">3,130</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">7</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneytothemasses.com</td>
                  <td className="border border-gray-700 p-3">3,053</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">8</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneyweek.com</td>
                  <td className="border border-gray-700 p-3">2,314</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">9</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneysupermarket.com</td>
                  <td className="border border-gray-700 p-3">2,054</td>
                  <td className="border border-gray-700 p-3">Aggregator / marketplace</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">10</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneyfactscompare.co.uk</td>
                  <td className="border border-gray-700 p-3">2,016</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">11</td>
                  <td className="border border-gray-700 p-3 font-semibold">moneyzine.com</td>
                  <td className="border border-gray-700 p-3">2,013</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">12</td>
                  <td className="border border-gray-700 p-3 font-semibold">gov.uk</td>
                  <td className="border border-gray-700 p-3">1,863</td>
                  <td className="border border-gray-700 p-3">Government / regulatory</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">13</td>
                  <td className="border border-gray-700 p-3 font-semibold">theguardian.com</td>
                  <td className="border border-gray-700 p-3">1,524</td>
                  <td className="border border-gray-700 p-3">Editorial</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">14</td>
                  <td className="border border-gray-700 p-3 font-semibold">monito.com</td>
                  <td className="border border-gray-700 p-3">1,382</td>
                  <td className="border border-gray-700 p-3">Industry / trade publication</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">15</td>
                  <td className="border border-gray-700 p-3 font-semibold">nerdwallet.com</td>
                  <td className="border border-gray-700 p-3">1,277</td>
                  <td className="border border-gray-700 p-3">Aggregator / marketplace</td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="border border-gray-700 p-3">16</td>
                  <td className="border border-gray-700 p-3 font-semibold">ft.com</td>
                  <td className="border border-gray-700 p-3">1,213</td>
                  <td className="border border-gray-700 p-3">Editorial</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            The top 16 domains alone account for 48,436 citations, roughly 40% of all sourcing for the entire UK banking category. The remaining 60% are spread across 4,105 long-tail domains, most of which appear in fewer than 100 conversations.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Pattern one: comparison sites dominate by category, not by brand
          </h2>

          <p className="mb-6">
            Finder, Which?, MoneySavingExpert, MoneyToTheMasses, MoneyWeek, MoneyFactsCompare, Moneyzine, Monito, NerdWallet, and GoodMoneyGuide together account for 28,261 of the 48,436 top-16 citations, nearly half of all major sourcing. Add aggregators like comparebanks.co.uk, MoneySuperMarket, and the share rises to <strong>roughly 60% of the top-tier source pool</strong>.
          </p>

          <p className="mb-6">
            What this means in practice: when ChatGPT answers &quot;best current account UK,&quot; it is not picking from the banks themselves. It is reading a comparison-site ranking that was written by a journalist or product reviewer at Finder, Which?, or NerdWallet, and reproducing that ranking, often with the same banks at the top, often with the same descriptive language (&quot;rewards loyalty schemes,&quot; &quot;strong customer satisfaction scores&quot;), often with the same omissions.
          </p>

          <p className="mb-6">
            This is the single most important fact for any UK bank&apos;s <Link href="/growth-lab/the-ultimate-guide-llm-brand-visibility-geo" className="text-cyan-400 hover:underline">GEO strategy</Link>. Your visibility in ChatGPT is downstream of your presence in fifteen comparison-site rankings. You can rewrite your homepage every week and the model will barely notice. Get on a Finder shortlist, and the model will quote you 600+ times in a single quarter.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Pattern two: first-party sources are 2.57% of citations
          </h2>

          <p className="mb-6">
            Of 143,010 total citations, only 3,670 (about <strong>2.57%</strong>) pointed to a bank&apos;s own owned domain. Even when you include large bank-owned corporate sites that are not strictly customer-facing, the first-party share stays in the low single digits.
          </p>

          <p className="mb-6">
            This is the inverse of how most banks allocate their content investment. The marketing team writes hundreds of pages on the brand&apos;s own website. The model cites four of them. Meanwhile, a single comparison-site review can pull 800+ citations in five months.
          </p>

          <p className="mb-4">
            Two implications follow directly:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
            <li>
              The first is that traditional SEO performance does not predict AI sourcing. A page can rank #1 on Google for &quot;best UK current account&quot; and still be ignored by ChatGPT in favour of a Finder listicle. ChatGPT&apos;s retrieval is not Google&apos;s index.
            </li>
            <li>
              The second is that the brands quoted most often inside AI answers are not necessarily the brands that appear in the official ranking. ChatGPT will happily quote a Finder list that ranks NatWest fourth, and then in the natural-language response describe NatWest in detail because the surrounding paragraph has more on it. Position in the list is not what drives the model&apos;s narrative. The way a bank is described inside the prose is what gets recycled into the answer.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Pattern three: Wikipedia and gov.uk carry institutional weight
          </h2>

          <p className="mb-6">
            Wikipedia alone accounts for 5,355 citations. Gov.uk adds another 1,863. Together, these reference and regulatory sources make up about 11% of top-16 citations.
          </p>

          <p className="mb-6">
            The role of these two is different from comparison sites. Comparison sites shape the <strong>ranking</strong> of banks. Wikipedia and gov.uk shape the <strong>facts</strong>: founding year, ownership structure, headquarters, regulatory status, deposit guarantee scheme membership, parent group. When ChatGPT explains who a bank is, it pulls structural facts from these sources almost exclusively. When the Wikipedia entry for a bank contains an outdated CEO, a missing acquisition, or an unclear ownership chain, that error propagates directly into thousands of customer-facing AI answers.
          </p>

          <p className="mb-6">
            Most UK banks have not audited their own Wikipedia entries in years. This is the cheapest, highest-leverage correction available in the entire GEO playbook.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Why GA4 will not show you any of this
          </h2>

          <p className="mb-6">
            A reasonable counter-argument at this point is: &quot;If this matters, why isn&apos;t it showing up in our analytics?&quot;
          </p>

          <p className="mb-6">
            It is not showing up because GA4 measures clicks on outbound links. ChatGPT citations are mostly <em>not</em> clicked. The model has already synthesized the answer for the user. The user reads the answer, makes a decision, and either goes directly to the bank&apos;s app, walks into a branch, or moves on. The Finder citation that shaped their decision never converts into a referral session in your analytics.
          </p>

          <p className="mb-6">
            What does this look like in practice? A typical UK retail bank&apos;s GA4 dashboard might show a few hundred sessions per month attributed to AI sources. The actual number of ChatGPT conversations in which the bank was discussed will run into the tens of thousands, and the brand has no GA4-side visibility into any of them.
          </p>

          <p className="mb-6">
            This is the GA4 illusion: a measurement system that quietly hides 99% of a category&apos;s AI activity because that activity does not produce clicks. Banks that rely on GA4 to size the AI opportunity will systematically under-invest, because the data they are looking at is showing them the wrong number.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            What a bank should actually do with this data
          </h2>

          <p className="mb-6">
            Knowing what sources ChatGPT cites is only useful if it changes what the brand invests in. Three concrete shifts follow from the 2026 UK banking data:
          </p>

          <p className="mb-4">
            <strong>Audit the top 16 domains your category cites, not your own site.</strong> For UK banking, that list is now public, and your brand either appears in those rankings or it does not. If you appear, audit the language used to describe you. ChatGPT will repeat it. If you do not appear, the question is whether you can earn placement by demonstrating measurable advantages on the criteria those reviewers care about: customer satisfaction scores, app ratings, and account features.
          </p>

          <p className="mb-4">
            <strong>Treat Wikipedia and gov.uk as Tier-1 GEO assets, not afterthoughts.</strong> Your Wikipedia entry is more visible to ChatGPT than most of your owned content. Verify every fact, update structural information, and make sure the page is sourced from authoritative third-party citations.
          </p>

          <p className="mb-6">
            <strong>Stop measuring AI exposure with GA4.</strong> If your AI strategy is being sized off referral sessions, you are sizing off the 2.57% of activity that produces a click. Server log analysis and conversation-level tracking will surface the other 97.43%. For a full review of tools that track these metrics, see our breakdown of the <Link href="/growth-lab/best-llm-monitoring-tools-brand-visibility" className="text-cyan-400 hover:underline">best LLM monitoring tools for brand visibility</Link>.
          </p>

          <p className="mb-6">
            The question every CMO in UK banking should be asking next month is not &quot;are we visible on AI.&quot; It is: &quot;When ChatGPT answers a customer question about us, which fifteen URLs is it reading, and what do those URLs say?&quot; That answer is now knowable, and it is the only one that maps to how the model actually behaves.
          </p>

          <hr className="my-10 border-gray-800" />

          <p className="text-sm text-gray-400 italic mb-10">
            Data in this piece is drawn from the <Link href="https://genezio.com/industry-leaderboards/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Genezio GEO platform</Link>, which simulates multi-turn ChatGPT conversations as configured customer personas across UK commercial banking. The 2026 dataset covers 25,417 conversations, 143,010 citations, and 4,125 distinct sourced domains.
          </p>

          <hr className="my-10 border-gray-800" />

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Where does ChatGPT get its information about UK banking?</h4>
              <p className="text-gray-300">
                ChatGPT retrieves information in real-time using a retrieval layer that queries search indexes. For UK banking, around 60% of citations point to comparison sites (like Finder, Which?, and MoneySavingExpert) and aggregators, while only 2.57% point to the banks&apos; own websites. Editorial sites, Wikipedia, and government pages (like gov.uk) make up the rest.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Why are bank homepages rarely cited by ChatGPT?</h4>
              <p className="text-gray-300">
                When users ask ChatGPT for banking recommendations, comparisons, or reviews, the retrieval layer is optimized to pull from third-party authority sites, comparison tables, and review platforms rather than promotional brand homepages. This makes external mentions and reviews much more influential for AI visibility than a brand&apos;s own content.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Can traditional SEO strategies improve AI engine visibility?</h4>
              <p className="text-gray-300">
                Not necessarily. Traditional SEO focuses on ranking pages on Google&apos;s search result pages. AI engines (like ChatGPT&apos;s search feature) prioritize synthesized answers pulled from a curated set of authoritative hubs. To optimize for AI search (GEO/Generative Engine Optimization), brands must focus on being featured in these third-party comparison sites, aggregators, and reference sources like Wikipedia.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Why doesn&apos;t Google Analytics (GA4) show the traffic from these AI queries?</h4>
              <p className="text-gray-300">
                Most users read the synthesized answers directly within ChatGPT and do not click on the citation links. Because GA4 only tracks sessions initiated by direct link clicks (referrals), it misses the massive volume of conversations where the brand is recommended or discussed without generating a click.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">How can Wikipedia and gov.uk affect ChatGPT responses?</h4>
              <p className="text-gray-300">
                Wikipedia and gov.uk carry immense authority and shape the factual structural details (e.g., leadership, regulatory status, parent groups) that the model reproduces. Errors or outdated details on these pages propagate directly into ChatGPT&apos;s customer-facing answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
