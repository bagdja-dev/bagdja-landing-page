import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./src/lib/i18n";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  const seg = pathname.split("/")[1] || "";
  if (isLocale(seg)) return NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

