import AnimatedNavigationLink from '@/components/AnimatedNavigationLink';
import BlogArticlesGrid from '@/components/BlogArticlesGrid';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type Props = {
  params: { locale: string };
};

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navigation');

  return (
    <div>
      {/* First block */}
      <div className="flex flex-col xl:flex-row items-center xl:justify-center xl:items-start min-h-body pt-4 md:pt-14">
        <div className="order-2 xl:order-1 xl:pr-20 pt-8 md:pt-24">
          {/* Text */}
          <div className='flex flex-col items-center text-4xl sm:text-5xl space-y-5'>
            <div>{t('why')}</div>
            <div>{t('doYouNeed')}</div>
            <div>{t('myServices')}</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-5 text-secondary pt-5 md:pt-10">
            <AnimatedNavigationLink href={'/correction'}>
              {tNav('correction')}
            </AnimatedNavigationLink>
            <AnimatedNavigationLink href={'/biography'}>
              {tNav('biography')}
            </AnimatedNavigationLink>
            <AnimatedNavigationLink href={'/interpretariat'}>
              {tNav('interpretariat')}
            </AnimatedNavigationLink>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 xl:order-2 w-[309px] h-[464px] sm:w-[455px] sm:h-[683px] md:w-[540px] md:h-[811px] relative">
          <Image src={'/home/1.JPG'} style={imageStyle} fill alt="Image one"></Image>
        </div>
      </div>

      {/* Second block */}
      <div className="flex justify-center items-center min-h-96 sm:min-h-[450px] md:min-h-[550px] lg:min-h-body mt-20">
        <div className='bg-primary absolute min-h-96 sm:min-h-[450px] md:min-h-[550px] lg:min-h-body w-full max-w-std-screen' />
        <div className='grid grid-cols-2 grid-rows-3 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-9 md:gap-y-12 uppercase text-base sm:text-xl md:text-2xl text-secondary z-10'>
          <div className='text-right self-center'>{t("privacy")}</div>
          <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black'>{t("whatIs")}</div>
          <div className='text-right self-center'>{t("caring")}</div>
          <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black'>{t("important")}</div>
          <div className='text-right self-center'>{t("reliable")}</div>
          <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black'>{t("ForMe")}</div>
        </div>
      </div>

      {/* Third block */}
      <div className='flex flex-col justify-center items-center pt-20 lg:pt-32 pb-10 sm:pb-20 md:pb-24 lg:pb-44'>
        <div className='flex flex-col md:flex-row items-center pb-10 sm:pb-20'>
          <div className='text-3xl sm:text-4xl pb-8 md:pb-0 md:pr-20'>{t("toReadMe")}</div>
          <a 
            className='content-center text-center w-52 h-16 border-2 border-secondary text-secondary text-xl sm:text-2xl font-light transition-all duration-300 ease-in-out hover:scale-90 transform-origin-center'
            href="https://prosae.odoo.com"
          >
            {tNav("myBlog")}
          </a>
        </div>
        <BlogArticlesGrid />
      </div>
    </div>
  );
}
