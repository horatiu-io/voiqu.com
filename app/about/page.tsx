import Image from "next/image"
import { Calendar, Award, ExternalLink } from "lucide-react"

export default function About() {
  const timeline = [
    {
      year: "2024",
      title: "Performance Marketing @ Genezio",
      description:
        "At Genezio, I focus on driving growth through performance marketing strategies, optimizing digital campaigns, and leveraging data-driven insights to enhance visibility and user acquisition.",
      current: true,
    },
    {
      year: "2022",
      title: "SEO Director @ MTH Digital",
      description:
        "As SEO Director at MTH Digital, I played a key role in developing and executing SEO strategies for multiple brands. One of my notable achievements was enhancing the online visibility of Transavia, strengthening its brand presence through strategic content initiatives.",
    },
    {
      year: "2020",
      title: "Head of Digital @ Perceptum",
      description:
        "At Perceptum, I led digital marketing strategies and campaign execution for major brands, including World Class, Technogym, Collective, Auchan/Ceetrus, and Under Armour.",
    },
    {
      year: "2016",
      title: "SEM Specialist @ Answear.ro",
      description:
        "During my time at Answear.ro, I contributed to the company's digital growth, supporting its marketing efforts. In 2019, Answear.ro reached €22 million in clothing sales.",
    },
    {
      year: "2015",
      title: "Joined Google Partners",
      description:
        "Becoming a Google Partner marked a significant milestone in my career, validating my expertise in Google Ads and digital marketing.",
      milestone: true,
    },
    {
      year: "2014",
      title: "PFA Establishment",
      description:
        "Collaborated with Sportaddict.ro, Credit Europe for optimizing the CardAvantaj.ro website, and F64 Studio for the F64.ro website.",
    },
    {
      year: "2012-2013",
      title: "SEO Specialist @ SeoMonitor",
      description:
        "SeoMonitor.com is the first SEO tool from Romania to gain international recognition (Best Innovation @ European Search Awards 2016). It was my first encounter with the digital world.",
    },
  ]

  const volunteerOrgs = [
    "WWF",
    "SOS Children's Villages",
    "alternative.blue",
    "Royal Air Forces Association",
    "DePaul",
    "Institute of Imagination London",
    "London Contemporary Dance School",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/h-voiqu.webp"
                alt="Professional photo"
                width={500}
                height={600}
                className="relative rounded-2xl border border-gray-700"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                My Story
              </h1>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Because stories help us understand the world more easily, my story as a digital marketing professional
                  began in 2012 when I was hired in the technical department of the agency SEO Monitor/Upswing.
                </p>

                <p>
                  I was also involved with Credit Europe in the marketing department, where I monitored SEO and PPC
                  campaigns for promoting the CardAvantaj credit card. Another company I was part of was F64, where I
                  worked in the company's digital department, focusing primarily on SEO and affiliate marketing.
                </p>

                <p>
                  Among my collaborations, I can mention working with the agency Marketizator/Omniconvert, the agency
                  Perceptum Concept, through which I worked with companies like World Class, Kvantum Sport, and Ceetrus,
                  as well as MTH Digital.
                </p>
              </div>

              {/* Current Focus */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Currently Working With</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    • <strong>Genezio.com</strong> - AI Agents Independent Testing Platform
                  </p>
                  <p>
                    • <strong>Volts</strong> - Remanufactured hybrid vehicle batteries
                  </p>
                  <p>
                    • <strong>Duragon</strong> - Protective silicone films for displays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Career Timeline</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                      item.current
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : item.milestone
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-gray-600 to-gray-700"
                    } border-4 border-gray-900`}
                  >
                    {item.milestone ? (
                      <Award className="w-6 h-6 text-white" />
                    ) : (
                      <Calendar className="w-6 h-6 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div
                      className={`p-6 rounded-xl ${
                        item.current
                          ? "bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500/50"
                          : "bg-gray-900 border border-gray-700"
                      } hover:border-blue-500/50 transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-blue-400">{item.year}</span>
                        {item.current && (
                          <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Current</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Volunteer Work</h2>
          <p className="text-xl text-gray-300 mb-8">
            Volunteering projects have been a significant part of this long journey
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {volunteerOrgs.map((org, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Learn More About My Journey</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read My Story (English)
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Listen to Superblog Podcast
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
