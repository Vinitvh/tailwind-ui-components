import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='h-screen px-4 pt-6 pb-4 bg-light w-80 border-r border-slate-500 hidden md:block'>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex shadow-lg'>
          <h2>Tailwind UI Components</h2>
        </div>
        <div className='py-8 flex flex-col justify-center items-center'>
          <button className='py-2' onClick={() => router.push('/button')}>
            Button
          </button>
          <button onClick={() => router.push('/badges')}>Badges</button>
          <button className='py-2' onClick={() => router.push('/avatars')}>
            Avatars
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
