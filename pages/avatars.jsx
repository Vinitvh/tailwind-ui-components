import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { FaRegUserCircle } from 'react-icons/fa';

const Avatars = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <h1 className='text-2xl text-center py-10'>Avatars</h1>
      <div className='w-80 md:w-full h-40 m-auto bg-veryDarkBlue rounded-md'>
        <div className='flex justify-center items-center h-full text-black'>
          <div className='w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center mx-2'>
            <FaRegUserCircle className='text-4xl' />
          </div>
          <div className='w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center mx-2'>
            <FaRegUserCircle className='text-5xl' />
          </div>
          <div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center mx-2'>
            <FaRegUserCircle className='text-7xl' />
          </div>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>
            {`<div className='w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center'>
  <FaRegUserCircle className='text-4xl' />
</div>
<div className='w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center'>
  <FaRegUserCircle className='text-5xl' />
</div>
<div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center'>
  <FaRegUserCircle className='text-7xl' />
</div>
`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Avatars;
