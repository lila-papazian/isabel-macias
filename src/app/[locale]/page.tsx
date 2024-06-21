"use client";
import HomeAppBar from "@/components/HomeAppBar";
import HomeCarousel from "@/components/HomeCarousel";
import Box from "@mui/material/Box";

import Script from "next/script";
import Image from "next/image";
import { useTranslations } from "next-intl";

import instagramButton from "../../../public/boton instagram.png";

import Typography from "@mui/material/Typography";

import "./../globals.css";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const t = useTranslations("Home");
  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#E4BE6A" }}>
      <HomeAppBar scrollTo={scrollToSection} />
      <div className="header" style={{ width: "100%" }}>
        <img
          src="/header4.png"
          alt="isabel macias"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <div className="body">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <Typography>{t("menu.distribution")}:</Typography>
          <a
            href="/tejedoras-de-mampujan"
            className="button-menu"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <Typography>{t("projects.mampujanWeavers")}</Typography>
          </a>
        </Box>

        <section id="vimeo">
          <div className="iframe-container">
            <div className="iframe-wrapper">
              <iframe
                className="iframe"
                src="https://player.vimeo.com/video/791279077?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&title=0&byline=0&portrait=0&loop=1&autoplay=1&&controls=false"
                allow="autoplay; fullscreen;"
                allowFullScreen
                title="Reel stop motion - SanQuirino Estudio"
                style={{ outline: "none", border: "none", boxShadow: "none" }}
              ></iframe>
            </div>
            <Script id="vimeo-script">{`https://player.vimeo.com/api/player.js`}</Script>
          </div>
        </section>
        <section id="carousel">
          <HomeCarousel />
        </section>
        <section id="bio" style={{ marginBottom: "48px" }}>
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
              href={"https://www.instagram.com/isabelmacias_arte/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagramButton} alt="Instagram button" width={64} />
            </a>
            {/* <Image src={facebookButton} alt="facebook button" width={64} /> */}
            {/* <Image src={mailButton} alt="mail button" width={64} /> */}
          </div>
        </section>
      </div>
      <div className="footer">{`Isabel Macias – ${t("footer")}`}</div>
    </main>
  );
}
