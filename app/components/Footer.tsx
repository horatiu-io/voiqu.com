import Link from "next/link"
import { Linkedin, Mail, Instagram, Music, Twitter, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { href: "https://www.instagram.com/voiqu/", icon: Instagram, label: "Instagram" },
    { href: "https://open.spotify.com/user/voiqu-h?si=G0qIL1cnTzOik_GFaFq1XQ", icon: Music, label: "Spotify" },
    { href: "https://x.com/voiqu", icon: Twitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/voiqu/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://wellfound.com/u/voiqu", icon: MessageCircle, label: "Wellfound" },
    { href: "https://wa.me/40740244298", icon: Phone, label: "WhatsApp" },
    { href: "https://www.reddit.com/user/voiquh", icon: MessageCircle, label: "Reddit" },
    { href: "https://www.facebook.com/voiquh", icon: MessageCircle, label: "Facebook" },
  ]

  return (
    <footer className="bg-[#0D0D0D] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-400">© 2025 Voiqu. All rights reserved.</p>
            <Link
              href="mailto:h@voiqu.com"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              h@voiqu.com
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>

            {/* Google Partners Badge - Last on the right */}
            <a
              href="https://www.google.com/partners/agency?id=6099937741"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2025/PartnerBadgeClickable.svg"
                alt="Google Partners Badge"
                className="h-10 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
