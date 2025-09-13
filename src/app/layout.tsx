import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Sidebar } from "@/components/sidebar";
import { QueryProviders } from "@/components/query-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academic Portfolio",
  description: "Personal academic portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProviders>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 md:ml-64 min-h-screen">
              <div className="pt-16 md:pt-0">{children}</div>
            </main>
          </div>
        </QueryProviders>
      </body>
    </html>
  );
}
