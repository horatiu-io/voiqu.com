import { NextRequest, NextResponse } from "next/server";

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

    // Forward the request to the n8n webhook
    const n8nUrl = "https://n8n.voiqu.com/webhook/a4279f62-fe56-46b4-adf6-a7297a479ff3";
    
    const response = await fetch(n8nUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer_x8934y5uhndskjfnYY78",
      },
      body: JSON.stringify(body),
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
