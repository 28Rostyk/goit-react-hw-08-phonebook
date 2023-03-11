import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const Home = lazy(() => import('./Home/Home'));
const RegisterPage = lazy(() => import('./RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-contacts" element={<Contacts />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
