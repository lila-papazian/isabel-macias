"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import making1 from "../../public/mampujan/carousel/Making 01.jpg";
import making2 from "../../public/mampujan/carousel/Making 02.jpg";
import making3 from "../../public/mampujan/carousel/Making 03.jpg";
import making4 from "../../public/mampujan/carousel/making 04.jpg";
import making5 from "../../public/mampujan/carousel/making 05.jpg";
import making6 from "../../public/mampujan/carousel/making 06.jpg";
import making7 from "../../public/mampujan/carousel/making 07.jpg";
import making8 from "../../public/mampujan/carousel/making 08.jpg";
import making9 from "../../public/mampujan/carousel/making 09.jpg";

const SLIDES = [
  making1,
  making2,
  making3,
  making4,
  making5,
  making6,
  making7,
  making8,
  making9,
];

export default function MampujanCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
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
  );
}
