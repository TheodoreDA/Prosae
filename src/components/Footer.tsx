import pick from 'lodash/pick';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

export default function Footer(): JSX.Element {
  const messages = useMessages();
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <div className="bg-primary h-footer">
      <div>
        <div className="flex flex-row justify-between">
          <NextIntlClientProvider messages={pick(messages, 'Footer')}>
            <div className="ml-20">
              {t('quickLinks')}
              <br />
              {tNav('home')}
              <br />
              {tNav('whoAmI')}
              <br />
              {tNav('correction')}
              <br />
              {tNav('interpretariat')}
              <br />
              {tNav('contact')}
            </div>
          </NextIntlClientProvider>
          <div className="mr-20">
            Contactez-moi !<br />
            <a href="mailto:jeanne.sabiron@prosae.net">
              jeanne.sabiron@prosae.net
            </a>
            <br />
            +33 6 07 04 50 87
            <br />
            <a href="https://instagram.com/_prosae_">@_prosae_</a>
            <br />
            <a href="https://www.linkedin.com/company/prosae/">prosae</a>
          </div>
        </div>
        <div className="flex flex-row justify-between border-black border-t-2">
          <div>@2024 Prosae all rights reserved</div>
          <div>Terms of use | Privacy Environmental Policy</div>
        </div>
      </div>
    </div>
  );
}
