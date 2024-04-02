import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CorrectionPage() {
  const t = useTranslations('CorrectionPage');
  const tNav = useTranslations('Navigation');

  return (
    <div className="flex flex-col min-h-body mb-10 px-52">
      {/* First block */}
      <div className="w-full h-body flex flex-row">
        <div className="h-body w-1/2 mr-20 relative">
          <Image src={'/correction/1.JPG'} fill alt="placeholder" />
        </div>
        <div className="h-body w-1/2 ml-20 flex flex-col">
          <div className="w-full h-1/2 relative">
            <Image src={'/correction/2.JPG'} fill alt="placeholder" />
          </div>
          <div className="text-4xl text-justify leading-relaxed w-5/6 mt-10">
            {t('block1')}
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className="w-full h-body flex flex-row my-10">
        <div className="w-2/3 pr-20 flex flex-col text-2xl font-light">
          <div className="mt-20 text-5xl">{t('title1')}</div>
          <div className="mt-14">{t('block2')}</div>
          <div className="mt-5">{t('block3')}</div>
          <div className="mt-5">{t('block4')}</div>
        </div>
        <div className="w-1/3 relative">
          <Image src={'/correction/3.JPG'} fill alt="placeholder" />
        </div>
      </div>

      {/* Third block */}
      <div className="w-full h-body flex flex-col mb-10">
        <div className="text-5xl">{t('title2')}</div>
        <div className="w-full grow mt-10 flex flex-row justify-between">
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/correction/formule_1.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula1.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula1.desc')}</div>
            <div className="text-xl font-bold">{t('formula1.price')}</div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/correction/formule_2.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula2.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula2.desc')}</div>
            <div className="text-xl font-bold">{t('formula2.price')}</div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/correction/formule_3.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula3.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula3.desc')}</div>
            <div className="text-xl font-bold">{t('formula3.price')}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <NavigationLink
            href={'/correction'}
            className="px-10 py-3 border-2 border-black text-2xl font-light"
          >
            {tNav('askForAFreeEstimate')}
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}
