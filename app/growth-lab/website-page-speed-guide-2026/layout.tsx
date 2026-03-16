import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Website Page Speed in 2026: How to Hit 100/100 For Free",
    description:
        "Slow sites kill conversions. Learn how I hit a perfect 100/100 Google PageSpeed score for free. Master Core Web Vitals and modern web performance in 2026.",
    openGraph: {
        title: "Website Page Speed in 2026: How to Hit 100/100 For Free",
        description:
            "Slow sites kill conversions. Learn how I hit a perfect 100/100 Google PageSpeed score for free. Master Core Web Vitals and modern web performance in 2026.",
        url: "https://voiqu.com/growth-lab/website-page-speed-guide-2026",
        type: "article",
        images: [
            {
                url: "/posts/thumbnail-futuristic-data-center.webp",
                alt: "Website Page Speed in 2026: How to Hit 100/100 For Free",
                width: 1200,
                height: 630,
            },
        ],
        publishedTime: "2026-03-06T09:00:00+02:00",
    },
    other: {
        "og:logo": "https://voiqu.com/logo.svg",
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Page Speed in 2026: How to Hit 100/100 For Free",
        description:
            "Slow sites kill conversions. Learn how I hit a perfect 100/100 Google PageSpeed score for free. Master Core Web Vitals and modern web performance in 2026.",
        images: ["/posts/thumbnail-futuristic-data-center.webp"],
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
