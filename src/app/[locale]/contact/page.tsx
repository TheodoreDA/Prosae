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
      <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:pt-12 xl:pt-20 px-6 md:px-10 2xl:px-0'>
        <div className='lg:order-2 w-full lg:w-2/5 h-72 md:h-96 relative'>
          <Image className='object-contain lg:object-cover' src={"/contact/1.jpg"} fill alt='placeholder' />
        </div>
        <div className='flex flex-col lg:w-3/5 xl:w-1/2 lg:text-justify lg:pr-10'>
          <h1 className='text-4xl sm:text-5xl sm:mt-10'>
            {t.rich('title1', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </h1>
          <p className='leading-relaxed mt-4 sm:mt-8'>{t("block1")}</p>
          <NavigationLink
            href={'/contact#questions'}
            className="w-fit text-2xl self-center text-center rounded-full text-white bg-secondary mt-14 xl:mt-24 px-10 py-3"
          >
            {t.rich('askYourFreeEstimate', { nowrap: (content) => <span className='text-nowrap'>{content}</span> })}
          </NavigationLink>
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-col items-center pb-10 sm:pb-20 lg:pb-32 px-6 md:px-10 2xl:px-0'>
        <h2 id='questions' className='scroll-mt-16 text-4.5xl sm:text-5xl pt-16 md:pt-24'>{t("title2")}</h2>
        <p className='leading-relaxed lg:text-justify mt-5 sm:mt-10'>{t("block2")}</p>
        <NextIntlClientProvider messages={pick(messages, 'Form')}>
          <Contact />
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
