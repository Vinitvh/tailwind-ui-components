import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Toast = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <h1 className='text-2xl text-center py-10 text-secondary'>Toast</h1>
      <h3 className='py-2 text-xl text-lightGrayishCyan'>Success</h3>
      <div className='w-80 md:w-full h-40 m-auto bg-lightGrayishCyan rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <div className='w-96 h-10 bg-green-500 flex items-center justify-center text-black rounded'>
            Login successful!
          </div>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>{`<div className='w-96 h-12 bg-green-500 text-black flex items-center justify-center rounded'>
  Login successful!
</div>`}</code>
        </pre>
      </div>
      <h3 className='py-2 text-xl text-lightGrayishCyan'>Warning</h3>
      <div className='w-80 md:w-full h-40 m-auto bg-lightGrayishCyan rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <div className='w-96 h-10 bg-orange-400 flex items-center justify-center text-black rounded'>
            You are unauthorized to use this page
          </div>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>{`<div className='w-96 h-12 bg-orange-400 text-black flex items-center justify-center rounded'>
  You are unauthorized to use this page
</div>`}</code>
        </pre>
      </div>
      <h3 className='py-2 text-xl text-lightGrayishCyan'>Error</h3>
      <div className='w-80 md:w-full h-40 m-auto bg-lightGrayishCyan rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <div className='w-96 h-10 bg-red-400 flex items-center justify-center text-black rounded'>
            Oops! Something went wrong
          </div>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>{`<div className='w-96 h-12 bg-red-400 text-black flex items-center justify-center rounded'>
  Oops! Something went wrong
</div>`}</code>
        </pre>
      </div>
    </section>
  );
};

export default Toast;
