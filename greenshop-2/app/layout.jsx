import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenShop",
  description: "GreenShop - Your Online Plant Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-800 min-h-screen antialiased`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
