import AnimatedNavigationLink from '@/components/AnimatedNavigationLink';
import BlogArticlesGrid from '@/components/BlogArticlesGrid';
import NavigationLink from '@/components/NavigationLink';
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
      <div className="flex justify-center items-start min-h-body pt-14">
        <div className="pr-20 pt-24">
          {/* Text */}
          <div className='flex flex-col items-center text-5xl space-y-5'>
            <div>{t('why')}</div>
            <div>{t('doYouNeed')}</div>
            <div>{t('myServices')}</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-5 text-secondary pt-10">
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
        <div className="w-[450px] h-[675px] relative">
          <Image src={'/home/1.JPG'} style={imageStyle} fill alt="Image one"></Image>
        </div>
      </div>

      {/* Second block */}
      <div className="flex justify-center items-center min-h-body mt-20">
        <div className='bg-primary absolute min-h-body w-full max-w-std-screen' />
        <div className='grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12 uppercase text-3xl text-secondary z-10'>
          <div className='text-right self-center'>{t("privacy")}</div>
          <div className='text-7xl text-black'>{t("whatIs")}</div>
          <div className='text-right self-center'>{t("caring")}</div>
          <div className='text-7xl text-black'>{t("important")}</div>
          <div className='text-right self-center'>{t("reliable")}</div>
          <div className='text-7xl text-black'>{t("ForMe")}</div>
        </div>
      </div>

      {/* Third block */}
      <div className='flex flex-col justify-center items-center space-y-32 pt-32 pb-52'>
        <div className='flex items-center'>
          <div className='text-4xl pr-20'>{t("toReadMe")}</div>
          <a 
            className='content-center text-center w-52 h-16 border-2 border-secondary text-secondary text-2xl font-light transition-all duration-300 ease-in-out hover:scale-90 transform-origin-center'
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
