import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Badges = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <h1 className='text-2xl text-center py-10'>Badges</h1>
      <div className='w-80 md:w-full h-40 m-auto bg-veryDarkBlue rounded-md'>
        <div className='flex justify-center items-center h-full text-black'>
          <button className='px-6 bg-blue-400 rounded-full mx-2'>info</button>
          <button className='px-6 bg-green-600 rounded-full mx-2'>
            success
          </button>
          <button className='px-6 bg-red-600 rounded-full mx-2'>error</button>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>
            {`<button className='px-6 bg-blue-400 rounded-full'>info</button>
<button className='px-6 bg-green-600 rounded-full'>success</button>
<button className='px-6 bg-red-600 rounded-full'>error</button>`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Badges;
