import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/Redux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
};

export default function RootLayout({ children }) {
    // Wrapping all components within the Providers
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
