import Contact from '@/components/Contact';
import NavigationLink from '@/components/NavigationLink';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import pick from 'lodash/pick';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const messages = useMessages();

  return (
    <div>
      {/* First block */}
      <div className='flex flex-row min-h-mini-body pt-20'>
        <div className='flex flex-col w-1/2 text-justify'>
          <div className='text-4xl mt-10'>{t("title1")}</div>
          <div className='leading-relaxed mt-8'>{t("block1")}</div>
          <div className="flex justify-end mt-24">
            <NavigationLink
              href={'/contact'}
              className="px-10 py-3 rounded-full text-2xl text-white bg-secondary"
            >
              {t('askYourFreeEstimate')}
            </NavigationLink>
          </div>
        </div>
        <div className='w-2/5 h-96 relative'>
          <Image src={"/contact/1.jpg"} fill alt='placeholder' />
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-col min-h-body items-center pb-32'>
        <div className='text-5xl'>{t("title2")}</div>
        <div className='mt-10 text-2xl font-light'>{t("block2")}</div>
        <NextIntlClientProvider messages={pick(messages, 'Form')}>
          <Contact />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
