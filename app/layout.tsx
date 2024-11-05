import type { Metadata } from "next";
import "../styles/globals.css";
// import { Inter } from "next/font/google";
import { GlobalNav } from "@/ui/global-nav";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "level up next js",
  description: "연습용",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="max-w-4xl px-2 pt-20 mx-auto space-y-8 lg:px-8 lg:py-8">
            <div className="p-px rounded-lg shadow-lg bg-vc-border-gradient shadow-black/20">
              <div className="bg-white rounded-lg">
                ADDRESSBAR{/*<AddressBar />*/}
              </div>
            </div>

            <div className="p-px rounded-lg shadow-lg bg-vc-border-gradient shadow-black/20">
              <div className="rounded-lg bg-white p-3.5 lg:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
