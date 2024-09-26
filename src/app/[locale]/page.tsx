"use client";
import "./../reset.css";
import "./../globals.css";

import Image from "next/image";
import { useTranslations } from "next-intl";

import instagramButton from "../../../public/boton instagram.webp";
import facebookButton from "../../../public/boton facebook.webp";
import mailButton from "../../../public/boton mail.webp";
import headerImg from "../../../public/headerImg.webp";

import HomeAppBar from "@/components/HomeAppBar";
import FramedContent from "@/components/FramedContent";
import Carousel from "@/components/Carousel";
import { carouselOptions, HOME_SLIDES } from "@/utils";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const t = useTranslations("Home");
  return (
    <div style={{ backgroundColor: " #0a0a0a", color: "#e4be6a" }}>
      <header>
        <HomeAppBar scrollTo={scrollToSection} />
        <Image
          src={headerImg}
          alt='Isabel Macias, embroidered in yellow over black cloth'
          className='header-img'
        />
      </header>

      <main>
        <div className='movie-list'>
          <p className='label'>{t("menu.distribution")}:</p>
          <a href='/tejedoras-de-mampujan' className='button-menu'>
            <p>{t("projects.mampujanWeavers")}</p>
          </a>
        </div>

        <section id='our-work'>
          <FramedContent>
            <iframe
              src='https://player.vimeo.com/video/791279077'
              title='Embedded content'
              width='100%'
              height='100%'
              style={{ border: "none" }}
            />
          </FramedContent>

          <FramedContent>
            <Carousel slides={HOME_SLIDES} options={carouselOptions} />
          </FramedContent>
        </section>

        <section id='bio'>
          <div className='contact-container'>
            <a
              href='https://www.instagram.com/isabelmacias_arte/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={instagramButton}
                alt='Instagram button'
                className='contact-button'
              />
            </a>
            <a
              href='https://www.facebook.com/isabel.macias.5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={facebookButton}
                alt='facebook button'
                className='contact-button'
              />
            </a>

            <a href='mailto:sanquirinoestudio@gmail.com'>
              <Image
                src={mailButton}
                alt='mail button'
                className='contact-button'
              />
            </a>
          </div>
        </section>
      </main>

      <footer>{`Isabel Macias – ${t("footer")}`}</footer>
    </div>
  );
}
