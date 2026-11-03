import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const navLink =
  "text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent hover:text-accent";

const sans = Geist({ variable: "--font-body", subsets: ["latin"] });
const serif = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelcamilomartinez.com"),
  title: "Michael C. Martinez",
  description:
    "MSCS at UVA. Generative modeling for scientific and natural language domains.",
  openGraph: {
    title: "Michael C. Martinez",
    description: "MSCS at UVA.",
    url: "https://michaelcamilomartinez.com",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body>
        <div className="mx-auto max-w-7xl px-[22px] pb-16 pt-8 sm:px-[34px]">
          <nav className="mb-8 flex justify-end gap-5 text-sm">
            <Link className={navLink} href="/">Home</Link>
            <Link className={navLink} href="/books">Books</Link>
            <Link className={navLink} href="/blog">Blog</Link>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
