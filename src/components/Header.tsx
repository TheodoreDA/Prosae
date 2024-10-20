import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import ImgNavigationLink from './ImgNavigationLink';

export default function Header(): JSX.Element {
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-30 flex justify-center h-header max-w-std-screen w-full bg-white py-5">
      <div className='flex flex-row max-w-extra justify-center'>
        <ImgNavigationLink className='z-30 ml-10 mr-14 pb-5 w-40 h-10 relative self-center' src='/logos/logo-prosae-black.png' alt='prosae-logo' />
        <div className=" z-30 pl-14 pr-14 mr-10 flex flex-row space-x-10 items-center text-xl pb-5 border-black border-b-1">
          <NavigationLink href="/who_am_i">{t('whoAmI')}</NavigationLink>
          <NavigationLink href="/biography">{t('biography')}</NavigationLink>
          <NavigationLink href="/correction">{t('correction')}</NavigationLink>
          <NavigationLink href="/interpretariat">{t('interpretariat')}</NavigationLink>
          <a className='inline-block transition-colors uppercase text-nowrap text-black hover:font-extrabold' href="/blog">{t('blog')}</a>
          <NavigationLink href="/contact">{t('contact')}</NavigationLink>
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
