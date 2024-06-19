import HomeAppBar from "@/components/HomeAppBar";
import HomeCarousel from "@/components/HomeCarousel";
import Script from "next/script";
import Image from "next/image";

import instagramButton from "../../public/boton instagram.png";
import facebookButton from "../../public/boton facebook.png";
import mailButton from "../../public/boton mail.png";

import "./globals.css";

export default function Home() {
  return (
    <main>
      <HomeAppBar />
      <div className="header" style={{ width: "100%" }}>
        <img
          src="/header4.png"
          alt="isabel macias"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <div className="body">
        <section id="vimeo">
          <div
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
              color: "#0A0A0A",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/791279077?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&title=0&byline=0&portrait=0&loop=1&autoplay=1&&controls=false"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Reel stop motion - SanQuirino Estudio"
            ></iframe>
            <Script id="vimeo-script">{`https://player.vimeo.com/api/player.js`}</Script>
          </div>
        </section>

        <section id="carousel" style={{ width: "80vw", margin: "auto" }}>
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
            <Image src={facebookButton} alt="facebook button" width={64} />
            <Image src={instagramButton} alt="Instagram button" width={64} />
            <Image src={mailButton} alt="mail button" width={64} />
          </div>
        </section>
      </div>
      <div className="footer">
        Isabel Macias – Todos los derechos reservados
      </div>
    </main>
  );
}
