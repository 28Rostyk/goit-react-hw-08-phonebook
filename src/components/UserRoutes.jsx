import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { ColorRing } from 'react-loader-spinner';
import css from './user-routes.module.css';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const Home = lazy(() => import('./Home/Home'));
const RegisterPage = lazy(() => import('./RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass={css.blocks_wrapper}
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/my-contacts" element={<Contacts />} />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
