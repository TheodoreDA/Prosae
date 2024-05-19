import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className='flex flex-col items-center mt-10 mb-16'>
      <h1 className='text-2xl font-semibold'>404</h1>
      <h2 className='text-5xl font-extrabold py-10'>{t('title')}</h2>
      <h3 className='text-2xl font-light'>{t('description')}</h3>
    </div>
  );
}
