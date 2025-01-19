import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سفر آگاه",
  description: "سفر آگاه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: "url('image.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {children}
      </body>
    </html>
  );
}
