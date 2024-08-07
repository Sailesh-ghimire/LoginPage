import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { saveToken, loadToken } from '../authUtils';
import { toast } from 'react-toastify';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    saveToken(null);
    toast.success('Logout successful!');
    navigate('/login');
  };
  React.useEffect(() => {
    const token = loadToken();
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <nav className='bg-emerald-600 text-white p-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='text-lg  text-black font-bold'>
          Home
        </Link>
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleTheme}
            className=' bg-slate-700 hover:bg-slate-600 dark:hover:bg-gray-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </button>
          <button
            onClick={handleLogout}
            className='bg-slate-700 hover:bg-red-500 text-white py-2 px-4 rounded-full'
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
