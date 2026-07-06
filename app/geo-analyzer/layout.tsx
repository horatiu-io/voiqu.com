import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Predictable GEO & Technical SEO Audit | GEO Analyzer",
  description:
    "Deploy our AI agent to analyze how LLMs, Perplexity, and AI Search Engines read your headings, canonicals, and schema. Get B2B GEO insights.",
  openGraph: {
    title: "Predictable GEO & Technical SEO Audit | GEO Analyzer",
    description:
      "Deploy our AI agent to analyze how LLMs, Perplexity, and AI Search Engines read your headings, canonicals, and schema. Get B2B GEO insights.",
    url: "https://voiqu.com/geo-analyzer",
    type: "website",
  },
};

export default function GeoAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return <>{children}</>;
}
