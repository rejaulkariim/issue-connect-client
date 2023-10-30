import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryProvider } from "@/store/ReactQueryProvider";
import { ReduxProvider } from "@/store/provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Connect App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ReactQueryProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
