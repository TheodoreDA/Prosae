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
    <div className="flex flex-row justify-between py-5 max-h-header min-h-header">
      <div className='ml-32 w-40 h-10 relative self-center'>
        <Image src="/logos/logo-prosae.png" fill alt="prosae-logo" />
      </div>
      <div className="flex flex-row items-center text-2xl">
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/who_am_i">{t('whoAmI')}</NavigationLink>
        <NavigationLink href="/correction">{t('correction')}</NavigationLink>
        <NavigationLink href="/interpretariat">
          {t('interpretariat')}
        </NavigationLink>
        <NavigationLink href="/contact">{t('contact')}</NavigationLink>
        <div className="mr-10">
          <NextIntlClientProvider messages={pick(messages, 'LocaleSwitcher')}>
            <LocaleSwitcher />
          </NextIntlClientProvider>
        </div>
      </div>
    </div>
  );
}
