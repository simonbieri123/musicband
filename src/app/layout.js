// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Züri West",
  description: "Band: Züri West Webseite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar navbar-expand-lg bg-warning navbar-dark mb-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Züri West</a>
            <div className="d-flex gap-3">
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/album">Album</a>
              <a className="nav-link" href="/videos">Videos</a>
              <a className="nav-link" href="/contact">Contact</a>
            </div>
          </div>
        </nav>

        <main className="container">
          {children}
        </main>

      </body>
    </html>
  );
}
