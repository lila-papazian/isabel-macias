"use client";
import "./../../globals.css";
import "./globals.css";
import footer from "./../../../../public/mampujan/pie de página.webp";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { useTranslations } from "next-intl";

import Image from "next/image";
import Script from "next/script";
import MampujanCarousel from "@/components/MampujanCarousel";

export default function TejedorasDeMampujan() {
  const t = useTranslations("Mampujan");

  return (
    <main>
      <AppBar
        position='static'
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "flex-start", alignItems: "center" }}>
          <a
            href='/'
            className='button-menu'
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <Typography>Isabel Macias</Typography>
          </a>
        </Toolbar>
      </AppBar>

      <div
        className='header'
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <img
          src='/mampujan/portada web.webp'
          style={{
            objectFit: "contain",
            width: "50%",
            height: "auto",
          }}
        />
        {/* <img
          src="/mampujan/un film de isabel macias v2.webp"
          style={{
            objectFit: "contain",
            width: "50%",
            height: "auto",
          }}
        /> */}
      </div>

      <div className='body' style={{ marginBottom: "96px" }}>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          sx={{ paddingBottom: "24px" }}
        >
          <Typography
          variant="h5"
            sx={{ paddingBottom: "12px", fontWeight: 700 }}
          >
            {t("Synopsis")}
          </Typography>
          <Typography className='text'>
            {t.rich("Synopsis Text", { br: () => <br /> })}
          </Typography>
        </Box>

        <div id='vimeo' style={{ paddingBottom: "24px" }}>
          <Typography
          variant="h5"
          sx={{
              paddingBottom: 0,
              fontWeight: 700,
              marginBottom: "-24px",
            }}
          >
            Trailer
          </Typography>
          <div
            style={{
              width: "100%",
              color: "transparent",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                margin: "0 auto",
                width: "80%",
                height: "80%",
              }}
            >
              <iframe
                src='https://player.vimeo.com/video/961437058?h=1711145aae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&muted=1&title=0&byline=0&portrait=0&loop=1&autoplay=1&&controls=false'
                allow='autoplay; fullscreen;'
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "100%",
                  margin: "auto",  outline: "none", border: "none", boxShadow: "none" 
                }}
                title='Tejedoras de Mampujan'
              ></iframe>
            </div>
          </div>
          <Script id='vimeo-script'>{`https://player.vimeo.com/api/player.js`}</Script>
        </div>

        {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography>Storyboard</Typography>
        <Masonry columns={3} spacing={2}>

        </Masonry>
      </Box> */}
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          sx={{ paddingBottom: "24px" }}
        >
          <Typography
          variant="h5"
          sx={{ paddingBottom: "12px", fontWeight: 700 }}
          >
            {t("Behind the scenes")}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MampujanCarousel />
          </div>
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          sx={{ paddingBottom: "24px" }}
        >
          <Typography
          variant="h5"
          sx={{ paddingBottom: "12px", fontWeight: 700 }}
          >
            {t("Credits")}
          </Typography>
          <Typography className='text'>
            {t.rich("Credits first column", { br: () => <br /> })}
            {t.rich("Credits second column", { br: () => <br /> })}
          </Typography>
        </Box>

        {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography>Kit de Prensa</Typography>
      </Box> */}

        <Box
          display='flex'
          gap='6px'
          sx={{ marginBottom: "96px" }}
          alignItems='center'
        >
          <Typography
            className='text-large'
            sx={{ paddingBottom: "12px", fontWeight: 700 }}
          >
            {`${t("Contact us")} or ${t("Email").toLocaleLowerCase()} `}{" "}
            <a
              href='mailto:info@animation1908.com'
              className='button-menu'
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "larger",
              }}
            >
              info@animation1908.com
            </a>
          </Typography>
        </Box>
      </div>

      <div
        className='footer'
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Image
          src={footer}
          alt='Footer'
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div
          className='text-small'
          style={{
            paddingBottom: "0.75rem",
            color: "#E4BE6A",
            zIndex: 3,
            position: "absolute",
          }}
        >
          {t("MampujanWeavers")}-{t("footer")}
        </div>
      </div>
    </main>
  );
}
