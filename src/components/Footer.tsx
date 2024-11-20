import pick from 'lodash/pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Image from 'next/image';
import NavigationLink from './NavigationLink';

import type { JSX } from "react";

export default function Footer(): JSX.Element {
  const messages = useMessages();
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <div className="h-footer max-w-std-screen w-full bg-primary px-32 pt-10">
      <div className='flex flex-row justify-between text-xl mx-20'>
          <NextIntlClientProvider messages={pick(messages, 'Footer')}>
            <div>
              <div className='text-2xl font-semibold'>{t('quickLinks')}</div>
              <div className='grid gap-x-5 gap-y-1 grid-cols-2 pt-3'>
                <NavigationLink className="w-fit" href={'/'}>{tNav('home')}</NavigationLink>
                <NavigationLink className="w-fit" href={'/interpretariat'}>{tNav('interpretariat')}</NavigationLink>
                <NavigationLink className="w-fit" href={'/who_am_i'}>{tNav('whoAmI')}</NavigationLink>
                <a className='w-fit inline-block transition-all duration-300 ease-in-out hover:scale-90 transform-origin-center' href="https://prosae.odoo.com">{tNav('blog')}</a>
                <NavigationLink className="w-fit" href={'/biography'}>{tNav('biography')}</NavigationLink>
                <NavigationLink className="w-fit" href={'/contact'}>{tNav('contact')}</NavigationLink>
                <NavigationLink className="w-fit" href={'/correction'}>{tNav('correction')}</NavigationLink>
              </div>
            </div>
          </NextIntlClientProvider>
        <div className='flex flex-col space-y-1'>
          <div className='text-2xl font-semibold'>{t('contactMe')}</div>
          <a className='w-fit pt-3' href="mailto:jeanne.sabiron@prosae.net">jeanne.sabiron@prosae.net</a>
          <a href="tel:+33607045087" className='w-fit'>+33 6 07 04 50 87</a>
          <a href="https://instagram.com/_prosae_" className='flex flex-row items-center w-fit'>
            <div className='w-5 h-5 relative mr-2'>
              <Image src={"/logos/logo-instagram.png"} fill alt='Logo Instagram' />
            </div>
            Instagram
          </a>
          <a href="https://linkedin.com/company/prosae" className='flex flex-row items-center w-fit'>
            <div className='w-5 h-5 relative mr-2'>
              <Image src={"/logos/logo-linkedin.png"} fill alt='Logo Linkedin' />
            </div>
            Linkedin
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556013251344" className='flex flex-row items-center w-fit'>
            <div className='w-5 h-5 relative mr-2'>
              <Image src={"/logos/logo-facebook.jpg"} fill alt='Logo Facebook' />
            </div>
            Facebook
          </a>
        </div>
      </div>
      <div className='border-t-2 border-black mt-10' />
      <div className='flex flex-row justify-between text-lg py-2 px-5'>
        <div>@2024 Prosae all rights reserved</div>
        <div className='flex flex-row'>
          <a href='/'>Terms of use</a>
          <div className='mx-2'>|</div>
          <a href='/'>Privacy Environmental Policy</a>
        </div>
      </div>
    </div>
    );
}
