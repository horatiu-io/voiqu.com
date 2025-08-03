import {
  Quote,
  Target,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Handshake,
  Eye,
  DollarSign,
  Play,
  Lightbulb,
  BookOpen,
  Crown,
  Zap,
} from "lucide-react"

export default function MyWork() {
  const principles = [
    {
      icon: Target,
      title: "From Blame to Mastery",
      subtitle: "Responsibility",
      description:
        "Stop acting like a mere victim of circumstances beyond your control and take ownership of the life you want to live.",
    },
    {
      icon: Heart,
      title: "From Winning to Meaning",
      subtitle: "Wisdom",
      description:
        "Stop chasing purely competitive goals and realize that true happiness comes from pursuing a noble purpose through ethical means.",
    },
    {
      icon: Eye,
      title: "From Judging to Understanding",
      subtitle: "Compassion",
      description: "Stop seeing people through your own mental filters—step into their shoes instead.",
    },
    {
      icon: Handshake,
      title: "From Taking to Trading",
      subtitle: "Creativity",
      description: "Stop engaging in win-lose negotiations and seek ways to create exchanges where everyone benefits.",
    },
    {
      icon: Shield,
      title: "From Avoidance to Confrontation",
      subtitle: "Courage",
      description: "Stop suppressing uncomfortable truths and face reality head-on.",
    },
    {
      icon: Users,
      title: "From Control to Consideration",
      subtitle: "Respect",
      description: "Stop telling people what they must do—acknowledge what they want to do.",
    },
    {
      icon: DollarSign,
      title: "From Debt to Added Value",
      subtitle: "Integrity",
      description: "Stop deceiving your creditors—honor your commitments unconditionally.",
    },
    {
      icon: Play,
      title: "From Submission to Engagement",
      subtitle: "Commitment",
      description: "Stop obeying as if you have no choice—choose to be fully present in what you do.",
    },
    {
      icon: Lightbulb,
      title: "From Frivolous Pleasures to Truth",
      subtitle: "Honesty",
      description: "Stop altering your story to please others—start telling the truth.",
    },
    {
      icon: TrendingUp,
      title: "From Indulgence to Investment",
      subtitle: "Discipline",
      description: "Stop seeking instant gratification—delay immediate pleasure for long-term growth.",
    },
    {
      icon: BookOpen,
      title: "From Knowing to Learning",
      subtitle: "Humility",
      description: "Stop trying to prove you're always right—open yourself to new possibilities.",
    },
    {
      icon: Crown,
      title: "From Bossing to Leading",
      subtitle: "Vision",
      description: "Stop managing people solely through rewards and punishments—inspire them with a worthy purpose.",
    },
  ]

  const services = ["SEO", "Google Ads", "Facebook Ads", "Analytics"]

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">What Do I Do?</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">Or, in Mythological Terms, What's My Boulder?</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D0D0D] rounded-2xl p-8 mb-12 border border-gray-800">
            <Quote className="w-12 h-12 text-cyan-400 mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Since I follow Gary V, I'll keep it simple: first and foremost, I don't try to sell to people who aren't
              interested in buying. That's one of those common-sense rules I stick to. If you don't care about your
              business, why should I?
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In terms of what I do, I've also been influenced by an idea from Simon Sinek that I came across in his
              bestseller <em>Start with Why</em>. In short, he argues that if you're playing an infinite game, the most
              important thing is to be better than you were yesterday. So yesterday, I was doing SEO, Google Ads,
              Facebook Ads, and tracking through Google Analytics, implemented via Google Tag Manager. Today, I'm still
              doing all of that—but better.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={service}
                className="bg-[#0D0D0D] rounded-xl p-6 text-center hover:bg-gray-900 transition-all duration-300 border border-gray-800"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fred Kofman's 12 Principles - All in consistent grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The 12 Principles of Conscious Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Inspired by Fred Kofman's teachings on transforming business from operating unconsciously to acting with
              intention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-500/50 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-cyan-400 text-xs font-medium uppercase tracking-wide">{principle.subtitle}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm mb-3 leading-tight">{principle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-red-600/20 border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Have Better Rules?</h2>
            <p className="text-gray-300 mb-6">
              Write to me if you've come across better rules that could help me improve what I do.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
