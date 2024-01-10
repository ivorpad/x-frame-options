import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.VERCEL_ENV === "preview") {
    // Custom logic for preview deployments
    const response = NextResponse.next();
    //  allow from codepen
    response.headers.set("X-Frame-Options", "ALLOW-FROM https://codepen.io");
    return response;
  }
  // Default behavior for other environments
  return NextResponse.next();
}
