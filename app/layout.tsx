import type { Metadata } from "next";
// Assuming Geist and Geist_Mono are correctly installed and imported
import { Geist, Geist_Mono } from "next/font/google"; // Keep your existing font imports if you intend to use them
import "./globals.css";
import Header from '../components/Header'; // Keep this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Artistly.com - Performing Artist Booking Platform', // UPDATED TITLE 
  description: 'Find and book performing artists for your events. Connect event planners with artist managers.', // UPDATED DESCRIPTION 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> {/* ADDED: Render the Header component here */}
        {children}
      </body>
    </html>
  );
}