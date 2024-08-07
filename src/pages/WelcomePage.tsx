import React from 'react';
import Navbar from '../components/NavBar';

const WelcomePage = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800'>
      <Navbar />
      <main className='flex flex-col flex-1 items-center justify-center px-4 py-8'>
        <section
          id='hero'
          className='flex flex-col items-center justify-center text-center space-y-6'
        >
          <h1 className='text-5xl font-extrabold text-gray-900 dark:text-gray-300 mb-4 animate-fadeIn'>
            Welcome to My App!
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fadeIn delay-150'>
            Discover the features and benefits of our application. Start your
            journey today and explore what we have to offer!
          </p>
        </section>
        <section id='features' className='w-full max-w-4xl mt-20'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center'>
            Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-emerald-600 dark:bg-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
                Feature 1
              </h3>
              <p className='mt-2 text-white dark:text-gray-300'>
                We provide the best quality product here.
              </p>
            </div>
            <div className='bg-emerald-600 dark:bg-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
                Feature 2
              </h3>
              <p className='mt-2 text-white  dark:text-gray-300'>
                Warranty and Discount offer too.
              </p>
            </div>
            <div className='bg-emerald-600 dark:bg-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
                Feature 3
              </h3>
              <p className='mt-2 text-white dark:text-gray-300'>
                Fast delivery across all nations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
