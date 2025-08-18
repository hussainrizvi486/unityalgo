import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Spinner } from './components/ui/spinner';

const Index = React.lazy(() => import('./features/public/pages/landing/index'));
const PrivacyPolicy = React.lazy(() => import('./features/public/pages/privacy-policy'));
const ERPService = React.lazy(() => import('./features/public/pages/services/erp'));
const ServicePage = React.lazy(() => import('./features/public/pages/services/index'));
const ContactPage = React.lazy(() => import('./features/public/pages/contact/contact-page'));
const AboutUs = React.lazy(() => import("./features/public/pages/about-us"));

// const FrontendService = React.lazy(() => import('./features/public/pages/services/frontend'));
// const BackendService = React.lazy(() => import('./features/public/pages/services/backend'));
// const WebAppService = React.lazy(() => import('./features/public/pages/services/web-application'));


const PageLoading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <Spinner />
        <div className='text-sm  font-medium mt-2'>Loading...</div>
      </div>
    </div>
  )
}

const Application: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    document.body.scrollTop = document.body.scrollHeight;
  }, []);

  return (
    <Suspense fallback={<PageLoading />}>
      <Toaster />
      <Routes>
        <Route path='/' index element={<Index />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        {/* <Route path='/services/frontend' element={<FrontendService />} /> */}
        <Route path='/services/erp' element={<ERPService />} />
        {/* <Route path='/services/backend' element={<BackendService />} /> */}
        {/* <Route path='/services/web-application' element={<WebAppService />} /> */}
        <Route path='/services' element={<ServicePage />} />

      <Route path='/contact' element={<ContactPage />} />
      </Routes>

    </Suspense>
  )
}

export default Application
