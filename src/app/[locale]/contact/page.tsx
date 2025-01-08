import Contact from '@/components/Contact';
// import NavigationLink from '@/components/NavigationLink';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import pick from 'lodash/pick';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const messages = useMessages();

  return (
    <div>
      {/* First block */}
      <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:pt-12 xl:pt-20 px-6 md:px-10 2xl:px-0'>
        <div className='lg:order-2 w-full lg:w-2/5 h-72 md:h-96 relative'>
          <Image className='object-contain lg:object-cover' src={"/contact/1.jpg"} fill alt='placeholder' />
        </div>
        <div className='flex flex-col lg:w-3/5 xl:w-1/2 text-justify lg:pr-10'>
          <div className='text-4xl sm:text-5xl sm:mt-10'>{t("title1")}</div>
          <div className='leading-relaxed mt-4 sm:mt-8'>{t("block1")}</div>
          {/* <NavigationLink
            href={'/contact'}
            className="w-fit self-center rounded-full text-white bg-secondary mt-14 xl:mt-24 px-10 py-3"
          >
            {t('askYourFreeEstimate')}
          </NavigationLink> */}
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-col items-center pt-16 md:pt-24 pb-10 sm:pb-20 lg:pb-32 px-6 md:px-10 2xl:px-0'>
        <div className='text-4.5xl sm:text-5xl'>{t("title2")}</div>
        <div className='text-justify mt-5 sm:mt-10'>{t("block2")}</div>
        <NextIntlClientProvider messages={pick(messages, 'Form')}>
          <Contact />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
