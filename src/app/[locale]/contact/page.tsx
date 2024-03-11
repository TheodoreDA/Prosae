import NavigationLink from '@/components/NavigationLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const tForm = useTranslations('Form');

  return (
    <div className='flex flex-col min-h-body mb-10 px-52'>
      {/* First block */}
      <div className='flex flex-row min-h-body space-x-28'>
        <div className='flex flex-col w-3/5'>
          <div className='text-4xl font-medium mt-10'>{t("title1")}</div>
          <div className='text-2xl font-light mt-8'>{t("block1")}</div>
          <div className="flex justify-center mt-32">
            <NavigationLink
              href={'/contact'}
              className="px-10 py-3 rounded-full text-2xl text-white bg-darkBrown"
            >
              {t('askYourFreeEstimate')}
            </NavigationLink>
          </div>
        </div>
        <div className='w-2/5 h-96 relative'>
          <Image src={"/placeholder.png"} fill alt='placeholder' />
        </div>
      </div>

      {/* Second block */}
      <div className='flex flex-col min-h-body items-center'>
        <div className='text-5xl'>{t("title2")}</div>
        <div className='mt-10 text-2xl font-light'>{t("block2")}</div>
        <form className='flex flex-col space-y-10 w-full mt-20'>
          <div className='flex flex-row space-x-10'>  
            <input
              id="name"
              className='bg-lighGray w-1/2 p-5 rounded-sm'
              placeholder={tForm("namePlaceholder")}
              name='name'
              type='text'
              autoComplete='name'
              required
            />
            <input
              id="email"
              className='bg-lighGray w-1/2 p-5 rounded-sm'
              placeholder={tForm("emailPlaceholder")}
              name='email'
              type='text'
              autoComplete='email'
              required
            />
          </div>
          <textarea
            id="message"
            className='bg-lighGray p-5 rounded-sm'
            placeholder={tForm("messagePlaceholder")}
            name='message'
            autoComplete='message'
            rows={9}
            required
          />
          <div className='flex flex-col items-center'>
            <button 
              type="submit" 
              className="px-16 py-5 border-2 border-black text-xl"
            >
            {tForm("sendAction")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
