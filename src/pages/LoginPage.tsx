import React from 'react';
import LoginForm from '../components/LoginForm';
import { useTheme } from '../context/ThemeContext';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const LoginPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 relative'>
      <button
        onClick={toggleTheme}
        className='fixed top-4 right-4 bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center'
        aria-label='Toggle theme'
      >
        {theme === 'light' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </button>
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
