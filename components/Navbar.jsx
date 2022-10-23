import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from './Search';
const Navbar = () => {
  return (
    <nav className='w-full md:w-full h-14 border-b border-slate-600 flex justify-center items-center shadow-lg'>
      <h1 className='md:hidden'>Navbar</h1>
      <Search />
      <button className='px-4 md:hidden'>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
