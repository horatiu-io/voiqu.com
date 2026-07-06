import { NextRequest, NextResponse } from "next/server";

// Memory cache for disposable email domains
let cachedDisposableDomains: Set<string> = new Set();
let cacheTimestamp = 0;
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours cache

const STATIC_FREE_AND_DISPOSABLE = new Set([
  // Freemails
  "gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com", "aol.com", "mail.com", "zoho.com",
  "proton.me", "protonmail.com", "live.com", "msn.com", "yandex.com", "gmx.com", "mail.ru", "free.fr",
  "fastmail.com", "hushmail.com",
  // Common disposable/temp domains (fallback)
  "imxwe.com", "mailinator.com", "yopmail.com", "tempmail.com", "10minutemail.com", "trashmail.com",
  "guerrillamail.com", "sharklasers.com", "dispostable.com", "getairmail.com", "burnermail.io",
  "temp-mail.org", "tempmailo.com", "10minutemail.one"
]);

async function getDisposableDomains(): Promise<Set<string>> {
  const now = Date.now();
  if (cachedDisposableDomains.size > 0 && (now - cacheTimestamp < CACHE_TTL)) {
    return cachedDisposableDomains;
  }

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/disposable_domains.txt",
      {
        signal: AbortSignal.timeout(3000), // 3-second timeout
      }
    );
    if (response.ok) {
      const text = await response.text();
      const domains = text
        .split("\n")
        .map((d) => d.trim().toLowerCase())
        .filter((d) => d.length > 0 && !d.startsWith("#"));

      cachedDisposableDomains = new Set(domains);
      cacheTimestamp = now;
      console.log(`[GEO Webhook] Loaded ${cachedDisposableDomains.size} disposable domains dynamically.`);
    }
  } catch (error) {
    console.error("[GEO Webhook] Failed to fetch disposable domains list dynamically:", error);
  }

  return cachedDisposableDomains;
}

export async function POST(request: NextRequest) {
  try {
    // Extract the JSON body from the incoming request
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid JSON body or empty request." },
        { status: 400 }
      );
    }

    const { url, email } = body;

    if (!url || !email) {
      return NextResponse.json(
        { error: "Missing required fields: 'url' and 'email'." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const domain = cleanEmail.split("@")[1];

    if (!domain) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // 1. Check against static B2B freemail + common disposable blocklist
    if (STATIC_FREE_AND_DISPOSABLE.has(domain)) {
      return NextResponse.json(
        { error: "Access Denied: Please use a valid company email." },
        { status: 400 }
      );
    }

    // 2. Fetch and check against the dynamic global disposable email list
    const disposableList = await getDisposableDomains();
    if (disposableList.has(domain)) {
      return NextResponse.json(
        { error: "Access Denied: Please use a valid company email." },
        { status: 400 }
      );
    }

    // Forward the request to the n8n webhook
    const n8nUrl = "https://n8n.voiqu.com/webhook/a4279f62-fe56-46b4-adf6-a7297a479ff3";
    
    const response = await fetch(n8nUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer_x8934y5uhndskjfnYY78",
      },
      body: JSON.stringify({ url, email: cleanEmail }),
    });

    // Check if the n8n webhook responded successfully
    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      return NextResponse.json(
        { error: `n8n webhook error: ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    // Try parsing the response body from n8n
    let responseData;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      const text = await response.text();
      responseData = text ? { message: text } : { success: true };
    }

    return NextResponse.json(responseData, { status: 200 });
  } catch (error: any) {
    console.error("Error in n8n-webhook proxy route:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

