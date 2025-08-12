import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Index = React.lazy(() => import('./features/public/pages/landing/index'));
const PrivacyPolicy = React.lazy(() => import('./features/public/pages/privacy-policy'));
const FrontendService = React.lazy(() => import('./features/public/pages/services/frontend'));
const ERPService = React.lazy(() => import('./features/public/pages/services/erp'));
const BackendService = React.lazy(() => import('./features/public/pages/services/backend'));
const WebAppService = React.lazy(() => import('./features/public/pages/services/web-application'));
const ServicePage = React.lazy(() => import('./features/public/pages/services/index'));
const ContactPage = React.lazy(() => import('./features/public/pages/contact/contact-page'));

// const DemoComponentPage = React.lazy(() => import('./components/ui/demo/index'));

import supabase from './supabase';

const PageLoading = () => {
  return (
    <div>Loading...</div>
  )
}

const Application: React.FC = () => {
  const location = useLocation();

  console.log(supabase)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    document.body.scrollTop = document.body.scrollHeight;
  }, []);

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path='/' index element={<Index />} />
        {/* <Route path='/demo' element={<DemoComponentPage />} /> */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/services/frontend' element={<FrontendService />} />
        <Route path='/services/erp' element={<ERPService />} />
        <Route path='/services/backend' element={<BackendService />} />
        <Route path='/services/web-application' element={<WebAppService />} />
        <Route path='/services' element={<ServicePage />} />
   
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

    </Suspense>
  )
}

export default Application
