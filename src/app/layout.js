import { poppins, satoshi } from "@/lib/fonts";
import Providers from "@/providers/Providers";
import "./globals.css";

export const metadata = {
  title: "ByteSpace",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
