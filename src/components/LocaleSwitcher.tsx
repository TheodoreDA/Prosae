'use client';

import clsx from 'clsx';
import { ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from '../navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/config';

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('LocaleSwitcher');

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-800',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{t('label')}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
