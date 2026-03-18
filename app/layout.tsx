import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jelliebot Products",
  description: "AI tools and guides for builders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
