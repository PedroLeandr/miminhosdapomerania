import "./globals.css";

import { Header } from '../components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center {`antialiased`}">
        <div className="container">
          <Header/>

          {children}
        </div>
      </body>
    </html>
  );
}