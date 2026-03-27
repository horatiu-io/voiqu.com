import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get in Touch</h1>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to accelerate your growth? Let's discuss how we can work together to achieve your business goals.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:h@voiqu.com"
                  className="flex items-center text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="mr-3 w-5 h-5" />
                  h@voiqu.com
                </Link>

                <Link
                  href="https://linkedin.com/in/voiqu"
                  className="flex items-center text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="mr-3 w-5 h-5" />
                  Connect on LinkedIn
                </Link>
              </div>

              <div className="mt-12 p-6 bg-[#1A1A1A] border border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Response within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Free initial consultation call
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Custom growth strategy proposal
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    No obligation to proceed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form - Terminal Design */}
          <div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-red-500/10 border-b border-cyan-500/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">growth-sequence.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm">
              <div className="mb-4">
                <span className="text-cyan-400">$</span>
                <span className="text-white ml-2">Let's initialize your growth sequence</span>
              </div>

              <ContactForm />

              <div className="mt-8 pt-6 border-t border-gray-800">
                <button
                  type="submit"
                  form="contact-form"
                  className="w-full bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white px-6 py-4 rounded-lg font-mono font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 uppercase tracking-wide"
                >
                  INITIALIZE_GROWTH_SEQUENCE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

