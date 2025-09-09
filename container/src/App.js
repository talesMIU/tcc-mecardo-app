import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import Progress from './components/Progress';
import Header from './components/Header';

const MercadoLazy = lazy(() => import('./components/CMercadoApp'));
const AuthLazy = lazy(() => import('./components/CAuthApp'));
const FinancaLazy = lazy(() => import('./components/CFinancaApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsSignedIn(true);
    navigate('/financa');
  };

  return (
      <StyledEngineProvider injectFirst>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="/auth/*" element={
                <AuthLazy onSignIn={handleSignIn} />
              } />
              <Route path="/financa" element={
                !isSignedIn ? <Navigate to="/" /> : <FinancaLazy />
              } />
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