import { BRAND_COLORS } from "@/lib/constants/brand";
import { SITE } from "@/lib/constants/site";
import { poppins, satoshi } from "@/lib/fonts";
import { buildMetadata } from "@/lib/utils/seo";
import Providers from "@/providers/Providers";
import "./globals.css";

export const metadata = {
  ...buildMetadata({ path: "/" }),
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  applicationName: SITE.name,
  keywords: SITE.keywords,
};

export const viewport = {
  themeColor: BRAND_COLORS.blue,
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
