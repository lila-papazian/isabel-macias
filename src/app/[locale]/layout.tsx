import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const figtree = Figtree({ subsets: ["latin"] });

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Isabel Macias",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={figtree.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </NextIntlClientProvider>
        <Script id='vimeo-script'>{`https://player.vimeo.com/api/player.js`}</Script>
      </body>
    </html>
  );
}
