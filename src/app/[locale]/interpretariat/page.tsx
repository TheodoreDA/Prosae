import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function InterpretariatPage() {
  const t = useTranslations('InterpretariatPage');
  const tNav = useTranslations('Navigation');

  return (
    <div className='flex flex-col min-h-body mb-20 px-52'>
      {/* First block */}
      <div className="flex flex-row min-h-body space-x-40">
        <div className='w-2/5 relative'>
          <Image src={"/placeholder.png"} fill alt='placeholder' />
        </div>
        <div className='w-3/5 flex flex-col text-4xl font-light'>
          <div className='w-full h-3/5 relative'>
            <Image src={"/placeholder.png"} fill alt='placeholder' />
          </div>
          <div className='mt-8'>{t("block1")}</div>
          <div className='mt-3'>{t("block2")}</div>
          <div className='mt-3'>{t("block3")}</div>
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-row min-h-body my-10'>
        <div className='flex flex-col w-2/3 text-3xl font-light pr-20'>
          <div className='text-5xl font-medium w-3/4'>{t("title1")}</div>
          <div className='mt-5'>{t("block4")}</div>
          <div className='mt-10'>{t("block5")}</div>
        </div>
        <div className='w-1/3 relative'>
          <Image src={"/placeholder.png"} fill alt='placeholder' />
        </div>
      </div>

      {/* Third block */}
      <div className='flex flex-col min-h-body mb-10 text-3xl font-light'>
        <div className='text-5xl font-medium w-2/3 leading-normal'>{t("title2")}</div>
        <div className='mt-10'>{t("block6")}</div>
        <ul className='list-disc list-outside ml-20 mt-8'>
          <li>{t("block7")}</li>
          <li className='mt-8'>{t("block8")}</li>
        </ul>
        <div className='mt-8'>{t("block9")}</div>
      </div>

      {/* Fourth block */}
      <div className="w-full h-body px-20 flex flex-col">
        <div className="text-5xl">{t('title3')}</div>
        <div className="w-full grow mt-10 flex flex-row justify-between">
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/placeholder.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula1.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula1.desc')}</div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/placeholder.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula2.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula2.desc')}</div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="w-full h-1/2 relative">
              <Image src={'/placeholder.png'} fill alt="placeholder" />
            </div>
            <div className="text-4xl mt-5">{t('formula3.name')}</div>
            <div className="text-xl font-light mt-3">{t('formula3.desc')}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <NavigationLink
            href={'/interpretariat'}
            className="px-10 py-3 border-2 border-black text-2xl font-light"
          >
            {tNav('askForAFreeEstimate')}
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}
