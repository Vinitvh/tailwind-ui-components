import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='px-4 pt-6 pb-4 bg-light w-80 border-r border-slate-500 hidden md:block bg-veryDarkBlue'>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex shadow-lg'>
          <Link href='/'>
            <a className='text-secondary text-xl hover:text-secondary'>
              Tailwind UI Components
            </a>
          </Link>
        </div>
        <div className='py-8 flex flex-col justify-center items-center text-lightGrayishCyan'>
          <button className='py-2' onClick={() => router.push('/button')}>
            Button
          </button>
          <button onClick={() => router.push('/badges')}>Badges</button>
          <button className='py-2' onClick={() => router.push('/avatars')}>
            Avatars
          </button>
          <button onClick={() => router.push('/dropdown')}>Dropdown</button>
          <button className='py-2' onClick={() => router.push('/toast')}>
            Toast
          </button>
          <button onClick={() => router.push('/breadcrumbs')}>
            Breadcrumbs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
