"use client";
import HomeAppBar from "@/components/HomeAppBar";
import HomeCarousel from "@/components/HomeCarousel";
import Box from "@mui/material/Box";

import Script from "next/script";
import Image from "next/image";
import { useTranslations } from "next-intl";

import instagramButton from "../../../public/boton instagram.png";
import facebookButton from "../../../public/boton facebook.png";
import mailButton from "../../../public/boton mail.png";
import headerImg from "../../../public/headerImg.webp";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const t = useTranslations("Home");
  return (
    <body>
      <div>
        <HomeAppBar scrollTo={scrollToSection} />
        <Image
          src={headerImg}
          alt='Isabel Macias, embroided in yellow over black cloth background'
          sizes='100vw'
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "4px",
          }}
        >
          <p className='label'>{t("menu.distribution")}:</p>
          <a href='/tejedoras-de-mampujan' className='button-menu link-label'>
            <p>{t("projects.mampujanWeavers")}</p>
          </a>
        </Box>

        <section id='vimeo'>
          <div className='iframe-container'>
            <div className='iframe-wrapper'>
              <iframe
                className='iframe'
                src='https://player.vimeo.com/video/791279077?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&title=0&byline=0&portrait=0&loop=1&autoplay=1&&controls=false'
                allow='autoplay; fullscreen;'
                allowFullScreen
                title='Reel stop motion - SanQuirino Estudio'
                style={{ outline: "none", border: "none", boxShadow: "none" }}
              ></iframe>
            </div>
            <Script id='vimeo-script'>{`https://player.vimeo.com/api/player.js`}</Script>
          </div>
        </section>

        <section id='carousel'>
          <HomeCarousel />
        </section>

        <section id='bio'>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              gap: "32px",
            }}
          >
            <a
              href='https://www.instagram.com/isabelmacias_arte/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={instagramButton} alt='Instagram button' width={64} />
            </a>
            <a
              href='https://www.facebook.com/isabel.macias.5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={facebookButton} alt='facebook button' width={64} />
            </a>

            <a href='mailto:sanquirinoestudio@gmail.com'>
              <Image src={mailButton} alt='mail button' width={64} />
            </a>
          </div>
        </section>
      </main>

      <div
        className='footer'
        style={{ cursor: "default" }}
      >{`Isabel Macias – ${t("footer")}`}</div>
    </body>
  );
}
