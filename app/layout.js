import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WatchConfigProvider } from "@/context/WatchContext";

export const metadata = {
  title: "Create Your Apple Watch",
  description: "Apple watch studio clone made by Nikhil Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WatchConfigProvider>
        <body>{children}</body>
      </WatchConfigProvider>
    </html>
  );
}
