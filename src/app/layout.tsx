import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/flaticon/flaticon_zirox.css";
import "@/assets/scss/style.scss";
import InitAOS from "@/utils/InitAOS";
import BootstrapForBrowser from "@/components/shared/bootstrapForBrowser";


export const metadata: Metadata = {
  title: "Zirox - Creative Digital Agency Next.js Template",
  description: "Zirox - Creative Digital Agency Next.js and Bootstrap Template for Consulting  Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BootstrapForBrowser />
      <InitAOS/>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
