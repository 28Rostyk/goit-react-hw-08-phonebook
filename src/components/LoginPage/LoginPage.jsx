// import { useSelector, useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// import { signup } from '../../redux/auth/auth-operations';
// import { isUserLogin } from '../../redux/auth/auth-selectors';

import LoginForm from '../LoginForm/LoginForm';

const RegisterPage = () => {
  //   const isLogin = useSelector(isUserLogin);
  //   const dispatch = useDispatch();

  //   const handleSignup = data => {
  //     dispatch(signup(data));
  //   };

  //   if (isLogin) {
  //     return <Navigate to="/my-books" />;
  //   }

  return (
    <div className="container">
      <h1 className="page-title">Login page</h1>
      <LoginForm />
    </div>
  );
};

export default RegisterPage;
