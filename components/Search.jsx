import React from 'react';

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className='hidden md:block'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='w-80 h-6 rounded text-black' />
        <button
          type='submit'
          className='h-6 px-4 bg-blue-600 hover:bg-blue-500 rounded mx-2'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
