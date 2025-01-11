"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import HeaderLink from './HeaderLink';
import ImgNavigationLink from './ImgNavigationLink';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const t = useTranslations('Navigation');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex justify-between lg:justify-center max-w-std-screen w-full bg-white pb-5 pt-10 xl:py-5">
        <div className="flex justify-between w-extra py-2 mx-10 md:mx-16 lg:mx-20 border-black border-b xl:border-0">
          <div className="w-10 h-10 relative xl:hidden cursor-pointer mr-10" onClick={toggleDrawer}>
            <Image src={'/icons/menu-mobile-icon.png'} fill alt="menu-mobile-icon" />
          </div>

          <ImgNavigationLink
            className="z-30 xl:mr-14 w-40 h-10 relative self-center"
            src="/logos/logo-prosae-black.png"
            alt="prosae-logo"
          />

          <div className="hidden z-30 pl-14 pr-14 xl:flex flex-row space-x-10 items-center text-xl pb-5 border-black border-b-1">
            <HeaderLink href="/who_am_i">{t('whoAmI')}</HeaderLink>
            <HeaderLink href="/biography">{t('biography')}</HeaderLink>
            <HeaderLink href="/correction">{t('correction')}</HeaderLink>
            <HeaderLink href="/interpretariat">{t('interpretariat')}</HeaderLink>
            <a
              className="inline-block transition-colors uppercase text-nowrap text-black hover:font-extrabold"
              href="https://prosae.odoo.com"
            >
              {t('blog')}
            </a>
            <HeaderLink href="/contact">{t('contact')}</HeaderLink>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed top-0 left-0 w-64 lg:w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5">
            <button className="text-black text-xl font-bold mb-5" onClick={toggleDrawer}>
              X
            </button>
            <nav className="flex flex-col space-y-4">
              <HeaderLink onClick={toggleDrawer} href="/">{t('home')}</HeaderLink>
              <HeaderLink onClick={toggleDrawer} href="/who_am_i">{t('whoAmI')}</HeaderLink>
              <HeaderLink onClick={toggleDrawer} href="/biography">{t('biography')}</HeaderLink>
              <HeaderLink onClick={toggleDrawer} href="/correction">{t('correction')}</HeaderLink>
              <HeaderLink onClick={toggleDrawer} href="/interpretariat">{t('interpretariat')}</HeaderLink>
              <a
                className="inline-block transition-colors uppercase text-black hover:font-extrabold"
                href="https://prosae.odoo.com"
              >
                {t('blog')}
              </a>
              <HeaderLink onClick={toggleDrawer} href="/contact">{t('contact')}</HeaderLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
