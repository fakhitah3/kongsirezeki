import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Food Bank Kampus",
  description: "Inisiatif Food Bank Kampus - Menyokong kesejahteraan makanan pelajar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}