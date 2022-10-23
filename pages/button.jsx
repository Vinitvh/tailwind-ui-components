import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

const Button = () => {
  const [code, setCode] = useState(
    "<button className='py-2 px-6 rounded bg-blue-600'>Click!</button>"
  );

  return (
    <section>
      <h1 className='text-2xl text-center py-10'>Button</h1>
      <div className='w-80 md:w-full h-40 m-auto bg-veryDarkBlue rounded-md'>
        <div className='flex justify-center items-center h-full'>
          <button className={`${code}`}>Click!</button>
        </div>
      </div>
      <div className='w-80 md:w-full h-20 m-auto rounded-md bg-black'>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code =>
            Prism.highlight(code, Prism.languages.markup, 'markup')
          }
          padding={10}
          preClassName='language-css'
        />
      </div>
    </section>
  );
};

export default Button;
