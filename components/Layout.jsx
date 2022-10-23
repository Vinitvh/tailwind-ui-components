import React, { useEffect } from 'react';
import Prism from 'prismjs';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='flex-1'>
          <Navbar />
          <div className='flex flex-col items-center h-80'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
