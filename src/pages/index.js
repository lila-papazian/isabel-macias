import * as React from "react";
import "../css/styles.css";
import "../i18n";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  es: { nativeName: "ES" },
};

const socialLink = {
  vimeo: "https://vimeo.com/isabelmacias",
  instagram: "https://www.instagram.com/isabelmacias_arte/",
  email: "mailto:isabelmacias.art@gmail.com",
};

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const handleSocialNavigation = (e, key) => {
    e.preventDefault();
    window.location = socialLink[key];
  };

  return (
    <main>
      <nav class="navbar navbar-expand-lg">
        <div className="d-flex w-100 justify-content-end align-items-center me-3">
          <button
            className="nav-link"
            key={"en"}
            style={{
              fontWeight: i18n.resolvedLanguage === "en" ? "bold" : "normal",
              paddingRight: "0.5em",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage("en")}
          >
            {lngs["en"].nativeName}
          </button>
          |
          <button
            className="nav-link"
            key={"es"}
            style={{
              fontWeight: i18n.resolvedLanguage === "es" ? "bold" : "normal",
              paddingLeft: "0.5em",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage("es")}
          >
            {lngs["es"].nativeName}
          </button>
        </div>
      </nav>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="title mb-3 text-center">Isabel Macias</h1>
        <span className="subtitle mb-3">{t("comingSoon")}</span>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="icons" onClick={(e) => handleSocialNavigation(e, "vimeo")}>
            <i
              className="icon bi bi-vimeo px-3"
              style={{ color: "#86c9ef" }}
              
            ></i>

            <a href={socialLink["vimeo"]} style={{ textDecoration: "none" }}>
              vimeo.com/isabelmacias
            </a>
          </div>
          <div
            className="icons"
            onClick={(e) => handleSocialNavigation(e, "instagram")}
          >
            <i
              className="icon bi bi-instagram px-3"
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            ></i>
            <a
              href={socialLink["instagram"]}
              style={{ textDecoration: "none" }}
            >
              instagram.com/isabelmacias_arte
            </a>
          </div>
          <div className="icons">
            <i
              aria-label="Email"
              className="icon bi bi-envelope px-3"
              onClick={(e) => handleSocialNavigation(e, "email")}
            ></i>

            <span>isabelmacias.art@gmail.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Isabel Macias</title>;
