"use client";
import "./../../reset.css";
import "./../../globals.css";
import "./globals.css";

import headerImgEn from "../../../../public/memory/headerMemoria-en.webp";
import headerImgEs from "../../../../public/memory/headerMemoria-es.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FramedContent from "@/components/FramedContent";
import Carousel from "@/components/Carousel";
import { carouselOptions, MEMORY_SLIDES } from "@/utils";

import mosaic1 from "../../../../public/memory/mosaic/Story01.jpg";
import mosaic2 from "../../../../public/memory/mosaic/Story02.jpg";
import mosaic3 from "../../../../public/memory/mosaic/Story03.jpg";
import mosaic4 from "../../../../public/memory/mosaic/Story04.jpg";

import footer from "../../../../public/memory/footer.webp";

export default function Memoria({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Memory");

  return (
    <div style={{ backgroundColor: "#181516", color: "#D7D2B8" }}>
      <header>
        {locale === "es" ? (
          <Image
            src={headerImgEs}
            alt='Isabel Macias presenta el corto Memoria'
            className='header-img'
          />
        ) : (
          <Image
            src={headerImgEn}
            alt='Isabel Macias presents the short Memory'
            className='header-img'
          />
        )}
      </header>

      <main className='main'>
        <FramedContent frameSrc='/memory/frame.webp'>
          <iframe
            src='https://player.vimeo.com/video/928588882'
            title='Memoria - Reel'
            width='100%'
            height='100%'
            style={{ border: "none" }}
          />
        </FramedContent>

        <p>{t.rich("description", { br: () => <br /> })}</p>

        <FramedContent frameSrc='/memory/frame.webp'>
          <Carousel
            slides={MEMORY_SLIDES}
            options={carouselOptions}
            className='carousel-correction'
          />
        </FramedContent>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Image
            src={mosaic1}
            alt='mosaic 1'
            style={{ height: "100%", objectFit: "cover" }}
          />
          <Image
            src={mosaic2}
            alt='mosaic 2'
            style={{ height: "100%", objectFit: "cover" }}
          />
          <Image
            src={mosaic3}
            alt='mosaic 3'
            style={{ height: "100%", objectFit: "cover" }}
          />
          <Image
            src={mosaic4}
            alt='mosaic 4'
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        <p>{t.rich("credits", { br: () => <br /> })}</p>
      </main>

      <footer className="footer">
        <Image src={footer} alt="footer" className='header-img' />
      </footer>
    </div>
  );
}
