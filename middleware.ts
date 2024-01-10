import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.VERCEL_ENV === "preview") {
    // Custom logic for preview deployments
    const response = NextResponse.next();
    //  allow from codepen
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set("Cross-Origin-Resource-Policy", "cross-origin");
    response.headers.set("Content-Security-Policy", "frame-ancestors 'self' https://codepen.io");

    return response;
  }
  // Default behavior for other environments
  return NextResponse.next();
}
