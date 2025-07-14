import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Index = React.lazy(() => import('./features/public/pages/landing/index'));
const PrivacyPolicy = React.lazy(() => import('./features/public/pages/privacy-policy'));

const Application: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    document.body.scrollTop = document.body.scrollHeight;
  }, []);

  return (
    <Routes>
      <Route path='/' index element={<Index />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default Application
