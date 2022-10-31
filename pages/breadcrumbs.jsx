import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Breadcrumbs = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <h1 className='text-2xl text-center py-10 text-secondary'>Breadcrumbs</h1>
      <div className='w-80 md:w-full h-40 m-auto bg-lightGrayishCyan rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <div>
            <ul className='flex items-center justify-center'>
              <li className='text-emerald-400'>
                Home <span className='px-2 text-slate-400'>{`>`}</span>
              </li>
              <li>
                profile <span className='px-2 text-slate-400'>{`>`}</span>
              </li>
              <li>create profile</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-80 md:w-full h-20 m-auto rounded-md'>
        <pre>
          <code className='language-markup'>
            {`<button className='py-2 px-6 rounded bg-blue-600'>Click!</button>`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Breadcrumbs;
