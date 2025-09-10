import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import Progress from './components/Progress';
import Header from './components/Header';

const MercadoLazy = lazy(() => import('./components/CMercadoApp'));
const AuthLazy = lazy(() => import('./components/CAuthApp'));
const FinancaLazy = lazy(() => import('./components/CFinancaApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(() => !!sessionStorage.getItem('authToken'));
  const navigate = useNavigate();
  const location = useLocation();

  // Escuta o evento disparado pelo Auth
  useEffect(() => {
    const handleUserSignedIn = () => {
      setIsSignedIn(true);
      navigate('/financa');
    };

    window.addEventListener('user-signed-in', handleUserSignedIn);
    return () => window.removeEventListener('user-signed-in', handleUserSignedIn);
  }, [navigate]);

  // Protege rotas: se não tiver token e tentar acessar /financa, manda para /auth
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (location.pathname.startsWith('/financa') && !token) {
      setIsSignedIn(false);
      navigate('/auth/signin');
    }
  }, [location, navigate]);

  const handleSignOut = () => {
    sessionStorage.removeItem('authToken');
    setIsSignedIn(false);
    navigate('/');
  };

  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Header
          onSignOut={handleSignOut}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path="/auth/*" element={<AuthLazy />} />
            <Route
              path="/financa"
              element={
                isSignedIn ? <FinancaLazy /> : <Navigate to="/auth/signin" />
              }
            />
            <Route path="/*" element={<MercadoLazy />} />
          </Routes>
        </Suspense>
      </div>
    </StyledEngineProvider>
  );
};

export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
