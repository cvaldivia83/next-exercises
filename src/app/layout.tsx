import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Aulas Origamid",
  description: "| Carla Valdivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
