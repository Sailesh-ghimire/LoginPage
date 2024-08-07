import { Navigate } from 'react-router-dom';

const RouteGuard = ({
  element,
  isLoginRoute,
}: {
  element: JSX.Element;
  isLoginRoute?: boolean;
}) => {
  const token = localStorage.getItem('authToken');

  if (isLoginRoute && token) {
    console.log('Redirecting to /welcome');
    return <Navigate to='/' />;
  }

  if (!isLoginRoute && !token) {
    console.log('Redirecting to /login');

    return <Navigate to='/login' />;
  }

  return element;
};

export default RouteGuard;
