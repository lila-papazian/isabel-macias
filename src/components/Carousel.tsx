import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import "./carousel.css";

type Props = {
  slides: any[];
  options?: EmblaOptionsType;
  className?: string;
};

const Carousel = ({ slides, options, className }: Props) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className={`embla ${className}`}>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((imgSrc, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <Image
                  className='embla__slide__img'
                  src={imgSrc}
                  alt={`Slide ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
