import MainHeader from "@/components/main-header/main-header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextLevel Foodies",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
