"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import banquina1 from "./../../public/homeCarousel/En la banquina-Fotograma01web.jpg";
import banquina2 from "./../../public/homeCarousel/En la banquina-Fotograma02web.jpg";
import banquina3 from "./../../public/homeCarousel/En la banquina-Fotograma03web.jpg";
import nena1 from "./../../public/homeCarousel/la nena01 web.jpg";
import ladyHacker1 from "./../../public/homeCarousel/Lady hacker 01web.jpg";
import ladyHacker3 from "./../../public/homeCarousel/Lady hacker 03web.jpg";
import nina1 from "./../../public/homeCarousel/Nina fotograma01web.jpg";
import nina2 from "./../../public/homeCarousel/Nina fotograma02 web.jpg";
import nina3 from "./../../public/homeCarousel/Nina fotograma03web.jpg";
import sarna1 from "./../../public/homeCarousel/sarna stop_00111.jpg";
import sarna2 from "./../../public/homeCarousel/sarna stop_00532web.jpg";

const SLIDES = [
  banquina1,
  banquina2,
  banquina3,
  nena1,
  ladyHacker1,
  ladyHacker3,
  nina1,
  nina2,
  nina3,
  sarna1,
  sarna2,
];

export default function HomeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="container">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((imgSrc, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={imgSrc}
                    alt={`Slide ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
