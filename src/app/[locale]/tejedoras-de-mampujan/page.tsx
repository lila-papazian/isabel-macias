"use client";
import "./../../reset.css";
import "./../../globals.css";
import "./globals.css";

import headerImgEn from "../../../../public/mampujan/headerMampujanEn.webp";
import headerImgEs from "../../../../public/mampujan/headerMampujanEs.webp";

import { useTranslations } from "next-intl";

import Image from "next/image";

import FramedContent from "@/components/FramedContent";
import Carousel from "@/components/Carousel";
import { carouselOptions, MAMPUJAN_SLIDES, MAMPUJAN_STORYBOARD } from "@/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import footer from "../../../../public/mampujan/footer.webp";
import CustomAccordion from "@/components/CustomAccordion";

export default function TejedorasDeMampujan({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Mampujan");

  return (
    <div style={{ backgroundColor: "#EBE9D4", color: "#37310D" }}>
      <header>
        {locale === "es" ? (
          <Image
            src={headerImgEs}
            alt='Isabel Macias presenta Tejedoras de Mampujan'
            className='header-img'
          />
        ) : (
          <Image
            src={headerImgEn}
            alt='Isabel Macias presents Weavers of Mampujan'
            className='header-img'
          />
        )}
      </header>
      <main className='main'>
        <CustomAccordion
          summary={t("synopsis")}
          content={t.rich("synopsisDescription", { br: () => <br /> })}
        />

        <FramedContent frameSrc='/mampujan/frame.webp'>
          <iframe
            src='https://player.vimeo.com/video/964933926'
            title='Mampujan - Reel'
            style={{ border: "none", width: "80%", height: "100%" }}
          />
        </FramedContent>

        <CustomAccordion
          summary={t("directorsStatement")}
          content={t.rich("directorsStatementDescription", {
            br: () => <br />,
          })}
        />

        <FramedContent frameSrc='/mampujan/frame.webp'>
          <Carousel
            slides={MAMPUJAN_SLIDES}
            options={carouselOptions}
            className='carousel-correction'
          />
        </FramedContent>

        <h3>Storyboard</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {MAMPUJAN_STORYBOARD.map((story: StaticImport, index: number) => (
            <Image
              src={story}
              alt={`Story ${index}`}
              style={{ height: "50%", objectFit: "cover" }}
            />
          ))}
        </div>

        <p>{t.rich("credits", { br: () => <br /> })}</p>
      </main>
      <footer className='footer'>
        <Image src={footer} alt='footer' className='header-img' />
      </footer>
    </div>
  );
}
