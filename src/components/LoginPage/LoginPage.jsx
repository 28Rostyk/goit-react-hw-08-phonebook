import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import LoginForm from '../LoginForm/LoginForm';

import css from './login-page.module.css';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <div className="container">
      <h1 className={css.page_title}>Login page</h1>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
