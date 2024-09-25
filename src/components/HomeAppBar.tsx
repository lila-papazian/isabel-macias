"use client";
import { useTranslations } from "next-intl";

interface Props {
  scrollTo: (sectionId: string) => void;
}

export default function HomeAppBar({ scrollTo }: Props) {
  const t = useTranslations("Home");

  const handleScroll = (sectionId: string) => scrollTo(sectionId);

  return (
    <div className='appBar'>
      <p
        className='button-menu contact-label'
        onClick={() => handleScroll("bio")}
      >
        {t("appBar.contactUs")}
      </p>
    </div>
  );
}
