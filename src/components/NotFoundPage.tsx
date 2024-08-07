import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700'>
      <div className='flex items-center justify-center flex-1 text-center'>
        <div>
          <h1 className='text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4'>
            404
          </h1>
          <p className='mt-2 text-xl text-gray-700 dark:text-gray-300 mb-8'>
            Page Not Found
          </p>
          <Link
            to='/'
            className='inline-block bg-emerald-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-emerald-500 transition-colors duration-300'
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
