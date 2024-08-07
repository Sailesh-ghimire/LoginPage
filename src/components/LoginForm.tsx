import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema, LoginFormValues } from '../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { saveToken } from '../authUtils';

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await axios.post(
        'https://login.dataconstruct.com.np',
        data
      );
      const token = response.data.token;
      saveToken(token);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800  p-10 max-w-lg mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400'>
        Welcome Back!
      </h2>
      <p className='text-center text-gray-600 dark:text-gray-300 mb-10'>
        Please enter your credentials to login.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='relative'>
          <label
            htmlFor='username'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
          >
            Username
          </label>
          <input
            id='username'
            type='text'
            {...register('username')}
            className='block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:text-gray-300'
            placeholder='Enter your username'
          />
          {errors.username && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className='relative'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            {...register('password')}
            className='block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:text-gray-300'
            placeholder='Enter your password'
          />
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Sign In
        </button>
      </form>

      <div className='mt-8 text-center'>
        <button className='text-indigo-600 dark:text-indigo-400 hover:underline bg-transparent border-none cursor-pointer'>
          Forgot password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
