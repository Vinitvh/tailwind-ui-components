import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Dropdown = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <h1 className='text-2xl text-center py-10'>Button</h1>
      <div className='w-80 md:w-full h-40 m-auto bg-veryDarkBlue rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <select
            name='fruits'
            className='w-60 h-8 bg-blue-600 text-white rounded-md'
          >
            <option value='mango'>Mango</option>
            <option value='apple'>Apple</option>
            <option value='watermelon'>Watermelon</option>
            <option value='banana'>Banana</option>
          </select>
        </div>
      </div>
      <div className='w-80 md:w-full h-40 m-auto py-4 rounded-md'>
        <pre>
          <code className='language-markup'>{`<select name='fruits' className='w-60 h-8 bg-blue-600 text-white rounded-md'>
  <option value='mango'>Mango</option>
  <option value='apple'>Apple</option>
  <option value='watermelon'>Watermelon</option>
  <option value='banana'>Banana</option>
</select>`}</code>
        </pre>
      </div>
    </section>
  );
};

export default Dropdown;
