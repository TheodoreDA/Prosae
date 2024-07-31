import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import pick from 'lodash/pick';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const t = useTranslations('Navigation');
  const messages = useMessages();

  return (
    <header className="flex flex-row justify-between py-5">
      <div className='ml-32 w-40 h-10 relative self-center'>
        <Image src="/logos/logo-prosae.png" fill alt="prosae-logo" />
      </div>
      <div className="mr-20 flex flex-row space-x-10 items-center text-xl">
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/who_am_i">{t('whoAmI')}</NavigationLink>
        <NavigationLink href="/correction">{t('correction')}</NavigationLink>
        <NavigationLink href="/interpretariat">{t('interpretariat')}</NavigationLink>
        <NavigationLink href="/biography">{t('biography')}</NavigationLink>
        <NavigationLink href="/contact">{t('contact')}</NavigationLink>
        <div className="">
          <NextIntlClientProvider messages={pick(messages, 'LocaleSwitcher')}>
            <LocaleSwitcher />
          </NextIntlClientProvider>
        </div>
      </div>
    </header>
  );
}
