import { useTranslations } from 'next-intl';

import type { JSX } from "react";

export default function BannerUnderDevelopment(): JSX.Element {
  const t = useTranslations('Banner');

  return (
    <div className="sticky top-[89px] z-10 w-full py-5 rounded-b-xl bg-black hover:bg-yellow-900 isolate transition before:absolute before:inset-0 before:-z-10 before:block before:animate-pulse before:bg-[repeating-linear-gradient(-45deg, theme('colors.yellow.300') 0 5px, transparent 5px 20px)]">
      <div className='text-2xl font-bold text-white text-center drop-shadow-stoke select-none'>{t("underDevelopment")}</div>
    </div>
    );
}
