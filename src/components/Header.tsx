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
    <div className="flex flex-row justify-between py-10 max-h-header min-h-header">
      <Image className="ml-32" src="logo-placeholder.svg" width="100" height="10" alt='prosae-logo' />
      <div className='h-20 flex flex-row items-center'>
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/who_am_i">{t('whoAmI')}</NavigationLink>
        <NavigationLink href="/correction">{t('correction')}</NavigationLink>
        <NavigationLink href="/interpretariat">{t('interpretariat')}</NavigationLink>
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
