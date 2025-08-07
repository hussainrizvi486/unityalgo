import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Index = React.lazy(() => import('./features/public/pages/landing/index'));
const PrivacyPolicy = React.lazy(() => import('./features/public/pages/privacy-policy'));
const ServicePage = React.lazy(() => import('./features/public/pages/ourservices/service-page'));
const FrontendDetailPage = React.lazy(() => import('./features/public/pages/ourservices/frontend-detail'));
const BackendDetailPage = React.lazy(() => import('./features/public/pages/ourservices/backend-detail'));
const WebDevDetailPage = React.lazy(() => import('./features/public/pages/ourservices/webdev-detail'));
const ERPDetailPage = React.lazy(() => import('./features/public/pages/ourservices/erp-detail'));
const ContactPage = React.lazy(() => import('./features/public/pages/contact/contact-page'));

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
      <Route path='/services' element={<ServicePage />} />
      <Route path='/services/frontend-development-services' element={<FrontendDetailPage />} />
      <Route path='/services/backend-development-services' element={<BackendDetailPage />} />
      <Route path='/services/web-development-services' element={<WebDevDetailPage />} />
      <Route path='/services/erp-services' element={<ERPDetailPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default Application
