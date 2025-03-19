import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miminhos da Pomerânia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center antialiased`}
      >
        <div className="container">
          {children}
        </div>
        
      </body>
    </html>
  );
}
