"use client";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/clerk-react";

const outfit = Outfit({
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
