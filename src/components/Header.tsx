import { useTranslations } from 'next-intl';
import HeaderLink from './HeaderLink';
import ImgNavigationLink from './ImgNavigationLink';
import type { JSX } from "react";

export default function Header(): JSX.Element {
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-30 flex justify-center h-header max-w-std-screen w-full bg-white py-5">
      <div className='flex justify-between w-extra'>
        <ImgNavigationLink className='z-30 mr-14 w-40 h-10 relative self-center' src='/logos/logo-prosae-black.png' alt='prosae-logo' />
        <div className=" z-30 pl-14 pr-14 flex flex-row space-x-10 items-center text-xl pb-5 border-black border-b-1">
          <HeaderLink href="/who_am_i">{t('whoAmI')}</HeaderLink>
          <HeaderLink href="/biography">{t('biography')}</HeaderLink>
          <HeaderLink href="/correction">{t('correction')}</HeaderLink>
          <HeaderLink href="/interpretariat">{t('interpretariat')}</HeaderLink>
          <a className='inline-block transition-colors uppercase text-nowrap text-black hover:font-extrabold' href="https://prosae.odoo.com">{t('blog')}</a>
          <HeaderLink href="/contact">{t('contact')}</HeaderLink>
          {/* <div>
            <NextIntlClientProvider messages={pick(messages, 'LocaleSwitcher')}>
              <LocaleSwitcher />
            </NextIntlClientProvider>
          </div> */}
        </div>
      </div>
    </header>
  );
}
