import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Provider from "./components/ThemeProvider";

const roboto = Roboto({weight: ["100", "400", "500", "700", "900"], subsets: ["latin"]});

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
    <html lang="en" className={roboto.className}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
