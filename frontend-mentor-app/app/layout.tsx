"use client";
import { Provider } from "react-redux";
import "./globals.css";
import type { Metadata } from "next";
import { store } from "./store";

export const metadata: Metadata = {
  title: "Front-end mentor",
  description: "A job finder web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Leauge_spartan">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
