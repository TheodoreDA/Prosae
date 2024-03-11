import pick from 'lodash/pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Image from 'next/image';
import NavigationLink from './NavigationLink';

export default function Footer(): JSX.Element {
  const messages = useMessages();
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <div className="bg-primary h-footer flex flex-col px-32 pt-10">
      <div className='flex flex-row justify-center text-xl font-light'>
          <NextIntlClientProvider messages={pick(messages, 'Footer')}>
            <div className='flex flex-col pr-80 space-y-1'>
              <div className='text-2xl font-semibold pb-3'>{t('quickLinks')}</div>
              <NavigationLink className="w-fit" href={'/'}>{tNav('home')}</NavigationLink>
              <NavigationLink className="w-fit" href={'/who_am_i'}>{tNav('whoAmI')}</NavigationLink>
              <NavigationLink className="w-fit" href={'/correction'}>{tNav('correction')}</NavigationLink>
              <NavigationLink className="w-fit" href={'/interpretariat'}>{tNav('interpretariat')}</NavigationLink>
              <NavigationLink className="w-fit" href={'/contact'}>{tNav('contact')}</NavigationLink>
            </div>
          </NextIntlClientProvider>
        <div className='flex flex-col pl-80 space-y-1'>
          <div className='text-2xl font-semibold pb-3'>{t('contactMe')}</div>
          <a className='w-fit' href="mailto:jeanne.sabiron@prosae.net">jeanne.sabiron@prosae.net</a>
          <a href="tel:+33607045087" className='w-fit'>+33 6 07 04 50 87</a>
          <a href="https://instagram.com/_prosae_" className='flex flex-row items-center w-fit'>
            <div className='w-5 h-5 relative mr-2'>
              <Image src={"/logo-instagram.png"} fill alt='Logo Instagram' />
            </div>
            Instagram
          </a>
          <a href="https://linkedin.com/company/prosae" className='flex flex-row items-center w-fit'>
            <div className='w-5 h-5 relative mr-2'>
              <Image src={"/logo-linkedin.png"} fill alt='Logo Linkedin' />
            </div>
            Linkedin
          </a>
        </div>
      </div>
      <div className='flex flex-row justify-between border-t border-black mt-10 pt-8 mx-40'>
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
