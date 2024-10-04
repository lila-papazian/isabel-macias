import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const figtree = Figtree({ subsets: ["latin"] });

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "SanQuirino Estudio",
  description: "Isabel Macias",
};

export default async function SanQuirinoEstudioLayout({
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
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
