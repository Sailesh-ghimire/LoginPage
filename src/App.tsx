import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';
import NotFoundPage from './components/NotFoundPage';
import RouteGuard from './components/RouteGuard';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={<RouteGuard element={<LoginPage />} isLoginRoute={true} />}
          />
          <Route
            path='/'
            element={
              <RouteGuard element={<WelcomePage />} isLoginRoute={false} />
            }
          />
          <Route
            path='*'
            element={
              <RouteGuard element={<NotFoundPage />} isLoginRoute={false} />
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
