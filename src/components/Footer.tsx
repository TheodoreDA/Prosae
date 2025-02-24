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
    <div className="max-w-std-screen w-full bg-primary px-5 sm:px-10 md:px-20 lg:px-32 pt-8">
      <div className='flex flex-col sm:flex-row max-w-72 sm:max-w-std-screen justify-between text-lg sm:text-xl mx-4 lg:mx-20'>
        <NextIntlClientProvider messages={pick(messages, 'Footer')}>
          <div>
            <div className='text-xl sm:text-2xl font-semibold'>{t('quickLinks')}</div>
            <div className='grid gap-x-5 gap-y-1 grid-cols-2 pt-2 sm:pt-4'>
              <NavigationLink className="w-28 sm:w-fit" href={'/'}>{tNav('home')}</NavigationLink>
              <NavigationLink className="w-28 sm:w-fit" href={'/interpretariat'}>{tNav('interpretariat')}</NavigationLink>
              <NavigationLink className="w-28 sm:w-fit" href={'/qui_suis_je'}>{tNav('whoAmI')}</NavigationLink>
              <a className='w-28 sm:w-fit inline-block transition-all duration-300 ease-in-out hover:scale-90 transform-origin-center' href="https://prosae.odoo.com">{tNav('blog')}</a>
              <NavigationLink className="w-28 sm:w-fit" href={'/biographie'}>{tNav('biography')}</NavigationLink>
              <NavigationLink className="w-28 sm:w-fit" href={'/contact'}>{tNav('contact')}</NavigationLink>
              <NavigationLink className="w-28 sm:w-fit" href={'/correction'}>{tNav('correction')}</NavigationLink>
            </div>
          </div>
        </NextIntlClientProvider>
        <div className='flex flex-col space-y-1 pt-8 sm:pt-0'>
          <div className='text-xl sm:text-2xl font-semibold'>{t('contactMe')}</div>
          <a className='w-fit pt-2 sm:pt-4' href="mailto:jeanne.sabiron@prosae.net">jeanne.sabiron@prosae.net</a>
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
      <div className='border-t-1 md:border-t-2 border-black mt-10' />
      <div className='flex flex-row justify-between text-base sm:text-lg py-2 px-5'>
        <div>@2025 Prosae all rights reserved</div>
        <NavigationLink className="w-fit" href={'/politique_confidentialite'}>Mentions légales & CGV</NavigationLink>
      </div>
    </div>
    );
}
