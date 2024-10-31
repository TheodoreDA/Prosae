'use client';

import { EmailData, sendEmail } from '@/utils/email';
import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';
import clsx from 'clsx';

export default function Contact(): JSX.Element {
  const tForm = useTranslations('Form');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;
    
    const formData = new FormData(event.currentTarget);
    const emailData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    } as EmailData;

    setIsSuccess(null);
    setIsLoading(true);
    const res = await sendEmail(emailData);
    if (res != null)
      console.log(res);
    setIsSuccess(res == null);
    setIsLoading(false);
  }

  return (
    <div className='w-full'>
      <form className='flex flex-col space-y-10 w-full mt-20' onSubmit={onSubmit}>
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
              type='email'
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
              className={clsx(
                'px-16 py-5 mb-5 w-52 border-2 text-xl',
                isLoading && 'border-gray-400 cursor-progress',
                !isLoading && 'border-black cursor-pointer'
              )}
            >
              { isLoading && <div className="h-7 w-7 mx-auto border-gray-300 rounded-full border-4 border-t-secondary animate-spin" /> }
              { !isLoading && <div>{tForm("sendAction")}</div> }
            </button>
            <div className='h-10'>
              { isSuccess != undefined && isSuccess && <div className='text-green-600'>{tForm("messageSent")}</div> }
              { isSuccess != undefined && !isSuccess && <div className='text-red-600'>{tForm("messageCouldntSend")}</div> }
            </div>
          </div>
        </form>
    </div>
    );
}
