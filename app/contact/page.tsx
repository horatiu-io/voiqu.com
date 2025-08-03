import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to accelerate your growth? Let's discuss how we can work together to achieve your business goals.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:hello@growthhacker.com"
                  className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="mr-3 w-5 h-5" />
                  hello@growthhacker.com
                </Link>

                <Link
                  href="https://linkedin.com/in/growthhacker"
                  className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="mr-3 w-5 h-5" />
                  Connect on LinkedIn
                </Link>
              </div>

              <div className="mt-12 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Response within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Free initial consultation call
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Custom growth strategy proposal
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    No obligation to proceed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
